"use client";
import { motion } from "framer-motion";
import { reasons } from "@/data";
export default function WhyChooseUs() {
  return (
    <section id="we" className="py-24 px-6 relative">
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-bold tracking-widest uppercase text-sm"
          >
            لماذا نحن؟
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-4 mb-6"
          >
            لماذا تختار <span className="text-blue-500">OXA Code</span>؟
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نحن نجمع بين الشغف بالإبداع والدقة في التنفيذ لنقدم لك تجربة رقمية
            لا تُنسى.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl border border-white/5 bg-[#0f172a]/40 backdrop-blur-sm hover:border-blue-500/30 hover:bg-[#0f172a]/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
