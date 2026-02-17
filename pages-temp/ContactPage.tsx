"use client";
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@aravedadnok.com',
    href: 'mailto:hello@aravedadnok.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Innovation Drive, Tech City, TC 12345',
    href: '#',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
      <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-16 bg-gradient-to-b from-white via-slate-50/50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <AnimatedSection className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-3">
            Get In Touch
          </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
              Let's Build Something Great
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Looking to move your business forward? We’re here to deliver the right solutions.
            </p>
          </AnimatedSection>

          {/* GRID */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* CONTACT FORM */}
            <AnimatedCard className="lg:col-span-3" delay={0.1}>
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-5">
                  Send us a message
                </h3>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="w-7 h-7 text-green-500" />
                      </div>

                      <h4 className="text-xl font-semibold text-slate-900 mb-2">
                        Message Sent!
                      </h4>

                      <p className="text-slate-600">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name
                          </label>
                          <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                              placeholder="Araved Adnok"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                          </label>
                          <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                              placeholder="aravedadnok@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Message
                        </label>
                        <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition"
                            placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                          type="submit"
                          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                )}
              </div>
            </AnimatedCard>

            {/* CONTACT INFO */}
            <AnimatedCard className="lg:col-span-2" delay={0.2}>
              <div className="space-y-5">

                <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-3">
                    Contact Information
                  </h3>

                  <p className="text-blue-100 mb-6 leading-relaxed text-sm">
                    Reach out through any of these channels. We typically respond within 24 hours.
                  </p>

                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                        <a
                            key={info.label}
                            href={info.href}
                            className="flex items-start gap-4 group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                            <info.icon className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="text-xs text-blue-100">
                              {info.label}
                            </div>
                            <div className="font-medium group-hover:underline">
                              {info.value}
                            </div>
                          </div>
                        </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>
  );
}
