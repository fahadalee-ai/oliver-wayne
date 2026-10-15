import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PlanCard from "../../Shared/PlanCard";
import {
  membershipIntro,
  membershipScope,
  membershipPlans,
  membershipApplicationFields,
  membershipPaymentNote,
} from "../../../data/memberships";

function Membership() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPlan = membershipPlans.find((plan) => plan.id === selectedId);

  return (
    <>
      <section className="home__about">
        <div className="container">
          <SectionTitle
            align="center"
            col={8}
            title={membershipIntro.title}
            subtitle={membershipIntro.subtitle}
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="title__leading">
                <h2 className="text-capitalize">{membershipScope.title}</h2>
                {membershipScope.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__about bg-light pt-5">
        <div className="container">
          <div className="row justify-content-center">
            {membershipPlans.map((plan) => (
              <div className="col-lg-5 col-md-6 mb-4" key={plan.id}>
                <PlanCard
                  variant="membership"
                  {...plan}
                  selected={selectedId === plan.id}
                  onSelect={() => setSelectedId(plan.id)}
                />
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="plan-card plan-card--apply mt-2 mb-4">
                  <h4 className="plan-card__title">
                    Apply for {selectedPlan.title}
                  </h4>
                  <p className="plan-card__description">
                    Review the required details below, then continue your
                    application for this plan.
                  </p>

                  <div className="plan-card__block">
                    <h6 className="plan-card__label">
                      Information you will provide:
                    </h6>
                    <ul className="plan-card__list plan-card__list--bullets">
                      {membershipApplicationFields.map((field) => (
                        <li key={field}>{field}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="plan-card__block">
                    <h6 className="plan-card__label">Payment:</h6>
                    <p className="plan-card__description mb-0">
                      {selectedPlan.isPaid
                        ? membershipPaymentNote.paid
                        : membershipPaymentNote.free}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary text-capitalize mt-3"
                    onClick={() =>
                      window.location.assign("mailto:membership@ollywayne.com")
                    }
                  >
                    Continue application
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Membership;
