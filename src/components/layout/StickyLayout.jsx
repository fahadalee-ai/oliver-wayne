import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import StickyHeader from "./StickyHeader/StickyHeader"

function StickyLayout() {
    return (
        <>
            <StickyHeader />
            <main>
                <Outlet />
            </main>
            <Footer variant="image" />
        </>
    )
}

export default StickyLayout