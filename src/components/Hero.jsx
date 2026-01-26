import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    title: "Growing Trust.\nCultivating Quality.",
  },
  {
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    title: "Innovation for\nModern Farming",
  },
  {
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Better Yield.\nBetter Future.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        speed={700}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 h-full flex items-center px-20">
                <motion.h1
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-5xl font-bold max-w-xl whitespace-pre-line"
                >
                  {slide.title}
                </motion.h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
