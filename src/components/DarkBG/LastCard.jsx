import card1 from "../../resources/card1.svg";
import card2 from "../../resources/card2.svg";
import card3 from "../../resources/card3.svg";
import water from "../../resources/water.webp";
import './CustomWidth.css'

const LastCard = () => {
  return (
    <div className="flex gap-4 sm-max:flex-col last-card">

        <div className="relative w-1/2 h-full bg-[#0a1b22] p-6 rounded-2xl sm-max:w-full">
          <div className="flex flex-col gap-4">
            <div className="">
              <img src={card1} alt="card1" className="w-full" />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <img src={card2} alt="card1" className="w-full" />
              </div>
              <div className="w-full">
                <img src={card3} alt="card1" className="w-full" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[1rem] pb-6">
            <h3 className="text-4xl sm-max:text-3xl leading-32 md:text-40 md:leading-40 font-bold mt-6 text-white">
            Activity Reports and Progress
            </h3>
            <h4 className="text-xl sm-max:text-md leading-18 md:text-20 md:leading-20 font-semibold mt-4 text-white">
            Monitor your progress and success. <br/>
            Stay motivated.
            </h4>
          </div>
        </div>

        <div className="relative w-1/2 h-full bg-[#e8f0fe] rounded-2xl sm-max:w-full">
            <img src={water} alt="" className="absolute top-0 right-0 left-0 w-full h-full rounded-2xl object-cover" />

            <div className="absolute bottom-[1rem] pb-6 px-6">
            <h3 className="text-4xl sm-max:text-3xl leading-32 md:text-40 md:leading-40 font-bold mt-6 text-black">
            Water tracker. Stay hydrated!
            </h3>
            <h4 className="text-xl sm-max:text-md leading-18 md:text-20 md:leading-20 font-semibold mt-4 text-black">
            Track and manage your water intake and improve your well-being
            </h4>
          </div>
            
        </div>
        
      </div>
  )
}

export default LastCard
