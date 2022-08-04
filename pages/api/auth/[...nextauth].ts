import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
//import { compare } from 'bcrypt'; 

export default NextAuth({
	providers: [
		CredentialProvider({
			name: "credentials",
			credentials: {
				username: {
					label: "Email",
					type: "text",
					placeholder: "johndoe@test.com",
				},
				password: { label: "Password", type: "password" },
			},
			authorize: (credentials) => {
				//if (req.method === "POST") {
				//	const { email, password } = req.body

				//	const sql = "SELECT players.id AS player_id, players.name,email,password_hash,previous_handicap,t.name AS team_name, team_id  FROM players LEFT JOIN teams as t ON t.id = team_id WHERE email = $1"
				//	const dbResult = await db.query(sql, [email])
				//	const player = dbResult.rows[0]

				//	compare(password, player.password_hash, (err, result) => {
				//		if (!err && result) {
				//			const data = { player: player }
				//			const jwt = sign(data, process.env.SECRET_KEY, { expiresIn: '3h' })

				//			res.status(200).json({ authToken: jwt })
				//		} else {
				//			res.json({ message: "login failed" })
				//		}
				//	});
				//}
				// database look up
				if (
					credentials?.username === "john" &&
					credentials?.password === "test"
				) {
					return {
						id: 2,
						name: "John",
						email: "johndoe@test.com",
					};
				}

				// login failed
				return null;
			},
		}),
	],
	callbacks: {
		jwt: ({ token, user }) => {
			// first time jwt callback is run, user object is available
			if (user) {
				token.id = user.id;
			}

			return token;
		},
		session: ({ session, token }) => {
			if (token) {
				session.id = token.id;
			}

			return session;
		},
	},
	secret: process.env.SECRET_KEY,
	//jwt: {
	//	secret: "test",
	//},
	//pages: {
	//	signIn: "/auth",
	//},
});