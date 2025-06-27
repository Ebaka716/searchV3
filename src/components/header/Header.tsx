'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronDown, Briefcase, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import HeaderInput from "@/components/header/HeaderInput";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { demoSearches } from "@/data/demoSearches";

export type HeaderProps = {
  variant: "full" | "short";
  onLogout: () => void;
  onNavSelect?: (navKey: string) => void;
  onSmartSuggestOpen?: () => void;
  selectedTestOption?: string;
  onSelectTestOption?: (option: string) => void;
};

const navLinks = [
  { key: "accounts", label: "Accounts", icon: <CreditCard className="w-4 h-4 mr-1" /> },
  { key: "planning", label: "Planning" },
];

const researchDropdown = [
  { key: "research1", label: "Research 1" },
  { key: "research2", label: "Research 2" },
];

const productsDropdown = [
  { key: "product1", label: "Product 1" },
  { key: "product2", label: "Product 2" },
];

const testOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

export function Header({
  variant,
  onLogout,
  onNavSelect,
  onSmartSuggestOpen,
  selectedTestOption,
  onSelectTestOption,
}: HeaderProps) {
  const [testingMenuOpen, setTestingMenuOpen] = useState(false);
  const [showTextStrings, setShowTextStrings] = useState(false);
  const router = useRouter();
  const logoutButtonRef = React.useRef<HTMLButtonElement>(null);

  // Focus the Log out button when the modal closes
  React.useEffect(() => {
    if (!showTextStrings && logoutButtonRef.current) {
      logoutButtonRef.current.focus();
    }
  }, [showTextStrings]);

  const handleLogout = () => {
    setShowTextStrings(false);
    onLogout();
  };

  // Top row: logo/company (left), actions (right)
  const topRow = (
    <div className="flex w-full items-center justify-between gap-2 px-4 py-2">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <Briefcase className="w-6 h-6" />
        <span>Financial company</span>
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="flex items-center gap-1">
          <User className="w-4 h-4" /> Profile
        </Button>
        <Button variant="ghost">Open an account</Button>
        {/* Testing Menu for Log out */}
        <DropdownMenu open={testingMenuOpen} onOpenChange={setTestingMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              ref={logoutButtonRef}
              variant="ghost"
              className="flex items-center gap-1"
              onClick={() => setTestingMenuOpen((open) => !open)}
            >
              Log out
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Testing menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive">
              Log out
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
              setTestingMenuOpen(false);
              setShowTextStrings(true);
            }}>
              Show Text Strings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedTestOption}
              onValueChange={onSelectTestOption}
            >
              {testOptions.map((option) => (
                <DropdownMenuRadioItem key={option} value={option}>
                  {option}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  // Bottom row: nav (left), HeaderInput (right)
  const bottomRow = (
    <div className="flex w-full items-center justify-between gap-2 px-4 pb-2">
      <nav className="flex gap-4 items-center">
        {navLinks.map((link) => (
          <Button
            key={link.key}
            variant="ghost"
            className="px-2 font-medium"
            onClick={() => onNavSelect?.(link.key)}
          >
            {link.label}
          </Button>
        ))}
        {/* Research Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 font-medium flex items-center">
              Research <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {researchDropdown.map((item) => (
              <DropdownMenuItem key={item.key} onClick={() => onNavSelect?.(item.key)}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Products & Services Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 font-medium flex items-center">
              Products & Services <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {productsDropdown.map((item) => (
              <DropdownMenuItem key={item.key} onClick={() => onNavSelect?.(item.key)}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="min-w-[300px] max-w-xs w-full">
        <HeaderInput
          onSmartSuggestOpen={onSmartSuggestOpen ?? (() => {})}
          onOpenResearch={() => router.push("/research")}
        />
      </div>
    </div>
  );

  return (
    <header className="w-full border-b bg-background">
      {topRow}
      {variant === "full" && bottomRow}
      {showTextStrings && (
        <Dialog open={showTextStrings} onOpenChange={setShowTextStrings}>
          <DialogContent className="max-h-[70vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Acceptable Strings</DialogTitle>
              <DialogDescription>
                These are the accepted queries/aliases that will trigger each template size:
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="aapl" className="w-full">
              <TabsList className="mb-4">
              <TabsTrigger value="aapl">AAPL Flow</TabsTrigger>
              <TabsTrigger value="rmd">RMD Flow</TabsTrigger>
              <TabsTrigger value="cs">CS Flow</TabsTrigger>
              <TabsTrigger value="close">Close accnt Flow</TabsTrigger>
              <TabsTrigger value="open">Open Account</TabsTrigger>
              </TabsList>
              <TabsContent value="aapl">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">AAPL Large Template:</div>
                    <ul className="list-disc pl-6">
                      <li>AAPL</li>
                      <li>aapl</li>
                      <li>apple</li>
                      <li>appl</li>
                      <li>aple</li>
                      <li>aaple</li>
                      <li>aappl</li>
                      <li>appel</li>
                      <li>applle</li>
                      <li>aapll</li>
                      <li>applr</li>
                      <li>applw</li>
                      <li>appl3</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">AAPL Medium Template:</div>
                    <ul className="list-disc pl-6">
                      <li>apple dividends and earnings</li>
                      <li>aapl dividends and earnings</li>
                      <li>dividends & earnings for apple</li>
                      <li>dividends & earnings for aapl</li>
                      <li>apple earnings and dividends</li>
                      <li>aapl earnings and dividends</li>
                      <li>dividends and earnings apple</li>
                      <li>dividends and earnings aapl</li>
                      <li>apple dividends earnings</li>
                      <li>aapl dividends earnings</li>
                      <li>show me apple dividends and earnings</li>
                      <li>show aapl dividends and earnings</li>
                      <li>apple earnings dividends</li>
                      <li>aapl earnings dividends</li>
                      <li>dividends plus earnings apple</li>
                      <li>dividends plus earnings aapl</li>
                      <li>dividends earnings june 2024 apple</li>
                      <li>dividends earnings june 2024 aapl</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">AAPL Small Template:</div>
                    <ul className="list-disc pl-6">
                      <li>my dividends from last month</li>
                      <li>my dividends for apple last month</li>
                      <li>apple dividends last month</li>
                      <li>aapl dividends last month</li>
                      <li>dividends from apple last month</li>
                      <li>last month apple dividends</li>
                      <li>last month aapl dividends</li>
                      <li>show me my apple dividends for last month</li>
                      <li>show my aapl dividends last month</li>
                      <li>apple dividend payments last month</li>
                      <li>aapl dividend history last month</li>
                      <li>dividends received from apple last month</li>
                      <li>dividends paid by aapl last month</li>
                      <li>recent apple dividends</li>
                      <li>recent aapl dividends</li>
                      <li>apple dividends june 2024</li>
                      <li>aapl dividends june 2024</li>
                      <li>my apple dividend income last month</li>
                      <li>my aapl dividend income last month</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rmd">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">RMD Large Template:</div>
                    <ul className="list-disc pl-6">
                      <li>rmd</li>
                      <li>required minimum distribution</li>
                      <li>what is an rmd</li>
                      <li>rmd rules</li>
                      <li>rmd basics</li>
                      <li>explain rmd</li>
                      <li>rmd overview</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">RMD Medium Template:</div>
                    <ul className="list-disc pl-6">
                      <li>am I required to take an rmd</li>
                      <li>do I need to take an rmd this year</li>
                      <li>is rmd mandatory</li>
                      <li>who needs to take an rmd</li>
                      <li>rmd eligibility</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">RMD Small Template:</div>
                    <ul className="list-disc pl-6">
                      <li>last year&apos;s rmd</li>
                      <li>my rmd for 2023</li>
                      <li>previous rmd amount</li>
                      <li>how much was my rmd last year</li>
                      <li>rmd history</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cs">
                <div className="space-y-4">
                  {demoSearches.filter(ds => ds.type === 'question').map(ds => (
                    <div key={ds.query}>
                      <div className="font-semibold mb-1">CS {ds.size.charAt(0).toUpperCase() + ds.size.slice(1)} Template: <span className="font-normal text-zinc-500">{ds.query}</span></div>
                      <ul className="list-disc pl-6">
                        {ds.aliases.map(alias => (
                          <li key={alias}>{alias}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="close">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Close Account Large Template:</div>
                    <ul className="list-disc pl-6">
                      <li>I want to close an account</li>
                      <li>close my account</li>
                      <li>close an account</li>
                      <li>close checking account</li>
                      <li>close savings account</li>
                      <li>close brokerage account</li>
                      <li>close my checking</li>
                      <li>close my savings</li>
                      <li>close my brokerage</li>
                      <li>close account request</li>
                      <li>account closure</li>
                      <li>how do I close my account</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">Close Account Medium Template:</div>
                    <ul className="list-disc pl-6">
                      <li>Show me all my accounts</li>
                      <li>list my accounts</li>
                      <li>what accounts do I have</li>
                      <li>show accounts</li>
                      <li>my accounts</li>
                      <li>account list</li>
                      <li>display my accounts</li>
                      <li>see all accounts</li>
                      <li>view all accounts</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">Close Account Small Template:</div>
                    <ul className="list-disc pl-6">
                      <li>Close my checking account now</li>
                      <li>close checking now</li>
                      <li>close my savings now</li>
                      <li>close brokerage now</li>
                      <li>close account immediately</li>
                      <li>close my account now</li>
                      <li>confirm account closure</li>
                      <li>finalize account closure</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="open">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Open Account Large Template:</div>
                    <div className="text-zinc-500 mb-1">Query: <span className="font-normal">Open an account</span></div>
                    <ul className="list-disc pl-6">
                      <li>open account</li>
                      <li>open a new account</li>
                      <li>start new account</li>
                      <li>begin account opening</li>
                      <li>create account</li>
                      <li>new account application</li>
                      <li>apply for account</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">Open Account Medium Template:</div>
                    <div className="text-zinc-500 mb-1">Query: <span className="font-normal">Open retirement account</span></div>
                    <ul className="list-disc pl-6">
                      <li>open a retirement account</li>
                      <li>start retirement account</li>
                      <li>apply for retirement account</li>
                      <li>retirement account options</li>
                      <li>open ira</li>
                      <li>open roth ira</li>
                      <li>open 401k rollover</li>
                      <li>open sep ira</li>
                      <li>open simple ira</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">Open Account Small Template (Brokerage):</div>
                    <div className="text-zinc-500 mb-1">Query: <span className="font-normal">Open a brokerage account</span></div>
                    <ul className="list-disc pl-6">
                      <li>open brokerage account</li>
                      <li>start brokerage account</li>
                      <li>begin brokerage account</li>
                      <li>create brokerage account</li>
                      <li>apply for brokerage account</li>
                      <li>open investment account</li>
                      <li>open trading account</li>
                      <li>brokerage account application</li>
                      <li>open a brokerage</li>
                      <li>open a new brokerage account</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <Button variant="outline" onClick={() => setShowTextStrings(false)}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </header>
  );
}

export default Header; 