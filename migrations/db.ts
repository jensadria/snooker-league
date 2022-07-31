import pg from 'pg'

let db;
if (process.env.NODE_ENV === "production") {
	db = new pg.Pool({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	});
} else {
	db = new pg.Pool({
		database: "snooker_league",
		port: 5433,
	});
}

export default db;