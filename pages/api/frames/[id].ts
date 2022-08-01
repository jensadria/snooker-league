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
	const sql = "SELECT frames.id,frame_nr,	p1.name AS player_home,	player_home_score,p2.name AS player_away,player_away_score,	p3.name AS highest_break, highest_break_score FROM frames LEFT JOIN players as p1 ON player_home = p1.id LEFT JOIN players as p2 ON player_away = p2.id LEFT JOIN players AS p3 ON highest_break = p3.id WHERE match_id = $1;"
	const match = await db.query(sql, [id])
	res.status(200).json(match.rows)
	//res.status(200).json({ name: 'John Doe' })
}
