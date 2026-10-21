import { aboutStory, aboutFocusAreas } from "../../../data/about";
import { img } from "../../../utils/asset";

const focusImages = {
  1: { file: "about-shipyard.jpg", alt: "Shipbuilding work at a defense shipyard" },
  2: { file: "about-energy.jpg", alt: "Energy sector crews at a power facility" },
  3: { file: "about-manufacturing.jpg", alt: "Precision manufacturing on a production floor" },
};

function AboutStory() {
  return (
    <section className="about-page__section" aria-labelledby="about-story-title">
      <div className="container">
        <div className="about-page__split">
          <div className="about-page__prose">
            <h2 id="about-story-title">{aboutStory.title}</h2>
            {aboutStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="about-page__figure">
            <img
              src={img("about-members.jpg")}
              alt="A contractor arriving at temporary lodging"
            />
          </figure>
        </div>
        <h3 className="about-page__subhead">Current focus areas</h3>
        <div className="about-page__cards">
          {aboutFocusAreas.map((area, index) => {
            const photo = focusImages[area.id];
            return (
              <article className="about-page__card" key={area.id}>
                {photo && <img src={img(photo.file)} alt={photo.alt} />}
                <div className="about-page__card-body">
                  <p className="about-page__index">{String(index + 1).padStart(2, "0")}</p>
                  <h4>{area.title}</h4>
                  <p>{area.text}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="about-page__note">
          Additional sectors will be incorporated based on project size and
          workforce demands.
        </p>
      </div>
    </section>
  );
}

export default AboutStory;
