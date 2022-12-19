import Button from "../layout/Button";
import Wrapper from "../layout/wrapper";

function Giving() {
  return (
    <Wrapper>
    <section className="mx-auto max-w-[90rem] py-20">
      <div className="px-[40px] py-[40px] bg-whitish-purple text-sm flex flex-col items-center gap-5">
        <h3 className="text-dark-blue font-bold text-[28px]">Giving</h3>
        <p className="text-[20px] text-dark-blue ">
          Support research, innovation and teaching at one of the best technical
          universities in Europe. Show social responsibility and help nurture
          talent.
        </p>
        <div className="text-lg cursor-pointer ">
          <Button variant="primary" size="sm">
            Support us
          </Button>
        </div>{" "}
      </div>
    </section>
    </Wrapper>
  );
}
export default Giving;
