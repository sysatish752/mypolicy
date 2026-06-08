import React from 'react';
import { usePolicyContext } from '../context/PolicyContext';
import { PolicyCard } from './PolicyCard';

export const PolicyList: React.FC = () => {
  const { paginatedPolicies, currentPage, setCurrentPage, totalPages } = usePolicyContext();

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {paginatedPolicies.map((policy) => (
        <PolicyCard key={policy.policyNumber} policy={policy} />
      ))}

{/* /**************** Pagination Controls ****************************/ }
      <div className="flex justify-center items-center gap-2 mt-8">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 disabled:opacity-50"
        >{"<"}</button>
        
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`w-8 h-8 rounded-full ${currentPage === idx + 1 ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
          >
            {idx + 1}
          </button>
        ))}
        
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 disabled:opacity-50"
        >{">"}</button>
      </div>
    </div>
  );
};
