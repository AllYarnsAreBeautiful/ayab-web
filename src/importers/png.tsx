import type { Color, PngData } from "@/context/png-context";
import UPNG from "@pdf-lib/upng";

// Import PNG from ArrayBuffer and convert to array of lines of colors
export function importPngBufferAsLines(
  buffer: ArrayBuffer,
  name: string
): PngData {
  const upng = UPNG.decode(buffer);
  const width = upng.width;
  const height = upng.height;
  const rgba = new Uint8Array(UPNG.toRGBA8(upng)[0]);
  const lines: Color[][] = [];
  for (let row = 0; row < height; row++) {
    const line: Color[] = [];
    for (let col = 0; col < width; col++) {
      const idx = (width * row + col) * 4;
      line.push({
        r: rgba[idx],
        g: rgba[idx + 1],
        b: rgba[idx + 2],
        a: rgba[idx + 3],
      });
    }
    lines.push(line);
  }
  return {
    title: name,
    width,
    height,
    data: lines,
  };
}
