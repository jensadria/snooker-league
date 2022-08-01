import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel } from "../../models/match";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel | {}>({});
  const [matchFrames, setMatchFrames] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      axios.get(`/api/frames/${id}`).then((res) => setMatchFrames(res.data));
    }
  }, [id]);

  return <div></div>;
};

export default FixtureRow;
