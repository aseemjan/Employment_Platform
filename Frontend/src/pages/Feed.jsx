import { useState, useEffect, useRef } from "react";
import { fetchJobs, searchJobs } from "../api/api";
import JobCard from "../components/JobCard";

const Feed = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef(null);
  const jobsPerPage = 6;

  const loadJobs = async () => {
    try {
      const res = await fetchJobs();
      setJobs(res.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleSearch = async () => {
    try {
      if (searchText.trim()) {
        const res = await searchJobs(searchText);
        setJobs(res.data);
      } else {
        await loadJobs();
      }
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    loadJobs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-4 py-10 flex flex-col items-center pt-24">
      <h2 className="text-3xl font-bold mb-6">Job Posts</h2>

      {/* Search Bar */}
      <div className="w-full max-w-xl flex gap-2 mb-10">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search job..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Top Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center flex-wrap gap-2 mb-10 w-full max-w-6xl">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Job Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>

      {/* Bottom Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center flex-wrap gap-2 mt-10 w-full max-w-6xl">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;