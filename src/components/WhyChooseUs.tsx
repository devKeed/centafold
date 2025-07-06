import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { sections } from "./solutionsData";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-6 lg:px-8" id="services">
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2 className="text-2xl  sm:text-3xl font-bold text-gray-900 mb-8 sub-header">
          Why <span className="text-button">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between rounded-3xl h-auto sm:h-72 lg:h-56 ${section.bgColor} overflow-hidden`}
              data-aos="fade-up"
            >
              <div className="w-full sm:w-2/3 flex flex-col p-6 gap-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-700">{section.description}</p>
              </div>
              <div className="flex justify-center sm:justify-end items-end h-full sm:w-1/3">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-auto sm:w-2/3 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
