function ContactForm({ title }) {
    return (
      <div className="products__filter mb-30">
        <div className="products__filter__group">
          <div className="products__filter__header">
            <h5 className="text-center text-capitalize">{title}</h5>
          </div>
          <div className="products__filter__body">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email (Optional)</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Your message</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
          <div className="products__filter__footer">
            <div className="form-group mb-0">
              <button
                type="button"
                className="btn btn-primary text-capitalize btn-block"
              >
                submit <i className="fa fa-paper-plane ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactForm;