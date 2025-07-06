import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { teamMembers } from "../utils/teamData";
import AOS from "aos";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-6 lg:px-8 bg-paleBlue" id="team">
      <div
        className="max-w-screen-xl mx-auto"
        style={{ maxWidth: "1200px", margin: "auto" }}
      >
        <h2 className="text-2xl  sm:text-3xl font-bold text-gray-900 text-center mb-12 sub-header">
          Meet Our Exceptional Team
        </h2>
        <div
          style={{ maxWidth: "1200px", margin: "auto" }}
          className="grid gap-6 grid-cols md:grid-cols-3 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <div key={index} data-aos="fade-up" className="">
              <div className="overflow-hidden flex justify-center rounded-2xl  shadow-lg w-34">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover "
                />
              </div>
              <div
                className="bg-button  rounded-xl mt-4 text-white p-4 flex items-center justify-between"
                data-aos="fade-up"
              >
                <div>
                  <h5 className="text-lg font-bold">{member.name}</h5>
                  <p className="text-sm partners">{member.designation}</p>
                </div>
                <div className="flex items-end justify-end">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
