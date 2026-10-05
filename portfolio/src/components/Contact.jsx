import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3500);
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'}/api/v1/message/send`,
        { senderName: name, subject, message },
        { headers: { "Content-Type": "application/json" } }
      );

      setStatus("success");
      setName("");
      setSubject("");
      setMessage("");
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      console.log("Message send error:", err);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#050508] transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono tracking-widest text-indigo-700 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 inline-block mb-4 shadow-sm">
              GET IN TOUCH
            </span>

            
            
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              Whether you have a software position, a technical project in mind, or simply want to chat about web development — my inbox is open.
            </p>

            <div className="space-y-4">
              <ContactInfoBox 
                icon={<Mail size={20} className="text-indigo-600 dark:text-indigo-400" />} 
                title="Email Me"
                text="kuresusahu18@gmail.com" 
                href="mailto:kuresusahu18@gmail.com"
              />
              <ContactInfoBox 
                icon={<Phone size={20} className="text-cyan-600 dark:text-cyan-400" />} 
                title="Phone / WhatsApp"
                text="+91 7008903717" 
                href="tel:+917008903717"
              />
              <ContactInfoBox 
                icon={<MapPin size={20} className="text-emerald-600 dark:text-emerald-400" />} 
                title="Location"
                text="Bangalore, Karnataka, India" 
                href="#"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white/90 dark:bg-[#0d0e14]/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl relative"
          >
            <form onSubmit={handleSendMessage} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Kuresu Sahu" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full bg-slate-50 dark:bg-[#050508] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500 transition-all text-sm font-medium" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry / Job Opportunity" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    className="w-full bg-slate-50 dark:bg-[#050508] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500 transition-all text-sm font-medium" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea 
                  placeholder="Tell me about your project or inquiry..." 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  rows={5}
                  className="w-full bg-slate-50 dark:bg-[#050508] border border-slate-300 dark:border-white/10 rounded-xl p-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500 transition-all text-sm font-medium resize-none" 
                  required 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2 transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50 text-sm disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Message delivered successfully! I will respond to your email promptly.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <AlertCircle size={18} className="text-rose-600 dark:text-rose-400 flex-shrink-0" />
                    <span>Failed to transmit message. Please check all fields or try emailing directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

// Contact Info Box Helper
const ContactInfoBox = ({ icon, title, text, href }) => (
  <a 
    href={href}
    className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#0d0e14]/80 border border-slate-200/80 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-[#13141c] transition-all duration-300 shadow-sm group"
  >
    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
      {icon}
    </div>
    <div>
      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-wider block">{title}</span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">{text}</span>
    </div>
  </a>
);

export default Contact;
