import { useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../Shared/Stars";

function ReviewForm({ agentName }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (values.name.trim().length < 2) next.name = "Enter your name.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Enter a valid email or leave it blank.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Enter a review of at least 10 characters.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("");
      return;
    }
    setStatus(
      `This review was not published. Nothing was saved. Email ${agentName} from your own mail app if you want a reply.`
    );
    setValues({ name: "", email: "", message: "" });
  }

  return (
    <form className="agent-review-form" onSubmit={onSubmit} noValidate>
      <h3>Write a review</h3>
      <label htmlFor="review-name">Your name</label>
      <input
        id="review-name"
        value={values.name}
        aria-invalid={errors.name ? true : undefined}
        onChange={(event) => update("name", event.target.value)}
      />
      {errors.name && <p className="form-error">{errors.name}</p>}
      <label htmlFor="review-email">Email (optional)</label>
      <input
        id="review-email"
        type="email"
        value={values.email}
        aria-invalid={errors.email ? true : undefined}
        onChange={(event) => update("email", event.target.value)}
      />
      {errors.email && <p className="form-error">{errors.email}</p>}
      <label htmlFor="review-message">Your review</label>
      <textarea
        id="review-message"
        rows="4"
        value={values.message}
        aria-invalid={errors.message ? true : undefined}
        onChange={(event) => update("message", event.target.value)}
      />
      {errors.message && <p className="form-error">{errors.message}</p>}
      <button type="submit">Submit review</button>
      {status && <p role="status">{status}</p>}
    </form>
  );
}

const tabs = [
  { id: "properties", label: "Properties" },
  { id: "reviews", label: "Reviews" },
];

function AgentDetailTabs({
  name,
  descriptionTitle,
  description = [],
  properties = [],
  reviews = [],
}) {
  const [tab, setTab] = useState("properties");

  function onTabKeyDown(event) {
    const index = tabs.findIndex((item) => item.id === tab);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? tabs[(index + 1) % tabs.length]
        : tabs[(index - 1 + tabs.length) % tabs.length];
    setTab(next.id);
    document.getElementById(`agent-tab-${next.id}`)?.focus();
  }

  return (
    <div className="agent-detail__content">
      {description.length > 0 && (
        <section aria-labelledby="agent-about-title">
          <h2 id="agent-about-title">{descriptionTitle || `About ${name}`}</h2>
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </section>
      )}

      <div className="agent-tabs">
        <div role="tablist" aria-label={`${name} details`}>
          {tabs.map((item) => {
            const selected = tab === item.id;
            const count = item.id === "properties" ? properties.length : reviews.length;
            return (
              <button
                key={item.id}
                id={`agent-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`agent-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(item.id)}
                onKeyDown={onTabKeyDown}
              >
                {item.label}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div
          id="agent-panel-properties"
          role="tabpanel"
          aria-labelledby="agent-tab-properties"
          hidden={tab !== "properties"}
        >
          {properties.length === 0 && (
            <p>No sample listings are assigned to this agent.</p>
          )}
          <div className="agent-listings">
            {properties.map((property) => (
              <Link
                className="agent-listing"
                to={`/property/${property.id}`}
                key={property.id}
              >
                <img src={property.image} alt="" />
                <div>
                  <h3>{property.title}</h3>
                  <p>{property.location}</p>
                  <p>
                    {property.beds} beds · {property.baths} baths · {property.area}
                  </p>
                  <p>
                    {property.status} · {property.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          id="agent-panel-reviews"
          role="tabpanel"
          aria-labelledby="agent-tab-reviews"
          hidden={tab !== "reviews"}
        >
          {reviews.length === 0 && <p>No reviews yet.</p>}
          <div className="agent-reviews">
            {reviews.map((review) => (
              <article key={review.id}>
                <img src={review.image} alt="" />
                <div>
                  <h3>{review.name}</h3>
                  <p className="agent-reviews__date">{review.date}</p>
                  <Stars rating={review.rating} />
                  <p>{review.text}</p>
                  {review.replies?.map((reply) => (
                    <div className="agent-reviews__reply" key={reply.id}>
                      <h4>{reply.name}</h4>
                      <p className="agent-reviews__date">{reply.date}</p>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <ReviewForm agentName={name} />
        </div>
      </div>
    </div>
  );
}

export default AgentDetailTabs;
