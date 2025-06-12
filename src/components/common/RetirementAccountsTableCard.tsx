import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const SELF_MANAGED_ACCOUNTS = [
  {
    name: "Traditional IRA",
    description: "Tax-deferred retirement savings.",
    minimum: "$500",
    fee: "$0",
  },
  {
    name: "Roth IRA",
    description: "Tax-free growth and withdrawals.",
    minimum: "$500",
    fee: "$0",
  },
  {
    name: "401(k) Rollover",
    description: "Move funds from a previous employer's plan.",
    minimum: "$1,000",
    fee: "$0",
  },
  {
    name: "SEP IRA",
    description: "For self-employed and small business owners.",
    minimum: "$1,000",
    fee: "$0",
  },
  {
    name: "Simple IRA",
    description: "For small businesses and employees.",
    minimum: "$500",
    fee: "$0",
  },
];

const PRO_MANAGED_ACCOUNTS = [
  {
    name: "Managed IRA",
    description: "Professionally managed IRA portfolio.",
    minimum: "$5,000",
    fee: "0.5%/yr",
  },
  {
    name: "Managed Roth IRA",
    description: "Professionally managed Roth IRA portfolio.",
    minimum: "$5,000",
    fee: "0.5%/yr",
  },
  {
    name: "Managed 401(k) Rollover",
    description: "Advisor-managed 401(k) rollover.",
    minimum: "$10,000",
    fee: "0.5%/yr",
  },
  {
    name: "Advisor SEP IRA",
    description: "SEP IRA with professional management.",
    minimum: "$10,000",
    fee: "0.5%/yr",
  },
];

const RetirementAccountsTableCard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("self");
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const accounts = selectedTab === "self" ? SELF_MANAGED_ACCOUNTS : PRO_MANAGED_ACCOUNTS;

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
    <Card className="w-full" style={{ height: 502 }}>
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-1">
        <CardTitle className="text-lg flex-1 truncate">
          {selectedTab === "self" ? "Self-Managed Retirement Accounts" : "Professionally Managed Retirement Accounts"}
        </CardTitle>
        <Button
          variant="default"
          size="lg"
          disabled={selectedAccounts.length === 0}
          onClick={handleOpenAccount}
        >
          Open Account{selectedAccounts.length > 1 ? "s" : ""}
        </Button>
      </CardHeader>
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full px-6 pt-0">
        <TabsList className="mb-1">
          <TabsTrigger value="self">Self-Managed</TabsTrigger>
          <TabsTrigger value="pro">Professionally Managed</TabsTrigger>
        </TabsList>
      </Tabs>
      <CardContent className="pt-2">
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
            {accounts.map(account => (
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
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RetirementAccountsTableCard; 