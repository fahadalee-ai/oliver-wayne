import About from "../components/sections/About/About";
import FeaturedProperty from "../components/sections/FeaturedProperty/FeaturedProperty";
import OurTeam from "../components/sections/OurTeam/OurTeam";
import PopularCity from "../components/sections/PopularCity/PopularCity";
import RecentProperty from "../components/sections/RecentProperty/RecentProperty";

function HomePage() {
    return (
        <>
            <PopularCity />
            <FeaturedProperty />
            <RecentProperty />
            <About />
            <OurTeam/>
        </>
    );
}

export default HomePage