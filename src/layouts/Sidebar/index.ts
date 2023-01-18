import { SidebarLayout as SidebarLayoutComponent } from "./SidebarLayout";
import Sidebar from "./Sidebar";
import Pane from "./Pane";
import Panel from "./Panel";
import Header from "./Header";

export type SidebarLayoutShape = typeof SidebarLayoutComponent & {
  Header: typeof Header;
  Sidebar: typeof Sidebar;
  Pane: typeof Pane;
  Panel: typeof Panel;
};

export const SidebarLayout = SidebarLayoutComponent as SidebarLayoutShape;

SidebarLayout.Header = Header;
SidebarLayout.Sidebar = Sidebar;
SidebarLayout.Pane = Pane;
SidebarLayout.Panel = Panel;

export { useSidebar } from "./Sidebar";

export default SidebarLayout;
