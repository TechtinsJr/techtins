"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

// projetos
const projetos = [
    {
        id: 1,
        nome: "FARMTINS",
        categoria: "Consultoria Agronômica",
        descricao: "Rebranding de identidade visual e desenvolvimento de site, com posicionamento profissional e acadêmico para a marca.",
        imagem: "/assets/logoFarmtins.jpeg",
        alt: "Preview Farmtins",
        url: "https://farmtins.vercel.app/",
    },
    {
        id: 2,
        nome: "EVENTOS MEJ",
        categoria: "Organização de Eventos",
        descricao: "Idealização e organização de eventos que contribuem para o Movimento Empresa Júnior, promovendo integração.",
        imagem: "/assets/organizacaoEventos.jpg",
        alt: "Organização de eventos",
        url: "",
    },
];

const BRAND_PURPLE = "#4A2984";
const DARK_PURPLE = "#331c5e";
const YELLOW_ACCENT = "#FFDE1D";

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projetos[0] | null>(null);

    return (
        <section id="portfolio" className="w-full bg-white py-24 px-6 md:px-12 font-montserrat relative selection:bg-yellow-brand selection:text-[#331c5e]">
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

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="relative">
                        <p className="text-[12px] font-black tracking-[0.4em] uppercase mb-4 text-purple-brand">Nosso Impacto</p>
                        <h2 className="text-5xl md:text-7xl font-black text-[#331c5e] tracking-tighter uppercase leading-none">
                            PORTFÓLIO
                        </h2>
                        <div className="mt-6 h-2.5 w-32 rounded-full" style={{ background: YELLOW_ACCENT }} />
                    </div>
                    <p className="max-w-md text-gray-500 font-medium text-lg leading-relaxed">
                        Transformamos desafios em soluções digitais sólidas e criativas para nossos parceiros.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projetos.map((projeto) => (
                        <div
                            key={projeto.id}
                            className="group relative flex flex-col bg-gray-50 rounded-[3rem] overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:border-purple-brand/30 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative w-full h-72 md:h-96 overflow-hidden">
                                <Image
                                    src={projeto.imagem}
                                    alt={projeto.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#331c5e] via-transparent to-transparent opacity-80" />

                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-[#331c5e] text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full border border-white/20">
                                        {projeto.categoria}
                                    </span>
                                </div>

                                {projeto.url && (
                                    <button
                                        onClick={() => setSelectedProject(projeto)}
                                        className="absolute bottom-6 right-6 z-20 w-14 h-14 rounded-full bg-yellow-brand text-purple-brand flex items-center justify-center shadow-xl translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                                    >
                                        <ArrowUpRight size={24} strokeWidth={3} />
                                    </button>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="p-8 md:p-12 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-3xl font-black text-purple-brand uppercase tracking-tight group-hover:text-purple-brand transition-colors">
                                        {projeto.nome}
                                    </h3>
                                    <span className="text-4xl font-black text-gray-100 group-hover:text-yellow-brand/20 transition-colors">
                                        0{projeto.id}
                                    </span>
                                </div>
                                <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-1">
                                    {projeto.descricao}
                                </p>

                                <div className="flex items-center gap-6 mt-auto">
                                    {projeto.url ? (
                                        <button
                                            onClick={() => setSelectedProject(projeto)}
                                            className="flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-purple-brand hover:text-[#331c5e] transition-colors group/link"
                                        >
                                            Ver Detalhes
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover/link:bg-yellow-brand transition-colors">
                                                <ArrowUpRight size={12} strokeWidth={3} />
                                            </div>
                                        </button>
                                    ) : (
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                                            Destaque
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#331c5e]/95 backdrop-blur-xl animate-in fade-in duration-300">
                    <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
                        <div className="flex items-center justify-between p-8 border-b border-gray-100">
                            <div>
                                <h4 className="text-sm font-black text-yellow-brand uppercase tracking-[0.3em] mb-1">Visualizando Projeto</h4>
                                <h2 className="text-3xl font-black text-[#331c5e] uppercase tracking-tight">{selectedProject.nome}</h2>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="w-12 h-12 rounded-full bg-gray-100 text-[#331c5e] flex items-center justify-center hover:bg-yellow transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 bg-gray-50 relative">
                            <iframe
                                src={selectedProject.url}
                                className="w-full h-full border-none"
                                title={selectedProject.nome}
                            />
                        </div>

                        <div className="p-6 bg-white border-t border-gray-100 flex items-center justify-center">
                            <a
                                href={selectedProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-purple-brand text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#331c5e] transition-all hover:scale-105"
                            >
                                Abrir em nova aba
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
