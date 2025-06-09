import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, CheckCircle2 } from 'lucide-react';

interface CloseAccountOverviewCardProps {
  onConfirmingChange?: (isConfirming: boolean) => void;
}

const CloseAccountOverviewCard: React.FC<CloseAccountOverviewCardProps> = ({ onConfirmingChange = () => {} }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleStartConfirm = () => {
    setIsConfirming(true);
    onConfirmingChange(true);
  };
  const handleCancel = () => {
    setIsConfirming(false);
    onConfirmingChange(false);
  };
  const handleConfirm = () => {
    setIsClosed(true);
    setIsConfirming(false);
    onConfirmingChange(false);
  };

  return (
    <Card
      className={`transition-all duration-200 ${
        isClosed
          ? 'border-4 border-zinc-400'
          : isConfirming
          ? 'border-4 border-blue-500 shadow-lg'
          : 'border border-zinc-200'
      }`}
    >
      <CardHeader>
        <div className="flex flex-col items-start mb-2 w-full">
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center justify-center w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200">
              {isClosed ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <LogOut className="w-6 h-6 text-blue-500" />
              )}
            </div>
          </div>
          <CardTitle>
            {isClosed
              ? 'Account Closed'
              : isConfirming
              ? 'Close Account Confirmation'
              : 'Close Account Overview'}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {isClosed ? (
          <div className="flex flex-col items-start gap-2">
            <div className="text-green-700 font-semibold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Your account has been closed successfully.
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              You will receive a confirmation email shortly. Please contact support if you have any questions.
            </div>
          </div>
        ) : (
          <>
            <div className="text-base text-zinc-800 mb-2">
              {isConfirming
                ? 'Are you sure you want to close this account?'
                : 'You have 1 account which is eligible:'}
            </div>
            <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 mb-2 transition-colors duration-300">
              <div className="flex flex-col">
                <span className="text font-medium text-zinc-900">Individual Account</span>
                <span className="text-sm text-zinc-600">••••1234</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-medium text-zinc-800">Balance</span>
                <span className="text-black">$0.00</span>
              </div>
            </div>
            {isConfirming && (
              <div className="text-xs text-zinc-500 mt-2">
                Closing your account is permanent and cannot be undone. Please ensure you have downloaded all necessary statements.
              </div>
            )}
          </>
        )}
      </CardContent>
      <CardFooter className="flex gap-3 justify-end">
        {!isClosed && (
          isConfirming ? (
            <>
              <Button variant="ghost" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="default" onClick={handleConfirm}>
                Confirm
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => {
                window.dispatchEvent(new CustomEvent("add-to-floating-input", { detail: { value: "show me all my accounts" } }));
              }}>
                Show all accounts
              </Button>
              <Button variant="default" onClick={handleStartConfirm}>
                Get started
              </Button>
            </>
          )
        )}
      </CardFooter>
    </Card>
  );
};

export default CloseAccountOverviewCard; 