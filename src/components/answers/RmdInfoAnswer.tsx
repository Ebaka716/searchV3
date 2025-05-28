import React from 'react';

const RmdInfoAnswer = () => {
  return (
    <div className="h-full">
      <h4 className="font-semibold text-md mb-2">Required Minimum Distribution (RMD)</h4>
      <p className="text-sm text-gray-700 mb-2">
      A required minimum distribution (RMD) is the minimum amount that must be withdrawn annually from certain tax-deferred retirement accounts, such as traditional IRAs, 401(k)s, and similar employer-sponsored plans, once the account holder reaches age 73.</p> 
      <p className="text-sm text-gray-700">The purpose of RMDs is to ensure that individuals do not defer paying taxes on their retirement savings indefinitely. The amount of each RMD is calculated by dividing the prior year-end account balance by a life expectancy factor provided by the IRS.
      </p>
      {/* Placeholder for more dynamic content or calculators */}
    </div>
  );
};

export default RmdInfoAnswer; 