import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "Organic Crop Nutrition",
      desc: "High quality organic solutions to improve soil fertility and crop yield naturally.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=900",
    },
    {
      title: "Bio Fertilizer Solutions",
      desc: "Advanced bio-fertilizers that boost plant growth while protecting the environment.",
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=900",
    },
    {
      title: "Sustainable Farming Products",
      desc: "Eco-friendly agro products designed for long-term sustainable agriculture.",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=900",
    },
  ];

  return (
    <section className="py-24 px-10 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16"
      >
        Our Products
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
