SELECT 
	players.name,
	email,
	previous_handicap,
	t.name AS team_name
FROM players
LEFT JOIN
	teams as t ON t.id = current_team;

SELECT 
	frames.id, 
	frame_nr, 
	p1.name AS player_home,
	player_home_score, 
	p2.name AS player_away,
	player_away_score, 
	p3.name AS highest_break, 
	highest_break_score 
FROM frames 
LEFT JOIN players as p1 ON player_home = p1.id 
LEFT JOIN players as p2 ON player_away = p2.id 
LEFT JOIN players AS p3 ON highest_break = p3.id
WHERE match_id = 1;


SELECT 
frame_nr, 
match_id, 
p.name, 
CASE 
	WHEN player_away = 1
	THEN player_away_score
	WHEN player_home = 1
	THEN player_home_score
	END
	AS score,
CASE WHEN 
FROM frames f
LEFT JOIN players p ON p.id = f.player_away
LEFT JOIN matches m ON m.id = f.match_id
WHERE player_away = 1
OR player_home = 1;



SELECT 
	frames.id,
	frame_nr,
	m.date, 
	m.match_week,
	t1.location,
	p1.name AS player_home,
	t1.name, 
	player_home_score,
	p2.name AS player_away,
	t2.name,
	player_away_score, 
	p3.name AS highest_break, 
	highest_break_score 
FROM frames 
LEFT JOIN players p1 ON player_home = p1.id 
LEFT JOIN players p2 ON player_away = p2.id 
LEFT JOIN players p3 ON highest_break = p3.id 
LEFT JOIN matches m ON match_id = m.id
LEFT JOIN teams t1 ON p1.id = t1.id
LEFT JOIN teams t2 ON p2.id = t2.id
WHERE player_away = 8 
	OR player_home = 8;


SELECT matches.id AS match_id, year, match_round, match_week, date, t1.name AS home_team,r.home_score, t2.name AS away_team,r.away_score, t1.location
from matches 
LEFT JOIN teams t1 ON home_team = t1.id
LEFT JOIN teams t2 ON away_team = t2.id
LEFT JOIN results r ON matches.id = r.match_id
WHERE home_team =1 OR away_team =1
ORDER BY matches.id;

SELECT * 
FROM frames
JOIN outcomes ON frames.id = outcomes.id;

SELECT * 
FROM players
JOIN outcomes ON outcomes.winning_player_id = players.id;

FRAMES
player_id  frame_id  playing_ground   scored



SELECT 
m.id AS match_id, 
year, 
m.match_round, 
m.match_week, 
date, 
ht.name AS home_team, 
awt.name AS away_team, 
ht.address, 
ht.location 
FROM matches m
LEFT JOIN teams ht ON home_team = ht.id 
LEFT JOIN teams awt ON away_team = awt.id;


SELECT 
player_id,
COUNT(*) FILTER(WHERE won = 't') AS frames_won, 
COUNT(*) FILTER(WHERE won = 'f') AS frames_lost 
FROM frames 
GROUP BY player_id;

-- STATS QUERY
SELECT 
p.id AS player_id,
p.name,
p.previous_handicap,
t.name AS team_name,
pwl.frames_won,
pwl.frames_lost,
(pwl.frames_won + pwl.frames_lost) AS total_frames,
p.previous_handicap
FROM players p
LEFT JOIN player_wins_losses pwl ON p.id = pwl.player_id
LEFT JOIN teams t ON t.id = p.team_id;


-- RESULTS BY MATCH ID
CREATE MATERIALIZED VIEW results AS
SELECT 
match_id,
SUM(score)FILTER(WHERE location = 'home') AS home_score,
SUM(score)FILTER(WHERE location = 'away') AS away_score
FROM frames
GROUP BY match_id;

-- MATCHES
SELECT 
m.id AS match_id,
m.year,
m.match_round,
m.match_week,
m.date,
t1.name AS home_team,
t2.name AS away_team,
t1.address,
t1.location,
r.home_score,
r.away_score
FROM matches m 
LEFT JOIN results r ON m.id = r.match_id
LEFT JOIN teams t1 on t1.id = m.home_team
LEFT JOIN teams t2 on t2.id = m.away_team;