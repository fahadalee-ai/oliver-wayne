import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { img } from "../../../utils/asset";

function Navbar({ variant = "hero" }) {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isHero = variant === "hero";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-hover navbar-expand-xl navbar-soft 
            ${isHero ? "navbar-transparent" : ""}
            ${isScrolled ? "fixed-top" : ""}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {isHero ? (
                            <>
                                <div className="artifact-image-grid">
                                    <img src={img("logo_white_horizontal.png")} alt="logo" />
                                    <img src={img("logo_horizontal.png")} alt="logo" />
                                </div>
                            </>
                        ) : (
                            <img
                                src={img("logo_horizontal.png")}
                                alt="logo"
                                className="img-fluid"
                            />
                        )}
                    </Link>
                    <span className="navbar-flag" title="United States" aria-label="United States">
                        <img src={img("flag-us.png")} alt="USA flag" />
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="main_nav99"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="main_nav99">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agents" onClick={() => setMenuOpen(false)}>Agents</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agencies" onClick={() => setMenuOpen(false)}>Agencies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lessors" onClick={() => setMenuOpen(false)}>Lessors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/property-management" onClick={() => setMenuOpen(false)}>Management</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs" onClick={() => setMenuOpen(false)}>Blog</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ">
                            <li>
                                <a href="javascript:void(0)" className="btn btn-primary text-capitalize" onClick={() => setMenuOpen(false)}>
                                    <i className="fa fa-plus-circle mr-1"></i> add listing</a>
                            </li>
                        </ul>

                    </div> {/* navbar-collapse.// */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
