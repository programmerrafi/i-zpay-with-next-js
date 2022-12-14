import HeroHome from "../app/components/Home/HeroHome";
import ManageSection from "../app/components/Home/ManageSection";
import MerchantSection from "../app/components/Home/MerchantSection";
import LogoSlide from "../app/components/Home/LogoSlide";
import Services from "../app/components/Home/Services";
import Testmonial from "../app/components/Home/Testmonial";
import Payment from "../app/components/Home/Payment";
import About from "../app/components/Home/About";

export default function Home() {
  return (
    <>
      <HeroHome />
      <LogoSlide />
      <ManageSection />
      <MerchantSection />
      <Services />
      <Testmonial />
      <Payment />
      <About />
    </>
  );
}
