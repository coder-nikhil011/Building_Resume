import React from "react";

export default function DesignerLayout({ resume }) {

const { personal, summary, experience, education, skills } = resume;

return (

<div className="max-w-[900px] mx-auto bg-white shadow-lg">

<div className="bg-black text-white p-8">

<h1 className="text-4xl font-bold">
{personal.firstName} {personal.lastName}
</h1>

<p className="text-sm mt-2">{personal.email}</p>

</div>

<div className="p-8">

<h2 className="text-lg font-semibold mb-2">About</h2>
<p className="text-sm mb-6">{summary}</p>

<h2 className="text-lg font-semibold mb-2">Experience</h2>

{experience?.map((exp,i)=>(
<div key={i} className="mb-4">
<p className="font-semibold">{exp.position}</p>
<p className="text-xs">{exp.company}</p>
<p className="text-sm">{exp.description}</p>
</div>
))}

<h2 className="text-lg font-semibold mb-2">Skills</h2>

<div className="flex flex-wrap gap-2">
{skills?.map((skill,i)=>(
<span key={i} className="border px-2 py-1 text-xs">
{skill}
</span>
))}
</div>

</div>

</div>

);
}