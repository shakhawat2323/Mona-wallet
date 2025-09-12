import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProt {
  children: ReactNode;
}
export default function CommonLayout({ children }: IProt) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1 w-11/12 mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
