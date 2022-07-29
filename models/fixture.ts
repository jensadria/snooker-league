export interface FixtureModel {
	fixture_id: number;
	fixture_week: number;
	date: string;
	home_team: string;
	away_team: string;
	home_team_points?: number;
	away_team_points?: number
}