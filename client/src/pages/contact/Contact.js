import React, { useState } from "react";
import "./Contact.css";
import toast from "react-hot-toast";
import axios from "axios";

import {
  FaLinkedin,
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", sms: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/portfolio/send-email`,
        form
      );
      if (data?.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", sms: "" }); // Reset form
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending message.");
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Contact Us
        </h2>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                    alt="contact"
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/keshav-singh-621424174/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/keshavsingh123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubSquare
                          color="black"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <FaFacebook color="blue" size={30} className="ms-2" />
                      <FaInstagram color="pink" size={30} className="ms-2" />
                    </h6>
                  </div>
                </div>
                <div className="row px-3 mb-3">
                  <span className="line" />
                  <small className="or text-center">OR</small>
                  <span className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className=" form-control mb-3"
                    placeholder="Enter Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className=" form-control mb-3"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    type="text"
                    name="sms"
                    value={form.sms}
                    onChange={handleChange}
                    className="form-control mb-3"
                    placeholder="Enter Your Msg"
                  />
                </div>
                <div className="row px-3">
                  <button
                    type="button"
                    className="button"
                    onClick={handleSubmit}
                  >
                    Send Msg
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Contact;
