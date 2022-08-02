// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../../migrations/db'

type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { matchId } = req.query
	const sql = "SELECT frames.id AS frame_id,frame_nr,	p1.id AS player_home_id, p1.name AS player_home, player_home_score, player_home_handicap,p2.id AS player_away_id,p2.name AS player_away,player_away_score,player_away_handicap,	p3.name AS highest_break, highest_break_score FROM frames LEFT JOIN players as p1 ON player_home = p1.id LEFT JOIN players as p2 ON player_away = p2.id LEFT JOIN players AS p3 ON highest_break = p3.id WHERE match_id = $1 ORDER BY frames.id;"
	const match = await db.query(sql, [matchId])
	res.status(200).json(match.rows)
	//res.status(200).json({ name: 'John Doe' })
}
