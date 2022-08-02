//import type { NextApiRequest, NextApiResponse } from 'next';
//import db from '../../migrations/db';
//import { compare } from 'bcrypt';
//import { sign } from 'jsonwebtoken';


//type Data = {
//	name: string
//}
/*
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { email, password } = req.body

		const sql = "SELECT players.id AS player_id, players.name,email,password_hash,previous_handicap,t.name AS team_name, team_id  FROM players LEFT JOIN teams as t ON t.id = team_id WHERE email = $1"
		const dbResult = await db.query(sql, [email])
		const player = dbResult.rows[0]

		compare(password, player.password_hash, (err, result) => {
			if (!err && result) {
				const data = { player: player }
				const jwt = sign(data, process.env.SECRET_KEY, { expiresIn: '3h' })

				res.status(200).json({ authToken: jwt })
			} else {
				res.json({ message: "login failed" })
			}
		});
	}
}
*/