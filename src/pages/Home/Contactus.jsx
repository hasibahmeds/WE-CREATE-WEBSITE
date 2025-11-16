import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_hasib";
  const TEMPLATE_ID = "template_m1nzsd3";
  const PUBLIC_KEY = "FZ8GjZhpHV6XIlGQf";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (

      <div id="contact" className="bg-stone-800 p-4 text-white lg:p-12 md:p-8 min-h-screen scroll-m-[27px]">
        <div className="grid grid-cols-1 gap-8 max-w-6xl md:grid-cols-2 mx-auto mt-[40px]">
          <div>
            {/* Contact Form */}
            <div className="px-4 w-150">
              <h2 className="text-4xl text-amber-500 font-bold mb-[29px]">
                Get in touch
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="text-white text-xs block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="bg-zinc-900 border border-zinc-800 p-2 text-sm w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label className="text-white text-xs block mb-1">
                    Your phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    className="bg-zinc-900 border border-zinc-800 p-2 text-sm w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label className="text-white text-xs block mb-1">
                    Enter message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="bg-zinc-900 border border-zinc-800 h-32 p-2 text-sm w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-transparent border border-gray-600 text-white py-1 px-3 rounded font-medium transition duration-300 hover:bg-slate-900"
                >
                  Send Message
                </button>

                <p className="text-white text-xs mt-2">
                  "Submitting this form means you agree to our terms of service"
                </p>
              </form>
            </div>
          </div>

          <div className="mt-[51px] p-[30px]">
            <div className=" pl-[135px]">
              <h3 className="text-4xl font-bold mb-[10px]">Contact to us</h3>
              <br />
              <div className="mb-[30px]">
                <p className="text-amber-500 text-sm mb-1">Email us at</p>
                <p className="text-white">contact@uptownrestaurant.com</p>
              </div>

              <div className="mb-[27px]">
                <p className="text-amber-500 text-sm mb-1">Phone</p>
                <p className="text-white">(+880) 17820-92023</p>
              </div>

              <div className="mb-8">
                <p className="text-amber-500 text-sm mb-1">Working hours</p>
                <p className="text-white">10:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contactus;
