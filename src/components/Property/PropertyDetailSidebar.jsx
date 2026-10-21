import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Attachment from "../Attachment/Attachment";
import PropertyDetailFilter from "./PropertyDetailFilter";

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
    <form onSubmit={onSubmit} noValidate>
      <div className="profile__agent__body">
        <div className="form-group">
          <label className="sr-only" htmlFor={`${formId}-name`}>Your name</label>
          <input
            id={`${formId}-name`}
            type="text"
            className="form-control"
            placeholder="Your name"
            value={values.name}
            aria-invalid={errors.name ? true : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor={`${formId}-phone`}>Phone</label>
          <input
            id={`${formId}-phone`}
            type="tel"
            className="form-control"
            placeholder="Phone (optional)"
            value={values.phone}
            aria-invalid={errors.phone ? true : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor={`${formId}-email`}>Email</label>
          <input
            id={`${formId}-email`}
            type="email"
            className="form-control"
            placeholder="Email (optional)"
            value={values.email}
            aria-invalid={errors.email ? true : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="sr-only" htmlFor={`${formId}-message`}>Message</label>
          <textarea
            id={`${formId}-message`}
            className="form-control"
            rows="5"
            placeholder={`I'm interested in ${title}`}
            value={values.message}
            aria-invalid={errors.message ? true : undefined}
            onChange={(event) => update("message", event.target.value)}
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>
      </div>
      <div className="profile__agent__footer">
        <div className="form-group mb-0">
          <button type="submit" className="btn btn-primary text-capitalize btn-block">
            send message <i className="fa fa-paper-plane ml-1"></i>
          </button>
          {status && (
            <p className="mt-3 mb-0" role="status">
              {status}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function PropertyDetailSidebar({
  agentName,
  agentImage,
  agentPhone,
  agentEmail,
  title,
  attachments = [],
}) {
  return (
    <div className="sticky-top">
      <div className="profile__agent mb-30">
        <div className="profile__agent__group">
          <div className="profile__agent__header">
            <div className="profile__agent__header-avatar">
              <figure>
                <img src={agentImage} alt={agentName || "Listing contact"} className="img-fluid" />
              </figure>
              <ul className="list-unstyled mb-0">
                <li>
                  <h5 className="text-capitalize">{agentName}</h5>
                </li>
                {agentPhone && (
                  <li>
                    <a href={`tel:${agentPhone}`}>
                      <i className="fa fa-phone-square mr-1"></i>
                      {agentPhone}
                    </a>
                  </li>
                )}
                {agentEmail && (
                  <li>
                    <a href={`mailto:${agentEmail}`}>
                      <i className="fa fa-envelope mr-1"></i>
                      {agentEmail}
                    </a>
                  </li>
                )}
                {!agentPhone && !agentEmail && (
                  <li>
                    <Link to="/contact">Contact Oliver Wayne</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <InquiryForm title={title} />
        </div>
      </div>
      <Attachment attachments={attachments} />
      <PropertyDetailFilter />
    </div>
  );
}

export default PropertyDetailSidebar;
