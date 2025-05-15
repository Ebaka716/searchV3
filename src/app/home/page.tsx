'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HeaderInput from "@/components/header/HeaderInput";
import Header from "@/components/header/Header";

export default function HomePage() {
  return (
    <>
      <Header
        variant="short"
        onLogout={() => alert("Logged out!")}
        onNavSelect={(navKey) => alert(`Nav selected: ${navKey}`)}
        onSmartSuggestOpen={() => alert("SmartSuggest panel would open.")}
        onOpenResearch={() => alert("Research view would open.")}
        selectedTestOption={"Option 1"}
        onSelectTestOption={(option) => alert(`Test option selected: ${option}`)}
      />
      <div className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Conversational Search Prototype</h1>
        <HeaderInput
          onSmartSuggestOpen={() => alert("SmartSuggest panel would open.")}
          onOpenResearch={() => alert("Research view would open.")}
        />
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            This is your modular, variant-driven home page. Use the sidebar and header to navigate, and start building your conversational search flows!
          </CardContent>
        </Card>
      </div>
    </>
  );
} 