export default function ModernTemplate({ resume }) {
  const { personal, summary, skills } = resume;

  return (
    <div className="bg-white shadow grid grid-cols-3 min-h-[600px]">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-lg font-bold">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-xs">{personal.email}</p>
      </div>

      <div className="col-span-2 p-6">
        <p>{summary}</p>
      </div>
    </div>
  );
}