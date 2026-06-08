import { Policy } from '../types/policy';
import mockData from '../data/mock_data.json';

export const fetchPolicies = async (): Promise<Policy[]> => {
  try {
    const data = mockData as unknown as Policy[];
    return data;
  } catch (error) {
    console.error('Error in policyService:', error);
    return [];
  }
};