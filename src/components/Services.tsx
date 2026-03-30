"use client";
import { motion } from "framer-motion";
import { services } from "@/data";

export default function Services() {
  const allServices = [...services, ...services, ...services];
  return (
    <section id="services" className="py-20 bg-[#020617] overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          خدماتنا <span className="text-blue-500">الاحترافية</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-10 scrollbar-hide snap-x">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{ x: [0, "33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 p-8 rounded-[2.5rem] group hover:border-blue-500/50 transition-all"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-right">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-right">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
