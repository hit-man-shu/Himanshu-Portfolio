import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    agree: false,
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xgegayae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Reset form data after submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          topic: "",
          message: "",
          agree: false,
        });
      } else {
        setError({ message: "Failed to submit the form..!" });
      }
    } catch (error) {
      //   console.error("Error submitting form:", error);
      setError({ message: error.message || "Could not send the data..!!" });
    }
  };

  if (error) {
    return (
      <div className="my-14 flex w-full items-center justify-center text-3xl font-bold text-red-700">
        <div>
          <h1>An Error Occured!</h1>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-12" id="contacts">
      <div className="mb-20 text-center">
        <p className="mb-5 text-xl font-semibold text-headingcolor">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold text-headingcolor md:text-5xl">
          Contact me
        </h2>
      </div>
      <div className="mx-auto mb-20 md:w-2/3">
        <form onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col items-center gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="firstname"
                className="w-full text-base text-headingcolor"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="lastname"
                className="w-full text-base text-headingcolor"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
                required
              />
            </div>
          </div>
          <div className="mb-8 flex flex-col items-center gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="email"
                className="w-full text-base text-headingcolor"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="phone"
                className="w-full text-base text-headingcolor"
              >
                Phone number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
                required
              />
            </div>
          </div>
          <div className="mb-8 w-full">
            <label
              htmlFor="topic"
              className="w-full text-base text-headingcolor"
            >
              Choose a topic
            </label>
            <select
              name="topic"
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
            >
              <option value="1">Select one...</option>
              <option value="2">Web Design</option>
              <option value="3">UX/UI Design</option>
              <option value="4">Web Development</option>
              <option value="5">Graphic Design</option>
            </select>
          </div>
          <div className="mb-8 w-full">
            <label
              htmlFor="message"
              className="w-full text-base text-headingcolor"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="5"
              className="mt-2 block w-full rounded-lg border border-primary px-2 py-2"
            >
              Type your message...
            </textarea>
          </div>
          <div className="mb-8 w-full">
            <input type="checkbox" name="agree" id="agree" required />
            <label
              htmlFor="message"
              className="ml-3 w-full text-base text-headingcolor"
            >
              I accept the terms
            </label>
          </div>
          <div className="mx-auto w-36 rounded-lg border">
            <input
              type="submit"
              value="Submit"
              className="btn-primary inline-block w-full cursor-pointer rounded-b-md bg-primary px-8 py-3 font-medium text-white "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
