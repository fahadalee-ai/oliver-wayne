import { aboutMission } from "../../../data/about";

function AboutMission() {
  return (
    <div className="title__leading">
      <h2 className="text-capitalize detail-heading mt-0">{aboutMission.title}</h2>
      {aboutMission.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default AboutMission;
