import { useId, useState } from "react";

const empty = { name: "", email: "", phone: "", message: "" };

function ContactForm({ title }) {
  const formId = useId();
  const [values, setValues] = useState(empty);
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
      "This form does not send email. Nothing was saved. Use membership@ollywayne.com from your own email app if you need a reply."
    );
    setValues(empty);
  }

  return (
    <form className="products__filter mb-30" onSubmit={onSubmit} noValidate>
      <div className="products__filter__group">
        <div className="products__filter__header">
          <h5 className="text-center text-capitalize">{title}</h5>
        </div>
        <div className="products__filter__body">
          <div className="form-group">
            <label htmlFor={`${formId}-name`}>Full name</label>
            <input
              id={`${formId}-name`}
              type="text"
              className="form-control"
              value={values.name}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
              onChange={(event) => update("name", event.target.value)}
            />
            {errors.name && <p id={`${formId}-name-error`} className="form-error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-email`}>Email (optional)</label>
            <input
              id={`${formId}-email`}
              type="email"
              className="form-control"
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? `${formId}-email-error` : undefined}
              onChange={(event) => update("email", event.target.value)}
            />
            {errors.email && <p id={`${formId}-email-error`} className="form-error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-phone`}>Phone (optional)</label>
            <input
              id={`${formId}-phone`}
              type="tel"
              className="form-control"
              value={values.phone}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
              onChange={(event) => update("phone", event.target.value)}
            />
            {errors.phone && <p id={`${formId}-phone-error`} className="form-error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-message`}>Your message</label>
            <textarea
              id={`${formId}-message`}
              className="form-control"
              rows="3"
              value={values.message}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? `${formId}-message-error` : undefined}
              onChange={(event) => update("message", event.target.value)}
            />
            {errors.message && <p id={`${formId}-message-error`} className="form-error">{errors.message}</p>}
          </div>
        </div>
        <div className="products__filter__footer">
          <button type="submit" className="btn btn-primary text-capitalize btn-block">
            submit <i className="fa fa-paper-plane ml-1"></i>
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

export default ContactForm;
