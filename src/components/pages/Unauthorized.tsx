import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] text-center px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Unauthorized</h1>
      <p className="text-slate-300 mb-6">
        Sorry, you don’t have permission to access this page.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
