import Cards from "./Cards";
import Experience from "./Experience";
import MoreCards from "./MoreCards";
import Plans from "./Plans";
import Platform from "./Platform";

const Darkbg = () => {
  return (
    <div className="bg-black lg:pt-2 flex flex-col gap-4 w-full">
      <Experience />
      <Cards />
      <MoreCards />
      <Platform />
      <Plans />
    </div>
  );
};

export default Darkbg;
