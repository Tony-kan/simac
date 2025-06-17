// Todo: implement the subscribe newsletter


"use client"

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) => {
    // RFC 5322 compliant email regex
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!email.trim()) {
      setMessage("Please enter an email address");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://api.example.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setMessage("Thank you for subscribing!");
      } else {
        const errorData = await response.json();
        setMessage(
          errorData.message || "Subscription failed. Please try again."
        );
      }
    } catch (error) {
      setMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    // Todo: added the padding of 10
    <div className="bg-gray-900 p-10">
      <h3 className="text-2xl font-bold mb-4 italic">Subscribe Newsletter</h3>
      <p className="text-gray-300 mb-4 text-xl">
        The latest events, news, ideas and updates
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="bg-white text-black px-10 py-2 rounded-l-md w-full border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-300"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="bg-orange-200 text-2xl text-black px-4 py-2 rounded-r-md font-bold disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Subscribe"}
          </button>
        </div>
      </form>

      {message && (
        <p
          className={`mt-3 text-lg ${
            message.includes("Thank you") ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;