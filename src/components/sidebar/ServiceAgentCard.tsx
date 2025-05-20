import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; // Assuming Label is installed or we add it
import { Switch } from "@/components/ui/switch";

interface ServiceAgentCardProps {
  id: string; // For unique switch ID
  agentName: string;
  isActive: boolean;
  onToggleActive: (isActive: boolean) => void;
  className?: string; // Added className prop
  description?: string; // Added description prop
  // Add other agent details as needed, e.g., statusText, description
}

export function ServiceAgentCard({ 
  id,
  agentName, 
  isActive, 
  onToggleActive, 
  className, // Destructure className
  description, // Destructure description
  // ...other props
}: ServiceAgentCardProps) {
  return (
    <Card className={`w-full flex flex-col ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{agentName}</CardTitle>
        {/* Example: <CardDescription>Online</CardDescription> */}
      </CardHeader>
      
      <CardContent className="flex-grow pt-0 px-4 pb-4">
        {description && (
          <CardDescription className="text-xs whitespace-pre-line">
            {description}
          </CardDescription>
        )}
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t px-4 pb-2 !pt-2">
        <Label htmlFor={`agent-toggle-${id}`} className="text-sm text-muted-foreground">
          Include
        </Label>
        <Switch
          id={`agent-toggle-${id}`}
          checked={isActive}
          onCheckedChange={onToggleActive}
          aria-label={`Toggle service for ${agentName}`}
        />
      </CardFooter>
    </Card>
  );
}

export default ServiceAgentCard; 