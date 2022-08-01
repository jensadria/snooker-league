export interface MatchModel {
	match_id: number | null;
	year: number | null;
	match_round: number | null;
	match_week: number | null;
	date: string;
	home_team: string;
	away_team: string;
	address: string;
	location: string;
	home_score?: number | null;
	away_score?: number | null
}

export const emptyMatch = {
	match_id: null,
	year: null,
	match_round: null,
	match_week: null,
	date: '',
	home_team: '',
	away_team: '',
	address: '',
	location: '',
	home_score: null,
	away_score: null
}