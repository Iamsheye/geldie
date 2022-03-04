import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import Moralis from "moralis";

import ethereum from "../eth";

const Homepage = () => {
  const [userAddress, setUserAddress] = useState<string>("");

  const {
    user,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    authError,
    logout,
  } = useMoralis();

  if (authError) {
    toast.error(authError.message);
  }

  useEffect(() => {
    setUserAddress(ethereum.selectedAddress);
  }, [user]);

  return (
    <section className="wrapper pt-14">
      {/* <h1 className="text-3xl font-bold underline text-blue-700">
        PROJECT GELDIE HOME PAGE
      </h1> */}
      {isAuthenticated ? (
        <div className="flex items-center justify-end">
          <button className="relative inline-flex items-center justify-center px-1 py-1 overflow-hidden text-sm font-medium text-gray-900 rounded-l-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative p-1.5 pl-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-l-full group-hover:bg-opacity-0">
              {`${userAddress.split("").splice(0, 6).join("")}...${userAddress
                .split("")
                .splice(-5)
                .join("")}`}
            </span>
          </button>

          <button
            onClick={() => logout()}
            className="text-white bg-gradient-to-tr from-red-500 to-amber-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-400 font-medium rounded-r-full text-sm px-5 py-2.5 text-center"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            authenticate({ signingMessage: "Project Geldie Authentication" })
          }
          className="text-white bg-gradient-to-tr from-green-600 to-sky-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {isAuthenticating ? "Connecting Wallet..." : "Connect Wallet"}
        </button>
      )}
    </section>
  );
};

export default Homepage;
