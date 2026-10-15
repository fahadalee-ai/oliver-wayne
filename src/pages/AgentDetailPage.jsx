import { Link, useParams } from "react-router-dom";
import CategoryList from "../components/Shared/CategoryList";
import ContactForm from "../components/Shared/ContactForm";
import ProfileDetailHeader from "../components/Shared/ProfileDetailHeader";
import AgentDetailTabs from "../components/Agent/AgentDetailTabs";
import Attachment from "../components/Attachment/Attachment";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import { agents, defaultAgentDetail } from "../data/agents";
import { propertyCategories } from "../data/filters";
import { defaultAttachments } from "../data/attachments";
import { img } from "../utils/asset";

function AgentDetailPage() {

    const { id } = useParams();
    const agent = agents.find((item) => String(item.id) === id);

    if (!agent) {
        return (
            <section className="container py-5">
                <p>Agent not found.</p>
                <Link to="/agents">Back to agents</Link>
            </section>
        );
    }

    const detail = { ...defaultAgentDetail, ...agent };
    return (
        <>
            <PageBanner
                title="agents detail"
                items={[
                    { label: "agents", to: "/agents" },
                    { label: detail.name },
                ]}
                image={img("aboutback.jpg")}
            />
            <section className="profile__agents">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProfileDetailHeader variant="agent" {...detail} />
                            <AgentDetailTabs {...detail} />
                        </div>
                        <div className="col-lg-4">
                            <div className="sticky-top">
                                <ContactForm title={`Contact ${detail.name}`} />
                                <CategoryList categories={propertyCategories} />
                                <Attachment attachments={defaultAttachments} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AgentDetailPage