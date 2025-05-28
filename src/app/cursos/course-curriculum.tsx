interface Props {
  curriculum?: Array<string>;
}
export default function CourseCurriculum({ curriculum }: Props) {
  if (!curriculum) return null;
  return (
    <section className="container flex flex-col gap-4">
      <h1 className="uppercase text-5xl lg:text-7xl font-extrabold">MATRIZ CURRICULAR</h1>
      <ul className="pl-6 list-disc grid grid-cols-1 md:grid-cols-2">
        {curriculum.map((subject, index) => (
          <li key={index} className="text-xl">
            {subject}
          </li>
        ))}
      </ul>
    </section>
  );
}
