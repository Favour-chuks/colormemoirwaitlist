import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import React from "react";
import TextBlur from "./ui/text-blur";
import { Button } from "./ui/button";
import Link from "next/link";

function SecondaryCTA() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-4">
      <TextBlur
        className="text-center text-2xl font-medium tracking-tight text-zinc-200 sm:text-3xl lg:text-4xl"
        text="Reserve Your Spot on the Waitlist!"
      />

      <motion.div
        variants={itemVariants}
        className="flex w-full justify-center pt-6">
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-yellow-50 hover:text-yellow-200">
          <Link href="/forms">join the Waitlist</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default SecondaryCTA;
