function PlanCard({
  variant = "membership",
  title,
  price,
  priceAlt,
  description,
  applicationItems = [],
  benefits = [],
  packages = [],
  selected = false,
  onSelect,
  ctaLabel = "Select this plan",
}) {
  const isMembership = variant === "membership";

  return (
    <div
      className={`plan-card plan-card--${variant}${selected ? " plan-card--selected" : ""}`}
    >
      <h4 className="plan-card__title">{title}</h4>

      {isMembership && price && (
        <div className="plan-card__price">{price}</div>
      )}

      {isMembership && priceAlt && (
        <p className="plan-card__price-alt">{priceAlt}</p>
      )}

      {description && <p className="plan-card__description">{description}</p>}

      {isMembership && applicationItems.length > 0 && (
        <div className="plan-card__block">
          <h6 className="plan-card__label">Application includes:</h6>
          <ul className="plan-card__list plan-card__list--bullets">
            {applicationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {isMembership && benefits.length > 0 && (
        <div className="plan-card__block">
          <h6 className="plan-card__label">Benefits:</h6>
          <ul className="plan-card__list plan-card__list--checks">
            {benefits.map((item) => (
              <li key={item}>
                <i className="fa fa-check" aria-hidden="true"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isMembership &&
        packages.map((pkg, index) => (
          <div
            key={pkg.name}
            className={`plan-card__package${index > 0 ? " plan-card__package--divided" : ""}`}
          >
            <h6 className="plan-card__label">{pkg.name}</h6>
            <p className="plan-card__package-text">{pkg.monthly}</p>
            <p className="plan-card__annual">{pkg.annual}</p>
          </div>
        ))}

      {isMembership && onSelect && (
        <button
          type="button"
          className={`btn btn-block text-capitalize plan-card__cta ${selected ? "btn-primary" : "btn-outline-primary"}`}
          onClick={onSelect}
        >
          {selected ? "Selected" : ctaLabel}
        </button>
      )}
    </div>
  );
}

export default PlanCard;
