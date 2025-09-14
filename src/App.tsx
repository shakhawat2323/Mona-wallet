import { Outlet } from "react-router";
import CommonLayout from "./components/Layout/CommonLayout";
import Hero from "./components/pages/Home/Hero";
import Card from "./components/pages/Home/Card";
import RegistrationSection from "./components/pages/Home/RegistrationSection";
import TestimonialsSection from "./components/pages/Home/TestimonialsSection";

export default function App() {
  return (
    <div>
      <CommonLayout>
        <Hero/>
        <Card/>
        <RegistrationSection/>
        <TestimonialsSection/>
        <Outlet />
      </CommonLayout>
    </div>
  );
}
