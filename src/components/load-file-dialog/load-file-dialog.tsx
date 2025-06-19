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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import LocalFileGet from "./local-file-get";
import BasePatternExplorer from "./base-pattern-explorer";
import { useState } from "react";

export function LoadFileDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Load File</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-h-[80vh] w-full h-full min-h-0 flex flex-col">
        <DialogHeader>
          <DialogTitle>Load File</DialogTitle>
          <DialogDescription>
            Select a file to load into the application.
          </DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="explore"
          className="flex-1 h-full min-h-0 flex flex-col"
        >
          <TabsList>
            <TabsTrigger value="explore">Built-In Patterns</TabsTrigger>
            <TabsTrigger value="local-file">Local File</TabsTrigger>
          </TabsList>
          <TabsContent
            value="explore"
            className="flex-1 h-full min-h-0 flex flex-col"
          >
            <BasePatternExplorer closeDialog={() => setOpen(false)} />
          </TabsContent>
          <TabsContent
            value="local-file"
            className="flex-1 h-full min-h-0 flex flex-col"
          >
            <LocalFileGet closeDialog={() => setOpen(false)} />
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
