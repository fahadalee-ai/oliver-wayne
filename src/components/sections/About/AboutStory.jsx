import { aboutStory, aboutFocusAreas } from "../../../data/about";

function AboutStory() {
  return (
    <div className="title__leading">
      <h2 className="text-capitalize detail-heading">{aboutStory.title}</h2>
      {aboutStory.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <h5 className="text-capitalize">Current focus areas</h5>
      {aboutFocusAreas.map((area) => (
        <div key={area.id}>
          <h6 className="text-capitalize">{area.title}</h6>
          <p>{area.text}</p>
        </div>
      ))}
      <p>
        Additional sectors will be incorporated based on project size and
        workforce demands.
      </p>
    </div>
  );
}

export default AboutStory;
