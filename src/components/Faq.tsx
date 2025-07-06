import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faqs } from "../utils/faqData";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-background-faq">
      <div className="container mx-auto py-16 p-6 bg-background-faq">
        <h2
          className="text-4xl font-bold mb-8 py-4 sm:py-8"
          style={{ maxWidth: "1200px", margin: "auto" }}
          data-aos="fade-up"
        >
          Frequently asked <span className="text-button">Questions</span>
        </h2>

        <div
          style={{ maxWidth: "1200px", margin: "auto" }}
          className="flex flex-col lg:flex-row justify-between gap-8"
        >
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background-faq py-4"
                style={{ borderBottom: "2px solid #00569E" }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium mr-3">{faq.question}</h3>
                  <FontAwesomeIcon
                    className="text-white bg-button rounded-full p-2"
                    icon={openIndex === index ? faChevronUp : faChevronDown}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ maxHeight: openIndex === index ? "120px" : "0px" }}
                >
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src={faqImage}
              alt="Centafold Consults"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
