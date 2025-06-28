import { Send } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
    return (
        <div className="w-full max-w-xs ml-8 py-4 ">
        <form className="bg-white border-1 border-gray-300 rounded px-8 pt-6 pb-8 mb-4 w-100">
            <h2 className='font-bold text-[#5C1B23]'>Get in Touch</h2>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Name
        </label>
        <input 
        className="border border-gray-300 rounded w-full px-3 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="name" 
        type="text" 
        placeholder="Your Name" />
        </div>
        <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Email
        </label>
        <input
        className="border border-gray-300 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="email" 
        type="email" 
        placeholder="Your email@example.com" />
        
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Subject
        </label>
        <input
        className=" border border-gray-300 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="Subjet" 
        type="text" 
        placeholder="Subject of You Message" />
        
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Message
        </label>
        {/* <input
        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="Subjet" 
        type="text" 
        placeholder="Message" /> */}
        <textarea  placeholder='Write Your Message here...' className='border border-gray-300 rounded w-full size-28 py-2 px-2 focus:outline-none'>

        </textarea>
        
        </div>
        <div className="bg-[#5C1B23] hover:bg-[#7c7c7c] flex items-center justify-center gap-4 rounded py-3 ">
        <Send className='text-white'></Send>
        <button className=" text-white font-medium rounded focus:outline-none focus:shadow-outline" type="button">
        
            Send Message 
        </button>
        
        </div>
    </form>
    
    </div>
    )
}

export default ContactForm