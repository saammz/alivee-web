import Alivee from "./Alivee";
import Cards from "./Cards";
import Experience from "./Experience";
import Plans from "./Plans";
import Platform from "./Platform";

const Darkbg = () => {
  return (
    <div className="bg-black lg:pt-20 flex flex-col gap-4 w-full">
      <Experience />
      <Cards />
      <Alivee />
      <Platform />
      <Plans />
    </div>
  );
};

export default Darkbg;
