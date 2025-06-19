import ApplicationNow from "@/components/LandingPage/ApplicationNow";
import Banner from "@/components/LandingPage/Banner";
import ChooseUsSection from "@/components/LandingPage/ChooseUsSection";
import CustomFaq from "@/components/LandingPage/CustomFaq";
import WorkSection from "@/components/LandingPage/WorkSection";

const HompPage = () => {
  return <div className="">
    <Banner/>
    <WorkSection/>
    <ApplicationNow/>
    <ChooseUsSection/>
    {/* <FaqSection/> */}
    <CustomFaq/>
  </div>;
};

export default HompPage;
