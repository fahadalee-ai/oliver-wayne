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
            <ul className="about-partners__logos">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <img src={partner.image} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
