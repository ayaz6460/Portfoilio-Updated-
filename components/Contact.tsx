
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Instagram, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import GlassCard from './GlassCard';
import AnimatedInputBorder from './ui/animated-input-border';
import { SOCIAL_LINKS } from '../constants';
import { Reveal } from './ui/Reveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState(''); // Spam protection
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // CONFIGURATION: Updated with your EmailJS credentials
  // CONFIGURATION: Updated with your EmailJS credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Spam Protection
    if (honeypot) {
      console.log('Bot detected');
      return;
    }

    // Validation
    if (formState.name.length < 2) {
      setError('Please enter a valid name.');
      return;
    }
    if (!validateEmail(formState.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formState.message.length < 10) {
      setError('Message is too short (min 10 characters).');
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: 'contact@iamayaz.me',
        sent_at: new Date().toLocaleString(),
      };

      // Sending using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please check your network or credentials.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSending(false);
    }
  };

  const socials = [
    { Icon: Github, href: SOCIAL_LINKS.github },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram },
  ];

  return (
    <section id="contact" className="py-24 px-6 overflow-hidden relative">
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] w-full max-w-sm px-4"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-green-100 shadow-2xl rounded-2xl p-4 flex items-center space-x-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Message Sent!</h4>
                <p className="text-xs text-gray-500">I'll get back to you shortly.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-4">Get In Touch</h2>
            </Reveal>
            <Reveal delay={0.3}>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Ready to bring your ideas to life?</h3>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0">
                Whether you have a specific project in mind or just want to say hello, feel free to drop a message. I'm always open to new opportunities and collaborations.
              </p>
            </Reveal>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <Reveal delay={0.5}>
                <a href={SOCIAL_LINKS.email} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs uppercase font-bold text-gray-400">Email Me</div>
                    <div className="text-base md:text-lg font-bold">ayaz16318@gmail.com</div>
                  </div>
                </a>
              </Reveal>

              <div className="pt-8 w-full">
                <Reveal delay={0.6}>
                  <div className="text-xs uppercase font-bold text-gray-400 mb-4">Social Presence</div>
                  <div className="flex justify-center lg:justify-start space-x-4">
                    {socials.map(({ Icon, href }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard className="!p-6 md:!p-10 w-full max-w-2xl mx-auto relative group">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Spam Protection - Honeypot Field */}
                <input
                  type="text"
                  className="hidden"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="text-left">
                  <label className="block text-sm font-bold mb-2 uppercase tracking-tighter text-gray-500">Name</label>
                  <AnimatedInputBorder hasValue={!!formState.name}>
                    <input
                      type="text"
                      name="user_name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-0 transition-all text-sm md:text-base relative z-10"
                      placeholder="Your Name"
                      required
                    />
                  </AnimatedInputBorder>
                </div>
                <div className="text-left">
                  <label className="block text-sm font-bold mb-2 uppercase tracking-tighter text-gray-500">Email</label>
                  <AnimatedInputBorder hasValue={!!formState.email}>
                    <input
                      type="email"
                      name="user_email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-0 transition-all text-sm md:text-base relative z-10"
                      placeholder="name@email.com"
                      required
                    />
                  </AnimatedInputBorder>
                </div>
                <div className="text-left">
                  <label className="block text-sm font-bold mb-2 uppercase tracking-tighter text-gray-500">Message</label>
                  <AnimatedInputBorder hasValue={!!formState.message}>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/50 border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-0 transition-all resize-none text-sm md:text-base relative z-10"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </AnimatedInputBorder>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm flex items-center space-x-2 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${isSent
                    ? 'bg-green-500 text-white cursor-default'
                    : isSending
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-black hover:shadow-xl active:scale-[0.98]'
                    }`}
                >
                  {isSending ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : isSent ? (
                    <>
                      <span>Message Sent!</span>
                      <CheckCircle size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
