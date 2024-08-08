import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_qxjpo0d",
          "template_jwtuzj7",
          formData,
          "MPfzQpDiem2Szb4mi"
        )
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let&apos;s connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && <text-sm text-rose-800>{errors.name}</text-sm>}
          </div>
          {/* email */}
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              placeholder="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && <text-sm text-rose-800>{errors.email}</text-sm>}
          </div>
        </div>
        {/* message */}
        <div className="mb-4">
          <textarea
            id="message"
            placeholder="message"
            onChange={handleChange}
            name="message"
            value={formData.message}
            rows={6}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
          {errors.message && <text-sm text-rose-800>{errors.message}</text-sm>}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"} <FiSend />
          </div>
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
