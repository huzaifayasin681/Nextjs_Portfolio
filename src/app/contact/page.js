"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // EmailJS service configuration
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'huzaifayasin681@gmail.com'
        },
        publicKey
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message and I'll get back to you ASAP!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8"
        >
          <div className="relative group">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-6 py-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="relative group">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-6 py-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="relative group">
            <FiMessageSquare className="absolute left-4 top-6 text-gray-400 w-5 h-5" />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full pl-12 pr-6 py-4 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#1F2937',
              color: '#fff',
              borderRadius: '12px'
            }
          }}
        />
      </div>
    </div>
  );
};

export default Contact;