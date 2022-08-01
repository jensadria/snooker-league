import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../../migrations/db'

type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { playerId } = req.query

	const sqlFrames = "SELECT frames.id AS frame_id,frame_nr,m.date, m.match_week,t1.location,p1.name AS player_home,t1.name AS player_home_team, player_home_score,p2.name AS player_away,t2.name AS player_away_team,player_away_score, p3.name AS highest_break, highest_break_score FROM frames LEFT JOIN players p1 ON player_home = p1.id LEFT JOIN players p2 ON player_away = p2.id LEFT JOIN players p3 ON highest_break = p3.id LEFT JOIN matches m ON match_id = m.id LEFT JOIN teams t1 ON p1.id = t1.id LEFT JOIN teams t2 ON p2.id = t2.id WHERE player_away = $1 OR player_home = $1;"
	const frames = await db.query(sqlFrames, [playerId])


	res.status(200).json(frames.rows)
	//res.status(200).json({ name: 'John Doe' })
}
