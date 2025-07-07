type Denomination = {
  label: string;
  denomination: string;
  value: number;
  count: number;
};

export const initialDenominations: Denomination[] = [
  { label: "Billete", denomination: '1000', value: 1000, count: 0 },
  { label: "Billete", denomination: '500', value: 500, count: 0 },
  { label: "Billete", denomination: '200', value: 200, count: 0 },
  { label: "Billete", denomination: '100', value: 100, count: 0 },
  { label: "Billete", denomination: '50', value: 50, count: 0 },
  { label: "Billete", denomination: '20', value: 20, count: 0 },
  { label: "Moneda", denomination: '20', value: 20, count: 0 },
  { label: "Moneda", denomination: '10', value: 10, count: 0 },
  { label: "Moneda", denomination: '5', value: 5, count: 0 },
  { label: "Moneda", denomination: '2', value: 2, count: 0 },
  { label: "Moneda", denomination: '1', value: 1, count: 0 },
  { label: "Moneda", denomination: '0.50', value: 0.5, count: 0 },
];