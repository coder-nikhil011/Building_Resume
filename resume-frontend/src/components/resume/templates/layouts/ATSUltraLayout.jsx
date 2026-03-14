import React from "react";

export default function ATSUltraLayout({ resume }) {

const { personal, summary, experience, education, skills } = resume;

return (

<div className="max-w-[800px] mx-auto bg-white p-8">

<h1 className="text-2xl font-bold">
{personal.firstName} {personal.lastName}
</h1>

<p className="text-sm mb-4">
{personal.email}
</p>

<h2 className="font-semibold">Summary</h2>
<p className="text-sm mb-4">{summary}</p>

<h2 className="font-semibold">Experience</h2>

{experience?.map((exp,i)=>(
<div key={i}>
<p className="font-semibold">{exp.position}</p>
<p className="text-sm">{exp.company}</p>
</div>
))}

<h2 className="font-semibold mt-4">Education</h2>

{education?.map((edu,i)=>(
<p key={i} className="text-sm">{edu.degree}</p>
))}

<h2 className="font-semibold mt-4">Skills</h2>

<p className="text-sm">{skills?.join(", ")}</p>

</div>

);
}