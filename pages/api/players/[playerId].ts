import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'
//import { FrameModel } from '../../models/frame'

export default async function getPlayerById(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const { playerId } = req.query
		const sql = "SELECT players.id AS player_id, players.name,email,previous_handicap,t.name AS team_name FROM players LEFT JOIN teams as t ON t.id = team_id WHERE players.id = $1"
		const players = await db.query(sql, [playerId])

		res.status(200).json(players.rows[0])
	}
}