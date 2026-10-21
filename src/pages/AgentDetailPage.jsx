import { Link, useParams } from "react-router-dom";
import ContactForm from "../components/Shared/ContactForm";
import AgentDetailTabs from "../components/Agent/AgentDetailTabs";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import { agents, defaultAgentDetail } from "../data/agents";
import { useListings } from "../listings/useListings";
import { img } from "../utils/asset";

function AgentDetailPage() {
  const { id } = useParams();
  const { listings } = useListings();
  const agent = agents.find((item) => String(item.id) === id);

  if (!agent) {
    return (
      <section className="container py-5">
        <h1>Agent not found</h1>
        <p>That agent is not in the directory.</p>
        <Link to="/agents">Back to agents</Link>
      </section>
    );
  }

  const profile = agent.id === 1 ? { ...defaultAgentDetail, ...agent } : agent;
  const properties =
    agent.id === 1
      ? listings.filter((property) =>
          defaultAgentDetail.listingIds.includes(Number(property.id))
        )
      : listings.filter((property) => property.agentName === agent.name);

  return (
    <>
      <PageBanner
        title="Agents"
        items={[
          { label: "Agents", to: "/agents" },
          { label: agent.name },
        ]}
        image={img("agents-banner.jpg")}
      />
      <section className="agent-detail">
        <div className="container agent-detail__layout">
          <div>
            <header className="agent-detail__hero">
              <img src={agent.image} alt={agent.name} />
              <div>
                <p className="agent-card__count">{agent.listingsCount}</p>
                <h1>{agent.name}</h1>
                <p className="agent-card__role">{agent.role}</p>
                <ul className="agent-detail__contacts">
                  <li>
                    <span>Office</span>
                    <a href={`tel:${agent.office}`}>{agent.office}</a>
                  </li>
                  <li>
                    <span>Mobile</span>
                    <a href={`tel:${agent.mobile}`}>{agent.mobile}</a>
                  </li>
                  <li>
                    <span>Fax</span>
                    {agent.fax}
                  </li>
                  <li>
                    <span>Email</span>
                    <a href={`mailto:${agent.email}`}>{agent.email}</a>
                  </li>
                </ul>
              </div>
            </header>
            <AgentDetailTabs
              name={agent.name}
              descriptionTitle={profile.descriptionTitle}
              description={profile.description}
              properties={properties}
              reviews={profile.reviews}
            />
          </div>
          <aside className="agent-detail__aside">
            <ContactForm title={`Contact ${agent.name}`} />
          </aside>
        </div>
      </section>
    </>
  );
}

export default AgentDetailPage;
