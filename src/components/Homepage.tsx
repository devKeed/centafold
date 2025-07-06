import AboutUs from "./AboutUs";
import ContactSection from "./ContactUs";
import FAQSection from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Metrics from "./Metrics";
import PartnersClients from "./Partners";
import Team from "./Team";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Homepage = () => {

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <Hero />
        <Metrics/>
        <AboutUs/>
        <PartnersClients/>
        <WhyChooseUs/>
        <Testimonials/>
        <Team/>
        <ContactSection/>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
