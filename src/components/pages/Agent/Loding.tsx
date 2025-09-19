import LodingIcon from "../../../assets/Icons/loding.svg";

export default function Loding() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="flex flex-col items-center justify-center">
        {/* ✅ Animated SVG */}
        <img
          src={LodingIcon}
          alt="Loading..."
          className="w-20 h-20 animate-custom-wiggle"
          draggable={false}
        />

        <p className="mt-3 text-white font-medium text-sm">
          Loading, please wait...
        </p>
      </div>

      {/* ✅ Custom Keyframes */}
      <style>{`
        @keyframes custom-wiggle {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          10% {
            transform: translateY(-4px) rotate(-6deg) scale(1.02);
          }
          25% {
            transform: translateY(2px) rotate(6deg) scale(0.98);
          }
          50% {
            transform: translateY(0) rotate(-3deg) scale(1.01);
          }
          75% {
            transform: translateY(-2px) rotate(4deg) scale(0.99);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        .animate-custom-wiggle {
          animation: custom-wiggle 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
