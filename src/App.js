import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import deved from "./images/dev-ed-wave.png";
import design from "./images/design.png";
import code from "./images/code.png";
import consulting from "./images/consulting.png";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";
import { useState } from "react";
import Resume from "./Resume.pdf";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-all duration-700">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-white">
                developed by srk
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer dark:text-white"
                  />
                </li>

                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href={Resume}
                    download
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Shahrukh Khan
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Developer and designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
              <a
                className="dark:hover:text-teal-500 transition-all duration-300"
                href="https://www.instagram.com/srk70900/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
              <a
                className="dark:hover:text-teal-500 transition-all duration-300"
                href="https://www.linkedin.com/in/srk70900/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="dark:hover:text-teal-500 transition-all duration-300"
                href="https://github.com/SRK70900"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <img className="h-full object-cover" src={deved} />
            </div>
          </section>
          <br />

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">
                Services I offers
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies</span> consulted for
                <span className="text-teal-500"> startups</span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>

              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
                I offer from a wide range of services, including brand design,
                programming and teaching
              </p>
            </div>

            <div className="lg:flex gap-10">
              {/* Card 1 */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img
                  className="mx-auto"
                  src={design}
                  width={100}
                  height={100}
                />

                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">PhotoShop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>

              {/* Card 2 */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img className="mx-auto" src={code} width={100} height={100} />

                <h3 className="text-lg font-medium pt-8 pb-2">
                  Programming Skills
                </h3>
                <p className="py-2 max-w-lg">
                  Highly organized with exceptional commitment to task
                  completion and quality assurance when working with computer
                  software programs.
                </p>
                <h4 className="py-4 text-teal-600">Languages that I know</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React JS</p>
                <p className="text-gray-800 py-1">HTML / CSS</p>
              </div>

              {/* Card 3 */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img
                  className="mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                />

                <h3 className="text-lg font-medium pt-8 pb-2">
                  Customer Satisfaction
                </h3>
                <p className="py-2">
                  Build a strong customer relation is the important part of
                  business.
                </p>
                <h4 className="py-4 text-teal-600">Skill that needs</h4>
                <p className="text-gray-800 py-1">Moral Behavior</p>
                <p className="text-gray-800 py-1">Communication Skill</p>
                <p className="text-gray-800 py-1">Quality</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              {/* Portfolio */}
              <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies</span> consulted for
                <span className="text-teal-500"> startups</span> and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <a href="https://srk70900flexbox.netlify.app/" target="_blank">
                  <img
                    src={web1}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://swatpk.netlify.app/" target="_blank">
                  <img
                    src={web2}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a
                  href="https://srk70900portfolio.netlify.app/"
                  target="_blank"
                >
                  <img
                    src={web3}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a
                  href="https://srk70900starbucks.netlify.app/"
                  target="_blank"
                >
                  <img
                    src={web4}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://realmemobile.netlify.app/" target="_blank">
                  <img
                    src={web5}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
              <div className="basis-1/3 flex-1">
                <a href="https://srk70900float.netlify.app/" target="_blank">
                  <img
                    src={web6}
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
