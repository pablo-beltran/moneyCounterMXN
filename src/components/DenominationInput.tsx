import React from 'react';

type Props = {
  label: string;
  value: number;
};

const DenominationInput: React.FC<Props> = ({ label, value }) => {

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
      <label className="text-gray-700 font-medium w-32">{label}</label>
      <input
        type="number"
        min={0}
        value={value}
        className="w-20 px-2 py-1 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DenominationInput;
