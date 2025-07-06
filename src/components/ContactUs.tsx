import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactDetails } from "../utils/contactData";
import AOS from "aos";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      id="contact"
      className="container mx-auto py-16 p-6"
      style={{ maxWidth: "1200px", margin: "auto" }}
    >
      <h2 className="text-4xl font-bold mb-8 sub-header">
        Contact <span className="text-button">Us</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 sm:p-4 bg-paleBlue rounded-xl"
              data-aos="fade-up"
            >
              <div className="w-10 h-10 p-3 rounded-full flex justify-center items-center bg-button">
                <FontAwesomeIcon
                  icon={detail.icon}
                  className="text-white text-2xl"
                />
              </div>
              <div>
                <h3 className="font-semibold">{detail.label}</h3>
                <p>{detail.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="zoom-in" className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7381400851664!2d3.437532374409055!3d6.427678693563387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf517fc93d9f5%3A0x761f62280591ca7b!2s186b%20Moshood%20Olugbani%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720803376724!5m2!1sen!2sng"
            width="600"
            height="360"
            style={{ border: "0", maxWidth: "100%" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
