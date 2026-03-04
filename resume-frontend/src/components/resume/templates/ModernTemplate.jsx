import React from "react";

const formatText = (text = "") =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/__(.*?)__/g, "<u>$1</u>")
    .replace(/_(.*?)_/g, "<i>$1</i>");

export default function ModernTemplate({ resume }) {
  const {
    personal = {},
    summary = "",
    skills = [],
    education = [],
    experience = [],
    links = [],
    courses = [],
    languages = [],
    hobbies = "",
    activities = [],
    internships = [],
    references = [],
  } = resume || {};

  const Section = ({ title, children }) => (
    <section className="space-y-1">
      <h2 className="text-indigo-600 font-semibold uppercase text-xs tracking-wide">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </section>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow text-sm space-y-4">
      {/* HEADER */}
      <div className="border-b pb-3">
        <h1 className="text-2xl font-bold">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-gray-600">
          {personal.email}
          {personal.phone && ` • ${personal.phone}`}
          {personal.city && ` • ${personal.city}`}
          {personal.country && `, ${personal.country}`}
        </p>
      </div>

      {summary && (
        <Section title="Profile">
          <p>{summary}</p>
        </Section>
      )}

      {skills.length > 0 && (
        <Section title="Skills">
          <div className="grid grid-cols-2 gap-x-4">
            {skills.map((s, i) => (
              <p key={i}>
                {s.name}{" "}
                <span className="text-gray-500">({s.level})</span>
              </p>
            ))}
          </div>
        </Section>
      )}

      {experience.length > 0 && (
        <Section title="Experience">
          {experience.map((e, i) => (
            <div key={i}>
              <p className="font-medium">
                {e.role} — {e.company}
              </p>
              <p className="text-gray-500 text-xs">
                {e.start} – {e.end}
                {e.city && ` • ${e.city}`}
              </p>
              {e.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(e.description),
                  }}
                />
              )}
            </div>
          ))}
        </Section>
      )}

      {education.length > 0 && (
        <Section title="Education">
          {education.map((e, i) => (
            <div key={i}>
              <p className="font-medium">
                {e.degree} — {e.school}
              </p>
              <p className="text-gray-500 text-xs">
                {e.startDate} – {e.endDate}
                {e.city && ` • ${e.city}`}
              </p>
            </div>
          ))}
        </Section>
      )}

      {internships.length > 0 && (
        <Section title="Internships">
          {internships.map((i, idx) => (
            <div key={idx}>
              <p className="font-medium">{i.title}</p>
              <p className="text-gray-500 text-xs">
                {i.start} – {i.end}
                {i.city && ` • ${i.city}`}
                {i.state && `, ${i.state}`}
              </p>
              {i.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(i.description),
                  }}
                />
              )}
            </div>
          ))}
        </Section>
      )}

      {courses.length > 0 && (
        <Section title="Courses">
          {courses.map((c, i) => (
            <p key={i}>
              {c.name} — {c.institute}
            </p>
          ))}
        </Section>
      )}

      {languages.length > 0 && (
        <Section title="Languages">
          <p>
            {languages
              .map((l) => `${l.name} (${l.level})`)
              .join(", ")}
          </p>
        </Section>
      )}

      {links.length > 0 && (
        <Section title="Links">
          {links.map((l, i) => (
            <p key={i}>
              {l.label}: {l.url}
            </p>
          ))}
        </Section>
      )}

      {activities.length > 0 && (
        <Section title="Activities">
          {activities.map((a, i) => (
            <div key={i}>
              <p className="font-medium">
                {a.title} — {a.role}
              </p>
              {a.description && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(a.description),
                  }}
                />
              )}
            </div>
          ))}
        </Section>
      )}

      {hobbies && (
        <Section title="Hobbies">
          <p>{hobbies}</p>
        </Section>
      )}

      {references.length > 0 && (
        <Section title="References">
          {references.map((r, i) => (
            <p key={i}>
              {r.name} — {r.company}
            </p>
          ))}
        </Section>
      )}
    </div>
  );
}