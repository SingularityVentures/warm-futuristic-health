
import React from 'react';
import type { AIArea } from './aiAreaData';

const AIAreaTile: React.FC<AIArea> = ({ title, description, icon: Icon, items }) => {
  return (
    <div className="bg-white rounded-xl border border-green-200 shadow-sm relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        <div className="space-y-2 mt-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAreaTile;
