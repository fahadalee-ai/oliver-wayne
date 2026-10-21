import { aboutSectors } from "../../../data/about";
import { img } from "../../../utils/asset";

const sectorImages = {
  1: { file: "about-shipyard.jpg", alt: "Defense industrial base shipyard" },
  2: { file: "about-manufacturing.jpg", alt: "Critical manufacturing production line" },
  3: { file: "about-communications.jpg", alt: "Technicians installing fiber optic communications" },
};

function AboutSectors() {
  return (
    <section className="about-page__section about-page__section--muted" aria-labelledby="about-sectors-title">
      <div className="container">
        <h2 id="about-sectors-title" className="about-page__subhead about-page__subhead--first">
          Critical Infrastructure Sectors We Support
        </h2>
        <div className="about-page__cards">
          {aboutSectors.map((sector) => {
            const photo = sectorImages[sector.id];
            return (
              <article className="about-page__card" key={sector.id}>
                {photo && <img src={img(photo.file)} alt={photo.alt} />}
                <div className="about-page__card-body">
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSectors;
