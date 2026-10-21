import { useId, useState } from "react";
import { Link } from "react-router-dom";

function InquiryForm({ title }) {
  const formId = useId();
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "" });
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
    if (values.phone.trim() && values.phone.trim().length < 7) {
      next.phone = "Enter a phone number with at least 7 digits.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Enter a message of at least 10 characters.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("");
      return;
    }
    setStatus(
      "This form does not send a message. Nothing was saved. Use membership@ollywayne.com from your own email app."
    );
    setValues({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <form className="property-inquiry" onSubmit={onSubmit} noValidate>
      <h3>Ask about this property</h3>
      <label htmlFor={`${formId}-name`}>Your name</label>
      <input
        id={`${formId}-name`}
        type="text"
        value={values.name}
        aria-invalid={errors.name ? true : undefined}
        onChange={(event) => update("name", event.target.value)}
      />
      {errors.name && <p className="form-error">{errors.name}</p>}
      <label htmlFor={`${formId}-phone`}>Phone (optional)</label>
      <input
        id={`${formId}-phone`}
        type="tel"
        value={values.phone}
        aria-invalid={errors.phone ? true : undefined}
        onChange={(event) => update("phone", event.target.value)}
      />
      {errors.phone && <p className="form-error">{errors.phone}</p>}
      <label htmlFor={`${formId}-email`}>Email (optional)</label>
      <input
        id={`${formId}-email`}
        type="email"
        value={values.email}
        aria-invalid={errors.email ? true : undefined}
        onChange={(event) => update("email", event.target.value)}
      />
      {errors.email && <p className="form-error">{errors.email}</p>}
      <label htmlFor={`${formId}-message`}>Message</label>
      <textarea
        id={`${formId}-message`}
        rows="4"
        value={values.message}
        placeholder={`I'm interested in ${title}`}
        aria-invalid={errors.message ? true : undefined}
        onChange={(event) => update("message", event.target.value)}
      />
      {errors.message && <p className="form-error">{errors.message}</p>}
      <button type="submit">Send message</button>
      {status && <p role="status">{status}</p>}
    </form>
  );
}

function PropertyDetailSidebar({
  agentName,
  agentImage,
  agentPhone,
  agentEmail,
  agentId,
  title,
}) {
  return (
    <aside className="property-side">
      <div className="property-contact">
        {agentImage ? <img src={agentImage} alt="" /> : null}
        <div>
          <p>Listing contact</p>
          {agentId ? (
            <h2>
              <Link to={`/agent/${agentId}`}>{agentName}</Link>
            </h2>
          ) : (
            <h2>{agentName || "Oliver Wayne"}</h2>
          )}
          {agentPhone ? <a href={`tel:${agentPhone}`}>{agentPhone}</a> : null}
          {agentEmail ? <a href={`mailto:${agentEmail}`}>{agentEmail}</a> : null}
          {!agentPhone && !agentEmail ? <Link to="/contact">Contact Oliver Wayne</Link> : null}
        </div>
      </div>
      <InquiryForm title={title} />
      <Link className="property-side__search" to="/properties">
        Search other properties
      </Link>
    </aside>
  );
}

export default PropertyDetailSidebar;
