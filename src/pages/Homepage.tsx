import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import Moralis from "moralis";

import ethereum from "../eth";
import Header from "../components/Header";
import BuyNow from "../components/BuyNow";

const Homepage = () => {
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <section className="wrapper">
      <Header userAddress={userAddress} setUserAddress={setUserAddress} />
      <img src="/rolling-loud.png" alt="" width="100%" />
      <section className="md:flex justify-between items-center my-8">
        <div className="flex-1">
          <h1 className="text-[#ffed8e] text-[3rem] font-semibold md:text-[4.5rem]">
            Rolling Loud Miami 2022
          </h1>
          <p className="text-[#d2d2d2] text-[1.25rem] font-['Inter'] md:max-w-[80%]">
            Rolling Loud is a recurring music festival held in the United States
            of America.
          </p>
        </div>
        <div className="flex-1 font-['Inter'] text-white mt-6 md:mt-0">
          <div className="flex items-center mb-3">
            <img
              src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022"
              alt=""
              className="mr-2 h-6"
            />
            <p className="font-bold text-3xl">0.05</p>
          </div>
          <p className="">
            The three-day festival taking place on July 22-24 at Miami’s Hard
            Rock Stadium will boast household name headliners like Kendrick
            Lamar, Kanye West, Future, Playboi Carti and Lil Baby to name just a
            few.{" "}
            <span className="block underline mt-6 text-sm">
              More details...
            </span>
          </p>
          <BuyNow onClick={(e) => console.log(e)} />
        </div>
      </section>
    </section>
  );
};

export default Homepage;
