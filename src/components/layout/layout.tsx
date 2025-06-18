import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Pattern from "@/components/pattern/pattern";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <div className="flex">
          <SidebarTrigger />
          <div className="grow" />
          <ModeToggle />
        </div>
        <hr />
        <Pattern />
      </main>
    </SidebarProvider>
  );
}
