import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'
import { MatchModel } from '../../../models/match'

export default async function getAllFixtures(
	req: NextApiRequest,
	res: NextApiResponse<MatchModel>
) {
	if (req.method === 'GET') {
		const sql = "SELECT m.id AS match_id, year, m.match_round, m.match_week, date, ht.name AS home_team, r.home_score, awt.name AS away_team, r.away_score, ht.address, ht.location FROM matches m LEFT JOIN teams AS ht ON home_team = ht.id LEFT JOIN teams AS awt ON away_team = awt.id LEFT JOIN results AS r ON r.match_id = m.id;"
		const matches = await db.query(sql)

		res.status(200).json(matches.rows)
	}
}