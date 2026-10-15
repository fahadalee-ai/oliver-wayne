import { Link, useParams } from "react-router-dom"
import AgencyDetailTabs from "../components/Agency/AgencyDetailTabs"
import Attachment from "../components/Attachment/Attachment"
import PageBanner from "../components/layout/StickyHeader/PageBanner"
import CategoryList from "../components/Shared/CategoryList"
import ContactForm from "../components/Shared/ContactForm"
import ProfileDetailHeader from "../components/Shared/ProfileDetailHeader"
import { propertyCategories } from "../data/filters"
import { defaultAttachments } from "../data/attachments"
import { agencies, defaultAgencyDetail } from "../data/agencies"
import img from "../utils/asset"

function AgencyDetailPage() {
    const { id } = useParams();
    const agency = agencies.find((item) => String(item.id) === id);

    if (!agency) {
        return (
            <section className="container py-5">
                <p>Agency not found.</p>
                <Link to="/agencies">Back to agencies</Link>
            </section>
        );
    }

    const detail = { ...defaultAgencyDetail, ...agency };

    return (
        <>
            <PageBanner
                title="agency detail"
                items={[
                    { label: "agencies", to: "/agencies" },
                    { label: detail.name },
                ]}
                image={img("aboutback.jpg")}
            />
            <section className="profile__agents">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProfileDetailHeader variant="agency" {...detail} />
                            <AgencyDetailTabs {...detail} />
                        </div>
                        <div className="col-lg-4">
                            <div className="sticky-top">
                                <ContactForm title="Contact Form" />
                                <CategoryList categories={propertyCategories} />
                                <Attachment attachments={defaultAttachments} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgencyDetailPage