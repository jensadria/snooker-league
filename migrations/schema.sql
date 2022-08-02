-- Down
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
DROP TABLE IF EXISTS frames CASCADE;
DROP MATERIALIZED VIEW IF EXISTS outcomes ;
DROP MATERIALIZED VIEW IF EXISTS results ;

-- Up
CREATE TABLE teams(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	location TEXT,
	address TEXT
);

CREATE TABLE players(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	previous_handicap INT,
	current_handicap INT DEFAULT 0,
	team_id INT REFERENCES teams(id)
	);

CREATE TABLE matches(
	id SERIAL PRIMARY KEY,
	year INT,
	match_round INT,
	match_week INT,
	date DATE NOT NULL,
	home_team INT REFERENCES teams(id) NOT NULL,
	away_team INT REFERENCES teams(id) NOT NULL
	);

-- CREATE TABLE frames(
--	id SERIAL PRIMARY KEY,
--	frame_nr INT,
--	match_id INT REFERENCES matches(id),
--	player_home INT REFERENCES players(id),
--	player_home_handicap INT DEFAULT 0,
--	player_home_score INT,
--	player_away INT REFERENCES players(id),
--	player_away_handicap INT DEFAULT 0,
--	player_away_score INT,
--	highest_break INT REFERENCES players(id),
--	highest_break_score INT
-- );

CREATE TABLE frames(
	id SERIAL PRIMARY KEY,
	frame_nr INT,
	match_id INT REFERENCES matches(id),
	player_id INT REFERENCES players(id),
	won BOOLEAN DEFAULT FALSE,
	high_break INT
)