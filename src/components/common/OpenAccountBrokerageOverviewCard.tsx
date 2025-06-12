import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { User } from "lucide-react";

// Example user data (replace with props or context as needed)
const userData = {
  name: "Clark Kent",
  email: "clark.kent@dailyplanet.com",
  address: "344 Clinton St, Apt 3B, Metropolis, NY 10001",
  phone: "(212) 555-0193",
  ssn: "***-**-1234",
  dob: "06/18/1978",
};

const OpenAccountBrokerageOverviewCard: React.FC = () => (
  <Card className="w-full border shadow-lg">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
      <div className="flex items-center justify-center w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200">
        <User className="w-6 h-6 text-blue-500" />
      </div>
      <CardTitle className="text-lg">Open a Brokerage Account</CardTitle>
    </CardHeader>
    <CardContent>
      {/* User Data Gray Box */}
      <div className="bg-zinc-50 border border-zinc-100 rounded-md p-4 mb-4">
        <div className="font-semibold text-zinc-700 mb-2">Your Information</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm">
          <div><span className="font-medium text-zinc-700">Name:</span> <span className="text-zinc-600">{userData.name}</span></div>
          <div><span className="font-medium text-zinc-700">Email:</span> <span className="text-zinc-600">{userData.email}</span></div>
          <div><span className="font-medium text-zinc-700">Address:</span> <span className="text-zinc-600">{userData.address}</span></div>
          <div><span className="font-medium text-zinc-700">Phone:</span> <span className="text-zinc-600">{userData.phone}</span></div>
          <div><span className="font-medium text-zinc-700">SSN:</span> <span className="text-zinc-600">{userData.ssn}</span></div>
          <div><span className="font-medium text-zinc-700">Date of Birth:</span> <span className="text-zinc-600">{userData.dob}</span></div>
        </div>
      </div>
      {/* Section Subheading */}
      <div className="font-bold mb-4 text-zinc-900">Important documents and confirmation</div>
      {/* Important Documents and Confirmation */}
      <div className="mb-4">
        <div
          className="flex items-start gap-3 mb-4 p-4 border border-zinc-200 rounded-lg cursor-pointer transition hover:bg-zinc-50 hover:shadow-sm"
          tabIndex={0}
          role="button"
          aria-label="View Account Opening Agreements PDF"
        >
          <span className="mt-1">
            {/* Document icon (simple SVG) */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="24" x="2" y="0" rx="3" fill="#F3F4F6"/><rect x="5" y="4" width="14" height="2" rx="1" fill="#D1D5DB"/><rect x="5" y="8" width="10" height="2" rx="1" fill="#D1D5DB"/><rect x="5" y="12" width="12" height="2" rx="1" fill="#D1D5DB"/></svg>
          </span>
          <div>
            <div className="font-bold text-base leading-tight">Account Opening Agreements</div>
            <div className="text-sm text-zinc-600 leading-tight">Terms & Conditions applicable to your account, and important information about privacy and fees</div>
          </div>
        </div>
        <div className="text-sm text-zinc-700 mb-2">
          By selecting Open account below, you are electronically signing this application and acknowledging that you:
        </div>
        <ul className="list-disc pl-5 text-sm text-zinc-700 space-y-1 mb-2">
          <li>Received, understand, and agree to the Account Opening Agreements</li>
          <li>Confirm that your personal information is correct</li>
          <li>Agree to conduct business with Product Company electronically and to the electronic delivery of all documents and communications for all your Product Company accounts as detailed in the Electronic Delivery Agreement</li>
          <li>Consent to Product Company use of your email and/or mobile number to message, call or text you to help secure your account, provide transactional alerts, and deliver other communications. Message and data rates apply; frequency may vary. For help with texts, reply HELP.</li>
        </ul>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li className="font-bold text-zinc-900">Understand your Account is governed by the mandatory arbitration clause contained in the Customer Agreement</li>
          <li className="font-bold text-zinc-900">The IRS does not require your consent to any provision of this document other than the certifications required to avoid backup withholding</li>
        </ul>
      </div>
    </CardContent>
    <CardFooter className="flex flex-row gap-3 justify-end pt-2">
      <Button variant="secondary" className="bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Close</Button>
      <Button variant="default">Open Account</Button>
    </CardFooter>
  </Card>
);

export default OpenAccountBrokerageOverviewCard; 