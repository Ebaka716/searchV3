import React from 'react';

const SourceTag = ({ number }: { number: number }) => (
  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-400 text-white text-xs font-bold align-middle">{number}</span>
);

const RmdInfoAnswer = () => {
  return (
    <div className="h-full pb-6">
      <h4 className="font-bold text-2xl mb-4 text-zinc-900">Required Minimum Distribution (RMD)</h4>
      <p className="text-lg text-zinc-800 mb-3 font-medium">
        Starting when you&apos;re age 73, a required minimum distribution (RMD) is a specific amount of money the IRS requires you to take from your tax-deferred retirement accounts each year.*
        <SourceTag number={1} />
      </p>
      <p className="text-base text-gray-700 mb-2">
        At age 74 and older, your deadline for taking a required minimum distribution (RMD) is December 31 each year. However, if you&apos;re turning 73 this year and it&apos;s your first RMD, you have a one-time option to delay taking the first RMD until April 1 of the following year.
        <SourceTag number={2} />
      </p>
      <p className="text-base text-gray-700">
        <span className="font-semibold">Note:</span> If you elect to delay your first RMD to no later than April 1 of the following year, you&apos;ll need to take your second RMD by December 31 of the same year.
        <SourceTag number={3} />
      </p>
      <div className="mt-6 flex justify-end">
        <button className="inline-flex items-center px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-md text-sm font-semibold shadow-sm hover:bg-zinc-200 transition">
          Sources
          <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-400 text-white text-xs font-bold">3</span>
        </button>
      </div>
    </div>
  );
};

export default RmdInfoAnswer; 