import UPNG from "@pdf-lib/upng";

// Standard RGBA color type
export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

// Import PNG from ArrayBuffer and convert to array of lines of colors
export function importPngBufferAsLines(buffer: ArrayBuffer): Color[][] {
  const upng = UPNG.decode(buffer);
  console.log(upng);
  const width = upng.width;
  const height = upng.height;
  const rgba = new Uint8Array(UPNG.toRGBA8(upng)[0]);
  console.log(rgba);
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
  return lines;
}
