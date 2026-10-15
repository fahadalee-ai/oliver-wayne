import PageBanner from "../components/layout/StickyHeader/PageBanner";
import ProfileCard from "../components/cards/ProfileCard";
import AgentFilter from "../components/Agent/AgentFilter";
import CategoryList from "../components/Shared/CategoryList";
import { agents } from "../data/agents";
import { propertyCategories } from "../data/filters";
import Attachment from "../components/Attachment/Attachment";
import { defaultAttachments } from "../data/attachments";
import { img } from "../utils/asset";

function AgentPage() {
    return (
        <>
            <PageBanner
                title="agents property"
                items={[
                    { label: "agent Listing" },
                ]}
                image={img("aboutback.jpg")}
            />
            <section className="profile__agents">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <AgentFilter />
                            <CategoryList categories={propertyCategories} />
                            <Attachment attachments={defaultAttachments} />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {agents.map((agent) => (
                                    <div className="col-lg-6" key={agent.id}>
                                        <ProfileCard variant="agent" {...agent} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AgentPage
