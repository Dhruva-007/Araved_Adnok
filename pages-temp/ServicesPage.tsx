"use client";

import {
  Database,
  Users,
  Settings,
  Rocket,
  Shield,
  HeadphonesIcon
} from "lucide-react";

import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const services = [
  {
    icon: Database,
    category: "CRM",
    title: "CRM Implementation",
    description:
      "Expert CRM implementation including strategy, integration, migration, and optimization to improve customer relationships and sales efficiency.",
  },
  {
    icon: Users,
    category: "Consulting",
    title: "Client-Focused Solutions",
    description:
      "We work closely with you to understand challenges and deliver solutions tailored specifically to your business needs.",
  },
  {
    icon: Settings,
    category: "Delivery",
    title: "Requirement-Based Delivery",
    description:
      "From requirement gathering to deployment, every step aligns with your business vision and goals.",
  },
  {
    icon: Rocket,
    category: "Architecture",
    title: "Scalable Architecture",
    description:
      "Systems designed to scale with your growth while maintaining performance and reliability.",
  },
  {
    icon: Shield,
    category: "Quality",
    title: "Quality Assurance",
    description:
      "Comprehensive testing ensures stable, secure, and bug-free software delivery.",
  },
  {
    icon: HeadphonesIcon,
    category: "Support",
    title: "Ongoing Support",
    description:
      "Continuous monitoring, updates, and maintenance to keep your solutions running smoothly.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative pt-14 pb-10 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-5">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-2">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
            What We Offer
          </h2>

          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Comprehensive services designed to transform your business challenges into efficient, reliable solutions.
          </p>
        </AnimatedSection>

        {/* GRID — SAME AS PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 lg:gap-y-2">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.06}>
              <div className="group h-full bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">

                {/* Header */}
                <div className="p-4 pb-2">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-4 pb-4">
                  <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider">
                    Service
                  </span>

                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
}