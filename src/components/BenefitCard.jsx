import React from "react";

function BenefitCard({ icon, title, description }) {
  return (
    <div className="shadow-lg border dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition bg-white dark:bg-gray-800">
      <i className={`${icon} text-4xl text-indigo-600 dark:text-indigo-400`}></i>
      <h2 className="text-xl font-bold mt-3 mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default BenefitCard;
