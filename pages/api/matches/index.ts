import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'
import { MatchModel } from '../../../models/match'

export default async function getAllFixtures(
	req: NextApiRequest,
	res: NextApiResponse<MatchModel>
) {
	if (req.method === 'GET') {
		const sql = "SELECT m.id AS match_id, m.year, m.match_round, m.match_week, m.date, t1.name AS home_team, t2.name AS away_team, t1.address, t1.location, r.home_score, r.away_score FROM matches m LEFT JOIN results r ON m.id = r.match_id LEFT JOIN teams t1 on t1.id = m.home_team LEFT JOIN teams t2 on t2.id = m.away_team;"
		const matches = await db.query(sql)

		res.status(200).json(matches.rows)
	}
}