export interface MatchModel {
	match_id: number;
	year: number;
	match_round: number;
	match_week: number;
	date: string;
	home_team: string;
	away_team: string;
	address: string;
	location: string;
	home_score?: number;
	away_score?: number
}