import React from "react";

interface BlogPostCardProps {
  id?: number;
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  author?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  image = "/images/hero.png",
  date = "Recent",
  author = "Centafold Team",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};
