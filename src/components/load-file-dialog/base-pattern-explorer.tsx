import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { type Color, importPngBufferAsLines } from "@/importers/png";
import { usePng } from "@/context/png-context";

const ayabPatterns = import.meta.glob<{ default: string }>(
  "@/assets/ayab-patterns/**/*.png",
  {
    eager: true,
  }
);

async function handlePngUrlSelect(
  url: string,
  setPngData: (data: Color[][]) => void
) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const lines = importPngBufferAsLines(buffer);
  setPngData(lines);
}

export default function BasePatternExplorer() {
  // Get assets from ayab-patterns and display them in a grid.
  const { setPngData } = usePng();
  return (
    <div className="h-full flex flex-col min-h-0">
      <ScrollArea className="flex-1 min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {Object.keys(ayabPatterns).map((path, index) => (
            <Card
              key={index}
              onClick={() => {
                handlePngUrlSelect(ayabPatterns[path].default, setPngData);
              }}
            >
              <AspectRatio ratio={1} className="w-full h-full">
                <img
                  src={ayabPatterns[path].default}
                  alt={path.split("/").pop()}
                  className="object-contain w-full h-full"
                  loading="lazy"
                  style={{ imageRendering: "pixelated" }}
                />
              </AspectRatio>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
