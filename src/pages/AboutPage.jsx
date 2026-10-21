import PageBanner from "../components/layout/StickyHeader/PageBanner";
import AboutContent from "../components/sections/About/AboutContent";
import AboutMission from "../components/sections/About/AboutMission";
import AboutStory from "../components/sections/About/AboutStory";
import AboutSectors from "../components/sections/About/AboutSectors";
import OurTeam from "../components/sections/OurTeam/OurTeam";
import Partners from "../components/sections/Partners/Partners";
import { img } from "../utils/asset";

function AboutPage() {
  return (
    <>
      <PageBanner
        title="about us"
        items={[{ label: "about us" }]}
        image={img("aboutback.jpg")}
      />
      <AboutContent />
      <AboutMission />
      <AboutStory />
      <AboutSectors />
      <Partners />
      <OurTeam
        bgLight
        cardLayout="plain"
        titleAlign="center"
        title="Our Team"
        subtitle="Meet the experts behind your real estate success"
      />
    </>
  );
}

export default AboutPage;
