import {
  propertyManagement,
} from "../../../data/propertyManagement";

function PropertyManagement() {
  return (
    <>
      <section className="home__about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="title__leading">
                <p className="pm-kicker">{propertyManagement.company}</p>
                <h2>{propertyManagement.title}</h2>
                {propertyManagement.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__about bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="title__head text-center">
                <h2>{propertyManagement.managedTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {propertyManagement.types.map((type) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={type.title}>
                <article className="plan-card">
                  <h3 className="plan-card__title">{type.title}</h3>
                  <p className="plan-card__description">{type.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="title__leading">
                <h2>{propertyManagement.benefitsTitle}</h2>
                <p>{propertyManagement.benefitsIntro}</p>
                <ul className="pm-benefits">
                  {propertyManagement.benefits.map((benefit) => (
                    <li key={benefit.label}>
                      <strong>{benefit.label}:</strong> {benefit.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyManagement;
