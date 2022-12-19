import Wrapper from "../layout/wrapper";
import NewsCard from "../layout/NewsCard";
import tum from "../../public/images/tum-bg.png";
import Leibniz from "../../public/images/Leibniz.webp"
import Birgit from "../../public/images/Birgit.webp"

const BottomNews = () => {
  return (
    <Wrapper>
      <div className="my-10 flex gap-6 justify-end mr-48">
        <div className="w-[280px]">
          <NewsCard
            className="col-start-3"
            image={Leibniz}
            span="Research"
            category="Germany´s top research award"
            title="Leibniz Prize for Biomathematician Fabian Theis"
            content="Mathematician, physicist and information scientist Prof. Fabian Theis has won the 2023 Gottfried Wilhelm Leibniz Prize. The..."
            date="12/08/2022"
            time="Reading time 2 min"
          />
        </div>
        <div className="w-[280px]">
          <NewsCard
            image={Birgit}
            span="Sustainability"
            category="Awards for sustainability projects"
            title="New partnership with the Nobel Sustainability Trust"
            content="The Nobel Sustainability Trust and our university will jointly recognize international research and initiatives for..."
            date="12/14/2022"
            time="Reading time 2 min"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomNews;
