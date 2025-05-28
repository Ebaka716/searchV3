import React from 'react';

const DataPoint = ({ label, value, subLabel }: { label: string; value: string; subLabel?: string }) => (
  <div className="flex-1 px-2 py-1 min-w-[110px]">
    <div className="text-xs text-gray-500 uppercase tracking-wider leading-tight">{label}</div>
    {subLabel && <div className="text-xs text-gray-400 leading-tight">{subLabel}</div>}
    <div className="text-base font-semibold text-gray-800">{value}</div>
  </div>
);

const StrengthBar = ({ label, percentage, color, marketMedian }: { label: string; percentage: string; color: string; marketMedian?: boolean }) => {
  const numericValue = parseFloat(percentage);
  const barWidth = Math.min(100, numericValue * 20);

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium ${marketMedian ? 'text-gray-600' : 'text-blue-600'}`}>{label}</span>
        <span className={`text-base font-bold ${marketMedian ? 'text-gray-800' : 'text-blue-700'}`}>{percentage}</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full w-full overflow-hidden mt-0.5">
        <div
          className={`${color} h-full rounded-full`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

const AppleDividendsAnswer = () => {
  return (
    <div className="p-3 h-full flex flex-col text-sm font-sans">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Dividends</h3>

      <div className="flex flex-wrap border-b border-gray-200 mb-3">
        <DataPoint label="Dividend Amount" subLabel="(MOST RECENT)" value="$0.2600" />
        <div className="border-l border-gray-200 h-auto self-stretch my-1"></div>
        <DataPoint label="Dividend Frequency" value="Quarterly" />
      </div>

      <div>
        <h4 className="text-base font-semibold text-gray-700 mb-0.5">Strength</h4>
        <p className="text-xs text-gray-500 mb-2">Dividend Yield</p>
        
        <StrengthBar label="AAPL" percentage="0.53%" color="bg-blue-500" />
        <StrengthBar label="Market Median" percentage="3.01%" color="bg-gray-400" marketMedian />
      </div>

      <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-3 rounded">
        <span className="font-medium">Want to see your recent dividend payments?</span> Try asking: <span className="font-mono bg-blue-200 px-1 py-0.5 rounded">my dividends for apple last month</span>
      </div>
    </div>
  );
};

export default AppleDividendsAnswer; 