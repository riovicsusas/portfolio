"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  badge?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "David F.",
    title: "Founder & CEO, DTC Health & Wellness Brand",
    badge: "Shopify Flow & WMS",
    description:
      "Riovic's automation work transformed our store. Orders now process themselves — from high-risk fraud holds to bi-coastal warehouse routing. We barely touch the backend anymore, and our split shipments dropped significantly in the first month.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/riovicsusas",
    twitterUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Sarah L.",
    title: "Director of E-Commerce Operations, Apparel Group",
    badge: "Margin Protection",
    description:
      "When promotional coupon stacks caused negative-margin collision loops and storefront AJAX cart freeze exceptions, Riovic audited our entire checkout architecture in under 48 hours. His diagnostic protocols are as rigorous as an engineering flight-check.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/riovicsusas",
    twitterUrl: "#",
  },
  {
    name: "Marcus K.",
    title: "Technical Brand Manager, Multi-Store Shopify Plus",
    badge: "Matrixify & Data Governance",
    description:
      "Migrating 50,000+ SKUs across multiple stores was terrifying until Riovic stepped in with Matrixify. Zero broken barcodes, zero handle corruption, and not a single minute of storefront downtime. Absolute lifesaver.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/riovicsusas",
    githubUrl: "#",
  },
  {
    name: "Elena R.",
    title: "Customer Experience & Retention Lead",
    badge: "Gorgias Helpdesk & SLA",
    description:
      "Our Gorgias response times were slashed in half thanks to Riovic's custom HTTP webhook actions and macro logic. Customer inquiries regarding address changes and shipping updates are triaged automatically with zero human latency.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    linkedinUrl: "https://www.linkedin.com/in/riovicsusas",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
  items?: Testimonial[];
}

export function TestimonialCarousel({
  className,
  items = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % items.length);
  const handlePrevious = () =>
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);

  const currentTestimonial = items[currentIndex];

  const socialIcons = [
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
  ].filter((s) => s.url);

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[440px] h-[440px] rounded-3xl overflow-hidden bg-neutral-800 border-2 border-[#566746] shadow-2xl flex-shrink-0 relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={440}
                height={440}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122436]/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-[#18334B] dark:bg-card border border-[#C9B79F]/30 rounded-3xl shadow-2xl p-8 ml-[-60px] z-10 max-w-xl flex-1 backdrop-blur-md'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                {currentTestimonial.badge && (
                  <span className='inline-block px-3 py-1 mb-3 text-xs font-bold rounded-full bg-[#566746]/30 text-[#C9B79F] border border-[#566746]'>
                    {currentTestimonial.badge}
                  </span>
                )}
                <h2 className='text-2xl font-bold text-white mb-1'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-medium text-[#D4C7B8]'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-[#FAEEE5] text-base leading-relaxed mb-8 italic'>
                "{currentTestimonial.description}"
              </p>

              <div className='flex space-x-3'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-11 h-11 bg-[#566746] text-[#FAEEE5] rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#C9B79F] hover:text-[#18334B] shadow-md cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center'>
        {/* Avatar */}
        <div className='w-full aspect-square rounded-3xl overflow-hidden mb-6 border-2 border-[#566746] shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='bg-[#18334B] border border-[#C9B79F]/30 rounded-3xl p-6 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {currentTestimonial.badge && (
                <span className='inline-block px-3 py-1 mb-2 text-xs font-bold rounded-full bg-[#566746]/30 text-[#C9B79F] border border-[#566746]'>
                  {currentTestimonial.badge}
                </span>
              )}
              <h2 className='text-xl font-bold text-white mb-1'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-xs font-medium text-[#D4C7B8] mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-[#FAEEE5] text-sm leading-relaxed mb-6 italic'>
                "{currentTestimonial.description}"
              </p>
              
              <div className='flex justify-center space-x-3'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-[#566746] text-[#FAEEE5] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-[#18334B] border border-[#C9B79F]/40 shadow-lg flex items-center justify-center hover:bg-[#566746] text-[#FAEEE5] transition-all hover:scale-105 cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        {/* Dots */}
        <div className='flex gap-2.5'>
          {items.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-all cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-[#C9B79F] scale-125 shadow-md"
                  : "bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-[#18334B] border border-[#C9B79F]/40 shadow-lg flex items-center justify-center hover:bg-[#566746] text-[#FAEEE5] transition-all hover:scale-105 cursor-pointer'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}
