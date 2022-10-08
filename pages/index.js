import HeroHome from "../app/components/Home/HeroHome";
import ManageSection from "../app/components/Home/ManageSection";
import MerchantSection from "../app/components/Home/MerchantSection";

export default function Home() {
  return (
    <>
      <HeroHome />
      <LogoSlide />
      <ManageSection />
      <MerchantSection />
    </>
  );
}
