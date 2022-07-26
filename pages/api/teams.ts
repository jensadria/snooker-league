import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../migrations/db'

type Data = {
	name: string
}

export default async function getAllTeams(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'GET') {
		const teams = await db.query("SELECT id AS team_id,name, location, address FROM teams;")
		res.status(200).json(teams.rows)
	}
}
