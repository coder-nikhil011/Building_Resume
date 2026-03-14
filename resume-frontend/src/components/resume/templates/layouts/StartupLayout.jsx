import React from "react";

export default function StartupLayout({ resume }) {

const { personal, summary, experience, education, skills } = resume;

return (
<div className="max-w-[900px] mx-auto bg-white shadow-lg p-8">

<div className="flex justify-between items-center border-b pb-4">

<div>
<h1 className="text-3xl font-bold">
{personal.firstName} {personal.lastName}
</h1>

<p className="text-sm text-gray-500">
{personal.email}
</p>
</div>

</div>

<div className="mt-6">

<h2 className="text-xl font-semibold mb-2">Summary</h2>
<p className="text-sm mb-6">{summary}</p>

<h2 className="text-xl font-semibold mb-2">Experience</h2>

{experience?.map((exp,i)=>(
<div key={i} className="mb-4">
<p className="font-semibold">{exp.position}</p>
<p className="text-xs text-gray-500">{exp.company}</p>
<p className="text-sm">{exp.description}</p>
</div>
))}

<h2 className="text-xl font-semibold mb-2">Skills</h2>

<div className="flex flex-wrap gap-2">
{skills?.map((skill,i)=>(
<span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">
{skill}
</span>
))}
</div>

</div>

</div>
);
}