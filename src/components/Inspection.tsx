import React from 'react';
import { useState } from "react";

interface InspectionProps {
  itens: string[];
  onAddItem: (novosItens: string[]) => void;
}

export default function Inspection({itens, onAddItem}: InspectionProps) {

  const [novoItem, setNovoItem] = useState('');
  
  function handleAddNovoItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(novoItem.trim() !== '') {
      const novosItens = [...itens, novoItem];
      onAddItem(novosItens);
      setNovoItem('');
    }
  }

  return (
    <div className="bg-slate-200/50 w-2/5 p-4 mx-4 mt-4 rounded-lg shadow-xl">
      <span className="text-3xl text-slate-800 font-bold">Entrada</span>
      <form onSubmit={handleAddNovoItem} className="mb-4">
        <input 
          type="text"
          value={novoItem}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNovoItem(e.target.value)}
          className="border rounded-md p-2 mr-2 w-4/6 me-4"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md">adicionar</button>
      </form>
      <ul className="overflow-y-auto max-h-48">
        {itens.map((item, index) => (
          <li key={index} className="me-2 bg-white text-gray-700 ps-10 border border-gray-300 rounded-md p-2 mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}