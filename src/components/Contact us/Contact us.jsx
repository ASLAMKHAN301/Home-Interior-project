import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import navigate hook

export default function ContactPage() {
  const navigate = useNavigate(); // initialize
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const gmailPattern =
    /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[gG][mM][aA][iI][lL]\.com$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    // error clear kare for current field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.firstName) newErrors.firstName = "This field is required";
    if (!form.lastName) newErrors.lastName = "This field is required";
    if (!form.email) {
      newErrors.email = "This field is required";
    } else if (!gmailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid Gmail address";
    }
    if (!form.query) newErrors.query = "Please select a query type";
    if (!form.message) newErrors.message = "This field is required";
    if (!form.consent) newErrors.consent = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`
        Message Sent!
        Thanks for completing the form. We'll be in touch soon!
      `);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        query: "",
        message: "",
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-karla">
      <form
        onSubmit={handleSubmit}
        className="relative rounded-lg px-6 py-8 bg-gray-100 shadow-xl w-[500px] border-[1px]"
      >
        {/* Cross Button */}
        <button
          type="button"
          onClick={() => navigate(-1)} // go back
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Contact Us
        </h1>

        {/* First + Last Name */}
        <div className="flex flex-col space-y-3 md:space-x-2 md:flex-row md:space-y-0 mt-4">
          <div className="w-full">
            <p className="text-lg font-bold text-[#6E6E6E]">First Name *</p>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className={`rounded-md border-2 pl-2 w-full py-1 ${
                errors.firstName ? "border-red-500" : "border-[1px]"
              }`}
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="w-full">
            <p className="text-lg font-bold text-[#6E6E6E]">Last Name *</p>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className={`rounded-md border-2 pl-2 w-full py-1 ${
                errors.lastName ? "border-red-500" : "border-[1px]"
              }`}
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mt-3">
          <p className="text-lg font-bold text-[#6E6E6E]">Email Address *</p>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`rounded-md border-2 pl-2 w-full py-1 ${
              errors.email ? "border-red-500" : "border-[1px]"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Query Type */}
        <div className="mt-3">
          <p className="text-lg font-bold text-[#6E6E6E]">Query Type *</p>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0 mt-2">
            <label className="border-[1px] rounded-md w-full pl-3 py-1 cursor-pointer">
              <input
                type="radio"
                name="query"
                value="General Enquiry"
                checked={form.query === "General Enquiry"}
                onChange={handleChange}
              />{" "}
              General Enquiry
            </label>
            <label className="border-[1px] rounded-md w-full pl-3 py-1 cursor-pointer">
              <input
                type="radio"
                name="query"
                value="Support Request"
                checked={form.query === "Support Request"}
                onChange={handleChange}
              />{" "}
              Support Request
            </label>
          </div>
          {errors.query && (
            <p className="text-xs text-red-500">{errors.query}</p>
          )}
        </div>

        {/* Message */}
        <div className="mt-3">
          <p className="text-lg font-bold text-[#6E6E6E]">Message *</p>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`rounded-md border-2 pl-2 w-full py-5 ${
              errors.message ? "border-red-500" : "border-[1px]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Consent */}
        <div className="mt-5 flex space-x-2">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <p className="text-lg font-bold text-[#6E6E6E]">
            I consent to being contacted by the team *
          </p>
        </div>
        {errors.consent && (
          <p className="text-xs text-red-500">{errors.consent}</p>
        )}

        {/* Submit */}
        <div className="mt-5">
          <button
            type="submit"
            className="rounded-md py-2 w-full bg-green-600 hover:bg-gray-900 text-lg font-bold text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
