import React from "react";
import Image from "next/image";
import gif from "../../public/images/enterprenuer.gif";
import Wrapper from "../layout/wrapper";
import NewsCard from "../layout/NewsCard";
import Button from "../layout/Button";
import tum from "../../public/images/tum-bg.png";
import board from "../../public/images/board.webp"
import girl from "../../public/images/girl-plY.webp"


function News() {
  return (
    <Wrapper>
      <div className="md:my-20 md:grid md:grid-cols-4 md:gap-5 ">
        <div className="col-span-2 text-[#072140]">
          <h1 className="text-3xl font-semibold ">News from TUM</h1>
          <p className="text-[1.3rem] mt-7">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <div className="text-lg cursor-pointer ">
            <Button variant="primary" size="sm">
              See All
            </Button>
          </div>
        </div>
        <div className="w-[280px]">
        <NewsCard
          className="col-start-3"
          image={girl}
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
          image={board}
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
}
export default News;
