import Image from "next/image";
import president from "../../public/images/Presidential.webp";
import Button from "../layout/Button";
import Wrapper from "../layout/wrapper";



const Degree = () => {
  return (
    <Wrapper>
      <div className="relative mt-20">
        <Image
          className="w-[750px] h-[500px] object-cover"
          src={president}
          alt="drive"
        />
        <div className="p-6 py-12 absolute top-16 right-24 w-[700px] h-auto bg-[#8F81EA] text-black">
          <h1 className="text-4xl my-5">What drives us: President Thomas F. Hofmann about TUM</h1>
          <p>
          Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.
          </p>
          <Button className="w-10" variant="primary" size="xr">
            READMORE
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Degree;
