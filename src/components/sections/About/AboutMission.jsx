import { aboutMission } from "../../../data/about";
import { img } from "../../../utils/asset";

function AboutMission() {
  return (
    <section
      className="about-page__mission"
      style={{ backgroundImage: `url(${img("about-mission.jpg")})` }}
      aria-labelledby="about-mission-title"
    >
      <div className="container">
        <div className="about-page__mission-panel">
          <h2 id="about-mission-title">{aboutMission.title}</h2>
          {aboutMission.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMission;
