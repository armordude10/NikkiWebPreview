import React from "react";

const Map = () => {
  return (
    <div
      className="contact__map sp_bottom_140"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95477.42576805267!2d-89.62820687832029!3d40.693640299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a61139ae5ba93%3A0x4b19be9dce0d4d4b!2sPeoria%2C%20IL%2C%20USA!5e0!3m2!1sen!2sus!4v1675012345678!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
