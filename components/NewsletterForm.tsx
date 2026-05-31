"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {success && (
        <div 
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4"
          role="alert"
          aria-live="polite"
        >
          Successfully subscribed to newsletter!
        </div>
      )}
      {error && (
        <div 
          className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-4" aria-label="Newsletter subscription form">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input 
          id="newsletter-email"
          type="email" 
          placeholder="Enter your email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 px-5 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 focus:border-[#39894c] focus:outline-none transition-colors"
          aria-label="Email address for newsletter subscription"
          aria-describedby={error ? "newsletter-error" : undefined}
        />
        <button 
          type="submit"
          disabled={submitting}
          className="bg-[#39894c] text-white px-6 sm:px-10 py-4 rounded-xl font-bold hover:bg-[#2d6f3d] transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 w-full sm:w-auto sm:min-w-[170px]"
          aria-label={submitting ? 'Subscribing to newsletter' : 'Subscribe to newsletter'}
        >
          {submitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

