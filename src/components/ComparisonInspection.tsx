import React from 'react';

interface ComparisonInspectionProps {
  inspecao: string[];
}

export default function ComparisonInspections({inspecao}: ComparisonInspectionProps) {
  return (
    <div className="bg-slate-200/50 rounded-lg w-3/4 h-64 px-40 py-10 mt-4 text-2xl">
      {inspecao.length > 0 ? 
        <p>O Visitante apresentou itens novos na saída!</p> :
        <p>Até o momento o Visitante não apresentou nenhum item novo.</p>
      }
      <div className="">
        <ul className="flex flex-wrap overflow-y-auto max-h-16">
          {inspecao.map((item: any, index: any) => (
            <li key={index} className="text-center me-2">
              {`${item.charAt(0).toUpperCase()}${item.slice(1)}...`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}