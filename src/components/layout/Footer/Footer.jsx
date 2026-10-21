import { useId, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../../sections/CallToAction/CallToAction";
import { img } from "../../../utils/asset";
import { propertyTypes } from "../../../data/filters";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Add a listing", to: "/add-listing" },
  { label: "Membership", to: "/membership" },
  { label: "Lessors", to: "/lessors" },
  { label: "Management", to: "/property-management" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy", to: "/contact#privacy" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
  { label: "Management", to: "/property-management" },
  { label: "FAQ", to: "/contact#faq" },
];

function Footer() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function onSubscribe(event) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      setStatus("");
      return;
    }
    setError("");
    setStatus(
      "This site does not send a newsletter. Nothing was saved. Email membership@ollywayne.com from your own mail app."
    );
    setEmail("");
  }

  return (
    <>
      <CallToAction />
      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="container">
            <div className="site-footer__grid">
              <div className="site-footer__brand">
                <Link to="/" className="site-footer__logo-link">
                  <img
                    src={img("logo_white_horizontal.png")}
                    alt="Oliver Wayne LLC"
                    className="site-footer__logo"
                  />
                </Link>
                <p>
                  Oliver Wayne offers a comprehensive directory of temporary
                  lodging for critical infrastructure workers and contractors,
                  along with property management services.
                </p>
              </div>

              <nav className="site-footer__explore" aria-label="Footer">
                <h2 className="site-footer__title">Explore</h2>
                <ul className="site-footer__links">
                  {exploreLinks.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="site-footer__types" aria-label="Property types">
                <h2 className="site-footer__title">Lodging types</h2>
                <ul className="site-footer__links">
                  {propertyTypes.map((type) => (
                    <li key={type}>
                      <Link to={`/properties?type=${encodeURIComponent(type)}`}>
                        {type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="site-footer__updates">
                <p className="site-footer__note">
                  Membership questions can be sent to{" "}
                  <a href="mailto:membership@ollywayne.com">
                    membership@ollywayne.com
                  </a>
                  .
                </p>
                <div className="site-footer__updates-main">
                <h2 className="site-footer__title">Updates</h2>
                <form className="site-footer__form" onSubmit={onSubscribe} noValidate>
                  <label htmlFor={emailId}>Email address</label>
                  <input
                    id={emailId}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={email}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${emailId}-error` : undefined}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                      setStatus("");
                    }}
                  />
                  {error && (
                    <p id={`${emailId}-error`} className="site-footer__error">
                      {error}
                    </p>
                  )}
                  <button type="submit">Subscribe</button>
                  {status && (
                    <p className="site-footer__status" role="status">
                      {status}
                    </p>
                  )}
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bar">
          <div className="container site-footer__bar-inner">
            <p>© 2026 Oliver Wayne LLC</p>
            <ul>
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
