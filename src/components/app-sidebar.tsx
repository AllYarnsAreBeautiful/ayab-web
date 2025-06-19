import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LoadFileDialog } from "@/components/load-file-dialog/load-file-dialog";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Options:</SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="File Options:">
          <LoadFileDialog />
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
