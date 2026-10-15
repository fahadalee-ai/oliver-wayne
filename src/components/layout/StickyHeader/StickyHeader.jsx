import Navbar from "../Header/Navbar";
import Topbar from "./Topbar";

function StickyHeader() {
    return (
        <header>
            <Topbar />
            <Navbar variant="sticky" />
        </header>
    );
}

export default StickyHeader