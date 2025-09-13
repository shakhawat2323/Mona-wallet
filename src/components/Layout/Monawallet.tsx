import { Link } from "react-router";

export default function Monawallet() {
  return (
    <div className="flex flex-row gap-2">
              <Link
                to="/"
                className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-[0.9] "
              >
                Mona
              </Link>
              <span className="text-yellow-400  text-2xl font-extrabold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text  hover:scale-105 transition-transform duration-300 leading-[0.9] ">
                Wallet
              </span>
            </div>
  );
}