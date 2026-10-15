import TeamCard from "../../cards/TeamCard"
import { teamMembers } from "../../../data/team"
import SectionTitle from "../SectionTitle/SectionTitle";

function OurTeam({ bgLight = false,
  titleAlign = "left",
  title = "Meet Our Team",
  subtitle = "Trusted experts, dedicated to your success.",
}) {
  return (
    <section className={`our__team ${bgLight ? 'bg-light' : ''}`}>
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} align={titleAlign} />
        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-md-6 col-lg-4" key={member.id}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam