import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'
import { MatchModel } from '../../../models/match'

export default async function getAllFixtures(
	req: NextApiRequest,
	res: NextApiResponse<MatchModel>
) {
	if (req.method === 'GET') {
		const sql = "SELECT matches.id AS match_id, year, match_round, match_week, date, ht.name AS home_team, r.home_score, at.name AS away_team, r.away_score, ht.address, ht.location FROM matches LEFT JOIN teams AS ht ON home_team = ht.id LEFT JOIN teams AS at ON away_team = at.id LEFT JOIN results AS r ON r.match_id = matches.id;"
		const matches = await db.query(sql)

		res.status(200).json(matches.rows)
	}
}