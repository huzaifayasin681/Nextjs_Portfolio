import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Services from "./components/ServicesSection";
import Portfolio from "./components/PortfolioSection";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <Services/>
      <Portfolio/>
      <CallToAction/>
      </div>
  );
}
