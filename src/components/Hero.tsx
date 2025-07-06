import { useEffect } from "react";
import heroImage from "/images/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="bg-background-hero ">
      <div
        style={{ maxWidth: "1200px", margin: "auto" }}
        className="flex flex-col md:flex-row items-center pt-10 pb-24 px-6 w-full gap-6 hero-container"
        data-aos="fade-up"
      >
        <div className="md:w-1/2 flex flex-col items-center sm:items-start space-y-6">
          <h1
            className="text font-bold text-gray-900 text-center sm:text-left"
            style={{
              maxWidth: "580px",
            }}
          >
            <span className="text-button">
              <Typewriter
                words={["Bridging"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            the Gap Through <span className="text-button">Service</span>!
          </h1>
          <p className="text-gray-700 text-lg text-center sm:text-left">
            Centafold Consult is a dynamic and innovative consulting firm
            dedicated to helping businesses bridge the gap between their ideas
            and the creation of exceptional service experiences for their
            customers.
          </p>
          <div className="flex gap-2 ">
            <Link to="contact" smooth={true}>
              <button
                className="flex items-center gap-2 text-white bg-button hover:bg-buttonHover px-6 py-3 rounded-md"
                data-aos="fade-up"
              >
                <div>Reach out to us</div>
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </button>
            </Link>
            <Link to="about" smooth={true}>
              <button
                className="text-white bg-lightBlue hover:bg-buttonHover px-6 py-3 rounded-md"
                data-aos="fade-up"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white -rotate-45"
                />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="md:w-1/2 flex justify-end mt-8 md:mt-0"
          data-aos="fade-left"
        >
          <img
            src={heroImage}
            alt="Hero"
            className=" h-auto object-cover"
            style={{ width: "450px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
