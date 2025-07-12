import React from 'react';

const ColorPalette = () => {
  const colors = [
    {
      name: 'Rose Gold',
      base: 'roseGold',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: 'Champagne',
      base: 'champagne',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: 'Blush',
      base: 'blush',
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="font-title text-3xl text-center mb-8 text-roseGold-700">
        Paleta de Cores
      </h2>
      <div className="space-y-8">
        {colors.map((color) => (
          <div key={color.name} className="space-y-4">
            <h3 className="font-body text-xl font-semibold text-gray-800">
              {color.name}
            </h3>
            <div className="grid grid-cols-10 gap-2">
              {color.shades.map((shade) => (
                <div
                  key={shade}
                  className={`bg-${color.base}-${shade} h-16 rounded-lg shadow-md flex items-center justify-center`}
                >
                  <span className="text-xs font-body font-medium text-white drop-shadow-sm">
                    {shade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
