import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface FocusedArticleCardProps {
  title: string;
  description: string;
  type?: string;
}

const FocusedArticleCard: React.FC<FocusedArticleCardProps> = ({ title, description, type = "Article" }) => (
  <Card className="group w-full p-0 overflow-hidden transition-transform duration-150 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
    <CardHeader className="flex items-center justify-center pb-2 pt-6 px-6 bg-zinc-100">
      <FileText className="w-16 h-30 text-zinc-400" />
    </CardHeader>
    <CardContent className="pt-1 px-6 pb-1 text-sm text-zinc-700 text-left">
      <div className="text-base font-bold leading-tight mb-4 transition-colors duration-100 group-hover:underline cursor-pointer">{title}</div>
      {description}
    </CardContent>
    <CardFooter className="flex items-center gap-1 px-6 pb-6 pt-0 text-xs text-zinc-500 text-left">
      <FileText className="w-4 h-4 mr-1" />
      {type}
    </CardFooter>
  </Card>
);

export default FocusedArticleCard; 