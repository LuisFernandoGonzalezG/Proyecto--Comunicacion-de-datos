import React, { useState } from 'react';
import { Globe, ShieldCheck, MessageSquare, CheckCircle2, XCircle, Send } from 'lucide-react';

export default function InfraestructuraDespliegue() {
  const [certActivo, setCertActivo] = useState('ev');
  const [canalAlerta, setCanalAlerta] = useState('telegram');
  const [alertaEnviada, setAlertaEnviada] = useState(false);

  const certificados = {
    dv: {
      titulo: 'Validación de Dominio (DV)',
      vigencia: '3 meses',
      nivel: 'Cifrado básico automatizado (Let’s Encrypt / TLS 1.3)',
      uso: 'Portal público informativo y consulta ciudadana.'
    },
    ov: {
      titulo: 'Certificado Organizativo (OV)',
      vigencia: '1 año',
      nivel: 'Validación de identidad institucional de la Alcaldía de Chía',
      uso: 'API de telemetría y subdominios administrativos.'
    },
    ev: {
      titulo: 'Validación Extendida (EV)',
      vigencia: '1 año',
      nivel: 'Máximo nivel de confianza criptográfica y auditoría',
      uso: 'Panel NOC, control semafórico y gestión de incidentes.'
    }
  };

  const dispararPrueba = () => {
    setAlertaEnviada(true);
    setTimeout(() => setAlertaEnviada(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Infraestructura & Despliegue Web
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Arquitectura de Publicación, Cifrado y Mensajería.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
          Componentes de disponibilidad en servidor, esquema de certificación TLS y canales de notificación inmediata para operadores.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. ENTORNO WEB - SERVIDOR HOSTING */}
        <div className="bg-[#0B132B]/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">SERVIDOR HOSTING</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Entorno Web Operativo</h3>
            <p className="text-xs text-slate-400 mb-6">
              Estado de infraestructura de alojamiento y resolución DNS del portal ITS-Chía.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#070D19] border border-slate-800 px-4 py-3 rounded-xl text-xs">
                <span className="text-slate-300 font-medium">Dominio Operando</span>
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <XCircle className="h-4 w-4" /> En propagación DNS
                </span>
              </div>

              <div className="flex items-center justify-between bg-[#070D19] border border-slate-800 px-4 py-3 rounded-xl text-xs">
                <span className="text-slate-300 font-medium">Hosting Operando</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Activo (99.98%)
                </span>
              </div>

              <div className="flex items-center justify-between bg-[#070D19] border border-slate-800 px-4 py-3 rounded-xl text-xs">
                <span className="text-slate-300 font-medium">Sitio Publicado</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Producción v1.0
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
            <span>Entorno: Contenedor Cloud</span>
            <span className="text-blue-400 font-mono">HTTPS : 443</span>
          </div>
        </div>

        {/* 2. CONFIGURACIÓN DE CERTIFICADOS (CIFRADO) */}
        <div className="bg-[#0B132B]/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                CERTIFICADO APLICADO
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Configuración de Certificados</h3>
            <p className="text-xs text-slate-400 mb-4">
              Selecciona el tipo de certificado SSL/TLS aplicado según el nivel de validación institucional:
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { id: 'dv', label: 'Dominio', time: '3 meses' },
                { id: 'ov', label: 'Organizativo', time: '1 año' },
                { id: 'ev', label: 'O. Extendido', time: '1 año' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCertActivo(item.id)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    certActivo === item.id
                      ? 'bg-[#1D4ED8]/20 border-blue-500 text-white'
                      : 'bg-[#070D19] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                  <div className="text-[10px] text-blue-400 mt-0.5">{item.time}</div>
                </button>
              ))}
            </div>

            <div className="bg-[#070D19] border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Tipo:</span>
                <span className="text-white font-semibold">{certificados[certActivo].titulo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Vigencia:</span>
                <span className="text-emerald-400 font-semibold">{certificados[certActivo].vigencia}</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                {certificados[certActivo].nivel}. {certificados[certActivo].uso}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
            <span>Protocolo: TLS 1.3</span>
            <span className="text-emerald-400 font-mono">Cifrado Activo</span>
          </div>
        </div>

        {/* 3. MENSAJERÍA (WEB SCRIPT + APP MÓVIL) */}
        <div className="bg-[#0B132B]/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-slate-500">ALERTAS & API</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sistema de Mensajería</h3>
            <p className="text-xs text-slate-400 mb-5">
              Despacho automatizado de eventos viales desde el núcleo hacia interfaz web y dispositivos móviles.
            </p>

            <div className="space-y-3 mb-5">
              <div
                onClick={() => setCanalAlerta('web')}
                className={`p-3.5 rounded-xl border cursor-pointer transition ${
                  canalAlerta === 'web'
                    ? 'bg-[#1D4ED8]/20 border-blue-500'
                    : 'bg-[#070D19] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>Web (Script Java / JS)</span>
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Webhook</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Notificaciones en consola NOC mediante eventos asíncronos en tiempo real.
                </p>
              </div>

              <div
                onClick={() => setCanalAlerta('movil')}
                className={`p-3.5 rounded-xl border cursor-pointer transition ${
                  canalAlerta === 'movil'
                    ? 'bg-[#1D4ED8]/20 border-blue-500'
                    : 'bg-[#070D19] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>Integración Aplicación Móvil</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Telegram / WhatsApp
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Bot de respuesta rápida para agentes de tránsito y ambulancias en Chía.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={dispararPrueba}
            className="w-full bg-[#1D4ED8] hover:bg-blue-600 text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-blue-600/30"
          >
            <Send className="h-3.5 w-3.5" />
            {alertaEnviada
              ? `¡Alerta enviada vía ${canalAlerta === 'web' ? 'Script Web' : 'Telegram/WhatsApp'}!`
              : 'Simular Envío de Alerta'}
          </button>
        </div>

      </div>
    </section>
  );
}