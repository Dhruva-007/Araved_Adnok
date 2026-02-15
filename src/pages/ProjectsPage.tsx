import { ArrowUpRight, Building2, ShoppingCart, HeartPulse, GraduationCap, Truck, BarChart3 } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const projects = [
  {
    icon: Building2,
    category: 'Enterprise Solutions',
    title: 'Business Process Automation',
    problem: 'Manual workflows causing delays and errors in operations.',
    solution: 'Automated workflow system reducing processing time by 70% and eliminating manual errors.',
    tags: ['Automation', 'Integration', 'Dashboard'],
  },
  {
    icon: ShoppingCart,
    category: 'E-Commerce',
    title: 'Custom Retail Platform',
    problem: 'Off-the-shelf solutions couldn\'t handle unique business requirements.',
    solution: 'Tailored e-commerce platform with custom inventory management and analytics.',
    tags: ['Web App', 'Mobile', 'Analytics'],
  },
  {
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Patient Management System',
    problem: 'Disconnected systems creating inefficiencies in patient care.',
    solution: 'Unified platform streamlining appointments, records, and communication.',
    tags: ['HIPAA Compliant', 'Integration', 'Portal'],
  },
  {
    icon: GraduationCap,
    category: 'Education',
    title: 'Learning Management Platform',
    problem: 'Remote learning challenges with engagement and tracking.',
    solution: 'Interactive LMS with real-time progress tracking and collaborative tools.',
    tags: ['E-Learning', 'Video', 'Assessment'],
  },
  {
    icon: Truck,
    category: 'Logistics',
    title: 'Fleet Tracking Solution',
    problem: 'No visibility into fleet operations and delivery status.',
    solution: 'Real-time GPS tracking with route optimization and delivery notifications.',
    tags: ['IoT', 'Real-time', 'Mobile'],
  },
  {
    icon: BarChart3,
    category: 'Finance',
    title: 'Financial Analytics Dashboard',
    problem: 'Data scattered across multiple systems, hard to analyze.',
    solution: 'Centralized dashboard with automated reporting and predictive insights.',
    tags: ['Data Viz', 'Reporting', 'AI/ML'],
  },
];

export function ProjectsPage() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32 bg-gradient-to-b from-white via-slate-50/50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped businesses across industries solve complex 
            challenges.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.1}>
              <div className="group h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Problem/Solution */}
                <div className="px-6 pb-4 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-slate-600 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">Solution</span>
                    <p className="text-sm text-slate-600 mt-1">{project.solution}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
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
