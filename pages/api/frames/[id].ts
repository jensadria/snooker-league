import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../migrations/db";

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


	if (req.method === "POST") {
		res.json({ name: "Hello" })
	}
}