CREATE MATERIALIZED VIEW player_wins_losses AS
SELECT 
player_id,
COUNT(*) FILTER(WHERE won = 't') AS frames_won, 
COUNT(*) FILTER(WHERE won = 'f') AS frames_lost 
FROM frames 
GROUP BY player_id;

