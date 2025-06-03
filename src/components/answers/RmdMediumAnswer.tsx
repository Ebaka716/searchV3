import React from 'react';

const SourceTag = ({ number }: { number: number }) => (
  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-400 text-white text-xs font-bold align-middle">{number}</span>
);

const RmdMediumAnswer = () => (
  <div className="pb-6">
    <div className="text-4xl font-bold text-zinc-900 mb-2">Yes</div>
    <p className="text-base text-zinc-800 mb-2">
      Based on your profile you are 75 years old and have tax-deferred retirement accounts.
    </p>
    <p className="text-base text-zinc-800 mb-2">
      <span className="font-semibold">Age 75:</span> You were born before July 1949, so your RMD age is greater than 70½.
    </p>
    <p className="text-base text-zinc-800 mb-2">
      <span className="font-semibold">Traditional IRAs:</span> RMDs are generally required for traditional IRAs, SEP IRAs, and SIMPLE IRAs starting at age 73.<SourceTag number={1} />
    </p>
    <p className="text-base text-zinc-800 mb-2">
      <span className="font-semibold">401(k)s and other workplace plans:</span> Participants in workplace retirement plans, like 401(k)s, can delay taking RMDs until they retire, unless they are a 5% owner of the sponsoring business.<SourceTag number={2} />
    </p>
    <p className="text-base text-zinc-800 mb-2">
      <span className="font-semibold">Penalties:</span> If you don&apos;t take your RMD by the deadline, you could face a penalty of 25% of the amount you should have withdrawn, according to the IRS.<SourceTag number={3} />
    </p>
    <p className="text-base text-zinc-800">
      <span className="font-semibold">When to take RMDs:</span> RMDs are generally taken by December 31st of each year, starting at the required age.<SourceTag number={4} />
    </p>
    <div className="mt-6 flex justify-end">
      <button className="inline-flex items-center px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-md text-sm font-semibold shadow-sm hover:bg-zinc-200 transition">
        Sources
        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-400 text-white text-xs font-bold">4</span>
      </button>
    </div>
  </div>
);

export default RmdMediumAnswer; 