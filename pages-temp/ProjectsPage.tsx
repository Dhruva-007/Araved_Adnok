"use client";
import {
  ArrowUpRight,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Truck,
  BarChart3
} from 'lucide-react';

import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const projects = [
  {
    icon: Building2,
    category: 'Enterprise Solutions',
    title: 'Business Process Automation',
    solution:
        'Automated workflow system reducing processing time by 70% and eliminating manual errors.',
    tags: ['Automation', 'Integration'],
  },
  {
    icon: ShoppingCart,
    category: 'E-Commerce',
    title: 'Custom Retail Platform',
    solution:
        'Tailored e-commerce platform with custom inventory management and analytics.',
    tags: ['Web App', 'Mobile'],
  },
  {
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Patient Management System',
    solution:
        'Unified platform streamlining appointments, records, and communication.',
    tags: ['HIPAA', 'Integration'],
  },
  {
    icon: GraduationCap,
    category: 'Education',
    title: 'Learning Management Platform',
    solution:
        'Interactive LMS with real-time progress tracking and collaborative tools.',
    tags: ['E-Learning', 'Video'],
  },
  {
    icon: Truck,
    category: 'Logistics',
    title: 'Fleet Tracking Solution',
    solution:
        'Real-time GPS tracking with route optimization and delivery notifications.',
    tags: ['IoT', 'Realtime'],
  },
  {
    icon: BarChart3,
    category: 'Finance',
    title: 'Financial Analytics Dashboard',
    solution:
        'Centralized dashboard with automated reporting and predictive insights.',
    tags: ['Data Viz', 'Reporting'],
  },
];

export default function ProjectsPage() {
  return (
      <section className="relative pt-14 pb-10 bg-gradient-to-b from-white via-slate-50/50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <AnimatedSection className="text-center mb-5">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-2">
            Our Work
          </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Projects That Deliver Results
            </h2>

            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              See how we've helped businesses across industries solve complex challenges.
            </p>
          </AnimatedSection>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 lg:gap-y-2">
            {projects.map((project, index) => (
                <AnimatedCard key={project.title} delay={index * 0.06}>
                  <div className="group h-full bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">

                    {/* Header */}
                    <div className="p-4 pb-2">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                          <project.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                        </div>

                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Solution */}
                    <div className="px-4 pb-3">
                  <span className="text-[10px] font-semibold text-green-500 uppercase tracking-wider">
                    Solution
                  </span>

                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-medium rounded"
                            >
                        {tag}
                      </span>
                        ))}
                      </div>

                      <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                      </div>
                    </div>

                  </div>
                </AnimatedCard>
            ))}
          </div>

        </div>
      </section>
  );
}
