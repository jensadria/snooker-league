import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'
//import { FrameModel } from '../../models/frame'

export default async function getAllPlayers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const sql = "SELECT p.id AS player_id, p.name, p.previous_handicap, t.name AS team_name, pwl.frames_won, pwl.frames_lost, (pwl.frames_won + pwl.frames_lost) AS total_frames, p.previous_handicap FROM players p LEFT JOIN player_wins_losses pwl ON p.id = pwl.player_id LEFT JOIN teams t ON t.id = p.team_id ORDER BY p.id;"
		const players = await db.query(sql)

		res.status(200).json(players.rows)
	}
}