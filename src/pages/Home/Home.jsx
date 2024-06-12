import { LowerSection } from "../../components/Appiontments/LowerSection";
import Darkbg from "../../components/DarkBG/Darkbg";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Darkbg />
    <LowerSection />
    </main>
  );
};

export default Home;
