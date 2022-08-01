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