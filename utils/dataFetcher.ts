import db from '../migrations/db'

const GetData = {
	getAllMatches: async () => {
		const sql = "SELECT matches.id AS match_id, year, match_round, match_week, date, ht.name AS home_team, r.home_score, at.name AS away_team, r.away_score, ht.address, ht.location FROM matches LEFT JOIN teams AS ht ON home_team = ht.id LEFT JOIN teams AS at ON away_team = at.id LEFT JOIN results AS r ON r.match_id = matches.id;"
		return await db.query(sql)
	},
	getMatchById: async (id) => {
		const sql = "SELECT * from matches WHERE id = $1"
		return await db.query(sql, [id])
	}
};

export default GetData;
