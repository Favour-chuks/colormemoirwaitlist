import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import TextBlur from "./ui/text-blur";

// Define UVP card data
const uvpData = [
  {
    key: 'handcrafted',
    title: 'Handcrafted Meets Technology',
    description:
      'Our unique blend of human artistry and advanced technology ensures that every piece is unique to you. We’re not just creating art; we’re crafting memories.'
  },
  {
    key: 'supporting',
    title: 'Supporting Artists',
    description:
      'A portion of every purchase supports our community of illustrators, promoting ethical consumption.'
  },
  {
    key: 'versatile',
    title: 'Versatile Display Options',
    description:
      'Whether you prefer a canvas, framed print, or digital download, we offer a range of options to suit your style and space.'
  }
];

export default function UVP() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full px-4 md:px-8 lg:px-16"
    >
      <TextBlur
        className="mb-8 text-center font-medium tracking-tight text-zinc-200 text-2xl sm:text-3xl lg:text-4xl"
        text="What Sets Us Apart?"
      />

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {uvpData.map(({ key, title, description }) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 text-zinc-200"
          >
            <motion.div variants={itemVariants} className="mb-2">
              <FaCircle className="text-3xl text-zinc-200" />
            </motion.div>

            <div className="text-center">
              <TextBlur
                className="mb-2 text-xl font-medium sm:text-2xl"
                text={title}
              />
              <TextBlur
                className="text-base sm:text-lg"
                text={description}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
