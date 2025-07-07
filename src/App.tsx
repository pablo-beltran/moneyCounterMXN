import { useState } from "react";
import { initialDenominations } from "./types/types";
import DenominationInput from "./components/DenominationInput";

function App() {
  const [denominations, setDenominations] = useState(initialDenominations);

  const handleChange = (index: number, count: number) => {
    const updated = [...denominations];
    updated[index].count = count;
    setDenominations(updated);
  };

  const total = denominations.reduce((sum, d) => sum + d.value * d.count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold bg-clip-text drop-shadow-lg mb-8">
        Contador de Efectivo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {denominations.map((d, i) => (
          <DenominationInput
            key={i}
            label={d.label}
            denomination={d.denomination}
            value={d.count}
            onChange={(val) => handleChange(i, val)}
          />
        ))}
      </div>

      <div className="mt-10 text-4xl font-extrabold text-gray-900 drop-shadow-md">
        Total: <span className="text-blue-600">${total.toFixed(2)} </span> MXN
      </div>
    </div>
  );
}

export default App;
