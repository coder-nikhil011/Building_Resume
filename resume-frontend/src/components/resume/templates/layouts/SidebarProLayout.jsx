import React from "react";

export default function SidebarProLayout({ resume }) {

const { personal, summary, experience, education, skills } = resume;

return (
<div className="max-w-[900px] mx-auto bg-white shadow-lg grid grid-cols-3">

<div className="bg-blue-700 text-white p-6">

<h1 className="text-2xl font-bold">
{personal.firstName} {personal.lastName}
</h1>

<p className="text-sm mt-2">
{personal.email}
</p>

<h2 className="mt-6 font-semibold border-b">Skills</h2>

<div className="mt-2 space-y-1">
{skills?.map((skill,i)=>(
<p key={i} className="text-sm">{skill}</p>
))}
</div>

</div>

<div className="col-span-2 p-6">

<h2 className="text-lg font-semibold border-b mb-2">Summary</h2>
<p className="text-sm mb-4">{summary}</p>

<h2 className="text-lg font-semibold border-b mb-2">Experience</h2>
{experience?.map((exp,i)=>(
<div key={i} className="mb-3">
<p className="font-semibold">{exp.position}</p>
<p className="text-xs text-gray-500">{exp.company}</p>
<p className="text-sm">{exp.description}</p>
</div>
))}

<h2 className="text-lg font-semibold border-b mb-2">Education</h2>
{education?.map((edu,i)=>(
<div key={i}>
<p className="font-semibold">{edu.degree}</p>
<p className="text-sm">{edu.school}</p>
</div>
))}

</div>

</div>
);
}