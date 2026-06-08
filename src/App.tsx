import React, { useEffect } from 'react';
import { PolicyProvider, usePolicyContext } from './context/PolicyContext';
import { PolicyList } from './components/PolicyList';
import { fetchPolicies } from './api/policyService';

const PolicyApp = () => {
  const { setPolicies } = usePolicyContext();

  useEffect(() => {
    const load = async () => {
      const data = await fetchPolicies();
      setPolicies(data);
    };

    load();
  }, [setPolicies]);

  return (
    <div className="min-h-screen bg-gray-50">
      <PolicyList />
    </div>
  );
};

export default function App() {
  return (
    <PolicyProvider>
      <PolicyApp />
    </PolicyProvider>
  );
}
