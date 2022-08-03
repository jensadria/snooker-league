-- INSERT TEAMS
INSERT INTO teams(name, location, address) VALUES ('Jokers', 'Northbridge', '106 James St, Northbridge WA 6003');
INSERT INTO teams(name, location, address) VALUES ('Dark Horse', 'Northbridge', '106 James St, Northbridge WA 6003');
INSERT INTO teams(name, location, address) VALUES ('Shooters', 'Northbridge', '106 James St, Northbridge WA 6003');
INSERT INTO teams(name, location, address) VALUES ('168', 'Northbridge', '106 James St, Northbridge WA 6003');
INSERT INTO teams(name, location, address) VALUES ('Kids', 'Northbridge', '106 James St, Northbridge WA 6003');

INSERT INTO teams(name, location, address) VALUES ('Titans', 'Cannington', '5 Mallard Way, Cannington WA 6107');
INSERT INTO teams(name, location, address) VALUES ('Centurians', 'Cannington', '5 Mallard Way, Cannington WA 6107');

INSERT INTO teams(name, location, address) VALUES ('North Perth Stars', 'North Perth', '464 Fitzgerald St, North Perth WA 6006');

-- INSERT FIXTURES1,
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 1,'2022-03-28', 1, 4);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 1,'2022-03-28', 3, 5);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 1,'2022-03-28', 2, 8);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 1,'2022-03-28', 7, 6);

INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 2,'2022-04-04', 5, 1);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 2,'2022-04-04', 4, 2);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 2,'2022-04-04', 6, 3);
INSERT INTO matches(year, match_round, match_week, date, home_team, away_team) VALUES (2022,1, 2,'2022-04-04', 8, 7);


-- $2b$10$vkSEjPUVM5NZYh7CRrdykO1FNgfGU07wGYjrdrX6iC5dSQDFvLhIO - "password"


INSERT INTO players(name, previous_handicap, team_id) VALUES ('Nee Chua',-12, 1);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Mau Diep',-18, 1);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Tuan Quach',-18, 1);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Viet Thai',3, 1);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Sing Diep',0, 4);
INSERT INTO players(name, previous_handicap, team_id) VALUES ('Mun Zhao',0, 4);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Kwong Huen',12, 4);
INSERT INTO players(name, previous_handicap, team_id) VALUES ('Dennis Wan',18, 4);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Peter McCullagh',-40, 7);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Naqi Alizada',0, 7);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Domenic Cutri',-3, 7);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Michael Beeck',3, 7);


INSERT INTO frames(frame_nr,match_id, player_id, score, location, high_break) VALUES (1, 1, 1, 1, 'home', 63);
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (1, 1, 5, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (2, 1, 2, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (2, 1, 6, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (3, 1, 3, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (3, 1, 7, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (4, 1, 4, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (4, 1, 8, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (5, 1, 1, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (5, 1, 6, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (6, 1, 2, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (6, 1, 7, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (7, 1, 3, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (7, 1, 8, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (8, 1, 4, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (8, 1, 5, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (9, 1, 1, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (9, 1, 7, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (10, 1, 2, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (10, 1, 8, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (11, 1, 3, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (11, 1, 5, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (12, 1, 4, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (12, 1, 6, 1, 'away');
