import Image from "next/image";
import Link from "next/link";
import Wrapper from "../layout/wrapper";
import tamulogo1 from "../../public/images/tum-logo (1).svg";
import arrow from "../../public/images/arrow.png";
import boxArrow from "../../public/images/boxArrow.svg";
import facebook from "../../public/images/facebook.svg";
import twitter from "../../public/images/twitter.svg";
import instagram from "../../public/images/instagram.svg";
import linkedin from "../../public/images/linkedin.svg";
import wifi from "../../public/images/wifi.svg";
import logo2 from "../../public/images/logo2.svg";
import { departments, footerLinks } from "../../data";

const Footer = () => {
  return (
    <footer className="text-sm mt-20">
      <section className="bg-[#0A2D57] text-white ">
      <Wrapper>
        <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]">
          <div className="flex gap-5 text">
            <Image
              src={tamulogo1}
              
              alt="logo"
              className=" w-10 h-24"
            />
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
          <div className="text-base">
            <p className="font-bold ">Let{"'"}s shape the future together</p>
            <p>Support us </p>
          </div>

          <div className="flex flex-col gap-3 text-base">
            <p className="font-bold">Latest news</p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
              Germany{"'"}s strongest university in business sciences
            </p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>{" "}
              TUM partners with Nobel Sustainability Trust
            </p>
            <p className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#FFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>{" "}
              Antihelium nuclei as messengers from the depths of the galaxy
            </p>
          </div>
        </div>
        <div className="py-[27px]">
          <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 ">
            <h1 className="font-bold">
              Schools and <br /> Departments:
            </h1>
            <div className="flex w-full flex-wrap gap-4">
              {departments.map((department, index) => {
                return (
                  <p key={index} className="flex gap-1 items-end">
                    {department.departmentName}{" "}
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3v2H5v14h14v-4h2v6H3V3h6zm12 0v8h-2V6.414l-6.293 6.293-1.414-1.414L17.584 5H13V3h8z"
                        fill="#fff"
                      />
                    </svg>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]">
            <h1 className="font-bold">footerLinks:</h1>
            <div className="flex w-full flex-wrap gap-4">
              {footerLinks.map((links, index) => {
                return (
                  <p
                    key={index}
                    className="flex hover:underline hover:cursor gap-1 items-end"
                  >
                    {links.link}{" "}
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3v2H5v14h14v-4h2v6H3V3h6zm12 0v8h-2V6.414l-6.293 6.293-1.414-1.414L17.584 5H13V3h8z"
                        fill="#fff"
                      />
                    </svg>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        </Wrapper>
      </section>

      <section className="bg-[#072140] text-sm text-white py-[26px]">
      <Wrapper>
        <div className="px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto">
          <div className="xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full">
            <ul className="flex gap-4 xl:gap-6 flex-wrap">
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
            <Image
              src={logo2}
              alt="logo"
              width={32}
              height={59.51}
            />
            <Link href={'/'}>
            <div className="flex flex-col gap-4">
              <p>TUM Partners of Excellence</p>
              <p>
                Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW ·
                Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries
                · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN ·
                Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens ·
                TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft ·
                Volkswagen · Wacker Chemie
              </p>
            </div>
            </Link>
          </div>
        </div>
        </Wrapper>
      </section>
    </footer>
  );
};

export default Footer;