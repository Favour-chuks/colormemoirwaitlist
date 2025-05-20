import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import TextBlur from "./ui/text-blur";
import { Button } from "./ui/button";

function SecondaryCTA() {
  const [copied, setCopied] = useState(false);
  const referralLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/forms`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-4"
    >
      <TextBlur
        className="mx-auto max-w-2xl text-center font-medium tracking-tight text-zinc-200 text-2xl sm:text-3xl lg:text-4xl"
        text="Reserve Your Spot on the Waitlist!"
      />
      <motion.div
        variants={itemVariants}
        className="flex w-full items-center justify-center gap-2 pt-4 md:gap-4"
      >
        <Button
          size="sm"
          variant="secondary"
          className="text-yellow-50 transition-all duration-150 ease-linear hover:text-yellow-200"
          onClick={handleCopy}
        >
          {copied ? "Link Copied!" : "Copy Link"}
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default SecondaryCTA;
