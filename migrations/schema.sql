-- Down
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS fixtures CASCADE;
DROP TABLE IF EXISTS matches CASCADE;

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
	email VARCHAR(255),
	previous_handicap INT,
	password_hash VARCHAR(255),
	current_team INT REFERENCES teams(id)
);

CREATE TABLE fixtures(
	id SERIAL PRIMARY KEY,
	fixture_group VARCHAR(255), -- i.e. 2022_1 means year 2022, 1st league
	fixture_week INT,
	date TIMESTAMP,
	home_team INT REFERENCES teams(id) NOT NULL,
	away_team INT REFERENCES teams(id) NOT NULL
);

 CREATE TABLE matches(
	id SERIAL PRIMARY KEY,
	fixture_id INT REFERENCES fixtures(id),
	player_home INT REFERENCES players(id),
	player_away INT REFERENCES players(id),
	highest_break INT REFERENCES players(id)
 );
