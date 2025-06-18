import UPNG from "upng-js";

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
  const width = upng.width;
  const height = upng.height;
  const rgba = new Uint8Array(UPNG.toRGBA8(upng)[0]);
  const lines: Color[][] = [];
  for (let y = 0; y < height; y++) {
    const line: Color[] = [];
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) * 4;
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
