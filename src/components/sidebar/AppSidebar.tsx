/**
 * AppSidebar.tsx
 *
 * This component provides the main sidebar navigation for the app.
 *
 * Responsibilities:
 * - Provides quick access to actions (New Search, New Research Project), history, and projects.
 * - The "New Search" button always navigates to `/search?reset=<timestamp>`, ensuring the search page is reset to a blank state.
 * - Supports collapse/expand for a compact or detailed view.
 * - Modular structure for easy extension (actions, history, projects, settings, profile).
 *
 * Usage:
 *   - Used as the main sidebar in the app layout.
 *   - Interacts with the search page via query params for robust state management.
 *
 * See also:
 *   - src/app/search/page.tsx
 *   - src/components/dialogue/DialogueArea.tsx
 */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PanelLeftIcon, Plus, FilePlus, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ServiceAgentCard } from "./ServiceAgentCard";
import React from "react";
import { useDialogueHistory } from "@/context/DialogueHistoryContext";

// Define a type for service agent data
interface AgentData {
  id: string;
  name: string;
  isActive: boolean;
  description?: string;
  // Add other properties like description, etc.
}

const initialAgents: AgentData[] = [
  { id: "agent1", name: "Workplace Investing", isActive: true, description: "401(k), 403(b), HSAs, stock plans, employee benefits" },
  { id: "agent2", name: "Charitable", isActive: false, description: "Donor-advised funds, charitable giving" },
  { id: "agent3", name: "Health Care Solutions", isActive: true, description: "HSAs, health insurance, wellness programs" },
  { id: "agent4", name: "Stock Plan Services", isActive: true, description: "Equity compensation administration (RSUs, ESPPs, stock options)" },
  { id: "agent5", name: "Auto Go", isActive: false, description: "Digital investment management (robo-advisor)" },
  { id: "agent6", name: "Benefits Center", isActive: false, description: "Benefit plan administration for employers" },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [isServiceAgentsDialogOpen, setIsServiceAgentsDialogOpen] = useState(false);
  const [agents, setAgents] = useState<AgentData[]>(initialAgents);
  const router = useRouter();
  // Ref for the profile dropdown trigger button (avatar/name button)
  // Used to restore focus after closing the Service Agents dialog for accessibility
  const serviceAgentsButtonRef = React.useRef<HTMLButtonElement>(null);
  // Controls the open state of the profile dropdown menu
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { history, restoreHistoryEntry } = useDialogueHistory();

  // When the Service Agents dialog closes, restore focus to the profile dropdown trigger button
  // This matches the accessibility pattern used for the Text Strings modal in the header
  React.useEffect(() => {
    if (!isServiceAgentsDialogOpen && serviceAgentsButtonRef.current) {
      serviceAgentsButtonRef.current.focus();
    }
  }, [isServiceAgentsDialogOpen]);

  const handleAgentToggle = (agentId: string, newIsActive: boolean) => {
    setAgents(currentAgents => 
      currentAgents.map(agent => 
        agent.id === agentId ? { ...agent, isActive: newIsActive } : agent
      )
    );
  };

  // When opening the Service Agents dialog from the menu, first close the dropdown menu
  // This prevents focus trap/overlay issues between Radix DropdownMenu and Dialog
  const handleOpenServiceAgents = () => {
    setProfileMenuOpen(false);
    setIsServiceAgentsDialogOpen(true);
  };

  const handleLogout = () => {
    setIsServiceAgentsDialogOpen(false); // Always close modal
    // Add any additional logout logic here if needed
  };

  return (
    <aside
      className={`fixed left-0 z-40 bg-white border-r transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-56'} min-w-[4rem]`}
      style={{ top: 52, height: 'calc(100vh - 52px)' }}
    >
      <div className={`flex items-center p-2 ${collapsed ? 'justify-center' : 'justify-end'}`} style={{ minHeight: '40px' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="transition-transform duration-300"
        >
          <span className="flex items-center justify-center w-5 h-5">
            <PanelLeftIcon size={20} />
          </span>
        </Button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-2">
        {/* Actions Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1">Actions</div>}
        <SidebarNavItem icon={<Plus size={20} />} label="New Search" collapsed={collapsed} onClick={() => router.push(`/search?reset=${Date.now()}`)} />
        <SidebarNavItem icon={<FilePlus size={20} />} label="New Research Project" collapsed={collapsed} onClick={() => router.push('/research')} />
        {/* History Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">History</div>}
        <div className={collapsed ? 'hidden' : 'flex flex-col gap-1 pl-2 mt-2 mb-2'}>
          {[0,1,2,3].map(idx => (
            <SidebarNavItem
              key={idx}
              label={history[idx]?.label || "(empty)"}
              collapsed={collapsed}
              className="truncate"
              onClick={history[idx] ? () => restoreHistoryEntry(idx) : undefined}
            />
          ))}
        </div>
        {/* Projects Section */}
        {!collapsed && <div className="text-xs font-semibold text-gray-500 px-2 py-1 mt-2">Projects</div>}
        {/* Placeholder for future project items */}
      </nav>
      <div className="p-2 border-t flex flex-col gap-2 sticky bottom-0 bg-white">
        <SidebarNavItem icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
        {/* Profile Dropdown */}
        <DropdownMenu open={profileMenuOpen} onOpenChange={setProfileMenuOpen}>
          <DropdownMenuTrigger asChild>
            {collapsed ? (
              <div className="flex justify-center w-full">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Clark Kent" />
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              // This button is the trigger for the profile dropdown and receives focus after dialog closes
              <Button
                ref={serviceAgentsButtonRef}
                variant="ghost"
                className="flex items-center gap-3 w-full px-2 py-2 rounded-md cursor-pointer hover:bg-accent transition justify-start"
              >
                <Avatar>
                  <AvatarImage src="/avatars/01.png" alt="Clark Kent" />
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0 items-start">
                  <span className="font-medium text-sm truncate">Clark Kent</span>
                  <span className="text-xs text-muted-foreground truncate">clark.kent@example.com</span>
                </div>
              </Button>
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
            <DropdownMenuItem onSelect={handleOpenServiceAgents}>
              <span className="flex items-center gap-2">My Service Agents</span>
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
            <DropdownMenuItem onSelect={handleLogout}>
              <span className="flex items-center gap-2">↩️ Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Service Agents Dialog */}
      <Dialog open={isServiceAgentsDialogOpen} onOpenChange={setIsServiceAgentsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product Company Service Agents</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {agents.map(agent => (
              <ServiceAgentCard 
                key={agent.id}
                id={agent.id}
                agentName={agent.name}
                isActive={agent.isActive}
                description={agent.description}
                onToggleActive={(newIsActive) => handleAgentToggle(agent.id, newIsActive)}
                className="py-2 gap-0"
              />
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  );
}

function SidebarNavItem({ icon, label, collapsed, className, onClick }: { icon?: React.ReactNode; label: string; collapsed: boolean; className?: string; onClick?: () => void }) {
  return (
    <Button
      variant="ghost"
      className={`w-full flex items-center gap-3 justify-start ${collapsed ? 'justify-center' : 'justify-start'}`}
      onClick={onClick}
    >
      {icon}
      {!collapsed && <span className={`text-sm ${className ?? ''}`}>{label}</span>}
    </Button>
  );
} 