import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      
      <h3 className="capitalize text-xl font-semibold text-gray-800 mb-2">
        {job.profile}
      </h3>

      <p className="text-gray-600 mb-3">
        {job.desc}
      </p>

      <p className="text-sm text-gray-700 mb-4">
        <strong>Experience:</strong>{" "}
        {job.exp === 0
          ? "No Experience Required"
          : `${job.exp}+ year${job.exp > 1 ? "s" : ""}`}
      </p>

      <div className="flex flex-wrap gap-2">
        {job.techs.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
};

export default JobCard;