import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../migrations/db";

//type Data = {
//	message: string;
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
		const insertQuery =
			"INSERT INTO frames(frame_nr,match_id, player_id, score, location) VALUES ($1, $2, $3, $4, $5);";
		db.query(insertQuery, [homePlayer.frame_nr, homePlayer.match_id, homePlayer.player_id, homePlayer.score, homePlayer.location])
		db.query(insertQuery, [awayPlayer.frame_nr, awayPlayer.match_id, awayPlayer.player_id, awayPlayer.score, awayPlayer.location])
		db.query("REFRESH MATERIALIZED VIEW player_wins_losses")
		db.query("REFRESH MATERIALIZED VIEW results")

		res.status(200).json({ message: "Success" })
	}
}
