import { useEffect, useId, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import { buyPropertyTypes, locations, propertyTypes, rentPropertyTypes } from "../data/filters";
import { img } from "../utils/asset";
import { useListings } from "../listings/useListings";
import { MAX_IMAGE_BYTES, MAX_LISTING_PHOTOS, areaNumber, priceNumber } from "../listings/storage";
import { youtubeId } from "../utils/youtube";

const fallbackImage = img("prop-1.jpg");

const featureOptions = [
  "Air Conditioning",
  "Central Heating",
  "High-Speed Wi-Fi",
  "Washer",
  "Dryer",
  "Kitchenette",
  "Modern Kitchen",
  "Furnished",
  "Workspace",
  "Pet Friendly",
  "Private Garden",
  "Swimming Pool",
  "Covered Parking",
  "Security System",
  "Walk-in Closet",
  "Smart Home System",
];

const flooringOptions = ["Hardwood", "Tile", "Carpet", "Vinyl", "Laminate", "Concrete"];
const heatingOptions = ["Central Heating", "Heat Pump", "Baseboard", "None"];
const coolingOptions = ["Central Air Conditioning", "Window Units", "Heat Pump", "None"];
const furnishedOptions = ["Yes", "No", "Partial"];
const garageOptions = ["None", "1 Car", "2 Cars", "3+ Cars"];

const emptyForm = {
  title: "",
  type: "",
  purpose: "",
  description: "",
  location: "",
  address: "",
  beds: "",
  baths: "",
  rooms: "",
  livingRooms: "",
  diningRooms: "",
  kitchens: "",
  area: "",
  lotSize: "",
  yearBuilt: "",
  price: "",
  flooring: "",
  heating: "",
  cooling: "",
  furnished: "",
  garage: "",
  garageSize: "",
  parking: "",
  available: "",
  features: [],
  contactName: "",
  phone: "",
  email: "",
  youtube: "",
};

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });
}

function optionalNumber(value, label, { integer = false, min = 0, max = 100000000 } = {}) {
  if (String(value).trim() === "") return "";
  const number = Number(value);
  if (!Number.isFinite(number) || number < min || number > max || (integer && !Number.isInteger(number))) {
    return `Enter a valid ${label}.`;
  }
  return "";
}

function typesFor(purpose) {
  if (purpose === "For Rent") return rentPropertyTypes;
  if (purpose === "For Sale") return buyPropertyTypes;
  return propertyTypes;
}

function validate(form) {
  const errors = {};
  if (form.title.trim().length < 3) errors.title = "Enter a title with at least 3 characters.";
  if (!form.type) errors.type = "Choose a property type.";
  if (!form.purpose) errors.purpose = "Choose rent or sale.";
  if (!form.location) errors.location = "Choose a location.";
  const priceError = optionalNumber(form.price, "price greater than 0", { min: 0.01 });
  if (!form.price) errors.price = "Enter a price greater than 0.";
  else if (priceError) errors.price = "Enter a price greater than 0.";
  const areaError = optionalNumber(form.area, "area greater than 0", { min: 1 });
  if (form.type !== "RV Parking") {
    if (!form.area) errors.area = "Enter an area greater than 0.";
    else if (areaError) errors.area = "Enter an area greater than 0.";
  } else if (areaError) {
    errors.area = "Enter an area greater than 0.";
  }
  [
    ["beds", "bedroom count from 0 to 20", { integer: true, max: 20 }],
    ["baths", "bathroom count from 0 to 20", { integer: true, max: 20 }],
    ["rooms", "room count from 0 to 40", { integer: true, max: 40 }],
    ["livingRooms", "living room count from 0 to 10", { integer: true, max: 10 }],
    ["diningRooms", "dining room count from 0 to 10", { integer: true, max: 10 }],
    ["kitchens", "kitchen count from 0 to 10", { integer: true, max: 10 }],
    ["lotSize", "lot size greater than 0", { min: 1 }],
    ["garageSize", "garage size greater than 0", { min: 1 }],
    ["parking", "parking count from 0 to 50", { integer: true, max: 50 }],
    ["yearBuilt", "year from 1800 to 2027", { integer: true, min: 1800, max: 2027 }],
  ].forEach(([key, label, rules]) => {
    const message = optionalNumber(form[key], label, rules);
    if (message) errors[key] = message;
  });
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email or leave it blank.";
  }
  if (form.phone.trim() && form.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone number with at least 7 digits, or leave it blank.";
  }
  if (form.youtube.trim() && !youtubeId(form.youtube)) {
    errors.youtube = "Paste a YouTube link, such as https://www.youtube.com/watch?v=xxxxxxxxxxx";
  }
  return errors;
}

