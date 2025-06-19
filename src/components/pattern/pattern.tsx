import { ScrollArea } from "@/components/ui/scroll-area";
import { usePng } from "@/context/png-context";
import Row from "./row";

function Bar() {
  return (
    <div className="flex w-full h-5">
      <div className="bg-amber-400 flex-1" />
      <div className="bg-green-600 flex-1" />
    </div>
  );
}
export default function Pattern() {
  const { pngData } = usePng();
  return (
    <div className="w-full h-20">
      <Bar></Bar>
      <ScrollArea>
        {pngData?.map((row, index) => (
          <Row key={index} data={row} />
        ))}
      </ScrollArea>
    </div>
  );
}
