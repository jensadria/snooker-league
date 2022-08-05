export interface MatchModel {
	match_id: number;
	year: number | null;
	match_round: number | null;
	match_week: number | null;
	date: string;
	home_team_id: number | null;
	home_team: string;
	away_team_id: number | null;
	away_team: string;
	address: string;
	location: string;
	home_score?: number | null;
	away_score?: number | null
}

export const emptyMatch: MatchModel = {
	match_id: 0,
	year: null,
	match_round: null,
	match_week: null,
	date: '',
	home_team_id: null,
	home_team: '',
	away_team_id: null,
	away_team: '',
	address: '',
	location: '',
	home_score: null,
	away_score: null
}