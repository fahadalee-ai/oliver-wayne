import { propertyManagement } from "../../../data/propertyManagement";
import { img } from "../../../utils/asset";

const typeImages = {
  Residential: {
    file: "pm-residential.jpg",
    alt: "Residential rental homes and apartments",
  },
  Commercial: {
    file: "pm-commercial.jpg",
    alt: "Commercial office and retail property",
  },
  "Homeowner Associations": {
    file: "pm-hoa.jpg",
    alt: "Maintained community common area",
  },
};

function PropertyManagement() {
  const [lead, ...details] = propertyManagement.paragraphs;

  return (
    <>
      <section className="pm-page__intro">
        <div className="container">
          <div className="pm-page__split">
            <div className="pm-page__prose">
              <p className="pm-page__kicker">{propertyManagement.company}</p>
              <h2>{propertyManagement.title}</h2>
              <p>{lead}</p>
            </div>
            <figure className="pm-page__figure">
              <img
                src={img("pm-hero.jpg")}
                alt="Property manager outside a rental home"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="pm-page__details">
        <div className="container">
          <div className="pm-page__split">
            <div className="pm-page__prose">
              {details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="pm-page__figure">
              <img
                src={img("pm-operations.jpg")}
                alt="Keys, lease paperwork, and a property budget"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="pm-page__types" aria-labelledby="pm-types-title">
        <div className="container">
          <h2 id="pm-types-title">{propertyManagement.managedTitle}</h2>
          <div className="pm-page__cards">
            {propertyManagement.types.map((type) => {
              const photo = typeImages[type.title];
              return (
                <article className="pm-card" key={type.title}>
                  {photo && <img src={img(photo.file)} alt={photo.alt} />}
                  <div>
                    <h3>{type.title}</h3>
                    <p>{type.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="pm-page__band"
        style={{ backgroundImage: `url(${img("pm-benefits.jpg")})` }}
        aria-labelledby="pm-benefits-title"
      >
        <div className="container">
          <h2 id="pm-benefits-title">{propertyManagement.benefitsTitle}</h2>
          <p>{propertyManagement.benefitsIntro}</p>
        </div>
      </section>

      <section className="pm-page__benefits" aria-label="Property management benefits">
        <div className="container">
          <div className="pm-page__benefit-grid">
            {propertyManagement.benefits.map((benefit) => (
              <article className="pm-benefit" key={benefit.label}>
                <h3>{benefit.label}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyManagement;
