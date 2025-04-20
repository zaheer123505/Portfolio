import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const copyPhoneNumber = () => {
    navigator.clipboard
      .writeText("7075671585")
      .then(() => {
        toast.success("Phone number copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy number");
      });
  };

  const sendmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm("service_b24rhfe", "template_ffmcs9e", form.current, {
        publicKey: "4xU02D7P8LWB0MGeS",
      }),
      {
        loading: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again later.",
      }
    );

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    form.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="w-full overflow-hidden relative">
      {/* Space background */}
      <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] z-0"></div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-10">
          <p className="text-blue-300 text-lg">Get in Touch</p>
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email */}
            <div className="bg-indigo-900 rounded-lg p-6 text-center">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-3">sonyzaheer1585@gmail.com</p>
              <button
                onClick={scrollToForm}
                className="text-blue-300 hover:text-blue-200 text-sm"
              >
                Send a Mail
              </button>
            </div>

            {/* Call */}
            <div className="bg-indigo-900 rounded-lg p-6 text-center">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call</h3>
              <p className="text-gray-300 mb-3">
                Not available on working hours
              </p>
              <span onClick={copyPhoneNumber} className="text-blue-300 text-sm">
                Dial Now
              </span>
            </div>

            {/* WhatsApp */}
            <div className="bg-indigo-900 rounded-lg p-6 text-center">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.92 11.92 0 0012.01 0C5.39 0 0 5.38 0 12c0 2.12.55 4.17 1.6 5.98L0 24l6.18-1.62a11.97 11.97 0 0017.8-10.38c0-3.19-1.24-6.19-3.46-8.52zM12 22a9.94 9.94 0 01-5.07-1.38l-.36-.21-3.74.98.99-3.65-.24-.37A9.91 9.91 0 1122 12c0 5.51-4.49 10-10 10zm5.47-7.62c-.3-.15-1.75-.87-2.03-.97-.28-.1-.48-.15-.68.14-.19.29-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.46-2.39-1.47-.89-.8-1.48-1.76-1.65-2.06-.17-.29-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-300 mb-3">Available anytime</p>
              <span className="text-blue-300 text-sm">Send Message</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              id="contact-form"
              ref={form}
              onSubmit={sendmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-indigo-950 bg-opacity-40 border border-indigo-800 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-indigo-950 bg-opacity-40 border border-indigo-800 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 bg-indigo-950 bg-opacity-40 border border-indigo-800 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                required
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center transition-colors"
                >
                  Send Message
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
