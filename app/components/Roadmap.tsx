"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";

interface Etapa {
    ano: string;
    titulo: string;
    detalhes: string;
    lado: "left" | "right";
    imagem: string;
    atual?: boolean;
}

const etapas: Etapa[] = [
    {
        ano: "1967 – 1988",
        titulo: "O Surgimento do MEJ",
        detalhes:
            "O movimento surgiu na França (1967) e chegou ao Brasil em 1988. Hoje, a Brasil Júnior coordena uma rede de mais de 1600 EJs em 27 federações estaduais.",
        lado: "left",
        imagem: "/assets/logoBrasilJunior.png",
    },
    {
        ano: "2024",
        titulo: "Início da Colaboração",
        detalhes:
            "A Techtins inicia sua jornada oficial no movimento, oferecendo palestras e consultorias alinhadas aos objetivos estratégicos nacionais da rede.",
        lado: "right",
        imagem: "/assets/inicio.png",
    },
    {
        ano: "2025",
        titulo: "Capacitação e Cultura",
        detalhes:
            "Foco total em imersões, treinamentos e participação em eventos da rede para consolidar a cultura de alto impacto e promover mudanças no empreendedorismo jovem.",
        lado: "left",
        imagem: "/assets/palestra.png",
    },
    {
        ano: "2026",
        titulo: "O Ano da Federação",
        detalhes:
            "Estamos em pleno processo de federação pela entidade estadual tocantinense. Este marco nos permitirá operar com CNPJ e garantir o selo de excelência e qualidade do MEJ.",
        lado: "right",
        atual: true,
        imagem: "/assets/federacao.jpeg",
    },
    {
        ano: "Futuro",
        titulo: "Conexão com o Mercado",
        detalhes:
            "Nossa meta é consolidar o impacto socioeducativo, conectando diretamente o talento acadêmico às demandas reais do mercado de trabalho através de tecnologia de ponta.",
        lado: "left",
        imagem: "/assets/grupoTechtins.jpeg",
    },
];

const BRAND_PURPLE = "#4A2984";
const DARK_PURPLE = "#331c5e";
const YELLOW_ACCENT = "#FFDE1D";

export default function Roadmap() {
    const [openIndex, setOpenIndex] = useState<number | null>(3);
    const phoneNumber = '5563992095450';
    const message = 'Olá Maria! Vim pelo site e gostaria de fazer parte da Techtins :)';
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12 font-montserrat relative selection:bg-yellow-brand selection:text-[#331c5e]">
            <style jsx global>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #4A2984;
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb:hover {
                    background: #331c5e;
                }
            `}</style>

            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-24">
                    <p className="text-[12px] font-black tracking-[0.4em] uppercase mb-4 text-purple-brand">Linha do Tempo</p>
                    <h2 className="text-5xl md:text-7xl font-black text-[#331c5e] tracking-tighter uppercase leading-none mb-6">
                        NOSSA JORNADA
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-2 w-16 rounded-full" style={{ background: YELLOW_ACCENT }} />
                        <div className="h-2 w-8 rounded-full opacity-30" style={{ background: BRAND_PURPLE }} />
                    </div>
                </div>

                <div className="absolute left-75 bottom-0 w-1.5 bg-gray-100 -translate-x-1/2 hidden md:block" />

                <div className="space-y-16 relative">
                    {etapas.map((etapa, index) => {
                        const isOpen = openIndex === index;
                        const isLeft = etapa.lado === "left";

                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full z-20 hidden md:flex items-center justify-center border-4 border-white transition-all duration-500 ${isOpen ? "scale-125 shadow-xl" : "scale-100"
                                        }`}
                                    style={{
                                        background: isOpen ? YELLOW_ACCENT : "#e5e7eb",
                                        boxShadow: isOpen ? `0 0 20px ${YELLOW_ACCENT}66` : "none"
                                    }}
                                >
                                    {etapa.atual && !isOpen && (
                                        <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: BRAND_PURPLE }} />
                                    )}
                                </div>

                                <div className={`w-full md:w-[45%] ${isLeft ? "md:text-right" : "md:ml-auto md:text-left"}`}>
                                    <div
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className={`group cursor-pointer rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden ${isOpen
                                            ? "border-purple-brandtext-purple-brand bg-white shadow-2xl"
                                            : "border-gray-100 bg-gray-50 hover:border-gray-300"
                                            }`}
                                    >
                                        <div className={`relative w-full overflow-hidden transition-all duration-500 ${isOpen ? "h-56" : "h-0"}`}>
                                            <Image
                                                src={etapa.imagem}
                                                alt={etapa.titulo}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply opacity-70" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#331c5e] to-transparent opacity-60" />
                                        </div>

                                        <div className="p-8">
                                            <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                                                {etapa.atual && (
                                                    <span className="bg-yellow-brand text-[#331c5e] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                                        ATUAL
                                                    </span>
                                                )}
                                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-purple-brand">
                                                    {etapa.ano}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black text-[#331c5e] uppercase tracking-tight mb-4 group-hover:text-purple-brand transition-colors">
                                                {etapa.titulo}
                                            </h3>

                                            <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                                                <div className={`h-1.5 w-12 rounded-full mb-6 ${isLeft ? "md:ml-auto" : ""}`} style={{ background: YELLOW_ACCENT }} />
                                                <p className="text-gray-500 font-medium leading-relaxed">
                                                    {etapa.detalhes}
                                                </p>
                                            </div>

                                            <div className={`mt-6 flex items-center gap-3 transition-all duration-300 ${isLeft ? "md:justify-end" : "md:justify-start"} ${isOpen ? "opacity-0" : "opacity-100"}`}>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-purple-brand">Explorar Etapa</span>
                                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-yellow-brand transition-colors">
                                                    <ChevronDown size={14} strokeWidth={3} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:hidden flex items-center gap-2">
                                    <div className="h-px w-8 bg-gray-200" />
                                    <span className="font-black text-sm text-purple-brand">{etapa.ano}</span>
                                    <div className="h-px w-8 bg-gray-200" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-24 p-12 rounded-[3rem] bg-purple-brand text-purple-brand text-white relative overflow-hidden text-center shadow-2xl">
                <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none opacity-10">
                    <defs>
                        <pattern id="halftone-cta" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                            <circle cx="6" cy="6" r="2" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#halftone-cta)" />
                </svg>

                <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                        Faça parte da nossa história
                    </h3>
                    <p className="text-white/70 font-medium text-lg mb-10 max-w-2xl mx-auto">
                        A Techtins está em constante evolução. Venha transformar o futuro tecnológico do Tocantins conosco.
                    </p>
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                    >
                        <button className="bg-yellow-brand text-[#331c5e] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto">
                            Quero ser membro
                            <ArrowRight size={20} strokeWidth={3} />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
