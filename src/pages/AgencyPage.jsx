import Attachment from "../components/Attachment/Attachment"
import ProfileCard from "../components/cards/ProfileCard"
import PageBanner from "../components/layout/StickyHeader/PageBanner"
import CategoryList from "../components/Shared/CategoryList"
import { agencies } from "../data/agencies"
import { propertyCategories } from "../data/filters"
import { defaultAttachments } from "../data/attachments"
import img from "../utils/asset"

function AgencyPage() {
    return (
        <>
            <PageBanner
                title="agency list"
                items={[
                    { label: "agency list" },
                ]}
                image={img("aboutback.jpg")}
            />
            <section>
                <div className="profile__agency">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <CategoryList categories={propertyCategories} />
                                <Attachment attachments={defaultAttachments} />
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {agencies.map((agency) => (
                                        <div className="col-lg-6" key={agency.id}>
                                            <ProfileCard variant="agency" {...agency} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgencyPage