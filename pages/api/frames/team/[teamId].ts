import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../../migrations/db'

type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { teamId } = req.query
	const sql = "SELECT matches.id AS match_id, year, match_round, match_week, date, t1.name AS home_team,r.home_score, t2.name AS away_team,r.away_score, t1.location from matches LEFT JOIN teams t1 ON home_team = t1.id	LEFT JOIN teams t2 ON away_team = t2.id	LEFT JOIN results r ON matches.id = r.match_id WHERE home_team = $1 OR away_team = $1 ORDER BY matches.id;"
	const matches = await db.query(sql, [teamId])
	console.log(teamId);

	res.status(200).json(matches.rows)
	//res.status(200).json({ name: 'John Doe' })
}
