import React from 'react';
import { Cpu, Video, Wifi, ShieldAlert } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#1D4ED8] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-[#1D4ED8]/30 text-blue-300 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
          Plataforma de Movilidad Inteligente
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Centro de Control y Monitoreo ITS-Chía
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base mb-8">
          Sistema integrado de telemetría urbana para la gestión de tráfico, videovigilancia 4K, respuesta a incidentes y conectividad municipal en tiempo real.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 p-4 rounded-xl text-left">
            <Video className="h-5 w-5 text-blue-400 mb-2" />
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-slate-400">Camaras 4K Activas</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 p-4 rounded-xl text-left">
            <Cpu className="h-5 w-5 text-emerald-400 mb-2" />
            <div className="text-2xl font-bold">18</div>
            <div className="text-xs text-slate-400">Intersecciones Semaforizadas</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 p-4 rounded-xl text-left">
            <ShieldAlert className="h-5 w-5 text-amber-400 mb-2" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-slate-400">Incidentes en Atención</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 p-4 rounded-xl text-left">
            <Wifi className="h-5 w-5 text-purple-400 mb-2" />
            <div className="text-2xl font-bold">98.4%</div>
            <div className="text-xs text-slate-400">Cobertura Wi-Fi 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}