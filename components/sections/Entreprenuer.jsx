import Image from "next/image";
import tum from "../../public/images/tum-bg.png";

const Entreprenuer = () => {
  return (
    <div className="relative shadow-inner h-[44rem]">
      <Image
        src={tum}
        className="absolute -z-10 h-[44rem] w-full object-cover object-top"
        alt="gallery backgound"
      />
      <div className="absolute text-white top-40 ml-4">
        <h1 className="text-5xl font-medium text-white">
          TUM. The Entrepreneurial <br /> University
        </h1>
        <p className="text-lg mt-5">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
    </div>
  );
};

export default Entreprenuer;
