import { motion } from "framer-motion";

// manually added images (put in src/assets/products/)
import moon from "../assets/products/moon.png";
import radiant from "../assets/products/radiant.png";
import feeder from "../assets/products/feeder.png";
import humimaxx from "../assets/products/humimaxx.png";

export default function Categories() {
  const products = [
    {
      name: "Moon",
      price: "₹36.00",
      img: moon,
      bg: "from-orange-400 to-orange-600",
    },
    {
      name: "Radiant",
      price: "₹45.00",
      img: radiant,
      bg: "from-teal-400 to-teal-600",
    },
    {
      name: "Feeder",
      price: "₹68.50",
      img: feeder,
      bg: "from-purple-400 to-purple-600",
    },
    {
      name: "Humi-Maxx",
      price: "₹68.50",
      img: humimaxx,
      bg: "from-violet-400 to-violet-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-16">
          Top Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative rounded-3xl bg-gradient-to-br ${p.bg} text-white shadow-xl overflow-hidden`}
            >
              {/* IMAGE BOX (FIXED HEIGHT) */}
              <div className="h-52 overflow-hidden flex items-center justify-center px-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-40 w-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 pt-3">
                <p className="text-sm opacity-80 lowercase">{p.name}</p>
                <h3 className="text-xl font-bold lowercase">{p.name}</h3>

                <div className="mt-4 inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  {p.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
