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
	const sql = "SELECT m.id AS match_id, m.year, m.match_round, m.match_week, m.date,t1.id AS home_team_id, t1.name AS home_team, t2.id AS away_team_id, t2.name AS away_team, t1.address, t1.location, r.home_score, r.away_score FROM matches m LEFT JOIN results r ON m.id = r.match_id LEFT JOIN teams t1 on t1.id = m.home_team LEFT JOIN teams t2 on t2.id = m.away_team WHERE m.id = $1"
	const match = await db.query(sql, [id])
	res.status(200).json(match.rows[0])
	//res.status(200).json({ name: 'John Doe' })
}
