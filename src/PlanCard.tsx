import React from "react";
import WhatsAppButton from "./WhatsAppButton"; // Assuming WhatsAppButton is in the same folder or adjust path accordingly

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonMessage: string;
  phoneNumber: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  features,
  buttonMessage,
  phoneNumber,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-green-200"></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-4xl font-bold text-gray-800 mb-6">{price}</p>
        <ul className="text-sm text-gray-600 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
