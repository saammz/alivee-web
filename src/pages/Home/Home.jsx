import { Appointment } from "../../components/Appiontments/Appiontment"
import Darkbg from "../../components/DarkBG/Darkbg"
import Hero from "../../components/Hero/Hero"
import { Tips } from "../../components/Appiontments/TipsAndAdvice"
import { Nutrition } from "../../components/Appiontments/Nutrition"
import { FAQ } from "../../components/FAQ/FAQ"
import { WellBeing } from "../../components/Appiontments/Wellbeing"

const Home = () => {
  return (
    <main>
      {/* <Hero/> */}
      {/* <Darkbg/> */}
      <Appointment />
      <Tips />
      <Nutrition />
      <WellBeing />
      <FAQ />
    </main>
  )
}

export default Home
