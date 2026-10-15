import { aboutIntro } from "../../../data/about";
import { img } from "../../../utils/asset";

function AboutContent() {
  return (
    <section className="home__about bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title__leading">
              <h2 className="text-capitalize">{aboutIntro.title}</h2>
              {aboutIntro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__image">
              <div className="about__image-top">
                <div className="about__image-top-hover">
                  <img
                    src={img("gallery3.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="about__image-bottom">
                <div className="about__image-bottom-hover">
                  <img
                    src={img("gallery.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
