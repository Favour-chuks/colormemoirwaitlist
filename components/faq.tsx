import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

const faqs = [
  {
    question: "How will I join the beta and see my memories come to life?",
    answer:
      "Once you secure your spot on our waitlist, we’ll welcome you into beta and invite you to upload a treasured photo. In just moments, you’ll watch your image’s true colors unfold into a handcrafted abstract keepsake in your dashboard—and you can download a high-resolution version immediately.",
  },
  {
    question: "How do I get the best results?",
    answer:
      "We find that high-resolution JPEGs or PNGs—especially portraits, landscapes, or candid snapshots—help us capture the richest colors and details. Your best memories deserve to shine.",
  },
  {
    question: "Can I adjust my artwork before it’s final?",
    answer:
      "Absolutely. You may request edits at any time before you download your art or order a print. We cherish getting it just right—you have one free revision during beta to make sure your story is told perfectly.",
  },
  {
    question: "When will my physical art arrive?",
    answer:
      "During beta, you can preview and download your digital piece right away, but physical keepsakes (archival matte prints or gallery-wrapped canvas) will be produced and shipped once our platform officially goes live.",
  },
  {
    question: "What happens to my original photo after upload?",
    answer:
      "We use your photo solely to craft your artwork; it’s encrypted and respectfully removed from our servers after seven days unless you ask us to keep it longer.",
  },
  {
    question: "Do I own the art once it’s created?",
    answer:
      "Yes—completely. Your ColorMemoir piece becomes yours to share, print, or display however you wish, so your story lives on in art form.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto w-full px-6 md:px-20"
    >
      <h2 className="mb-8 text-center text-2xl font-medium tracking-tight text-zinc-200 sm:text-3xl lg:text-4xl">
        Frequently Asked Questions
      </h2>

      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-gray-300 bg-gray-100 overflow-clip"
      >
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const contentHeight =
            refs.current[index]?.scrollHeight || (isActive ? "auto" : 0);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden shadow-sm"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex cursor-pointer items-center gap-6 p-4 hover:bg-gray-200"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-gray-600"
                >
                  {isActive ? <FiX size={24} /> : <FiPlus size={24} />}
                </motion.div>
                <h3 className="text-lg font-normal text-gray-800">
                  {faq.question}
                </h3>
              </div>

              <motion.div
                animate={{
                  height: isActive ? contentHeight : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div
                  ref={(el) => {refs.current[index] = el}}
                  className="px-12 py-4 text-gray-700"
                >
                  {faq.answer}
                </div>
              </motion.div>

              {index !== faqs.length - 1 && (
                <hr className="border-gray-300" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
