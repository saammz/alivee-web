import Darkbg from "../../components/DarkBG/Darkbg";
import Hero from "../../components/Hero/Hero";
import { Appointment } from "../../components/Appiontments/Appiontment"
import { Tips } from "../../components/Appiontments/TipsAndAdvice"
import { Nutrition } from "../../components/Appiontments/Nutrition"
import { FAQ } from "../../components/FAQ/FAQ"
import { WellBeing } from "../../components/Appiontments/Wellbeing"
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar/>
      <Hero />
      <Darkbg />
      <Appointment />
      <Tips />
      <Nutrition />
      <WellBeing />
      <FAQ />
    </main>
  );
};

export default Home;
