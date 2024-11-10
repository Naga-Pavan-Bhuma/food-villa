import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex items-center justify-center space-y-6 py-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full py-3 px-5 rounded-full text-gray-800 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300"
            placeholder="Search for restaurants"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-200 ease-in-out">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array(16)
          .fill("")
          .map((_, index) => (
            <div
              className="w-64 h-96 flex flex-col items-center p-4 m-6 bg-white rounded-lg shadow-lg max-w-xs space-y-3 transform hover:scale-105 transition duration-300"
              key={index}
            >
              <div className="w-full h-48 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="space-y-2 w-full px-4">
                <div className="w-3/4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
