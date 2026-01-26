import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 48, label: "Result in Hours" },
  { value: 72, label: "Growth in Hours" },
  { value: 48, label: "Patent Products" },
  { value: 48, label: "Granules Products" },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl font-bold">
      {count}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 -mt-16 z-20 relative">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-black/70 backdrop-blur-md text-white p-6 rounded-lg text-center shadow-lg"
        >
          <Counter value={s.value} />
          <p className="text-sm mt-1">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
