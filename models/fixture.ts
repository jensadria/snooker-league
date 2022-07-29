export interface FixtureModel {
	fixture_id: number;
	fixture_group: number;
	fixture_round: number;
	fixture_week: number;
	date: string;
	home_team: string;
	away_team: string;
	address: string;
	location: string;
	home_team_points?: number;
	away_team_points?: number
}