import { partners } from "../../../data/partners";
import SectionTitle from "../SectionTitle/SectionTitle";

function Partners() {
  return (
    <section className="projects__partner">
      <div className="container">
        <SectionTitle
          align="center"
          col={7}
          title="Our Other Successful Projects"
          subtitle="Explore a portfolio of exceptional developments delivered with quality, innovation, and excellence."
        />
        <div className="row">
          <div className="col-md-12">
            <div className="projects__partner-logo">
              <ul className="list-inline mb-0">
                {partners.map((partner) => (
                  <li className="list-inline-item" key={partner.id}>
                    <img src={partner.image} alt="" className="img-fluid" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
