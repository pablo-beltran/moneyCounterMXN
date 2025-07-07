import React from 'react';

type Props = {
  label: string;
  denomination: string;
  value: number;
  onChange: (val: number) => void;
};

const DenominationInput: React.FC<Props> = ({ label, denomination, value, onChange }) => {
  const handleCardClick = () => {
    onChange(value + 1);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation(); // Evita que el clic en el input dispare la suma
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value);
    if (isNaN(newVal) || newVal < 0) {
      onChange(0);
    } else {
      onChange(newVal);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col gap-2 items-start justify-center p-4 bg-white rounded-2xl border border-gray-300 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="text-gray-900 text-sm text-xl">
        {label} $<span className='font-bold'>{denomination}</span>
      </div>
      <input
        type="number"
        min={0}
        onClick={handleInputClick}
        onChange={handleInputChange}
        value={value === 0 ? '' : value}
        placeholder="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="absolute top-2 right-3 text-xs text-gray-500 group-hover:text-blue-500 transition">
        +1 al hacer clic
      </div>
    </div>
  );
};

export default DenominationInput;
