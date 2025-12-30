import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Section({
  id,
  children,
  className = "",
  animate = true,
}) {
  const Wrapper = animate ? motion.section : "section";

  return (
    <Wrapper
      id={id}
      variants={animate ? sectionVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-80px" }}
      className={`
        relative 
        py-24 md:py-32 
        overflow-hidden
        ${className}
      `}
    >
      <div className="relative max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </Wrapper>
  );
}
