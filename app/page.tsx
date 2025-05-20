"use client";
import React from "react";
import Image from "next/image";
import CTA from "@/components/cta";
import Particles from "@/components/ui/particles";
import FAQ from "@/components/faq";
import HeaderQuestion from "@/components/header-question";
import ImageToPixel from "@/components/image-pixel";
import UVP from "@/components/uvp";
import SecondaryCTA from "@/components/secondary-cta";
import Referrals from "@/components/refferals";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-4 py-12 sm:py-16 lg:py-20">
        <div className="relative z-10 mx-auto flex max-w-4xl items-center justify-center">
          <CTA />
        </div>
{/* 
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/background.jpg"
            alt="an image showing an image being converted to an art piece"
            fill
            className="object-cover"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_100%)]" />
        </div> */}
      </section>

      {/* Header Question */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <HeaderQuestion />
        </div>
      </section>

      {/* Image to Pixel */}
      <section className="w-full py-12 pr-4 sm:py-16 lg:py-20">
        <ImageToPixel />
      </section>

      {/* Unique Value Proposition */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <UVP />
      </section>

      {/* Secondary CTA */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SecondaryCTA />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <FAQ />
        </div>
      </section>

      {/* Referrals */}
      <section className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Referrals />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8">
        <div className="mx-auto max-w-6xl px-4">
          
          <Footer/>
        </div>
      </footer>

      {/* Particles Overlay */}
      <Particles
        quantityDesktop={450}
        quantityMobile={100}
        ease={80}
        color="#F7FF9B"
        refresh
      />
    </main>
  );
}
