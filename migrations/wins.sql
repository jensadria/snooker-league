CREATE MATERIALIZED VIEW outcomes AS 
SELECT frames.id, frames.match_id,
CASE
	WHEN player_home_score > player_away_score
	THEN frames.player_home
	WHEN player_home_score < player_away_score
	THEN frames.player_away
	END
	AS winner_player_id,
CASE
	WHEN player_home_score > player_away_score
	THEN 'home'
	WHEN player_home_score < player_away_score
	THEN 'away'
	END
	AS outcome
FROM frames;


CREATE MATERIALIZED VIEW results AS
SELECT match_id, 
		COUNT(*) FILTER(WHERE outcome = 'home') AS home_score,
		COUNT(*) FILTER(WHERE outcome = 'away') AS away_score,
CASE
	WHEN COUNT(*) FILTER(WHERE outcome = 'home') > COUNT(*) FILTER(WHERE outcome = 'away')
	THEN 'home'
	WHEN COUNT(*) FILTER(WHERE outcome = 'home') < COUNT(*) FILTER(WHERE outcome = 'away')
	THEN 'away'
	ELSE 'draw'
	END
	AS winner
FROM outcomes
GROUP BY match_id; 
	

--CREATE MATERIALIZED VIEW players_frames AS
--SELECT 
--	COUNT()
	 
