import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-[#1a1c2e] via-[#232946] to-[#1d1f33] text-center px-6">
      {/* ✅ Inline Error SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 mb-6 text-red-500 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h1 className="text-4xl font-bold text-red-500 mb-3">
        Something Went Wrong
      </h1>
      <p className="text-slate-300 mb-6">
        Oops! An unexpected error has occurred. Please try again later.
      </p>

      {/* ✅ Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 cursor-pointer
         text-white rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
