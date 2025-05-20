import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import React from "react";
import TextBlur from "./ui/text-blur";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function ImageToPixel() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex h-full w-full flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4"
    >
      <motion.div className="flex h-full w-full max-w-2xl flex-col items-center rounded-lg gap-5 bg-muted/80 px-5 pb-10 pt-10 lg:px-[50px] lg:pb-[100px] lg:pt-[100px]">
        <motion.div variants={itemVariants} className="w-full">
          <TextBlur
            className="font-medium tracking-tight text-zinc-200 text-2xl sm:text-3xl lg:text-4xl"
            text="From Pixels to Timeless Art"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <TextBlur
            className="w-full text-start text-base font-normal text-zinc-300 sm:text-lg"
            text="At ColorMemoir, we know there’s more to a photograph than pixels on a screen—it’s a moment you’ll want to hold close. Join our waitlist today, and very soon you’ll be able to upload a cherished photo, choose the illustration style that feels like YOU, and watch as our palette engine unfolds your image’s true colors into a living, abstract keepsake. When we open the doors, you’ll have first pick of gallery-quality prints, canvas wraps, or high-res downloads—each ready to become a part of your home or to give as a heartfelt gift."
            duration={0.8}
          />
          <span className="flex flex-col gap-3 pt-2">
            <TextBlur
              className="text-start text-base font-normal text-zinc-300 sm:text-lg"
              text="Your memory deserves more than a fleeting scroll—it deserves to become timeless art."
              duration={0.8}
            />
            <TextBlur
              className="text-start text-base font-normal text-zinc-300 sm:text-lg"
              text="Save your spot for beta access—and watch your favorite memories become art."
              duration={0.8}
            />
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="place-item-start grid w-full pt-4"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear hover:text-yellow-200"
          >
            <Link href="/forms">Save Your Spot</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid w-full flex-1 place-items-center"
        aria-label="image to pixel"
      >
        <Image
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="/ImagetoArt.png"
          src="/ImagetoArt.png"
          alt="an image showing an image being converted to an art piece"
          className="mx-auto h-auto w-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export default ImageToPixel;
