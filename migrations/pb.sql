-- Down
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS fixtures CASCADE;

-- Up
CREATE TABLE teams (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
	location TEXT,
	address TEXT,
)

CREATE TABLE players (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	password_hash VARCHAR(255)
)

CREATE TABLE fixtures (
	id SERIAL PRIMARY KEY,
	fixture_no INTEGER,
	date TIMESTAMP,
	home_team REFERENCES teams(id)
	away_team REFERENCES teams(id)
)

