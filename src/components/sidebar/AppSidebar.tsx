import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, BookOpen, Settings, User, ChevronLeft, ChevronRight, Plus, FilePlus } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`bg-white border-r h-full transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-56'} min-w-[4rem]`}
      style={{ minHeight: 0 }}
    >
      <div className="flex items-center justify-end p-2" style={{ minHeight: '40px' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="transition-transform duration-300"
        >
          <span className="flex items-center justify-center w-5 h-5">
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </span>
        </Button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-2">
        {/* Actions Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1">Actions</div>}
        <SidebarNavItem icon={<Plus size={20} />} label="New Search" collapsed={collapsed} />
        <SidebarNavItem icon={<FilePlus size={20} />} label="New Research Project" collapsed={collapsed} />
        {/* History Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">History</div>}
        <div className={collapsed ? 'hidden' : 'flex flex-col gap-1 pl-2 mt-2 mb-2'}>
          <SidebarNavItem label="Retirement planning" collapsed={collapsed} className="truncate" />
          <SidebarNavItem label="401k options" collapsed={collapsed} className="truncate" />
          <SidebarNavItem label="Roth vs Traditional IRA" collapsed={collapsed} className="truncate" />
          <SidebarNavItem label="IRA contribution limits" collapsed={collapsed} className="truncate" />
        </div>
        {/* Projects Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">Projects</div>}
        {/* Placeholder for future project items */}
      </nav>
      <div className="p-2 border-t flex flex-col gap-2 sticky bottom-0 bg-white">
        <SidebarNavItem icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {collapsed ? (
              <div className="flex justify-center w-full">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Clark Kent" />
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div className="flex items-center gap-3 w-full px-2 py-2 rounded-md cursor-pointer hover:bg-accent transition">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Clark Kent" />
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-medium text-sm truncate">Clark Kent</span>
                  <span className="text-xs text-muted-foreground truncate">clark.kent@example.com</span>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-0">
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <Avatar>
                <AvatarImage src="/avatars/01.png" alt="Clark Kent" />
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-sm truncate">Clark Kent</span>
                <span className="text-xs text-muted-foreground truncate">clark.kent@example.com</span>
              </div>
            </div>
            <DropdownMenuItem>
              <span className="flex items-center gap-2">✨ Upgrade to Pro</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="flex items-center gap-2">⚙️ Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center gap-2">💳 Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center gap-2">🔔 Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="flex items-center gap-2">↩️ Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}

function SidebarNavItem({ icon, label, collapsed, className }: { icon?: React.ReactNode; label: string; collapsed: boolean; className?: string }) {
  return (
    <Button
      variant="ghost"
      className={`w-full flex items-center gap-3 justify-start ${collapsed ? 'justify-center' : 'justify-start'}`}
    >
      {icon}
      {!collapsed && <span className={`text-sm ${className ?? ''}`}>{label}</span>}
    </Button>
  );
} 