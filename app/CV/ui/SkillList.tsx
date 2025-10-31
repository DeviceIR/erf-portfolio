export default function SkillList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <ul className="text-sm space-y-1 list-disc list-inside">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
