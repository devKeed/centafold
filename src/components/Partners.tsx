import Slider from "react-slick";
import { partners } from "../utils/partnersData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "auto" }} className="p-6">
        <h2 className="text-2xl  sm:text-3xl font-bold text-gray-900 mb-8 sub-header">
          Partners and Clients
        </h2>
      </div>
      <section className=" py-10 bg-background-partners">
        <div style={{ margin: "auto" }} className="">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex px-4 justify-center items-center "
              >
                <div className="bg-white rounded-md w-32 sm:w-48 h-16 sm:h-24 flex justify-center items-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 sm:w-auto h-auto object-contain"
                  />
                </div>
                <p className="text-white mt-2 mr-6 text-xs sm:text-sm partners">
                  {partner.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default PartnersClients;
