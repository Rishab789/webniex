import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7sem115", "template_pqsumrd", form.current, {
        publicKey: "JVeDxkpLrch03W5dM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-6">
          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block text-lg font-medium mb-1" htmlFor="name">
                Enter your name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-1"
                htmlFor="email"
                id="user_email"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-1"
                htmlFor="mobile"
              >
                Enter your mobile no
              </label>
              <input
                type="tel"
                id="mobile"
                name="phone"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-1"
                htmlFor="comment"
                id="user_comment"
              >
                Enter your comment
              </label>
              <textarea
                id="comment"
                name="message"
                className="w-full border rounded-lg p-2"
                rows="4"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-[100%]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Office Address</h2>
          <p className="mb-4">
            Our office is located in Hyderabad, Ameerpet. We are dedicated to
            providing excellent customer support. Please feel free to reach out
            to us through the form or visit us at our office.
          </p>
          <p className="mb-4">Address: Hyderabad, Ameerpet, PIN 500016</p>
          <p className="mb-4">
            We are open 24x7. Our team is here to assist you with any inquiries
            you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
