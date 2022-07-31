import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios.get(`/api/match/${id}`).then((res) => setMatchDetails(res.data));
  }, [id]);
  console.log(matchDetails);
  return <div></div>;
};

export default FixtureRow;
