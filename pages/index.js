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

export default function Home() {
  return (
    <>
   <Navbar />
   <Entreprenuer />
   <News />
   <BottomNews />
   <Discover />
   <Numbers />
   <School />
   <Alumni />
   <Character />
   <Giving />
   <Footer />
    </>
  )
}
