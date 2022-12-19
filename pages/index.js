import Footer from "../components/footer";
import Navbar from "../components/navbar";
import School from "../components/sections/school";
import Alumni from "../components/sections/Alumni";
import BottomNews from "../components/sections/BottomNews";
import Discover from "../components/sections/Discover";
import Entreprenuer from "../components/sections/Entreprenuer";
import Giving from "../components/sections/Giving";
import News from "../components/sections/News";
import Numbers from "../components/sections/Numbers";
import Character from "../components/sections/Character";
import Degree from "../components/sections/Degree";

export default function Home() {
  return (
    <>
   <Navbar />
   <Entreprenuer />
   <News />
   <BottomNews />
   <Discover />
   <Degree />
   <Numbers />
   <School />
   <Alumni />
   <Character />
   <Giving />
   <Footer />
    </>
  )
}
