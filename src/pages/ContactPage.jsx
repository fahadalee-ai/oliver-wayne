import PageBanner from "../components/layout/StickyHeader/PageBanner";
import ContactForm from "../components/Shared/ContactForm";
import { img } from "../utils/asset";

function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        items={[{ label: "Contact" }]}
        image={img("aboutback.jpg")}
      />
      <section className="home__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2 id="faq">Questions</h2>
              <p>
                Membership questions can be sent to membership@ollywayne.com.
                This website does not store or deliver form messages.
              </p>
              <h2 id="privacy" className="h4 mt-4">
                Privacy
              </h2>
              <p>
                Listings you add stay in this browser only. Contact details
                typed into a form are not saved and are not sent to Oliver
                Wayne unless you use your own email app.
              </p>
              <ContactForm title="Contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
