import React from 'react';
import { Activity, Radio } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-[#1D4ED8] p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide">ITS-Chía</span>
              <span className="text-xs block text-slate-400">Alcaldía Municipal de Chía</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-slate-300">
            <span className="flex items-center gap-1.5 bg-emerald-950/60 text-emerald-400 px-3 py-1 rounded-full border border-emerald-800/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              Sistema Operativo (99.9%)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full">
              <Radio className="h-4 w-4 text-[#1D4ED8]" /> Red Mesh Activa
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}