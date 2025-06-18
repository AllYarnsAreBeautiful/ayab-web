import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef } from "react";
import { usePng } from "@/context/png-context";
import { importPngBufferAsLines } from "@/importers/png";

export function LoadFileDialog() {
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
        const lines = importPngBufferAsLines(buffer);
        setPngData(lines);
      } catch (err) {
        console.error("Failed to parse PNG:", err);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Load File</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Load File</DialogTitle>
          <DialogDescription>
            Select a file to load into the application.
          </DialogDescription>
        </DialogHeader>
        <Input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
