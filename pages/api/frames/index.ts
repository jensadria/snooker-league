import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../migrations/db";

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const sql =
		"SELECT f.id AS frame_id, f.match_id, f.player_id, f.score, f.location, f.high_break, p.name, p.team_id FROM frames f LEFT JOIN players p ON p.id = f.player_id;";
	const frames = await db.query(sql);
	res.status(200).json(frames.rows);
	//res.status(200).json({ name: 'John Doe' })
}
