import {
  NavBar,
  Hero,
  Companies,
  FeaturesOne,
  BizCardList,
  Testimonials,
  FAQ,
  Footer,
  // FeaturesTwo,
} from "../components";
import DashboardImage from "../components/DashboardImage";

const LandingPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Hero />
        <DashboardImage />
        <Companies />
        <FeaturesOne />
        <BizCardList />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />
      {/* <FeaturesTwo /> */}
    </>
  );
};

export default LandingPage;
