import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            We’re here to help you with all your agricultural needs. Reach out to us for any
            queries, product information, or support.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700 font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-600" />
              <span className="text-gray-700 font-medium">info@pramayagro.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" />
              <span className="text-gray-700 font-medium">
                Pune, Maharashtra, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6">Send us a message</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* MAP */}
      <div className="w-full h-96">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Pune%20Maharashtra&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
