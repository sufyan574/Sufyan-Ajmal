"use client";

import { useState } from "react";
import { MessageCircle, Loader2 } from "lucide-react";

const HIRE_ME_URL = "https://wa.me/923174072455";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMsg('');

    try {
      // Call the API route for sending email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        // Show error message returned by API if any
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mb-12 text-lg text-slate-400">
            Have a project in mind? Let&apos;s discuss — drop a message below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-xl md:p-10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project discussion / Job opportunity / etc."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3.5 font-semibold text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            {isSuccess && (
              <p className="mt-6 text-center text-base font-medium text-primary-400">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            {errorMsg && (
              <p className="mt-6 text-center text-base font-medium text-red-500">
                {errorMsg}
              </p>
            )}

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <p className="mb-3 text-sm text-slate-500">
                Or message me directly on WhatsApp
              </p>
              <a
                href={HIRE_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-primary-500/50 hover:bg-zinc-800 hover:text-primary-400"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
