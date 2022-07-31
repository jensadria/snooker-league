SELECT 
	players.name,
	email,
	previous_handicap,
	t.name AS team_name
FROM players
LEFT JOIN
	teams as t ON t.id = current_team;
