import {Appointment} from "./Appiontment"
import {Tips} from "./TipsAndAdvice"
import {Nutrition} from "./Nutrition"
import {WellBeing} from "./Wellbeing"
import {FAQ} from "../FAQ/FAQ"




export const LowerSection = () =>{
    return(
        <div className="flex flex-col items-center w-full justify-center max-w-[1800px] ">
            <Appointment />
            <Tips />
            <Nutrition />
            <WellBeing />
            <FAQ />
        </div>
    )
}