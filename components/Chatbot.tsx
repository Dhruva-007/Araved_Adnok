import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessage: Message = {
  id: 1,
  text: "Hello! 👋 Welcome to Araved Adnok. I'm here to help you learn about our services and answer any questions. How can I assist you today?",
  isBot: true,
};

const responses: Record<string, string> = {
  services: "We offer a range of services including CRM Implementation, Client-Focused Solutions, Requirement-Based Delivery, Scalable Architecture, Quality Assurance, and Ongoing Support. Would you like to know more about any specific service?",
  crm: "Our CRM Implementation service includes strategy development, system integration, data migration, and optimization to streamline your customer relationships and boost sales efficiency.",
  projects: "We've delivered 50+ successful projects across various industries including Enterprise Solutions, E-Commerce, Healthcare, Education, Logistics, and Finance. Each project follows our problem-to-solution approach.",
  contact: "You can reach us at hello@aravedadnok.com or call +1 (555) 123-4567. Our business hours are Monday to Friday, 9:00 AM - 6:00 PM. You can also use the contact form on our Contact page!",
  about: "Araved Adnok is a software services company dedicated to solving real challenges and delivering lasting impact. We focus on understanding client requirements and delivering tailored technical solutions with quality and reliability.",
  team: "Our team includes M V Narayana (Technology Leader), Jagadish (Software Professional), and talented developers G Dhruvann and Revanth K. We combine technical expertise with genuine curiosity about your business.",
  ai: "We leverage artificial intelligence and machine learning to build intelligent solutions that automate processes, provide predictive insights, and drive smarter business decisions for our clients.",
  pricing: "Our pricing depends on the scope and complexity of your project. We believe in transparent communication and will provide detailed estimates after understanding your requirements. Contact us for a free consultation!",
  hello: "Hello! Great to hear from you. How can I help you today? Feel free to ask about our services, projects, team, or anything else!",
  hi: "Hi there! 👋 How can I assist you today? You can ask me about our services, projects, or how to get in touch with us.",
  thanks: "You're welcome! Is there anything else you'd like to know about Araved Adnok?",
  bye: "Thank you for chatting with us! Feel free to reach out anytime you need assistance. Have a great day! 👋",
};

function getResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Check for keywords
  if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('what do you do')) {
    return responses.services;
  }
  if (lowerInput.includes('crm') || lowerInput.includes('customer relationship')) {
    return responses.crm;
  }
  if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work')) {
    return responses.projects;
  }
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
    return responses.contact;
  }
  if (lowerInput.includes('about') || lowerInput.includes('company') || lowerInput.includes('who')) {
    return responses.about;
  }
  if (lowerInput.includes('team') || lowerInput.includes('people') || lowerInput.includes('staff')) {
    return responses.team;
  }
  if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence') || lowerInput.includes('machine learning')) {
    return responses.ai;
  }
  if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('quote')) {
    return responses.pricing;
  }
  if (lowerInput.includes('hello') || lowerInput.includes('hey')) {
    return responses.hello;
  }
  if (lowerInput.includes('hi')) {
    return responses.hi;
  }
  if (lowerInput.includes('thank')) {
    return responses.thanks;
  }
  if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
    return responses.bye;
  }
  if (lowerInput.includes('help') || lowerInput.includes('support')) {
    return "I'm here to help! You can ask me about:\n• Our services\n• Projects we've worked on\n• Our team\n• How to contact us\n• Pricing information\n\nWhat would you like to know?";
  }
  
  // Default response
  return "I'd be happy to help! You can ask me about our services, projects, team, or how to get in touch. For more detailed inquiries, please visit our Contact page or email us at hello@aravedadnok.com.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg shadow-blue-200/50 flex items-center justify-center text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Araved Assistant</h3>
                  <p className="text-sm text-blue-100">Here to help you</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      message.isBot
                        ? 'bg-white text-slate-700 shadow-sm border border-slate-100'
                        : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                Ask about services, projects, or contact info
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
