import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-black/30 px-4 py-8 sm:px-6 md:px-8 lg:px-12 rounded-lg"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <motion.div variants={itemVariants}>
          <div className="rounded-full bg-muted/80 px-4 py-1">
            <AnimatedShinyText>
              <span>ColorMemoir</span>
            </AnimatedShinyText>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center font-medium tracking-tighter text-2xl sm:text-4xl lg:text-5xl"
            text="Your Memories Deserve More Than a Scroll."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center text-base text-zinc-300 sm:text-lg lg:text-xl"
            text="ColorMemoir transforms your cherished photos into unique, handcrafted abstract art—blending human creativity with our innovative palette engine."
            duration={0.8}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full flex justify-center pt-6"
        >
          <Button asChild size="lg" variant="secondary" className=" text-yellow-50 hover:text-yellow-200">
            <Link href="/forms">Get Access</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
