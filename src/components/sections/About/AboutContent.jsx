import { aboutIntro } from "../../../data/about";
import { img } from "../../../utils/asset";

function AboutContent() {
  return (
    <section className="about-page__intro">
      <div className="container">
        <div className="about-page__intro-grid">
          <div className="about-page__prose">
            <p className="about-page__kicker">Oliver Wayne LLC</p>
            <h2>{aboutIntro.title}</h2>
            {aboutIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="about-page__figure">
            <img
              src={img("about-lodging.jpg")}
              alt="Clean furnished temporary lodging"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
