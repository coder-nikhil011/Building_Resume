import React from "react";

export default function TimelineProLayout({ resume }) {

const { personal, experience } = resume;

return (

<div className="max-w-[900px] mx-auto bg-white shadow-lg p-8">

<h1 className="text-3xl font-bold mb-6">
{personal.firstName} {personal.lastName}
</h1>

<div className="border-l-2 border-gray-300 pl-6">

{experience?.map((exp,i)=>(
<div key={i} className="mb-6">

<p className="font-semibold">{exp.position}</p>
<p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
<p className="text-sm">{exp.description}</p>

</div>
))}

</div>

</div>

);
}