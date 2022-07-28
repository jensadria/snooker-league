import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../migrations/db'

type Data = {
	name: string
}

export default async function getAllFixtures(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'GET') {
		const sql = "SELECT fixture_group, fixture_round, fixture_week, date, ht.name AS home_team, at.name AS away_team, ht.address, ht.location FROM fixtures LEFT JOIN teams AS ht ON home_team = ht.id LEFT JOIN teams AS at ON away_team = at.id;"
		const fixtures = await db.query(sql)

		res.status(200).json(fixtures.rows)
	}
}