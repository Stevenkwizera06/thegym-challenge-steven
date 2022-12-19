import Wrapper from "../layout/wrapper";
import Image from "next/image";
import Button from "../layout/Button";
import alumni from "../../public/images/alumni.webp";
import school from "../../public/images/school.webp";


const School = () => {
  return (
    <Wrapper>
      <div className="relative mt-20">
        <Image
          className="w-[750px] h-[500px] object-cover"
          src={school}
          alt="drive"
        />
        <div className="p-6 py-12 absolute top-16 right-24 w-[700px] h-auto bg-[#8F81EA] text-black">
          <h1 className="text-4xl my-5">Schools and Research Centers</h1>
          <p>
            They form the academic foundation of TUM: Our schools and
            departments, connected at disciplinary interfaces by integrative
            research institutes to create an organization that drives
            innovation.
          </p>
          <Button className="w-10" variant="primary" size="xr" >
              ORGANIZATION
            </Button>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default School;
