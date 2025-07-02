import { Send } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
    return (
        <div className="w-full h-full p-8">
        <form className="bg-white border border-gray-300 rounded-lg px-6 pt-6 pb-8 shadow-md">
        <h2 className="font-bold text-xl mb-4 text-[#5C1B23]">Get in Touch</h2>

        {/* Name Field */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
                className="border border-gray-300 rounded w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
                type="text"
                placeholder="Your Name"
            />
        </div>

        {/* Email Field */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
                className="border border-gray-300 rounded w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
                type="email"
                placeholder="your@email.com"
            />
        </div>

        {/* Subject Field */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input
                className="border border-gray-300 rounded w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
                type="text"
                placeholder="Subject"
            />
        </div>

        {/* Message Field */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
                placeholder="Write your message here..."
                className="border border-gray-300 rounded w-full px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
            />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center gap-2 bg-[#5C1B23] hover:bg-[#7c7c7c] text-white py-3 rounded cursor-pointer">
            <Send />
            <button type="button" className="font-medium">Send Message</button>
        </div>
    </form>
</div>

    )
}

export default ContactForm