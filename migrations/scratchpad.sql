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