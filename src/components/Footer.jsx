import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <p className="font-semibold text-slate-300">Sistema Inteligente de Transporte (ITS-Chía)</p>
          <p className="text-slate-500 mt-1">Alcaldía Municipal de Chía - Secretaría de Tránsito y Movilidad</p>
        </div>
        <div className="flex items-center space-x-6 text-slate-400">
          <span>Desarrollado para Entornos Académicos e Institucionales</span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-400 font-medium">Versión 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}