import TeamCard from "../../cards/TeamCard"
import { teamMembers } from "../../../data/team"
import SectionTitle from "../SectionTitle/SectionTitle";

function OurTeam({ bgLight = false,
  titleAlign = "left",
  title = "Meet Our Team",
  subtitle = "Trusted experts, dedicated to your success.",
  cardLayout = "hover",
}) {
  return (
    <section className={`our__team ${bgLight ? 'bg-light' : ''} ${cardLayout === "plain" ? "about-team" : ""}`}>
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} align={titleAlign} />
        <div className={cardLayout === "plain" ? "about-team__grid" : "row"}>
          {teamMembers.map((member) => (
            <div className={cardLayout === "plain" ? undefined : "col-md-6 col-lg-4"} key={member.id}>
              <TeamCard {...member} layout={cardLayout} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam