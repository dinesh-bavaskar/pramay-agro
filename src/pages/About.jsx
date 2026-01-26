import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
            alt="agriculture"
            className="rounded-2xl shadow-xl"
          />

          {/* floating card */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
            <p className="font-bold text-green-700 text-lg">20+ Years</p>
            <p className="text-sm text-gray-600">Industry Experience</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Pramay Agro Private Limited
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Pramay Agro Pvt Ltd Bio-Organics offers a wide range of ECOCERT-approved,
            NOP-NPOP certified, and patented pest management solutions including
            Bio-insecticides, Bio-fungicides, Bio-acaricides, Adjuvants, and CIBRC
            certified Neem-based products.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We aim to reduce the cost of production for farmers while sustaining
            biodiversity and replacing harmful synthetic chemicals with organic
            alternatives globally.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "ECOCERT Certified",
              "Patented Products",
              "Export Quality",
              "Farmer Friendly",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
              >
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
