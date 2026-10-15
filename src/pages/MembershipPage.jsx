import PageBanner from "../components/layout/StickyHeader/PageBanner";
import Membership from "../components/sections/Membership/Membership";
import { img } from "../utils/asset";

function MembershipPage() {
  return (
    <>
      <PageBanner
        title="Membership"
        items={[{ label: "Membership" }]}
        image={img("aboutback.jpg")}
      />
      <Membership />
    </>
  );
}

export default MembershipPage;
