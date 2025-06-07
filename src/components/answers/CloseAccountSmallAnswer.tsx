import React from 'react';

const CloseAccountSmallAnswer = () => (
  <div className="h-full">
    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Close Checking Account</h3>
    <p className="text-base text-zinc-800 mb-2">
      Your request to close your checking account has been received. Please confirm to finalize the closure. Any remaining balance will be transferred to your linked account.
    </p>
    <ul className="list-disc pl-6 text-sm text-zinc-700 mb-2">
      <li>Download your final statement</li>
      <li>Contact support if you have questions</li>
    </ul>
    <p className="text-sm text-zinc-600">For confirmation and next steps, see the resources below.</p>
  </div>
);

export default CloseAccountSmallAnswer; 