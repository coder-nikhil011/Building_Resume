export default function MinimalTemplate({ resume }) {
  const { personal, summary } = resume;

  return (
    <div className="bg-white p-6 text-sm">
      <h1 className="text-lg font-bold">
        {personal.firstName} {personal.lastName}
      </h1>
      <p>{personal.email} | {personal.phone}</p>

      {summary && <p className="mt-4">{summary}</p>}
    </div>
  );
}