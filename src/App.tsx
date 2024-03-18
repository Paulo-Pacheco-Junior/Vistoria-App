import React from 'react';
import { useState } from "react";
import Inspection from "./components/Inspection";
import ComparisonInspections from "./components/ComparisonInspection";
import Logo from "./components/Logo";

export default function App() {

  const [itensEntrada, setItensEntrada] = useState<string[]>(['carteira', 'carregador', 'caderno']);
  const [itensSaida, setItensSaida] = useState<string[]>([]);
  const itensSuspeitos = [...itensSaida.filter(item => !itensEntrada.includes(item))];

  return (
    <div className="relative h-screen">
      <img src='/inspecao.jpg' alt="inspecao" className=" w-full h-full object-cover"/>
      <div className="flex flex-col absolute inset-0 items-center py-16">
          <Logo />
        <div className="flex justify-between w-10/12 px-12 mx-auto ">
          <Inspection 
            itens={itensEntrada} 
            onAddItem={setItensEntrada} 
          />
          <Inspection 
            itens={itensSaida} 
            onAddItem={setItensSaida} 
          />
        </div>
          <ComparisonInspections 
            inspecao={itensSuspeitos}
          />
      </div>
    </div>
  );
}