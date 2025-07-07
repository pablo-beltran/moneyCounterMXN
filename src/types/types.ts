type Denomination = {
  label: string;
  value: number;
  count: number;
};

export const initialDenominations: Denomination[] = [
  { label: 'Billete $1000', value: 1000, count: 0 },
  { label: 'Billete $500', value: 500, count: 0 },
  { label: 'Billete $200', value: 200, count: 0 },
  { label: 'Billete $100', value: 100, count: 0 },
  { label: 'Billete $50', value: 50, count: 0 },
  { label: 'Billete $20', value: 20, count: 0 },
  { label: 'Moneda $20', value: 20, count: 0 },
  { label: 'Moneda $10', value: 10, count: 0 },
  { label: 'Moneda $5', value: 5, count: 0 },
  { label: 'Moneda $2', value: 2, count: 0 },
  { label: 'Moneda $1', value: 1, count: 0 },
  { label: 'Moneda $0.50', value: 0.5, count: 0 },
];