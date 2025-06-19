import { Input } from "@/components/ui/input";
import React, { useRef } from "react";
import { usePng } from "@/context/png-context";
import { importPngBufferAsLines } from "@/importers/png";

export default function LocalFileGet({
  closeDialog,
}: {
  closeDialog?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setPngData } = usePng();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const buffer = e.target?.result;
      if (!buffer || !(buffer instanceof ArrayBuffer)) return;
      try {
        const lines = importPngBufferAsLines(buffer, file.name);
        setPngData(lines);
      } catch (err) {
        console.error("Failed to parse PNG:", err);
      }
      closeDialog?.();
    };
    reader.readAsArrayBuffer(file);
  }
  return (
    <Input
      ref={inputRef}
      accept=".png"
      type="file"
      onChange={handleFileChange}
      className="mb-5"
    />
  );
}
