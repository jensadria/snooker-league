import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../migrations/db';
import { compare } from 'bcrypt';


//type Data = {
//	name: string
//}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { email, password } = req.body

		const sql = "SELECT players.id AS player_id, players.name,email,password_hash,previous_handicap,t.name AS team_name FROM players LEFT JOIN teams as t ON t.id = current_team WHERE email = $1"
		const dbResult = await db.query(sql, [email])
		const player = dbResult.rows[0]
		console.log(player);

		compare(password, player.password_hash, (err, result) => {
			if (!err && result) {
				res.status(200).json({ name: 'John Doe' })
			} else {
				res.json({ message: "login failed" })
			}
		});
	}
}
