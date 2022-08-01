// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../migrations/db'

type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { id } = req.query
	const sql = "SELECT matches.id AS match_id, year, match_round, match_week, date, ht.name AS home_team, r.home_score, at.name AS away_team, r.away_score, ht.address, ht.location FROM matches LEFT JOIN teams AS ht ON home_team = ht.id LEFT JOIN teams AS at ON away_team = at.id LEFT JOIN results AS r ON r.match_id = matches.id WHERE matches.id = $1"
	const match = await db.query(sql, [id])
	res.status(200).json(match.rows[0])
	//res.status(200).json({ name: 'John Doe' })
}
