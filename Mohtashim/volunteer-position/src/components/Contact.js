import React from "react";

const Contact = () => {
  return (
    <div className="outer-container">

      <div className="d-flex justify-content-center">


      <form action="contact-form">
      <div>

      <p>Contact Form</p>
      </div>

        <div className="mb-3">
          <label>Enter the title of your campaign</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            />
        </div>

        <div className="mb-3">
          <label>Short Description about the campaign</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ></textarea>
        </div>

        <div className="mb-3">
          <label>Working Hours</label>
          <input type="text" />

          <label>Upload Poster</label>
          <input class="form" type="file" id="formFile" />
        </div>

        <div className="mb-3">
          <label>Duration</label>
          <input type="text" />

          <label>Timings</label>
          <input type="text" />
        </div>


      </form>

      </div>
      <div className="d-flex justify-content-center">

      <button>Go Back</button>
      <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
