'use client';

import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";

export default function TestimonialCarouselDemo() {
  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center bg-[#122436] text-[#FAEEE5]">
      <div className="text-center mb-10 max-w-xl px-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#C9B79F]">
          Social Proof
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
          Client Testimonials &amp; Endorsements
        </h1>
        <p className="text-sm text-[#D4C7B8] mt-2">
          Measurable operational impact across Shopify Plus stores, 3PL logistics networks, and automated workflows.
        </p>
      </div>

      <TestimonialCarousel />
    </div>
  );
}
