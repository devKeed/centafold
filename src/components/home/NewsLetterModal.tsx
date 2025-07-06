import React, { useState } from "react";

interface NewsletterModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen = false,
  onClose,
}) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest news and insights.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded mb-4"
        />
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Subscribe
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
