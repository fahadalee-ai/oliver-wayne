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
      <section className="home__about pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <AboutMission />
              <AboutStory />
              <AboutSectors />
            </div>
          </div>
        </div>
      </section>
      <Partners />
      <OurTeam
        bgLight
        titleAlign="center"
        title="Our Team"
        subtitle="Meet the experts behind your real estate success"
      />
    </>
  );
}

export default AboutPage;
