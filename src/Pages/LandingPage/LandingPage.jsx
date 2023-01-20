import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LandingAbout from "../../Components/LandingAbout/LandingAbout";
import LandingBlog from "../../Components/LandingBlog/LandingBlog";
import LandingDownload from "../../Components/LandingDownload/LandingDownload";
import LandingFaq from "../../Components/LandingFaq/LandingFaq";
import LandingHero from "../../Components/LandingHero/LandingHero";
import LandingOffer from "../../Components/LandingOffer/LandingOffer";
import LandingPrice from "../../Components/LandingPrice/LandingPrice";
import LandingProvides from "../../Components/LandingProvides/LandingProvides";
import LandingSuccess from "../../Components/LandingSuccess/LandingSuccess";
import LandingTools from "../../Components/LandingTools/LandingTools";
import LandingTrends from "../../Components/LandingTrends/LandingTrends";
import LandingTutor from "../../Components/LandingTutor/LandingTutor";
import LandingVideo from "../../Components/LandingVideo/LandingVideo";
import "./styles.scss";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <LandingHero />
      <LandingProvides />
      <LandingTrends />
      <LandingPrice />
      {/* <LandingTools /> */}
      {/* <LandingAbout /> */}
      {/* <LandingOffer /> */}
      <LandingVideo />
      <LandingDownload />
      <LandingFaq />
      <LandingTutor />
      {/* <LandingBlog /> */}
      {/* <LandingSuccess /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
