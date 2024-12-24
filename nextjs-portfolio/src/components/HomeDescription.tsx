"use client";
import { useTypeWriter } from "@/hooks/use-type-writer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const description = `sAs a Software Engineer, I specialize in designing and building innovative software solutions that address 
  complex challenges while ensuring scalability and user-friendliness. 
  From crafting engaging websites to optimizing robust backend systems, 
  I bridge the gap between cutting-edge technology and user-centric needs`;

  // Destructure returned values from useTypeWriter
  const { displayedText, isCompleted } = useTypeWriter(description,1);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char: string, index: number) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{ color: isCompleted ? "rgb(255 255 255)" : "rgb(156 163 175)" }}
            transition={{ delay: index * 0.03, duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
