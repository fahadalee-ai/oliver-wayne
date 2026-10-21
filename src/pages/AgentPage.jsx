import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import AgentFilter from "../components/Agent/AgentFilter";
import { agents } from "../data/agents";
import { img } from "../utils/asset";

function AgentPage() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      agents.filter((agent) => {
        if (!needle) return true;
        return `${agent.name} ${agent.role}`.toLowerCase().includes(needle);
      }),
    [needle]
  );

  return (
    <>
      <PageBanner
        title="Agents"
        items={[{ label: "Agents" }]}
        image={img("agents-banner.jpg")}
      />
      <section className="agent-directory">
        <div className="container">
          <AgentFilter query={query} onQueryChange={setQuery} />
          {results.length === 0 && (
            <p className="agent-directory__empty">No agents match that name.</p>
          )}
          <div className="agent-directory__grid">
            {results.map((agent) => (
              <article className="agent-card" key={agent.id}>
                <Link to={`/agent/${agent.id}`} className="agent-card__photo">
                  <img src={agent.image} alt={agent.name} />
                </Link>
                <div className="agent-card__body">
                  <p className="agent-card__count">{agent.listingsCount}</p>
                  <h2>
                    <Link to={`/agent/${agent.id}`}>{agent.name}</Link>
                  </h2>
                  <p className="agent-card__role">{agent.role}</p>
                  <a href={`tel:${agent.mobile}`}>{agent.mobile}</a>
                  <a href={`mailto:${agent.email}`}>{agent.email}</a>
                  <Link className="agent-card__profile" to={`/agent/${agent.id}`}>
                    View profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AgentPage;
