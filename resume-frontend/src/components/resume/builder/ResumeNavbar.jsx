import React from "react";

export default function ResumeNavbar({ activeTab, setActiveTab, handleDownload }) {

  const tabStyle = (tab) =>
    `px-4 py-1 rounded-md text-sm ${
      activeTab === tab ? "bg-gray-200 font-semibold" : "text-gray-600"
    }`;

  return (
    <div className="flex justify-between items-center border-b pb-2 mb-4">

      <div className="flex gap-3 items-center">

        <h2 className="font-semibold">Untitled</h2>

        <button
          className={tabStyle("edit")}
          onClick={() => setActiveTab("edit")}
        >
          Edit
        </button>

        <button
          className={tabStyle("customize")}
          onClick={() => setActiveTab("customize")}
        >
          Customize
        </button>

        <button
          className={tabStyle("ai")}
          onClick={() => setActiveTab("ai")}
        >
          AI Review
        </button>

      </div>

      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
      >
        Download
      </button>

    </div>
  );
}