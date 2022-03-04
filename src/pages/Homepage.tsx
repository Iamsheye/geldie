import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import Moralis from "moralis";

import ethereum from "../eth";
import Header from "../components/Header";

const Homepage = () => {
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <section className="wrapper">
      <Header userAddress={userAddress} setUserAddress={setUserAddress} />
    </section>
  );
};

export default Homepage;
