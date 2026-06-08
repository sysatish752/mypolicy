export interface Destination {
  code: string;
  name: string;
}

export interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  type: 'Single Trip' | 'Annual';
  status: 'Active' | 'Expired';
  planName: string;
  destinations: Destination[];
  excess: number;
  maxTripDuration: number;
  primaryTravellerFirstname: string;
}