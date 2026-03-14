import React from "react";

export default function AIReview({ resume }) {

  const score = Math.min(
    100,
    (resume.summary ? 20 : 0) +
      (resume.skills.length ? 20 : 0) +
      (resume.education.length ? 20 : 0) +
      (resume.experience.length ? 20 : 0) +
      (resume.links.length ? 20 : 0)
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">

      <h2 className="text-lg font-semibold">AI Resume Review</h2>

      <p className="text-gray-600">
        Resume Score: <b>{score}/100</b>
      </p>

      {score < 80 && (
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
          {!resume.summary && <li>Add a professional summary</li>}
          {!resume.skills.length && <li>Add some skills</li>}
          {!resume.education.length && <li>Add education details</li>}
          {!resume.experience.length && <li>Add work experience</li>}
          {!resume.links.length && <li>Add social links</li>}
        </ul>
      )}

      {score >= 80 && (
        <p className="text-green-600 text-sm">
          Your resume looks strong!
        </p>
      )}

    </div>
  );
}