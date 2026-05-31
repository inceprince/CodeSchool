import React from "react";

function TeacherCard({ img, name, degree, experience }) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl border dark:border-gray-700 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 object-cover rounded-full mb-3 border-2 border-indigo-200 dark:border-indigo-700"
      />
      <h2 className="font-semibold text-base text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{degree}</p>
      <span className="mt-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
        {experience}
      </span>
    </div>
  );
}

export default TeacherCard;
