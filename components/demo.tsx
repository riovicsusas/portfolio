'use client';

import React from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const portfolioDestinations = [
  {
    id: 1,
    title: "Latest News",
    cat: "Recent Activity",
    url: "latest/",
    desc: "Live System Incident Logs & Infrastructure Deployments",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Projects",
    cat: "Case Studies & SOPs",
    url: "projects/",
    desc: "6 Operational Domains & Master Capstone Investigation",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "About Me",
    cat: "Background",
    url: "about/",
    desc: "Electronics Engineering Applied to High-Velocity Operations",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Testimonials",
    cat: "Social Proof",
    url: "testimonials/",
    desc: "DTC Brand Founders & Operational Endorsements",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Latest News",
    cat: "Audits & Logs",
    url: "latest/",
    desc: "Matrixify Migration Standards & Flow Triage",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Projects",
    cat: "Order Lifecycle",
    url: "projects/",
    desc: "Order State Machine & Point-of-No-Return Locks",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "About Me",
    cat: "Tech Philosophy",
    url: "about/",
    desc: "Deterministic Routing & Zero Inventory Drift",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Testimonials",
    cat: "Storefront Impact",
    url: "testimonials/",
    desc: "Self-Healing Workflows & Autonomous Order Processing",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  }
];

export default function DemoRadialScrollGalleryBento() {
  const handleItemSelect = (index: number) => {
    const item = portfolioDestinations[index];
    if (item && item.url) {
      window.location.href = item.url;
    }
  };

  return (
    <div className="bg-background min-h-[600px] text-foreground overflow-hidden rounded-lg border w-full">
      <div className="h-[300px] flex flex-col items-center justify-center space-y-4 pt-8">
        <div className="space-y-1 text-center">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold tracking-tighter">
            Riovic Matthew G. Susas
          </h1>
          <p className="text-xs text-muted-foreground font-medium">
            Shopify Plus Operations &middot; 3PL Logistics &middot; Automation Architecture
          </p>
        </div>
        <div className="animate-bounce text-muted-foreground text-xs">&darr; Scroll</div>
      </div>

      <RadialScrollGallery
        className="!min-h-[600px]"
        baseRadius={400}
        mobileRadius={240}
        visiblePercentage={50}
        scrollDuration={2000}
        onItemSelect={handleItemSelect}
      >
        {(hoveredIndex) =>
          portfolioDestinations.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div 
                key={`${project.id}-${index}`} 
                onClick={() => handleItemSelect(index)}
                className="group relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] overflow-hidden rounded-xl bg-card border border-border shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0' : 'scale-100 blur-[1px] grayscale-[20%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-75" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-background/85 backdrop-blur font-semibold border-white/20">
                      {project.cat}
                    </Badge>
                    <div className={`w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-500 shadow-md ${isActive ? 'opacity-100 rotate-0 scale-110' : 'opacity-0 -rotate-45'}`}>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-1'}`}>
                    <h3 className="text-xl font-bold leading-tight text-foreground">{project.title}</h3>
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">{project.desc}</p>
                    <div className={`h-0.5 bg-primary mt-2 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>

      <div className="h-[260px] flex flex-col items-center justify-center bg-muted/20 border-t border-border p-6 text-center space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Let's Connect &amp; Build Resilient Systems
        </h2>
        <p className="text-xs text-muted-foreground max-w-md">
          Available for technical operations, Shopify Plus automation, and logistics systems architecture.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:riovic.susas@gmail.com" className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground">
            Gmail
          </a>
          <a href="https://www.linkedin.com/in/riovicsusas" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground border border-border">
            LinkedIn
          </a>
          <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground border border-border">
            WhatsApp
          </a>
          <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground border border-border">
            Upwork
          </a>
        </div>
      </div>
    </div>
  );
}
