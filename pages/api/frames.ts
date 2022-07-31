import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../migrations/db'
import { FrameModel } from '../../models/frame'

export default async function getAllFrames(
	req: NextApiRequest,
	res: NextApiResponse<FrameModel>
) {
	if (req.method === 'GET') {
		const sql = "SELECT frames.id AS frame_id, frame_nr, match_id, p_home.name AS player_home,frames.player_home_score AS player_home_score, p_away.name AS player_away, frames.player_away_score AS player_away_score FROM frames LEFT JOIN players AS p_home ON p_home.id = player_home LEFT JOIN players AS p_away ON p_away.id = player_away;"
		const frames = await db.query(sql)

		res.status(200).json(frames.rows)
	}
}