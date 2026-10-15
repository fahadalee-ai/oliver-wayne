import SectionTitle from "../SectionTitle/SectionTitle";
import PlanCard from "../../Shared/PlanCard";
import {
  lessorIntro,
  lessorFeeStructure,
  lessorPlans,
} from "../../../data/lessors";

function Lessor() {
  return (
    <>
      <section className="home__about">
        <div className="container">
          <SectionTitle
            align="center"
            col={8}
            title={lessorIntro.title}
            subtitle={lessorIntro.subtitle}
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="title__leading text-center">
                <h2 className="text-capitalize">{lessorFeeStructure.title}</h2>
                <p className="plan-card__fee-note mb-0">
                  {lessorFeeStructure.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__about bg-light pt-5">
        <div className="container">
          <div className="row">
            {lessorPlans.map((plan) => (
              <div className="col-lg-6 col-md-6 mb-4" key={plan.id}>
                <PlanCard variant="lessor" {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Lessor;
