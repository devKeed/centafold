import { useEffect } from "react";
import { aboutUsData } from "../utils/aboutUsData";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="bg-background-about py-16 px-6 sm:px-6 lg:px-8"
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        {aboutUsData.map((item, index) => {
          const paragraphs = item.description.split("\n\n");
          return (
            <div
              key={index}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center sm:my-16 lg:my-20 gap-6 py-6`}
              data-aos={item.reverse ? "fade-left" : "fade-right"}
            >
              <div
                className={` flex mt-6 sm:mt-0  sm:w-3/5 image-container rotate-12`}
                data-aos={item.reverse ? "fade-right" : "fade-left"}
              >
                <div
                  className={`w-full flex justify-center ${
                    item.reverse ? "sm:justify-end" : "sm:justify-start"
                  } ${item.reverse ? "sm:pr-4" : "sm:pr-0"}`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className=" h-auto w-full rounded-tl-3xl rounded-br-3xl"
                  />
                  {/* <div
                    className={`image-shadow absolute  ${
                      item.reverse ? "-bottom-4" : "top-4"
                    } ${
                      item.reverse ? "-right-4" : "left-4"
                    }  h-auto w-full rounded-tl-3xl rounded-br-3xl ${
                      item.reverse ? "sm:justify-end" : "sm:justify-start"
                    }`}
                  ></div> */}
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col items-start space-y-4">
                <h2 className="text-2xl  sm:text-3xl font-bold text-blue-900 sub-header mt-2 lg:mt-0">
                  {item.title}
                </h2>
                {paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-700 text-lg"
                    // style={item.reverse ? { maxWidth: "450px" } : undefined}
                    style={{ maxWidth: "500px" }}
                  >
                    {paragraph}
                  </p>
                ))}
                <div>
                  {item.missionList &&
                    item.missionList.map((mission, mIndex) => (
                      <div key={mIndex} className="flex gap-2 items-center">
                        <div className="bg-button h-3 w-3 rounded-sm"></div>
                        <p className="text-gray-700 text-lg py-1.5">
                          {mission.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
