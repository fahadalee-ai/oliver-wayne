import { Link } from "react-router-dom";
import { aboutHomeTeaser } from "../../../data/about";

function About() {
  return (
    <section className="home__about bg-theme-v7">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="title__leading">
              <h2 className="text-capitalize">{aboutHomeTeaser.title}</h2>
              {aboutHomeTeaser.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Link
                to="/about"
                className="btn btn-primary mt-3 text-capitalize"
              >
                {" "}
                read more
                <i className="fa fa-angle-right ml-3 "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
