import type { Color } from "@/importers/png";

export default function Row({ data }: { data: Color[] }) {
  if (data.length > 200) data = data.slice(0, 200);
  const spacerSize = (200 - data.length) / 2;
  console.log(spacerSize);
  return (
    <div className="flex w-full">
      <div style={{ flex: spacerSize }} />
      {data.map((item, index) => (
        <div
          key={index}
          className="flex-1 aspect-square"
          style={{ backgroundColor: `rgb(${item.r},${item.g},${item.b})` }}
        />
      ))}
      <div style={{ flex: spacerSize }} />
    </div>
  );
}
