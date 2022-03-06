import React, { useState } from "react";
import BuyNow from "../components/BuyNow";
import Header from "../components/Header";

const Ticketpage = () => {
  const [userAddress, setUserAddress] = useState<string>("");

  return (
    <section className="wrapper">
      <Header userAddress={userAddress} setUserAddress={setUserAddress} />
      <section className="md:flex justify-between items-center my-8 md:my-16">
        <div className="flex-1">
          <div>
            <img src="./nft-img.png" alt="" />
          </div>
        </div>
        <div className="flex-1 font-['Inter'] text-white mt-6 md:mt-0">
          <p className="text-4xl mb-5 font-semibold max-w-[381px]">
            Regular Ticket - Rolling Loud Miami 2022
          </p>
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
          <BuyNow onClick={(e) => console.log("/ticket")} />
        </div>
      </section>
    </section>
  );
};

export default Ticketpage;
