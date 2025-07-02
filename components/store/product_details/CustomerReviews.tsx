"use client";

import React, { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import CustomButton from "@/components/ui/CustomButton";

// --- TYPE DEFINITIONS ---
interface Review {
  id: string;
  user: string;
  avatar: string | StaticImageData;
  rating: number;
  comment: string;
  date: string;
}

interface CustomerReviewsProps {
  reviews: Review[];
}

const REVIEWS_PER_PAGE = 3;

// --- MAIN COMPONENT ---
const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  // --- STATE MANAGEMENT ---
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Form State
  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");

  // --- DERIVED STATE & PAGINATION ---
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / reviews.length;
  }, [reviews]);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const currentReviews = reviews.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  // --- HANDLERS ---
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { name, email, rating: formRating, title, reviewText };
    console.log("Submitting review:", newReview);

    setIsFormOpen(false);
    // Reset form fields
    setFormRating(0);
    setName("");
    setEmail("");
    setTitle("");
    setReviewText("");
  };

  return (
    <section
      id="customer-reviews"
      className="mt-16 bg-[#FFE3BB] w-full py-12 md:py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 mb-8">
          Customer Reviews
        </h2>

        {/* --- 1. OVERALL RATING SUMMARY --- */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg bg-gray-50 border">
          <div className="flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold">{averageRating.toFixed(1)}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      averageRating > i ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-600">Based on {reviews.length} reviews</p>
          </div>
          <CustomButton
            as="button"
            btnText={isFormOpen ? "Cancel" : "Write a review"}
            iconPosition="left"
            styles="w-full sm:w-auto"
            handleClick={() => setIsFormOpen(!isFormOpen)}
          />
        </div>

        {/* --- 2. REVIEW SUBMISSION FORM (Conditional) --- */}
        {isFormOpen && (
          <form
            onSubmit={handleFormSubmit}
            className="mt-8 p-6 border rounded-lg bg-white shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Share your thoughts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name & Email */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-12 border rounded-sm border-gray-300 shadow-sm flex pl-4 focus:border-[#5C1B23] focus:ring-1 focus:ring-[#5C1B23] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 border rounded-sm border-gray-300 shadow-sm flex pl-4 focus:border-[#5C1B23] focus:ring-1 focus:ring-[#5C1B23] focus:outline-none"
              />
            </div>
            {/* Rating */}
            <div className="mt-6">
              <label className="font-medium text-gray-700">Your Rating</label>
              <div className="flex mt-2 text-2xl cursor-pointer">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <button
                      type="button"
                      key={ratingValue}
                      onClick={() => setFormRating(ratingValue)}
                      onMouseEnter={() => setHoverRating(ratingValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`Rate ${ratingValue} stars`}
                    >
                      <FaStar
                        className={
                          ratingValue <= (hoverRating || formRating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Title & Review */}
            <div className="mt-6 space-y-6">
              <input
                type="text"
                placeholder="Title of your review"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full h-12 border rounded-sm border-gray-300 shadow-sm flex p-4 focus:border-[#5C1B23] focus:ring-1 focus:ring-[#5C1B23] focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                className="w-full border rounded-sm border-gray-300 shadow-sm flex p-4 focus:border-[#5C1B23] focus:ring-1 focus:ring-[#5C1B23] focus:outline-none"
              ></textarea>
            </div>
            <CustomButton
              as="button"
              btnText="Submit Review"
              iconPosition="left"
              styles="w-full mt-4"
              type="submit"
              handleClick={() => {}}
            />
          </form>
        )}

        {/* --- 3. REVIEWS LIST & PAGINATION --- */}
        <div className="mt-12">
          {currentReviews.map((review) => (
            <div key={review.id} className="flex gap-4 border-t py-6">
              <Image
                src={review.avatar}
                alt={review.user}
                width={48}
                height={48}
                className="rounded-full h-12 w-12 object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="font-semibold text-gray-900">{review.user}</p>
                  <div className="ml-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          review.rating > i
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <p className="mt-2 text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
