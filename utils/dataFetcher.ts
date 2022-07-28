import axios from "axios";

const GetData = {
	getAllFixtures: async () => {
		const results = await axios.get("/api/fixtures").then((res) => res.data);
		return results;
	},
};

export default GetData;
