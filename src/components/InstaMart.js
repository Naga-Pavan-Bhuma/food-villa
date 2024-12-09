import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-4 m-4 transition duration-300 hover:shadow-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <button
          onClick={setIsVisible}
          className={`px-4 py-2 text-white rounded-lg transition-colors duration-300 
            ${isVisible ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && (
        <p className="mt-3 text-gray-700 text-lg transition-all duration-300">
          {description}
        </p>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Insta Mart
      </h1>
      <Section
        title={"About Insta Mart"}
        description={"Learn more about Insta Mart and what we offer."}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "about" ? "" : "about");
        }}
      />
      <Section
        title={"Team Insta Mart"}
        description={"Meet the team that makes everything possible at Insta Mart."}
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "team" ? "" : "team");
        }}
      />
      <Section
        title={"Careers"}
        description={"Join our team and start a rewarding career with Insta Mart."}
        isVisible={visibleSection === "careers"}
        setIsVisible={() => {
          setVisibleSection(visibleSection === "careers" ? "" : "careers");
        }}
      />
    </div>
  );
};

export default InstaMart;
