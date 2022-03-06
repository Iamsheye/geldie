import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import ethereum from "../eth";

interface IHeader {
  userAddress: string;
  setUserAddress: (value: React.SetStateAction<string>) => void;
}

const Header = ({ userAddress, setUserAddress }: IHeader) => {
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
    setUserAddress(ethereum?.selectedAddress);
  }, [user]);

  return (
    <header className="py-8 ">
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/">
            <p className="text-5xl text-[#ffed8e] font-['Pacifico']">geldie</p>
          </Link>
        </div>

        <div>
          {isAuthenticated ? (
            <button
              disabled
              className="text-white bg-[#ffffff1a] rounded-full py-2.5 px-5"
            >
              {`${userAddress.split("").splice(0, 3).join("")}...${userAddress
                .split("")
                .splice(-5)
                .join("")}`}{" "}
              <span
                onClick={() => logout()}
                className="ml-3 cursor-pointer text-[0.85rem]"
              >
                ❌
              </span>
            </button>
          ) : (
            <button
              onClick={() =>
                authenticate({
                  signingMessage: "Project Geldie Authentication",
                  chainId: 137,
                })
              }
              className="text-white bg-gradient-to-tr from-green-600 to-sky-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5"
            >
              {isAuthenticating ? "Connecting Wallet.." : "Connect Wallet 💫"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