function formFromListing(listing) {
  if (listing.formValues) {
    return {
      ...emptyForm,
      ...listing.formValues,
      features: Array.isArray(listing.formValues.features) ? listing.formValues.features : [],
    };
  }
  return {
    ...emptyForm,
    title: listing.title || "",
    type: listing.type || "",
    purpose: listing.status || "",
    description: Array.isArray(listing.description) ? listing.description.join("\n\n") : "",
    location: listing.location || "",
    address: listing.address || "",
    beds: listing.beds === undefined || listing.beds === "" ? "" : String(listing.beds),
    baths: listing.baths === undefined || listing.baths === "" ? "" : String(listing.baths),
    rooms: listing.rooms === undefined || listing.rooms === "" ? "" : String(listing.rooms),
    area: areaNumber(listing.area) ? String(areaNumber(listing.area)) : "",
    lotSize: areaNumber(listing.lotSize) ? String(areaNumber(listing.lotSize)) : "",
    yearBuilt: listing.yearBuilt || "",
    price: priceNumber(listing.price) ? String(priceNumber(listing.price)) : "",
    flooring: listing.flooring || "",
    heating: listing.heating || "",
    cooling: listing.cooling || "",
    furnished: listing.furnished || "",
    garage: listing.garage || "",
    garageSize: areaNumber(listing.garageSize) ? String(areaNumber(listing.garageSize)) : "",
    parking: areaNumber(listing.parking) ? String(areaNumber(listing.parking)) : "",
    available: listing.available || "",
    features: Array.isArray(listing.features) ? listing.features : [],
    contactName: listing.contactName || "",
    phone: listing.contactPhone || "",
    email: listing.contactEmail || "",
    youtube: listing.youtube || "",
    livingRooms: listing.livingRooms || "",
    diningRooms: listing.diningRooms || "",
    kitchens: listing.kitchens || "",
  };
}

function photosFromListing(listing) {
  const stored = Array.isArray(listing.images) && listing.images.length
    ? listing.images
    : listing.imageStored && listing.image
      ? [listing.image]
      : [];
  return stored.map((url, index) => ({
    key: `kept-${listing.id}-${index}`,
    name: `Photo ${index + 1}`,
    file: null,
    url,
    kept: true,
  }));
}

function sized(value) {
  return value ? `${Number(value).toLocaleString()} sq ft` : "";
}

function reviewRows(form) {
  const price = form.price
    ? form.purpose === "For Rent"
      ? `$${Number(form.price).toLocaleString()} / month`
      : `$${Number(form.price).toLocaleString()}`
    : "";
  return [
    ["Title", form.title.trim()],
    ["Purpose", form.purpose],
    ["Type", form.type],
    ["Price", price],
    ["City", form.location],
    ["Street address", form.address.trim()],
    ["Available", form.available],
    ["Area", sized(form.area)],
    ["Lot size", sized(form.lotSize)],
    ["Bedrooms", form.beds],
    ["Bathrooms", form.baths],
    ["Rooms", form.rooms],
    ["Living rooms", form.livingRooms],
    ["Dining rooms", form.diningRooms],
    ["Kitchens", form.kitchens],
    ["Year built", form.yearBuilt],
    ["Flooring", form.flooring],
    ["Heating", form.heating],
    ["Cooling", form.cooling],
    ["Furnished", form.furnished],
    ["Garage", form.garage],
    ["Garage size", sized(form.garageSize)],
    ["Parking", form.parking ? `${form.parking} spaces` : ""],
    ["Features", form.features.join(", ")],
    ["Contact name", form.contactName.trim()],
    ["Phone", form.phone.trim()],
    ["Email", form.email.trim()],
    ["YouTube video", form.youtube.trim()],
    ["Description", form.description.trim()],
  ].filter(([, value]) => String(value).trim() !== "");
}

