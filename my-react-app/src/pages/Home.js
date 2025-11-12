import "./Home.css";
import Hero from "../components/home/Hero";
import FeaturedPets from "../components/home/FeaturedPets";
import HowItWorks from "../components/home/HowItWorks";
import Stats from "../components/home/Stats";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <FeaturedPets />
        <HowItWorks />
        <Stats />
        <CallToAction />
      </main>
    </>
  );
}