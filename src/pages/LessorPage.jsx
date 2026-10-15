import PageBanner from "../components/layout/StickyHeader/PageBanner";
import Lessor from "../components/sections/Lessor/Lessor";
import { img } from "../utils/asset";

function LessorPage() {
  return (
    <>
      <PageBanner
        title="Lessors"
        items={[{ label: "Lessors" }]}
        image={img("aboutback.jpg")}
      />
      <Lessor />
    </>
  );
}

export default LessorPage;
