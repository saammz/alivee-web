import { aliveeData } from "./CardsData";

const Alivee = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-8 mb-10 md:mb-20 text-center sm-max:pt-16">
      <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold">
        <span className="flex max-w-3xl mx-auto text-white mt-6">
          What you get by being Aliveer?
        </span>
      </h2>
      <h3 className="text-18 leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
        <span>
          The Alivee<span className="text-xs align-super">®</span> experience is more than just an app.
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-4 justify-center sm-max:grid sm-max:grid-cols-1">
        {aliveeData.map((item) => (
          <div key={item.id} className="relative flex justify-center">
            <img
              src={item.img}
              alt={`image ${item.id}`}
              className="max-w-full h-auto object-cover rounded-lg"
              style={{ maxWidth: "350px" }}
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="absolute top-10 inset-0 ">
              <p className="text-white text-4xl">{item.title}</p>
              <p className="text-white text-2xl py-10 px-4 ">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alivee;
