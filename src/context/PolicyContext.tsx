import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { Policy } from '../types/policy';

interface PolicyContextType {
  policies: Policy[];
  setPolicies: (data: Policy[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  paginatedPolicies: Policy[];
  totalPages: number;
}

const PolicyContext = createContext<PolicyContextType | undefined>(undefined);

export const PolicyProvider = ({ children }: { children: ReactNode }) => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  const paginatedPolicies = useMemo(() => {
    return policies
      .filter((p) => p.status === 'Active')
      .sort((a, b) => new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime())
      .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [policies, currentPage]);

  const totalPages = Math.ceil(
    policies.filter((p) => p.status === 'Active').length / ITEMS_PER_PAGE
  );

  return (
    <PolicyContext.Provider
      value={{ policies, setPolicies, currentPage, setCurrentPage, paginatedPolicies, totalPages }}
    >
      {children}
    </PolicyContext.Provider>
  );
};

export const usePolicyContext = () => {
  const context = useContext(PolicyContext);
  if (!context) throw new Error('usePolicyContext must be used within a PolicyProvider');
  return context;
};