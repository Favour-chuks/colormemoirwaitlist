import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import React from "react";
import TextBlur from "./ui/text-blur";

function HeaderQuestion() {
  return (
    <motion.div
      variants={containerVariants}
      className="flex w-full flex-col items-center justify-start gap-4">
      <motion.div variants={itemVariants} className="">
        <TextBlur
          className="text-center font-medium tracking-tight text-zinc-200 text-2xl sm:text-3xl lg:text-4xl"
          text="Give Your Photos a Second Chance"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="max-w-[600px]">
        <TextBlur
          className="w-full text-center text-base font-normal text-zinc-300 sm:text-lg"
          text="You snap hundreds of photos every month—sunset selfies, big family grins, first steps. Yet most live and die in forgotten folders. That fleeting sparkle of joy? It never gets its second chance. But what if you could pause the scroll and transform each memory into a piece of art you’d actually display?"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
export default HeaderQuestion;
