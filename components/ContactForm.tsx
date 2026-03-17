"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ first_name: "", last_name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5">
        <input 
          type="text" 
          placeholder="First Name" 
          required
          value={formData.first_name}
          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
          className="px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          required
          value={formData.last_name}
          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
          className="px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" 
        />
      </div>
      <input 
        type="tel" 
        placeholder="Phone" 
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" 
      />
      <input 
        type="email" 
        placeholder="Email" 
        required
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors" 
      />
      <textarea 
        placeholder="Message" 
        rows={5} 
        required
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-[#39894c] focus:outline-none transition-colors resize-none"
      ></textarea>
      <button 
        type="submit" 
        disabled={submitting}
        className="bg-[#39894c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#2d6f3d] transition-colors shadow-lg hover:shadow-xl w-full md:w-auto disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Submit Message'}
      </button>
    </form>
  );
}
