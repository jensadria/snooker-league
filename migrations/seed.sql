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




--  1 | Jokers            | Northbridge | 106 James St, Northbridge WA 6003
--  2 | Dark Horse        | Northbridge | 106 James St, Northbridge WA 6003
--  3 | Shooters          | Northbridge | 106 James St, Northbridge WA 6003
--  4 | 168               | Northbridge | 106 James St, Northbridge WA 6003
--  5 | Kids              | Northbridge | 106 James St, Northbridge WA 6003
--  6 | Titans            | Cannington  | 5 Mallard Way, Cannington WA 6107
--  7 | Centurians        | Cannington  | 5 Mallard Way, Cannington WA 6107
--  8 | North Perth Stars | North Perth | 464 Fitzgerald St, North Perth WA 6006

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

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Ben Judge',-21, 2);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Ben Foster',-40, 2);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Stuart Kingsbury',-18, 2);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Darren Gledhill',-15, 2);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('James Pan',-3, 3);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Lawman Law',30, 3);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Tim Wong',-6, 3);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Chun Yan',0, 3);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Nick Tolhurst',0, 5);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Robert Day',18, 5);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Bowie Chung',20, 5);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Duong Song Duong',24, 5);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Kishin Bhavnani',-18, 6);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Wayne Rollings',-3, 6);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Sean Lam',-29, 6);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Aaron Lee',-3, 6);

INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Barry Saxon',-12, 8);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Vince Lawson',-18, 8);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Steve Saxon',-20, 8);
INSERT INTO players(name, previous_handicap,  team_id) VALUES ('Steve Maynard',3, 8);


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

-- MATCH 2 - 3 vs 5

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (1, 2, 17, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (1, 2, 21, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (2, 2, 18, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (2, 2, 22, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (3, 2, 19, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (3, 2, 23, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (4, 2, 20, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (4, 2, 24, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (5, 2, 17, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (5, 2, 22, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (6, 2, 18, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (6, 2, 23, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (7, 2, 19, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (7, 2, 24, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (8, 2, 20, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (8, 2, 21, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (9, 2, 17, 1, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (9, 2, 23, 0, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (10, 2, 18, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (10, 2, 24, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (11, 2, 19, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (11, 2, 21, 1, 'away');

INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (12, 2, 20, 0, 'home');
INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES (12, 2, 22, 1, 'away');
