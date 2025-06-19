import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Pattern from "@/components/pattern/pattern";
import { ModeToggle } from "@/components/mode-toggle";
import { usePng } from "@/context/png-context";

export default function Layout() {
  const { pngData } = usePng();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-dvh flex flex-col">
        <div className="flex">
          <SidebarTrigger />
          <div className="grow" />
          <div>
            {pngData &&
              `File ${pngData.title} (Width:${pngData.width} Height:${pngData.height})`}
          </div>
          <div className="grow" />
          <ModeToggle />
        </div>
        <hr />
        <Pattern />
      </main>
    </SidebarProvider>
  );
}
