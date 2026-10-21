import { Link } from "react-router-dom";
import {
  lessorIntro,
  lessorFeeStructure,
  lessorPlans,
} from "../../../data/lessors";
import { img } from "../../../utils/asset";

const planImages = {
  1: { file: "lessor-hotel.jpg", alt: "Extended-stay hotel exterior" },
  2: { file: "lessor-home.jpg", alt: "Furnished apartment living room" },
  3: { file: "lessor-mobile.jpg", alt: "Well-kept manufactured home" },
  4: { file: "lessor-room.jpg", alt: "Private bedroom available to rent" },
  5: { file: "lessor-rv.jpg", alt: "RV parking spaces" },
};

function Lessor() {
  return (
    <>
      <section className="lessor-page__intro">
        <div className="container">
          <div className="lessor-page__split">
            <div className="lessor-page__prose">
              <h2>{lessorIntro.title}</h2>
              <p>{lessorIntro.subtitle}</p>
              <Link className="btn btn-primary" to="/add-listing">
                Add a listing
              </Link>
            </div>
            <figure className="lessor-page__figure">
              <img
                src={img("lessor-intro.jpg")}
                alt="A rental home ready to list"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="lessor-page__fee"
        style={{ backgroundImage: `url(${img("lessor-fee.jpg")})` }}
        aria-labelledby="lessor-fee-title"
      >
        <div className="container">
          <h2 id="lessor-fee-title">{lessorFeeStructure.title}</h2>
          <p>{lessorFeeStructure.note}</p>
        </div>
      </section>

      <section className="lessor-page__plans" aria-label="Advertising packages">
        <div className="container lessor-page__list">
          {lessorPlans.map((plan) => {
            const photo = planImages[plan.id];
            return (
              <article className="lessor-card" key={plan.id}>
                {photo && (
                  <img src={img(photo.file)} alt={photo.alt} />
                )}
                <div className="lessor-card__body">
                  <h3>{plan.title}</h3>
                  <div className="lessor-card__packages">
                    {plan.packages.map((pkg) => (
                      <div key={pkg.name}>
                        <h4>{pkg.name}</h4>
                        <p>{pkg.monthly}</p>
                        <p className="lessor-card__annual">{pkg.annual}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Lessor;
