// components/ContactForm.tsx
"use client";
import React from "react";
import { Send } from "lucide-react";
import FormInput from "./FormInput";
import { useContactForm } from "@/hooks/useContactForm";


const ContactForm = () => {
    const { form, status, handleChange, handleSubmit } = useContactForm();

    return (
        <div className="w-full h-full pt-4 pb-4">
        <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-300 rounded-l px-6 pt-6 pb-6 shadow-md"
        >
            <h2 className="font-bold text-xl mb-4 text-[#5C1B23]">Get in Touch</h2>

            <FormInput
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            />
            <FormInput
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            />
            <FormInput
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            />

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="border border-gray-300 rounded w-full px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
                required
            />
            </div>

            {status.text && (
            <div className={`mb-4 text-sm ${status.isError ? "text-red-600" : "text-green-600"}`}>
                {status.text}
            </div>
            )}

            <button
            type="submit"
            disabled={status.loading}
            className="flex items-center justify-center gap-2 bg-[#5C1B23] hover:bg-[#7c7c7c] text-white py-3 rounded w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <Send />
            <span className="font-medium">
                {status.loading ? "Sending..." : "Send Message"}
            </span>
            </button>
        </form>
        </div>
    );
    };

    export default ContactForm;
