import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../migrations/db";

//type Data = {
//	name: string;
//};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {

		const sql =
			"SELECT f.id AS frame_id,f.frame_nr,f.match_id, f.match_id, f.player_id, f.score, f.location, f.high_break, p.name, p.team_id FROM frames f LEFT JOIN players p ON p.id = f.player_id;";
		const frames = await db.query(sql);
		res.status(200).json(frames.rows);
	}

	if (req.method === "POST") {
		const { homePlayer, awayPlayer } = req.body
		console.log(homePlayer, awayPlayer)
		res.json({ message: "Player" })
	}
}
