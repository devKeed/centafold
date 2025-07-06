import React from "react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-blue-600 font-medium">
          {item.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};
