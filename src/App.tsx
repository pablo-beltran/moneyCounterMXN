import { useState } from "react";
import { initialDenominations } from "./types/types";
import DenominationInput from "./components/DenominationInput";

function App() {
  const [denominations, setDenominations] = useState(initialDenominations);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Contador de Efectivo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {denominations.map((d, i) => (
          <DenominationInput
            key={i}
            label={d.label}
            value={d.count}
          />
        ))}
      </div>
      <div className="mt-6 text-2xl font-semibold text-gray-800">
        Total: ${0} MXN
      </div>
      <div>
        {/* mostrar el total de cada denominacion */}
        {denominations.map((d, i) => (
          <h1 key={i}>denominations {d.label}: {d.count}</h1>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
