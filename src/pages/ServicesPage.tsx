import { Database, Users, Settings, Rocket, Shield, HeadphonesIcon } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const services = [
  {
    icon: Database,
    title: 'CRM Implementation',
    description: 'Expert CRM implementation services including strategy development, system integration, data migration, and optimization to streamline your customer relationships and boost sales efficiency.',
  },
  {
    icon: Users,
    title: 'Client-Focused Solutions',
    description: 'We work closely with you to understand your challenges and create solutions that truly address your needs.',
  },
  {
    icon: Settings,
    title: 'Requirement-Based Delivery',
    description: 'From gathering requirements to final deployment, we ensure every detail aligns with your vision and goals.',
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Build for today, ready for tomorrow. Our solutions are designed to grow with your business.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure reliable, bug-free software delivery.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at delivery. We provide continuous support and maintenance for your solutions.',
  },
];

export function ServicesPage() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32 bg-white min-h-screen">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive services designed to transform your business
            challenges into efficient, reliable solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <div className="group h-full p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
