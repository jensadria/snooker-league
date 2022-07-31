export interface FrameModel {
	frame_id: number;
	frame_nr: number;
	fixture_id: number;
	player_home: string;
	player_home_score: number;
	player_away: string;
	player_away_score: number;
	highest_break?: number;
	highest_break_score?: number
}