function Field({ id, label, required, error, className = "", children }) {
  return (
    <div className={`listing-field${className ? ` ${className}` : ""}`}>
      <label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="form-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function AddListingPage() {
  const formId = useId();
  const { addListing, userListings, removeListing } = useListings();
  const [params, setParams] = useSearchParams();
  const editId = params.get("edit") || "";
  const [editNonce, setEditNonce] = useState(0);
  const listingToEdit = editId ? userListings.find((item) => item.id === editId) : null;
  const editToken = listingToEdit ? `${listingToEdit.id}:${editNonce}` : "";
  const [appliedEdit, setAppliedEdit] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]);
  const [fileNote, setFileNote] = useState("");
  const [saveError, setSaveError] = useState("");
  const [stage, setStage] = useState("edit");
  const [saved, setSaved] = useState(null);
  const [saving, setSaving] = useState(false);
  const typeOptions = typesFor(form.purpose);
  const photosRef = useRef(photos);

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  useEffect(() => {
    return () => {
      photosRef.current.forEach((photo) => {
        if (photo.file) URL.revokeObjectURL(photo.url);
      });
    };
  }, []);

  if (editToken && appliedEdit !== editToken && listingToEdit) {
    setAppliedEdit(editToken);
    setForm(formFromListing(listingToEdit));
    setPhotos(photosFromListing(listingToEdit));
    setFileNote(
      listingToEdit.imageStored || (Array.isArray(listingToEdit.images) && listingToEdit.images.length)
        ? ""
        : "Saved photos use a placeholder when the original file was over 180KB. Add JPG, PNG, or WebP photos under 180KB to store them in this browser."
    );
    setErrors({});
    setStage("edit");
    setSaved(null);
  }

  function update(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "purpose" && next.type && !typesFor(value).includes(next.type)) {
        next.type = "";
      }
      return next;
    });
    setErrors((current) => ({ ...current, [field]: undefined, type: field === "purpose" ? undefined : current.type }));
  }

  function toggleFeature(feature) {
    setForm((current) => ({
      ...current,
      features: current.features.includes(feature)
        ? current.features.filter((item) => item !== feature)
        : [...current.features, feature],
    }));
  }

  function removePhoto(key) {
    setPhotos((current) => {
      const photo = current.find((item) => item.key === key);
      if (photo?.file) URL.revokeObjectURL(photo.url);
      return current.filter((item) => item.key !== key);
    });
    setFileNote("");
  }

  function onFiles(event) {
    const selected = [...(event.target.files || [])];
    event.target.value = "";
    const notes = [];
    const accepted = [];
    selected.forEach((file) => {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        notes.push(`${file.name} was skipped. Use a JPG, PNG, or WebP image.`);
        return;
      }
      if (file.size > MAX_IMAGE_BYTES) {
        notes.push(`${file.name} is over 180KB, so this browser cannot store it.`);
        return;
      }
      accepted.push({
        key: `${file.name}-${file.lastModified}-${file.size}-${Math.random().toString(36).slice(2)}`,
        name: file.name,
        file,
        url: URL.createObjectURL(file),
        kept: false,
      });
    });
    const room = MAX_LISTING_PHOTOS - photos.length;
    const next = accepted.slice(0, Math.max(room, 0));
    accepted.slice(next.length).forEach((photo) => URL.revokeObjectURL(photo.url));
    if (accepted.length > room) {
      notes.push(`You can save ${MAX_LISTING_PHOTOS} photos. Extra files were not added.`);
    }
    setPhotos((current) => [...current, ...next].slice(0, MAX_LISTING_PHOTOS));
    setFileNote(notes.join(" "));
  }

  function onReview(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStage("review");
  }

  async function onSave() {
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStage("edit");
      return;
    }
    setSaving(true);
    setSaveError("");
    try {
      const images = [];
      for (const photo of photos) {
        if (photo.kept && photo.url) images.push(photo.url);
        else if (photo.file && photo.file.size <= MAX_IMAGE_BYTES) images.push(await readFile(photo.file));
      }
      const image = images[0] || fallbackImage;
      const id = editId || `local-${Date.now()}`;
      const priceLabel =
        form.purpose === "For Rent"
          ? `$${Number(form.price).toLocaleString()} / month`
          : `$${Number(form.price).toLocaleString()}`;
      const listing = {
        id,
        source: "local",
        title: form.title.trim(),
        type: form.type,
        location: form.location,
        address: form.address.trim(),
        price: priceLabel,
        image,
        images,
        imageStored: images.length > 0,
        youtube: form.youtube.trim(),
        agentName: form.contactName.trim() || "Your listing",
        agentImage: img("logo_horizontal.png"),
        contactName: form.contactName.trim(),
        contactPhone: form.phone.trim(),
        contactEmail: form.email.trim(),
        baths: form.baths === "" ? "" : Number(form.baths),
        beds: form.beds === "" ? "" : Number(form.beds),
        rooms: form.rooms === "" ? (form.beds === "" ? "" : Number(form.beds)) : Number(form.rooms),
        livingRooms: form.livingRooms,
        diningRooms: form.diningRooms,
        kitchens: form.kitchens,
        area: sized(form.area),
        lotSize: sized(form.lotSize),
        yearBuilt: form.yearBuilt,
        flooring: form.flooring,
        heating: form.heating,
        cooling: form.cooling,
        furnished: form.furnished,
        garage: form.garage,
        garageSize: sized(form.garageSize),
        parking: form.parking ? `${form.parking} spaces` : "",
        available: form.available,
        features: [...form.features],
        ribbon: "Your listing",
        status: form.purpose,
        description: form.description.trim()
          ? [form.description.trim()]
          : ["Details for this listing were saved in this browser."],
        formValues: { ...form, features: [...form.features] },
      };
      addListing(listing);
      setSaved(listing);
      setStage("done");
      setForm(emptyForm);
      setPhotos((current) => {
        current.forEach((photo) => {
          if (photo.file) URL.revokeObjectURL(photo.url);
        });
        return [];
      });
      setAppliedEdit(editToken || "saved");
      setParams({}, { replace: true });
      setFileNote("");
    } catch {
      setSaveError("This browser could not store these photos. Remove one or use smaller images under 180KB.");
    } finally {
      setSaving(false);
    }
  }

  const field = (name, label, control, { required = false, wide = false } = {}) => (
    <Field id={`${formId}-${name}`} label={label} required={required} error={errors[name]} className={wide ? "listing-field--wide" : ""}>
      {control({
        id: `${formId}-${name}`,
        className: "form-control",
        value: form[name],
        "aria-required": required || undefined,
        "aria-invalid": errors[name] ? true : undefined,
        "aria-describedby": errors[name] ? `${formId}-${name}-error` : undefined,
        onChange: (event) => update(name, event.target.value),
      })}
    </Field>
  );

  return (
    <>
      <PageBanner title="Add listing" items={[{ label: "Add listing" }]} image={img("aboutback.jpg")} />
      <section className="listing-page">
        <div className="container">
          <div className="listing-page__layout">
            <div>
              <p className="listing-page__note">
                Add a property to the list in this browser. It is not published to a shared website and is not visible to other people.
              </p>

              {stage === "done" && saved && (
                <div className="listing-page__panel" role="status">
                  <h2>Saved in this browser</h2>
                  <p>
                    {saved.title} is on the properties page for this browser only. Nothing was sent to a server. Refresh keeps this listing on this browser.
                  </p>
                  <div className="listing-page__actions">
                    <Link className="btn btn-primary" to={`/property/${saved.id}`}>
                      View listing
                    </Link>
                    <Link className="btn btn-outline-primary" to="/properties">
                      All properties
                    </Link>
                  </div>
                </div>
              )}

              {stage !== "review" && (
                <form className="listing-form" onSubmit={onReview} noValidate>
                  <section className="listing-page__panel">
                    <h2>Listing</h2>
                    <div className="listing-page__grid">
                      {field("title", "Title", (props) => <input {...props} />, { required: true, wide: true })}
                      {field(
                        "purpose",
                        "Rent or sale",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose rent or sale</option>
                            <option>For Rent</option>
                            <option>For Sale</option>
                          </select>
                        ),
                        { required: true }
                      )}
                      {field(
                        "type",
                        "Property type",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose a type</option>
                            {typeOptions.map((type) => (
                              <option key={type}>{type}</option>
                            ))}
                          </select>
                        ),
                        { required: true }
                      )}
                      {field(
                        "price",
                        form.purpose === "For Rent" ? "Monthly rent (USD)" : "Price (USD)",
                        (props) => <input {...props} inputMode="decimal" />,
                        { required: true }
                      )}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Location</h2>
                    <div className="listing-page__grid">
                      {field(
                        "location",
                        "City",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose a city</option>
                            {locations.map((location) => (
                              <option key={location}>{location}</option>
                            ))}
                          </select>
                        ),
                        { required: true }
                      )}
                      {field("address", "Street address", (props) => <input {...props} autoComplete="street-address" />)}
                      {field("available", "Available", (props) => <input {...props} type="date" />)}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Size and rooms</h2>
                    <div className="listing-page__grid">
                      {field("area", "Area (sq ft)", (props) => <input {...props} inputMode="decimal" />, {
                        required: form.type !== "RV Parking",
                      })}
                      {field("lotSize", "Lot size (sq ft)", (props) => <input {...props} inputMode="decimal" />)}
                      {field("beds", "Bedrooms", (props) => <input {...props} inputMode="numeric" />)}
                      {field("baths", "Bathrooms", (props) => <input {...props} inputMode="numeric" />)}
                      {field("rooms", "Total rooms", (props) => <input {...props} inputMode="numeric" />)}
                      {field("livingRooms", "Living rooms", (props) => <input {...props} inputMode="numeric" />)}
                      {field("diningRooms", "Dining rooms", (props) => <input {...props} inputMode="numeric" />)}
                      {field("kitchens", "Kitchens", (props) => <input {...props} inputMode="numeric" />)}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Building</h2>
                    <div className="listing-page__grid">
                      {field("yearBuilt", "Year built", (props) => <input {...props} inputMode="numeric" />)}
                      {field(
                        "flooring",
                        "Flooring",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose flooring</option>
                            {flooringOptions.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        )
                      )}
                      {field(
                        "heating",
                        "Heating",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose heating</option>
                            {heatingOptions.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        )
                      )}
                      {field(
                        "cooling",
                        "Cooling",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose cooling</option>
                            {coolingOptions.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        )
                      )}
                      {field(
                        "furnished",
                        "Furnished",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose an option</option>
                            {furnishedOptions.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        )
                      )}
                      {field(
                        "garage",
                        "Garage",
                        (props) => (
                          <select {...props}>
                            <option value="">Choose a garage</option>
                            {garageOptions.map((item) => (
                              <option key={item}>{item}</option>
                            ))}
                          </select>
                        )
                      )}
                      {field("garageSize", "Garage size (sq ft)", (props) => <input {...props} inputMode="decimal" />)}
                      {field("parking", "Parking spaces", (props) => <input {...props} inputMode="numeric" />)}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Description</h2>
                    <Field id={`${formId}-description`} label="Description">
                      <textarea
                        id={`${formId}-description`}
                        className="form-control"
                        rows="5"
                        value={form.description}
                        onChange={(event) => update("description", event.target.value)}
                      />
                    </Field>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Features</h2>
                    <div className="listing-features">
                      {featureOptions.map((feature) => {
                        const id = `${formId}-feature-${feature.replace(/\s+/g, "-").toLowerCase()}`;
                        return (
                          <label key={feature} htmlFor={id}>
                            <input
                              id={id}
                              type="checkbox"
                              checked={form.features.includes(feature)}
                              onChange={() => toggleFeature(feature)}
                            />
                            {feature}
                          </label>
                        );
                      })}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Contact</h2>
                    <p className="listing-page__hint">Shown on this listing in this browser. Nothing is emailed.</p>
                    <div className="listing-page__grid">
                      {field("contactName", "Contact name", (props) => <input {...props} autoComplete="name" />)}
                      {field("phone", "Phone", (props) => <input {...props} type="tel" autoComplete="tel" />)}
                      {field("email", "Email", (props) => <input {...props} type="email" autoComplete="email" />)}
                    </div>
                  </section>

                  <section className="listing-page__panel">
                    <h2>Photos and video</h2>
                    <p className="listing-page__hint">
                      Add up to {MAX_LISTING_PHOTOS} JPG, PNG, or WebP photos. Each file must be under 180KB to stay in this browser. A YouTube link is played from YouTube and is not uploaded here.
                    </p>
                    <Field id={`${formId}-photo`} label="Photos" error={fileNote}>
                      <input
                        id={`${formId}-photo`}
                        className="form-control"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        onChange={onFiles}
                      />
                    </Field>
                    {photos.length > 0 && (
                      <ul className="listing-photos">
                        {photos.map((photo, index) => (
                          <li key={photo.key}>
                            <img src={photo.url} alt={`${photo.name} preview`} />
                            <button type="button" onClick={() => removePhoto(photo.key)}>
                              Remove photo {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    {field(
                      "youtube",
                      "YouTube video",
                      (props) => (
                        <input
                          {...props}
                          type="url"
                          inputMode="url"
                          placeholder="https://www.youtube.com/watch?v="
                        />
                      ),
                      { wide: true }
                    )}
                    <button className="btn btn-primary" type="submit">
                      Review listing
                    </button>
                  </section>
                </form>
              )}

              {stage === "review" && (
                <section className="listing-page__panel">
                  <h2>Review before saving</h2>
                  <dl className="listing-review">
                    {reviewRows(form).map(([label, value]) => (
                      <div key={label} className={label === "Description" ? "listing-field--wide" : undefined}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {photos.length > 0 && (
                    <ul className="listing-photos">
                      {photos.map((photo) => (
                        <li key={photo.key}>
                          <img src={photo.url} alt="" />
                        </li>
                      ))}
                    </ul>
                  )}
                  {saveError && <p className="form-error">{saveError}</p>}
                  <div className="listing-page__actions">
                    <button type="button" className="btn btn-primary" onClick={onSave} disabled={saving}>
                      {saving ? "Saving…" : editId ? "Update in this browser" : "Save in this browser"}
                    </button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setStage("edit")}>
                      Edit
                    </button>
                  </div>
                </section>
              )}
            </div>

            <aside className="listing-page__saved">
              <h2>Saved in this browser</h2>
              {userListings.length === 0 && <p>You have not saved a listing on this browser yet.</p>}
              <ul>
                {userListings.map((listing) => (
                  <li key={listing.id}>
                    <Link to={`/property/${listing.id}`}>{listing.title}</Link>
                    <p>
                      {listing.type}
                      {listing.status ? ` · ${listing.status}` : ""}
                    </p>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setEditNonce((current) => current + 1);
                          setParams({ edit: listing.id });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Remove “${listing.title}” from this browser?`)) {
                            removeListing(listing.id);
                          }
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddListingPage;
