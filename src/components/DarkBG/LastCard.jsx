import bottle from "../../resources/bottle-water.jpg";
import consultation from "../../resources/consultation.jpg";
import './CustomWidth.css'

const LastCard = () => {
  return (
    <div className="flex gap-4 sm-max:flex-col last-card">

        <div className="relative w-1/2 h-full bg-[#0a1b22] rounded-2xl sm-max:w-full">
            <img src={consultation} alt="" className="absolute top-0 right-0 left-0 w-full h-full rounded-2xl object-cover" />
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 rounded-2xl"></div>

            <div className="absolute bottom-[1.4rem] pb-6 px-6">
            <h3 className="ext-4xl leading-32 md:text-40 md:leading-40 font-bold text-white xsm-max:text-xl sm-max:text-[33px] sm-max:leading-8 md:text-3xl">
            Medical Consultation
            </h3>
            <h4 className="text-2xl sm-max:text-md leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white sm-max:font-normal sm-max:text-[18px] sm-max:leading-8">
            Access professional medical advice and consultations.
            </h4>
            
          </div>
            
        </div>
        
        <div className="relative w-1/2 h-full bg-[#e8f0fe] rounded-2xl sm-max:w-full">
            <img src={bottle} alt="" className="absolute top-0 right-0 left-0 w-full h-full rounded-2xl object-cover" />

            <div className="absolute top-[1rem] pb-6 px-6">
            <h3 className="ext-4xl leading-32 md:text-40 md:leading-40 font-bold text-black xsm-max:text-xl sm-max:text-[33px] sm-max:leading-8 md:text-3xl">
            Medication and Hydration Tracking
            </h3>
            <h4 className="text-2xl sm-max:text-md leading-18 md:text-20 md:leading-20 font-medium mt-4 text-black sm-max:font-normal sm-max:text-[18px] sm-max:leading-6">
            Never miss a dose or a glass of water with our easy medication and hydration management.
            </h4>
          </div>
            
        </div>
        
      </div>
  )
}

export default LastCard
