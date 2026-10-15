import { aboutSectors } from "../../../data/about";

function AboutSectors() {
  return (
    <div className="title__leading">
      <h2 className="text-capitalize detail-heading">
        Critical Infrastructure Sectors We Support
      </h2>
      {aboutSectors.map((sector) => (
        <div key={sector.id}>
          <h5 className="text-capitalize">{sector.title}</h5>
          <p>{sector.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutSectors;
