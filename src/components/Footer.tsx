import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 p-6">
      <div
        style={{ maxWidth: "1200px", margin: "auto" }}
        className="container mx-auto "
      >
        <div className="flex flex-col sm:flex-row sm:justify-between pb-6">
          {/* Logo Section */}
          <div className="flex flex-col pb-6 sm:pb-0 md:items-start md:w-1/3">
            <img
              src="/images/lgow.png"
              alt="Centafold Consults Logo"
              className="w-12 h-12 mb-2"
            />
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col md:items-start md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+234-803-368-9454" className="text-sm">
                +234-803-368-9454
              </a>
            </p>
            <p className="text-sm">
              Address:{" "}
              <a
                href="https://goo.gl/maps/address"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                186b Moshood Olugbani St, Off Ligali Ayorinde, Victoria Island
              </a>
            </p>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between md:items-end border-t border-white py-6">
          <div className="flex pt-4 text-sm w-full md:w-auto gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="https://x.com/Centafoldng?t=CWfjFFXzUyB9TLvx3IYzkQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/centafold_consults?igsh=NGE3OXJldWZpM29x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
          <div className=" pt-8 sm:pt-4 text-sm w-full md:w-auto">
            Copyright © Centafold Consults. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
