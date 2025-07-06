import { useEffect } from "react";
import { testimonials } from "../utils/testimonialData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-6 lg:px-8">
      <div
        className="max-w-screen-xl mx-auto"
        style={{ maxWidth: "1200px", margin: "auto" }}
      >
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl  sm:text-3xl font-bold text-gray-900 mb-4 sub-header">
              What Our <span className="text-button">Clients</span> are{" "}
              <span className="text-button">Saying</span>
            </h2>
            <p className="text-gray-700 mb-8" style={{ maxWidth: "500px" }}>
              We take immense pride in the lasting partnerships we've forged
              with businesses. Our commitment to excellence has earned us the
              trust and confidence of renowned brands, and we're honored to
              share with you.
            </p>
            <iframe
              width="560"
              height="315"
              style={{ maxWidth: "100%" }}
              src="https://www.youtube.com/embed/Ddqtaho6EA8?si=AwUZLGqRT7dClPp6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              data-aos="zoom-in"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-lg"
                style={{ border: "3px solid #00569E" }}
                data-aos="fade-left"
              >
                <div className="bg-button w-8 h-8 mb-1 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-white" />
                </div>
                <p className="text-gray-700">{testimonial.text}</p>

                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
