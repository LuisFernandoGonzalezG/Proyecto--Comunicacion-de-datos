import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, Video, Sliders, AlertTriangle, Wifi, 
  ArrowRight, RefreshCw, Cpu, ShieldCheck, 
  Lock, Network, Server, Pause, Play, Layers, SlidersHorizontal, CheckCircle
} from 'lucide-react';
import InfraestructuraDespliegue from './components/InfraestructuraDespliegue';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [selectedNode, setSelectedNode] = useState('CAM-04');
  const [isLiveRunning, setIsLiveRunning] = useState(true);
  
  // Métricas dinámicas
  const [latency, setLatency] = useState(12);
  const [trafficGbps, setTrafficGbps] = useState(1.84);
  const [activeDevices, setActiveDevices] = useState(31);
  const [chartPoints, setChartPoints] = useState([40, 65, 45, 80, 55, 95, 75, 110]);

  // Estados nuevos para ingresar datos personalizados al simulador
  const [inputNodeName, setInputNodeName] = useState('CAM-08 (Vía Cajicá)');
  const [inputCustomLatency, setInputCustomLatency] = useState('18');
  const [inputCustomTraffic, setInputCustomTraffic] = useState('2.10');
  const [mensajeAplicado, setMensajeAplicado] = useState(false);

  // Referencias para desplazamiento suave
  const inicioRef = useRef(null);
  const problematicaRef = useRef(null);
  const modulosRef = useRef(null);
  const simuladorRef = useRef(null);
  const seguridadRef = useRef(null);

  const scrollToSection = (seccion, ref) => {
    setActiveTab(seccion);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Simulación en tiempo real automática
  useEffect(() => {
    if (!isLiveRunning) return;
    const interval = setInterval(() => {
      setLatency(prev => Math.floor(Math.min(45, Math.max(8, prev + (Math.random() * 6 - 3)))));
      setTrafficGbps(prev => +(Math.min(2.5, Math.max(1.2, prev + (Math.random() * 0.2 - 0.1)))).toFixed(2));
      setActiveDevices(prev => Math.random() > 0.8 ? 32 : 31);
      setChartPoints(prev => {
        const nextVal = Math.floor(Math.random() * 60) + 40;
        return [...prev.slice(1), nextVal];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isLiveRunning]);

  // Aplicar datos ingresados por el usuario
  const handleAplicarDatos = (e) => {
    e.preventDefault();
    setSelectedNode(inputNodeName);
    setLatency(Number(inputCustomLatency) || 12);
    setTrafficGbps(Number(inputCustomTraffic) || 1.84);
    setMensajeAplicado(true);
    setTimeout(() => setMensajeAplicado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#070D19] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. NAVBAR INSTITUCIONAL */}
      <nav className="bg-[#0B132B]/90 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio', inicioRef)}>
            <div className="bg-[#1D4ED8] p-2 rounded-lg shadow-lg shadow-blue-900/50">
              <Activity className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wide text-white">ITS Chía</span>
              <span className="text-[10px] block text-slate-400">Alcaldía Municipal de Chía</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xs font-medium text-slate-300">
            <button onClick={() => scrollToSection('inicio', inicioRef)} className={`hover:text-blue-400 transition cursor-pointer ${activeTab === 'inicio' ? 'text-blue-400 font-bold' : ''}`}>Inicio</button>
            <button onClick={() => scrollToSection('problematica', problematicaRef)} className={`hover:text-blue-400 transition cursor-pointer ${activeTab === 'problematica' ? 'text-blue-400 font-bold' : ''}`}>Problemática</button>
            <button onClick={() => scrollToSection('modulos', modulosRef)} className={`hover:text-blue-400 transition cursor-pointer ${activeTab === 'modulos' ? 'text-blue-400 font-bold' : ''}`}>Módulos ITS</button>
            <button onClick={() => scrollToSection('simulador', simuladorRef)} className={`hover:text-blue-400 transition cursor-pointer ${activeTab === 'simulador' ? 'text-blue-400 font-bold' : ''}`}>Simulador</button>
            <button onClick={() => scrollToSection('seguridad', seguridadRef)} className={`hover:text-blue-400 transition cursor-pointer ${activeTab === 'seguridad' ? 'text-blue-400 font-bold' : ''}`}>Seguridad OSI</button>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden lg:flex items-center gap-1.5 bg-emerald-950/60 text-emerald-400 px-3 py-1 rounded-full text-xs border border-emerald-800/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              Sistema Operativo (99.98%)
            </span>
            <button 
              onClick={() => scrollToSection('simulador', simuladorRef)}
              className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition cursor-pointer"
            >
              SIMULADOR EN VIVO <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <div ref={inicioRef}>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#070D19] to-[#070D19] py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
                Smart City • Alcaldía Municipal de Chía
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Optimizando la movilidad y conectividad con baja latencia.
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                Integramos control inteligente de tráfico, video en alta definición y una red pública Wi-Fi 6 para responder en tiempo real a las necesidades del territorio.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection('modulos', modulosRef)}
                  className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition cursor-pointer"
                >
                  Explorar módulos ITS <ArrowRight className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('simulador', simuladorRef)}
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-semibold text-sm transition cursor-pointer"
                >
                  Ver diagnóstico territorial →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-slate-400">Monitoreo continuo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">32</div>
                  <div className="text-xs text-slate-400">Nodos conectados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">99.98%</div>
                  <div className="text-xs text-slate-400">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B132B]/80 border border-slate-700/60 rounded-2xl p-5 shadow-2xl relative">
              <div className="flex justify-between items-center mb-4 text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-slate-300">Monitoreo Municipal</span>
                <span className="flex items-center gap-1.5 text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> EN LÍNEA</span>
              </div>
              <div className="h-64 bg-[#050B14] rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-500"></div>
                  <div className="absolute transform rotate-45 inset-x-0 top-1/2 h-0.5 bg-cyan-500/50"></div>
                </div>
                <div className="absolute top-8 left-12 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
                  <Video className="h-3.5 w-3.5 text-blue-400" /> {selectedNode}
                </div>
                <div className="absolute bottom-10 right-10 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
                  <Sliders className="h-3.5 w-3.5 text-emerald-400" /> SEM-02 (Adaptativo)
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs">
                  <div className="text-slate-400">LATENCIA ACTUAL</div>
                  <div className="text-lg font-bold text-cyan-400 flex items-baseline gap-1">{latency} <span className="text-[10px] text-slate-400">ms</span></div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* 3. SECCIÓN: PROBLEMÁTICA */}
      <div ref={problematicaRef}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Contexto • Sabana Centro</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Retos que frenan la movilidad de Chía.</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              El crecimiento urbano exige una infraestructura capaz de entender la ciudad y responder antes de que cada evento se convierta en una interrupción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-xs text-slate-500 font-mono absolute top-6 right-6">01</span>
              <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Layers className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded uppercase">Alta recurrencia</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Congestión vial permanente</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Los corredores y entradas principales de Chía concentran altos flujos vehiculares que superan su capacidad en horas pico.</p>
            </div>

            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-xs text-slate-500 font-mono absolute top-6 right-6">02</span>
              <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded uppercase">Tiempo crítico</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Respuesta tardía a incidentes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">La detección manual retrasa la atención de autoridades y ambulancias ante accidentes, bloqueos y eventos en la vía.</p>
            </div>

            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-xs text-slate-500 font-mono absolute top-6 right-6">03</span>
              <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Wifi className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded uppercase">Cobertura irregular</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Conectividad pública inestable</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Una red Wi-Fi mal dimensionada limita el acceso ciudadano y no garantiza calidad de servicio en zonas de alta demanda.</p>
            </div>
          </div>
        </section>
      </div>

      {/* 4. SECCIÓN: MÓDULOS SMART CITY */}
      <div ref={modulosRef}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Módulos Smart City</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Tecnología que conecta movilidad y territorio.</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              Cuatro módulos coordinados para observar, decidir y responder con información confiable desde una sola red municipal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'video', title: 'Video HD / 4K', desc: 'Ingestión continua de video de alta definición para monitoreo vial, sin cortes ni pérdida de fotogramas.', icon: Video, color: 'text-blue-400' },
              { id: 'semaforizacion', title: 'Semaforización adaptativa', desc: 'Cambio dinámico de ciclos según el flujo vehicular para reducir tiempos de espera y mejorar la circulación.', icon: Sliders, color: 'text-emerald-400' },
              { id: 'incidentes', title: 'Detección de incidentes', desc: 'Centro de respuesta rápida con análisis en tiempo real y alertas inmediatas ante eventos en la vía.', icon: AlertTriangle, color: 'text-amber-400' },
              { id: 'wifi', title: 'Red pública Wi-Fi 6', desc: 'Portal cautivo, administración centralizada y priorización de tráfico para una conectividad pública confiable.', icon: Wifi, color: 'text-purple-400' },
            ].map(mod => {
              const Icon = mod.icon;
              return (
                <div key={mod.id} className="bg-[#0B132B]/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center ${mod.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs text-slate-500 font-mono">0{mod.id === 'video' ? 1 : mod.id === 'semaforizacion' ? 2 : mod.id === 'incidentes' ? 3 : 4}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{mod.desc}</p>
                  </div>
                  <button 
                    onClick={() => scrollToSection('simulador', simuladorRef)}
                    className="w-full mt-4 bg-slate-900 hover:bg-blue-600/20 text-blue-400 border border-slate-800 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    ABRIR DASHBOARD <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 5. SECCIÓN PRINCIPAL: SIMULADOR EN VIVO CON ENTRADA DE DATOS Y PAUSA/REPRODUCCIÓN */}
      <div ref={simuladorRef}>
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Panel de Control</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Visibilidad operacional en tiempo real.</h2>
            </div>
            
            {/* Controles principales de Reproducción y Pausa */}
            <div className="flex items-center gap-3 bg-[#0B132B] border border-slate-800 px-4 py-2 rounded-xl">
              <span className="text-xs text-slate-300">Simulación:</span>
              <button 
                onClick={() => setIsLiveRunning(true)}
                className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${isLiveRunning ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                <Play className="h-3 w-3" /> Reproducir
              </button>
              <button 
                onClick={() => setIsLiveRunning(false)}
                className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${!isLiveRunning ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                <Pause className="h-3 w-3" /> Pausar
              </button>
            </div>
          </div>

          <div className="bg-[#0B132B] border border-slate-700/80 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white base">ITS-Chía / NOC</span>
                  <span className="text-[11px] block text-slate-400">PANEL DE ESTADO OPERATIVO</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${isLiveRunning ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span> 
                  {isLiveRunning ? 'En vivo (Actualizando)' : 'Simulación Pausada'}
                </span>
              </div>
            </div>

            {/* Tarjetas de Métricas Superiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#070D19] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">DISPOSITIVOS EN LÍNEA</div>
                <div className="text-3xl font-extrabold text-white flex items-baseline gap-1">
                  {activeDevices} <span className="text-sm font-normal text-slate-400">/ 32</span>
                </div>
                <div className="text-[11px] text-emerald-400 mt-2">↑ 96.8% disponibilidad</div>
              </div>

              <div className="bg-[#070D19] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">TRÁFICO AGREGADO</div>
                <div className="text-3xl font-extrabold text-white flex items-baseline gap-1">
                  {trafficGbps} <span className="text-sm font-normal text-slate-400">Gbps</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">Capacidad utilizada: 46%</div>
              </div>

              <div className="bg-[#070D19] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">EVENTOS CRÍTICOS</div>
                <div className="text-3xl font-extrabold text-emerald-400 flex items-baseline gap-1">
                  0 <span className="text-sm font-normal text-slate-400">activos</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">Sin alertas de seguridad</div>
              </div>

              <div className="bg-[#070D19] border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">CONMUTACIÓN DE ANILLO</div>
                <div className="text-3xl font-extrabold text-white flex items-baseline gap-1">
                  34 <span className="text-sm font-normal text-slate-400">ms</span>
                </div>
                <div className="text-[11px] text-blue-400 mt-2">Dentro del objetivo (&lt;50ms)</div>
              </div>
            </div>

            {/* Grid Inferior: Gráfica + Panel de Ingreso de Datos Personalizados */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Gráfica de Red */}
              <div className="lg:col-span-8 bg-[#070D19] border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-sm text-white">Rendimiento de Red</h4>
                    <span className="text-xs text-slate-400">Tráfico por clase de servicio (En tiempo real)</span>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">ÚLTIMOS 60 MIN</span>
                </div>

                <div className="h-44 relative flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-800">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-slate-700 w-full"></div>
                    <div className="border-b border-slate-700 w-full"></div>
                    <div className="border-b border-slate-700 w-full"></div>
                  </div>

                  {chartPoints.map((val, idx) => (
                    <div key={idx} className="w-full flex flex-col items-center gap-2 z-10 transition-all duration-500">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-600/40 to-cyan-400 rounded-t-sm transition-all duration-500"
                        style={{ height: `${val}%` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-4">
                  <span className="flex items-center gap-2"><span className="w-3 h-1 bg-cyan-400 rounded"></span> Video crítico</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-1 bg-blue-500 rounded"></span> Control ITS</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-1 bg-amber-400 rounded"></span> Wi-Fi público</span>
                </div>
              </div>

              {/* Panel de Ingreso de Datos al Simulador */}
              <div className="lg:col-span-4 bg-[#070D19] border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">CONFIGURAR SIMULACIÓN</span>
                    <SlidersHorizontal className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-xs text-slate-400 mb-4">Ingresa parámetros personalizados para probar el comportamiento del nodo:</p>

                  <form onSubmit={handleAplicarDatos} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1">Nombre / Ubicación del Nodo:</label>
                      <input 
                        type="text" 
                        value={inputNodeName}
                        onChange={(e) => setInputNodeName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Ej. CAM-09 (Autopista)"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-300 mb-1">Latencia (ms):</label>
                        <input 
                          type="number" 
                          value={inputCustomLatency}
                          onChange={(e) => setInputCustomLatency(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 mb-1">Tráfico (Gbps):</label>
                        <input 
                          type="text" 
                          value={inputCustomTraffic}
                          onChange={(e) => setInputCustomTraffic(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-2 bg-[#1D4ED8] hover:bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-blue-600/30"
                    >
                      {mensajeAplicado ? <><CheckCircle className="h-3.5 w-3.5 text-emerald-300" /> ¡Datos Aplicados!</> : 'Inyectar Datos al Nodo'}
                    </button>
                  </form>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
                  <span>Nodo activo: <strong className="text-white">{selectedNode}</strong></span>
                  <span className="text-cyan-400 font-mono">{latency} ms</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* 6. SECCIÓN: INGENIERÍA DE RED */}
      <div ref={seguridadRef}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Ingeniería de red</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Diseñada para seguir operando. Incluso ante una falla.</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              Una arquitectura resiliente conecta el borde con el centro de control, protege cada salto y mantiene disponibles los servicios críticos de movilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs text-slate-500 font-mono">CAPA DE CAMPO • 01</span>
              <div className="my-4 text-blue-400"><Video className="h-8 w-8" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Cámaras & sensores</h3>
              <p className="text-xs text-slate-400">Video 4K • Telemetría IoT conectada en tiempo real por fibra óptica local.</p>
            </div>
            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs text-slate-500 font-mono">CAPA DE ACCESO • 02</span>
              <div className="my-4 text-emerald-400"><Server className="h-8 w-8" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Switch industrial</h3>
              <p className="text-xs text-slate-400">VLAN • QoS • Agregación de tráfico urbano con protocolos de alta disponibilidad.</p>
            </div>
            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs text-slate-500 font-mono">CAPA DE NÚCLEO • 03</span>
              <div className="my-4 text-purple-400"><Network className="h-8 w-8" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Centro de control</h3>
              <p className="text-xs text-slate-400">Analítica centralizada • GIS • Respuesta inmediata automatizada.</p>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN: HARDENING & SEGURIDAD */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Hardening & Seguridad</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Reglas que no se negocian.</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              Controles técnicos aplicados desde el diseño, no como una capa posterior de seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <div className="text-blue-400 mb-4"><Lock className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Cifrado estricto en tránsito</h3>
              <p className="text-xs text-slate-400 mb-6">Toda comunicación utiliza HTTPS por el puerto 443 con TLS 1.2 o TLS 1.3. El tráfico sin cifrar por puerto 80 se rechaza.</p>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">HTTPS : 443</span>
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">TLS 1.2+</span>
              </div>
            </div>

            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <div className="text-emerald-400 mb-4"><ShieldCheck className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Sesiones y cabeceras protegidas</h3>
              <p className="text-xs text-slate-400 mb-6">Cookies Secure, HttpOnly y SameSite protegen la sesión; el enmascaramiento de cabeceras oculta versiones del servidor.</p>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">SECURE</span>
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">HTTPONLY</span>
              </div>
            </div>

            <div className="bg-[#0B132B]/60 border border-slate-800 p-6 rounded-2xl">
              <div className="text-purple-400 mb-4"><Activity className="h-7 w-7" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Priorización de ancho de banda</h3>
              <p className="text-xs text-slate-400 mb-6">QoS clasifica primero el control semafórico y el video crítico, antes del tráfico de navegación de la red Wi-Fi pública.</p>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">QoS</span>
                <span className="bg-slate-900 border border-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">PRIORIDAD P1</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 8. SECCIÓN: INFRAESTRUCTURA, CERTIFICADOS Y MENSAJERÍA */}
      <InfraestructuraDespliegue />

      {/* FOOTER */}
      <footer className="bg-[#050B14] border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-400 mb-1">Sistema Inteligente de Transporte (ITS-Chía)</p>
        <p>Alcaldía Municipal de Chía - Secretaría de Tránsito y Movilidad • Desarrollado para Entornos Académicos e Institucionales</p>
      </footer>

    </div>
  );
}