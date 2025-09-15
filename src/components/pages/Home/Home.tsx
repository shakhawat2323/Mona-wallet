import Cards from "./Card";
import Hero from "./Hero";
import RegistrationSection from "./RegistrationSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <div>
          <Hero/>
        <Cards/>
        <RegistrationSection/>
        <TestimonialsSection/>
    </div>
  );
}