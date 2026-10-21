import { useState } from "react";
import {
  membershipIntro,
  membershipScope,
  membershipPlans,
  membershipApplicationFields,
  membershipPaymentNote,
} from "../../../data/memberships";
import { img } from "../../../utils/asset";

const planImages = {
  1: {
    file: "membership-silver.jpg",
    alt: "Furnished room for comparing rental options",
  },
  2: {
    file: "membership-gold.jpg",
    alt: "Keys and a phone ready for a priority placement",
  },
};

function Membership() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPlan = membershipPlans.find((plan) => plan.id === selectedId);

  return (
    <>
      <section className="member-page__intro">
        <div className="container">
          <div className="member-page__split">
            <div className="member-page__prose">
              <h2>{membershipIntro.title}</h2>
              <p>{membershipIntro.subtitle}</p>
            </div>
            <figure className="member-page__figure">
              <img
                src={img("membership-hero.jpg")}
                alt="Shipyard workers walking toward nearby lodging at sunset"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="member-page__scope">
        <div className="container">
          <div className="member-page__split member-page__split--start">
            <div className="member-page__prose">
              <h2>{membershipScope.title}</h2>
              {membershipScope.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="member-page__figure">
              <img
                src={img("membership-scope.jpg")}
                alt="Shipyard tradespeople reviewing plans beside a steel hull"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="member-page__plans" aria-label="Membership plans">
        <div className="container">
          <div className="member-page__plan-grid">
            {membershipPlans.map((plan) => {
              const photo = planImages[plan.id];
              const selected = selectedId === plan.id;
              return (
                <article
                  className={`member-card${selected ? " member-card--selected" : ""}`}
                  key={plan.id}
                >
                  {photo && <img src={img(photo.file)} alt={photo.alt} />}
                  <div className="member-card__body">
                    <h3>{plan.title}</h3>
                    {plan.price && <p className="member-card__price">{plan.price}</p>}
                    {plan.priceAlt && <p className="member-card__alt">{plan.priceAlt}</p>}
                    {plan.description && <p>{plan.description}</p>}
                    {plan.applicationItems?.length > 0 && (
                      <div>
                        <h4>Application includes:</h4>
                        <ul>
                          {plan.applicationItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {plan.benefits?.length > 0 && (
                      <div>
                        <h4>Benefits:</h4>
                        <ul className="member-card__checks">
                          {plan.benefits.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <button
                      type="button"
                      className={`btn ${selected ? "btn-primary" : "btn-outline-primary"}`}
                      aria-pressed={selected}
                      onClick={() => setSelectedId(plan.id)}
                    >
                      {selected ? "Selected" : "Select this plan"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {selectedPlan && (
            <div className="member-apply" aria-live="polite">
              <h3>Apply for {selectedPlan.title}</h3>
              <p>
                Review the required details below, then continue your application for this plan.
              </p>
              <h4>Information you will provide:</h4>
              <ul>
                {membershipApplicationFields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
              <h4>Payment:</h4>
              <p>
                {selectedPlan.isPaid ? membershipPaymentNote.paid : membershipPaymentNote.free}
              </p>
              <a className="btn btn-primary" href="mailto:membership@ollywayne.com">
                Continue application
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Membership;
