CREATE MATERIALIZED VIEW player_wins_losses AS
SELECT 
player_id,
SUM(score) AS frames_won ,
COUNT(*) FILTER(WHERE score = 0) AS frames_lost 
FROM frames 
GROUP BY player_id;

CREATE MATERIALIZED VIEW results AS
SELECT 
match_id,
SUM(score)FILTER(WHERE location = 'home') AS home_score,
SUM(score)FILTER(WHERE location = 'away') AS away_score
FROM frames
GROUP BY match_id;

 

