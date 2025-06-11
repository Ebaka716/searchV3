import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import { Label } from "../ui/label";

const FILTERS = [
  { label: "All Accounts", value: "all" },
  { label: "Most Popular", value: "popular" },
  { label: "Checking", value: "checking" },
  { label: "Savings", value: "savings" },
  { label: "Money Market", value: "money_market" },
  { label: "Certificate of Deposit (CD)", value: "cd" },
  { label: "IRA", value: "ira" },
  { label: "Brokerage", value: "brokerage" },
  { label: "529 College Savings", value: "529" },
  { label: "Business Account", value: "business" },
];

const ACCOUNT_TYPES = [
  {
    name: "Checking",
    description: "Everyday spending and bill pay.",
    minimum: "$25",
    fee: "$0/month",
    type: "checking",
    popular: true,
  },
  {
    name: "Savings",
    description: "Earn interest on your balance.",
    minimum: "$100",
    fee: "$2/month",
    type: "savings",
    popular: true,
  },
  {
    name: "Money Market",
    description: "Higher interest, limited transactions.",
    minimum: "$500",
    fee: "$5/month",
    type: "money_market",
    popular: false,
  },
  {
    name: "Certificate of Deposit (CD)",
    description: "Fixed term, higher rates.",
    minimum: "$1,000",
    fee: "$0",
    type: "cd",
    popular: false,
  },
  {
    name: "IRA",
    description: "Tax-advantaged retirement savings.",
    minimum: "$500",
    fee: "$0",
    type: "ira",
    popular: true,
  },
  {
    name: "Brokerage",
    description: "Invest in stocks, bonds, and more.",
    minimum: "$0",
    fee: "$0",
    type: "brokerage",
    popular: true,
  },
  {
    name: "529 College Savings",
    description: "Save for education expenses.",
    minimum: "$25",
    fee: "$0",
    type: "529",
    popular: false,
  },
  {
    name: "Business Account",
    description: "Manage business finances.",
    minimum: "$100",
    fee: "$10/month",
    type: "business",
    popular: false,
  },
];

const getFilteredAccounts = (filter: string) => {
  if (filter === "all") return ACCOUNT_TYPES;
  if (filter === "popular") return ACCOUNT_TYPES.filter(a => a.popular);
  return ACCOUNT_TYPES.filter(a => a.type === filter);
};

const OpenAccountOverviewCard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const filteredAccounts = getFilteredAccounts(selectedFilter);

  const handleSelectAccount = (name: string) => {
    setSelectedAccounts(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const handleOpenAccount = () => {
    // Placeholder: handle selected accounts
    alert(`Opening accounts: ${selectedAccounts.join(", ")}`);
  };

  return (
    <Card className="w-full flex flex-row p-0 overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 border-r bg-zinc-50 px-6 py-6 flex flex-col gap-2 h-full min-h-[790px]">
        <CardTitle className="text-base mb-4">Filter Accounts</CardTitle>
        <RadioGroup value={selectedFilter} onValueChange={setSelectedFilter} className="flex flex-col gap-2">
          {FILTERS.map(f => (
            <div key={f.value} className="flex items-center gap-2">
              <RadioGroupItem value={f.value} id={`filter-${f.value}`} />
              <Label htmlFor={`filter-${f.value}`} className="text-sm cursor-pointer">{f.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      {/* Table */}
      <div className="flex-1 pr-5 py-6 overflow-x-auto relative" style={{ height: '790px' }}>
        <CardHeader className="flex flex-col items-start mb-2">
          <CardTitle className="text-xl">Select Account Types to Open</CardTitle>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Select</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Minimum</TableHead>
              <TableHead>Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map(account => (
              <TableRow key={account.name}>
                <TableCell>
                  <Checkbox
                    checked={selectedAccounts.includes(account.name)}
                    onCheckedChange={() => handleSelectAccount(account.name)}
                    id={`select-${account.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{account.name}</TableCell>
                <TableCell>{account.description}</TableCell>
                <TableCell>{account.minimum}</TableCell>
                <TableCell>{account.fee}</TableCell>
              </TableRow>
            ))}
            {filteredAccounts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-zinc-400">No accounts found for this filter.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <CardFooter className="absolute bottom-6 right-6 px-0 pb-0">
          <Button
            variant="default"
            size="lg"
            disabled={selectedAccounts.length === 0}
            onClick={handleOpenAccount}
          >
            Open Account{selectedAccounts.length > 1 ? "s" : ""}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default OpenAccountOverviewCard; 