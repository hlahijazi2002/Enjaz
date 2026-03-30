"use client";
import { motion } from "framer-motion";
import { projects } from "@/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#020617] overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          معرض <span className="text-blue-500">الأعمال</span>
        </h2>
        <p className="text-gray-500">نبتكر الحلول التي تصنع الفرق</p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-10 scrollbar-hide snap-x select-none">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="min-w-[300px] md:min-w-[400px] snap-center group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-[#0f172a]">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md text-[10px] px-3 py-1 rounded-full text-white">
                {project.type}
              </div>
            </div>
            <h3 className="text-xl font-bold mt-6 text-white text-right pr-2">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
