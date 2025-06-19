import React, { createContext, useContext, useState } from "react";

export type PngData = {
  title: string;
  width: number;
  height: number;
  data: Color[][];
} | null;

interface PngContextType {
  pngData: PngData;
  setPngData: (data: PngData) => void;
}

const PngContext = createContext<PngContextType | undefined>(undefined);

export function usePng() {
  const ctx = useContext(PngContext);
  if (!ctx) throw new Error("usePng must be used within a PngProvider");
  return ctx;
}

export function PngProvider({ children }: { children: React.ReactNode }) {
  const [pngData, setPngData] = useState<PngData>(null);
  return (
    <PngContext.Provider value={{ pngData, setPngData }}>
      {children}
    </PngContext.Provider>
  );
}

export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};
