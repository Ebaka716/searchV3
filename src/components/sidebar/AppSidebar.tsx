import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, FilePlus, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ServiceAgentCard } from "./ServiceAgentCard";

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

  const handleAgentToggle = (agentId: string, newIsActive: boolean) => {
    setAgents(currentAgents => 
      currentAgents.map(agent => 
        agent.id === agentId ? { ...agent, isActive: newIsActive } : agent
      )
    );
  };

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
        <SidebarNavItem icon={<Plus size={20} />} label="New Search" collapsed={collapsed} onClick={() => router.push('/search')} />
        <SidebarNavItem icon={<FilePlus size={20} />} label="New Research Project" collapsed={collapsed} onClick={() => router.push('/research')} />
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
            <DropdownMenuItem onSelect={() => setIsServiceAgentsDialogOpen(true)}>
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
            <DropdownMenuItem>
              <span className="flex items-center gap-2">↩️ Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Service Agents Alert Dialog */}
      <AlertDialog open={isServiceAgentsDialogOpen} onOpenChange={setIsServiceAgentsDialogOpen}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Product Company Service Agents</AlertDialogTitle>
          </AlertDialogHeader>
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
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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