import React from 'react';
import { Policy } from '../types/policy';

interface Props {
  policy: Policy;
}

export const PolicyCard: React.FC<Props> = ({ policy }) => {
  const isAnnual = policy.type === 'Annual';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-blue-700 font-bold text-xl mb-4">
            Policy number: <span className="text-gray-900">{policy.policyNumber}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm text-gray-700">
            <p><span className="font-semibold">Destination:</span> {policy.destinations[0]?.name}</p>
            <p><span className="font-semibold">Plan:</span> {policy.planName} {isAnnual && 'Multi-trip'}</p>
            <p>
              <span className="font-semibold">{isAnnual ? 'Policy start date:' : 'Travel date:'}</span>{' '}
              {new Date(policy.policyStart).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
            </p>
            <p><span className="font-semibold">Excess:</span> ${policy.excess}</p>
            {isAnnual && <p><span className="font-semibold">Maximum trip duration:</span> Up to {policy.maxTripDuration} days</p>}
          </div>

          <div className="mt-6 flex gap-6">
            <button className="text-blue-600 underline text-sm hover:text-blue-800">View PDS</button>
            <button className="text-blue-600 underline text-sm hover:text-blue-800">Certificate of Insurance</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:w-48">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Make a claim
          </button>
          <button className="border-2 border-blue-700 text-blue-700 font-semibold py-2 px-4 rounded-full hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
            Manage my policy
          </button>
        </div>
      </div>
    </div>
  );
};