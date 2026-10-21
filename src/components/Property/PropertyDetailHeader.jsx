function PropertyDetailHeader({ title, location, address, price, status, type }) {
  return (
    <header className="property-hero">
      <div>
        <p className="property-hero__chips">
          {status ? <span>{status}</span> : null}
          {type ? <span>{type}</span> : null}
        </p>
        <h1>{title}</h1>
        <p>{address ? `${address}, ${location}` : location}</p>
      </div>
      <div className="property-hero__price">
        <p>{price}</p>
        <button type="button" onClick={() => window.print()}>
          Print
        </button>
      </div>
    </header>
  );
}

export default PropertyDetailHeader;
