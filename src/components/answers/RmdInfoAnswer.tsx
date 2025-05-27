import React from 'react';

const RmdInfoAnswer = () => {
  return (
    <div className="p-4 border rounded-lg bg-gray-50 h-full">
      <h4 className="font-semibold text-md mb-2">Required Minimum Distribution (RMD) Info</h4>
      <p className="text-sm text-gray-700">
        This section would display detailed information about Required Minimum Distributions (RMDs).
        It could include rules, calculation methods, deadlines, and links to relevant IRS publications.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        For instance, RMDs are generally required from age 73 (or 72 if you reached age 72 before January 1, 2023).
      </p>
      {/* Placeholder for more dynamic content or calculators */}
    </div>
  );
};

export default RmdInfoAnswer; 