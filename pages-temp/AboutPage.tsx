"use client";
import { Target, Users, Lightbulb, CheckCircle2, Brain, Linkedin } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const values = [
  {
    icon: Brain,
    title: 'AI',
    description: 'Leveraging artificial intelligence and machine learning to build intelligent solutions that automate processes, provide predictive insights, and drive smarter business decisions.',
  },
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to solve real-world business problems through thoughtful, well-crafted solutions.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, deeply understanding your needs before writing a single line of code.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Approach',
    description: 'We combine proven methodologies with cutting-edge technologies to deliver solutions that stand the test of time.',
  },
];

const commitments = [
  'Understanding your unique requirements before proposing solutions',
  'Transparent communication throughout the development process',
  'Delivering reliable, scalable, and maintainable solutions',
  'Providing ongoing support and continuous improvement',
  'Meeting deadlines without compromising on quality',
  'Building long-term partnerships based on trust and results',
];

const coreTeam = [
  {
    name: 'M V Narayana',
    role: 'Technology Leader',
    description: 'A Software Engineer and Technology Leader with deep experience in building dependable, well-crafted digital solutions.',
  },
  {
    name: 'Janardhan',
    role: 'Software Professional',
    description: 'A Software Professional with strong technical expertise and practical industry experience.',
  },
];

const interns = [
  {
    name: 'G Dhruvann',
    role: 'Developer',
    description: 'An innovation led developer who blends creativity with rigorous analytical insight to architect scalable, high performance systems that address complex real world challenges. Driven to build what truly matters.',
  },
  {
    name: 'Revanth K',
    role: 'Developer',
    description: 'A creative, innovative, and disciplined developer with strong analytical and problem-solving skills. I focus on building efficient, well-structured solutions while continuously striving for technical growth and excellence.',
  },
];

export default function AboutPage() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32 bg-white overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/80 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Solving Real Challenges.
                <br />
                <span className="text-blue-600">Delivering Lasting Impact.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Araved Adnok is a company dedicated to understanding
                and solving the unique challenges businesses face. We don't believe in 
                one-size-fits-all solutions – every project begins with listening.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team combines technical expertise with genuine curiosity about your 
                business. We gather requirements meticulously, design solutions thoughtfully, 
                and deliver solution that truly works for you.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{commitment}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-5">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-24 lg:mt-32">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Meet the People Behind Our Success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to delivering excellence in every project.
            </p>
          </AnimatedSection>

          {/* Core Team */}
          <div className="mb-16">
            <AnimatedSection>
              <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg">
                  Core Team
                </span>
              </h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coreTeam.map((member, index) => (
                <AnimatedCard key={member.name} delay={index * 0.15}>
                  <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900">
                            {member.name}
                          </h4>
                          <p className="text-blue-600 font-medium">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {member.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer">
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm font-medium">Connect</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Smart Interns */}
          <div>
            <AnimatedSection>
              <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg">
                  Smart Interns
                </span>
              </h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {interns.map((member, index) => (
                <AnimatedCard key={member.name} delay={index * 0.15}>
                  <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white text-lg font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">
                            {member.name}
                          </h4>
                          <p className="text-cyan-600 font-medium text-sm">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
