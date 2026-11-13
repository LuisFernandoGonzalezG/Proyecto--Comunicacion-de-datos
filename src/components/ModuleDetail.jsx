import React from 'react';
import { Activity, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ModuleDetail({ activeModule }) {
  const details = {
    video: { title: "Videovigilancia 4K - Corredor Vía Chía-Cajicá", status: "Transmisión en vivo estable", metrics: ["FPS: 60", "Latencia: 120ms", "Ancho de banda: 14.2 MB/s"] },
    semaforizacion: { title: "Semaforización Inteligente - Cruce Centro", status: "Ciclo adaptativo activo", metrics: ["Vehículos/min: 48", "Fase actual: Verde Principal", "Sincronización: Óptima"] },
    incidentes: { title: "Gestión de Incidentes - Registro Activo", status: "Unidades en ruta", metrics: ["Tiempo promedio respuesta: 4.5 min", "Unidades asignadas: 3", "Estado: Controlado"] },
    wifi: { title: "Red Wi-Fi 6 - Parque Principal de Chía", status: "Conexiones estables", metrics: ["Usuarios conectados: 1,420", "Velocidad promedio: 180 Mbps", "Carga red: 42%"] }
  };

  const current = details[activeModule];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-6 border-b border-slate-100 gap-4">
          <div>
            <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">Panel de Telemetría en Tiempo Real</span>
            <h3 className="text-xl font-bold text-[#0F172A] mt-1">{current.title}</h3>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            {current.status}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {current.metrics.map((metric, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 p-4 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">{metric.split(':')[0]}</span>
              <span className="text-sm font-bold text-[#0F172A] bg-white px-2.5 py-1 rounded border border-slate-200">{metric.split(':')[1]}</span>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-[#1D4ED8] p-3 rounded-lg">
              <Activity className="h-6 w-6 text-white animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <div>
              <h4 className="font-semibold">Simulador de Telemetría Activo</h4>
              <p className="text-xs text-slate-400">Los datos se actualizan automáticamente mediante el backend simulado.</p>
            </div>
          </div>
          <button 
            onClick={() => alert("¡Datos actualizados correctamente desde el servidor central!")}
            className="flex items-center gap-2 bg-[#1D4ED8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" /> Forzar Sincronización
          </button>
        </div>
      </div>
    </div>
  );
}