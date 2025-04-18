
import React from 'react';
import type { AIArea } from './aiAreaData';

const AIAreaTile: React.FC<AIArea> = ({ title, description, icon: Icon, items }) => {
  return (
    <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl border border-green-100 shadow-lg relative overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-green-600"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-green-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100 text-green-600 shadow-sm transform transition-transform group-hover:scale-110 duration-300">
            <Icon size={28} className="transform transition-transform group-hover:-rotate-12" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{description}</p>
        <div className="space-y-3 mt-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group/item">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 transform transition-transform group-hover/item:scale-150"></div>
              <span className="text-gray-700 text-sm font-medium group-hover/item:text-green-600 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAreaTile;
