import React from 'react';
import { Video, Sliders, AlertTriangle, Wifi, ArrowRight } from 'lucide-react';

export default function ModuleCards({ activeModule, setActiveModule }) {
  const modules = [
    { id: 'video', name: 'Videovigilancia 4K', desc: 'Monitoreo de corredores viales principales y analítica de placas.', icon: Video, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'semaforizacion', name: 'Semaforización IA', desc: 'Control adaptativo de tiempos de semáforos basado en densidad vehicular.', icon: Sliders, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 'incidentes', name: 'Gestión de Incidentes', desc: 'Reporte y despacho automatizado para emergencias de tránsito.', icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 'wifi', name: 'Red Wi-Fi 6 Municipal', desc: 'Telemetría de puntos de acceso y control de ancho de banda público.', icon: Wifi, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-xl font-bold text-[#0F172A] mb-6">Módulos del Sistema</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((mod) => {
          const Icon = mod.icon;
          const isSelected = activeModule === mod.id;
          return (
            <div
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border ${
                isSelected 
                  ? 'bg-[#0F172A] text-white border-[#1D4ED8] shadow-lg ring-2 ring-[#1D4ED8]/50' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#1D4ED8]/30' : mod.bg} mb-4`}>
                <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : mod.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{mod.name}</h3>
              <p className={`text-sm mb-4 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>{mod.desc}</p>
              <div className={`flex items-center text-xs font-semibold ${isSelected ? 'text-blue-400' : 'text-[#1D4ED8]'}`}>
                <span>{isSelected ? 'Módulo Activo' : 'Ver Telemetría'}</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}