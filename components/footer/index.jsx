import Wrapper from "../layout/wrapper";
import tamulogo from "../../public/images/tum-logo.svg";
import Image from "next/image";
import arrow from '../../public/images/arrow.png'
import go from '../../public/images/go-image.png'
import facebook from '../../public/images/facebook.svg'
import twitter from '../../public/images/twitter.svg'
import instagram from '../../public/images/instagram.svg'
import linkedin from '../../public/images/linkedin.svg'
import wifi from '../../public/images/wifi.svg'
import logo2 from '../../public/images/logo2.svg'

const Footer = () => {
  return (
      <footer className="bg-[#0A2D57] ">
        <section className=" text-white ">
          <div className="mx-auto max-w-[90rem] flex justify-between  py-[56px]  border-b border-[#9ABCE4]">
            <div className="flex gap-5">
              <tamulogo />
              <div className="flex flex-col gap-5">
                <p>
                  Technical University of Munich <br /> ArcisstraBe 21 <br />{" "}
                  80333 Munchen
                </p>
                <p>
                  Phone: <span> +49 (0)89-289-01</span> <br />
                  Fax: +49 (0)89-289-22000
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold ">Let{"'"}s shape the future together</p>
              <p>Support us </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold">Latest news</p>
              <p className="flex gap-3 items-center">
                <Image src={arrow} className="w-3 mb-1 h-5" alt="arrow" />
                Germany{"'"}s strongest university in business sciences
              </p>
              <p className="flex gap-3 items-center">
                <Image src={arrow} className="w-3 mb-1 h-5" alt="arrow" />
                TUM partners with Nobel Sustainability Trust
              </p>
              <p className="flex gap-3 items-center">
                <Image src={arrow} className="w-3 mb-1 h-5" alt="arrow" />
                Antihelium nuclei as messengers from the depths of the galaxy
              </p>
            </div>
          </div>
          <div className="py-[27px]">
            <div className="mx-auto max-w-[90rem] text-white flex r gap-10 ">
              <h1 className="font-bold">
                Schools and <br /> Departments:
              </h1>
             
            </div>
            <div className="mx-auto max-w-[90rem] text-white flex r gap-16 mt-[26px]">
              <h1 className="font-bold">Quicklinks:</h1>
             
            </div>
          </div>
        </section>

        <section className="bg-dark-blue text-white py-[26px]">
          <div className="max-w-[90rem] mx-auto">
            <div className="flex justify-between w-full">
              <ul className="flex gap-6">
                <li>Jobs</li>
                <li>Feedback</li>
                <li>Press and Media</li>
                <li>Accessibility</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
              </ul>
              <div className="flex gap-6">
                <Image src={facebook} alt="facebook" width={20} height={20} />
                <Image src={linkedin} alt="youtube" width={20} height={20} />
                <Image src={twitter} alt="twitter" width={20} height={20} />
                <Image src={instagram} alt="instagram" width={20} height={20} />
                <Image src={linkedin} alt="linkedin" width={20} height={20} />
                <Image src={wifi} alt="wifi" width={20} height={20} />
              </div>
            </div>

            <div className="flex gap-8 pt-[27px]">
              <Image src={logo2} alt="logo" width={32} height={59.51} />
              <div className="flex flex-col gap-4">
                <p>TUM Partners of Excellence</p>
                <p>
                  Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW
                  · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik
                  Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde
                  · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon ·
                  Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen
                  Wirtschaft · Volkswagen · Wacker Chemie
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
  );
};

export default Footer;
