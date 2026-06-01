"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Users, ArrowRight } from "lucide-react";

export interface DiretoriaItem {
    id: number;
    nome: string;
    cargo: string;
    setor: "Presidência" | "Secretaria Executiva" | "Conselho Fiscal" | "Projetos" | "Financeiro" | "Marketing" | "Capacitações";
    foto: string | null;
    responsabilidades: string;
    departamentoSecundario?: "Projetos" | "Financeiro" | "Marketing" | "Capacitações" | "Geral" | "Secretaria Executiva";
}

export interface Membro {
    id: number;
    nome: string;
    cargo: string;
    departamento: "Projetos" | "Financeiro" | "Marketing" | "Capacitações";
    foto: string | null;
    responsabilidades: string;
}

// dados
export const diretoria: DiretoriaItem[] = [
    {
        id: 1,
        nome: "Guilherme Barbosa",
        cargo: "Presidente",
        setor: "Presidência",
        foto: null,
        responsabilidades: "Liderança estratégica, representação institucional e tomada de decisões.",
        departamentoSecundario: "Geral",
    },
    {
        id: 2,
        nome: "Davi Suassuna",
        cargo: "Vice-Presidente",
        setor: "Presidência",
        foto: null,
        responsabilidades: "Apoio à presidência, coordenação interna e substituição nas ausências.",
        departamentoSecundario: "Geral",
    },
    {
        id: 3,
        nome: "Leticia Espindola",
        cargo: "Secretária Executiva",
        setor: "Secretaria Executiva",
        foto: null,
        responsabilidades: "Gestão documental, atas, comunicados e agenda institucional.",
    },
    {
        id: 4,
        nome: "Matheus Nardi",
        cargo: "Diretor de Projetos",
        setor: "Projetos",
        foto: null,
        responsabilidades: "Gestão do portfólio de projetos e metodologias ágeis.",
        departamentoSecundario: "Projetos",
    },
    {
        id: 5,
        nome: "Camila Brito",
        cargo: "Diretora Financeiro",
        setor: "Financeiro",
        foto: null,
        responsabilidades: "Gestão orçamentária e planejamento financeiro.",
        departamentoSecundario: "Financeiro",
    },
    {
        id: 6,
        nome: "Juliana Paz",
        cargo: "Diretora de Marketing",
        setor: "Marketing",
        foto: null,
        responsabilidades: "Estratégia de marca e comunicação institucional.",
        departamentoSecundario: "Marketing",
    },
    {
        id: 7,
        nome: "Maria Gabriela",
        cargo: "Diretora de Capacitações",
        setor: "Capacitações",
        foto: null,
        responsabilidades: "Desenvolvimento de talentos e trilhas de aprendizado.",
    },
    {
        id: 8,
        nome: "João Bosco",
        cargo: "Conselheiro Fiscal",
        setor: "Conselho Fiscal",
        foto: null,
        responsabilidades: "Fiscalização das contas, conformidade financeira e auditoria interna.",
    },
];

export const membros: Membro[] = [
    { id: 201, nome: "Enzo Santos", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Criação de campanhas e análise de métricas." },
    { id: 202, nome: "Leonardo Mota", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Pesquisa de mercado e posicionamento." },
    { id: 203, nome: "Júlia Medeiros", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Gestão de conteúdo e redes sociais." },
    { id: 301, nome: "Emannuel Beckman", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento de sistemas." },
    { id: 302, nome: "Leandro Tavares", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Implementação de features." },
    { id: 303, nome: "Victor Dias", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento frontend." },
    { id: 304, nome: "Gustavo Oliveira", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento backend." },
    { id: 305, nome: "Lucas Gabriel", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Otimização de performance." },
    { id: 306, nome: "Gabriel Reis", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Testes automatizados." },
    { id: 307, nome: "Alêkson Souza", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Modelagem de dados." },
    { id: 308, nome: "Júlio Cesar", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Lógica de programação." },
    { id: 309, nome: "Matheus Gama", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento Full Stack." },
    { id: 401, nome: "Danilo Belém", cargo: "Desenvolvedor e Financeiro", departamento: "Financeiro", foto: null, responsabilidades: "Automação de processos financeiros." },
];

function getInitials(nome: string) {
    const parts = nome.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const BRAND_PURPLE = "#4A2984";
const DARK_PURPLE = "#331c5e";
const YELLOW_ACCENT = "#FFDE1D";

function HalftonePattern({ color, id }: { color: string; id: string }) {
    return (
        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none opacity-20">
            <defs>
                <pattern id={id} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1.5" fill={color} opacity="0.4" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
    );
}

function Avatar({ foto, nome, gradientFrom, gradientTo, size = "md" }: any) {
    const dim = { sm: 48, md: 64, lg: 80, xl: 100 }[size as "sm" | "md" | "lg" | "xl"];
    const fs = { sm: 14, md: 18, lg: 22, xl: 28 }[size as "sm" | "md" | "lg" | "xl"];

    return (
        <div
            className="rounded-3xl shrink-0 overflow-hidden flex items-center justify-center relative border-2 border-white/20"
            style={{
                width: dim,
                height: dim,
                background: `linear-gradient(135deg, ${gradientFrom || BRAND_PURPLE}, ${gradientTo || DARK_PURPLE})`,
            }}
        >
            {foto ? (
                <div className="relative w-full h-full">
                    <Image src={foto} alt={nome} fill className="object-cover" sizes={`${dim}px`} />
                    {/* roxo */}
                    <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-0 bg-linear-to-t from-purple-900/60 to-transparent pointer-events-none" />
                </div>
            ) : (
                <span className="font-montserrat font-black text-white select-none" style={{ fontSize: fs }}>
                    {getInitials(nome)}
                </span>
            )}
        </div>
    );
}

function NetworkOverlay({ leader, deptMembers, onClose }: { leader: DiretoriaItem; deptMembers: Membro[]; onClose: () => void }) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const isGeneral = leader.departamentoSecundario === "Geral";
    const cx = 50, cy = 50;
    const radius = deptMembers.length <= 6 ? 32 : deptMembers.length <= 10 ? 36 : 40;

    const positions = deptMembers.map((_, i) => {
        const angle = (i / Math.max(deptMembers.length, 1)) * 2 * Math.PI - Math.PI / 2;
        return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
    });

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#0f0720]/95 backdrop-blur-md">
            <button
                onClick={onClose}
                className="absolute top-5 right-5 w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
                <X size={20} />
            </button>
            <div className="text-center mb-10 relative z-10">
                <h3 className="font-black text-3xl md:text-5xl text-white uppercase tracking-tighter mb-4">
                    {isGeneral ? "Visão Geral" : leader.departamentoSecundario}
                </h3>
                <div className="flex items-center justify-center gap-3">
                    <div className="h-1.5 w-12 rounded-full bg-yellow-brand" />
                    <p className="text-lg font-bold text-white/70">{leader.nome}</p>
                    <div className="h-1.5 w-12 rounded-full bg-yellow-brand" />
                </div>
            </div>
            <div className="relative w-full max-w-lg md:max-w-2xl" style={{ aspectRatio: "1/1", maxHeight: "60vh" }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    {positions.map((pos, i) => (
                        <line
                            key={i}
                            x1={cx}
                            y1={cy}
                            x2={pos.x}
                            y2={pos.y}
                            stroke={hoveredId === deptMembers[i].id ? YELLOW_ACCENT : BRAND_PURPLE}
                            strokeWidth={hoveredId === deptMembers[i].id ? 0.6 : 0.3}
                            opacity={hoveredId === deptMembers[i].id ? 1 : 0.3}
                            style={{ transition: "all 0.3s ease" }}
                        />
                    ))}
                </svg>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: `${cx}%`, top: `${cy}%` }}>
                    <Avatar
                        foto={leader.foto}
                        nome={leader.nome}
                        gradientFrom={BRAND_PURPLE}
                        gradientTo={DARK_PURPLE}
                        size="xl"
                    />
                </div>
                {deptMembers.map((m, i) => (
                    <div
                        key={m.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center group"
                        style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
                        onMouseEnter={() => setHoveredId(m.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {hoveredId === m.id && (
                            <div className="absolute bottom-full mb-4 z-30 rounded-2xl px-4 py-2 bg-white text-[#331c5e] shadow-lg animate-in fade-in zoom-in-95 duration-200">
                                <p className="font-black text-[12px] whitespace-nowrap">{m.nome}</p>
                                <p className="text-[10px] whitespace-nowrap font-bold opacity-70 uppercase">{m.cargo}</p>
                            </div>
                        )}
                        <Avatar
                            foto={m.foto}
                            nome={m.nome}
                            gradientFrom={hoveredId === m.id ? BRAND_PURPLE : "rgba(255,255,255,0.05)"}
                            gradientTo={hoveredId === m.id ? DARK_PURPLE : "rgba(255,255,255,0.02)"}
                            size="sm"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Membros() {
    const [overlay, setOverlay] = useState<DiretoriaItem | null>(null);
    const diretoriaRow = useScrollRow();
    const membrosRow = useScrollRow();

    const networkMembers = overlay?.departamentoSecundario === "Geral"
        ? membros
        : membros.filter((m) => m.departamento === overlay?.departamentoSecundario);

    return (
        <div className="min-h-screen bg-white text-[#331c5e] p-6 md:p-12 font-montserrat overflow-x-hidden relative selection:bg-yellow-brand selection:text-[#331c5e]">
            <style jsx global>{`
                .custom-scroll::-webkit-scrollbar {
                    height: 8px;
                    width: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #4A2984;
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb:hover {
                    background: #331c5e;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                {/* Diretoria Section */}
                <section className="bg-[#4A2984] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                    <HalftonePattern color="#ffffff" id="bg-halftone-diretoria" />
                    <SectionHeading
                        label="Diretoria"
                        onPrev={() => diretoriaRow.scroll("left", diretoria.length)}
                        onNext={() => diretoriaRow.scroll("right", diretoria.length)}
                        light={true}
                    />
                    <div
                        ref={diretoriaRow.ref}
                        className="flex gap-8 overflow-x-auto pb-6 custom-scroll snap-x"
                    >
                        {diretoria.map((item) => (
                            <DiretoriaCard key={item.id} item={item} onClick={() => setOverlay(item)} />
                        ))}
                    </div>
                </section>

                {/* Membros Section */}
                <section>
                    <SectionHeading
                        label="Time de Membros"
                        onPrev={() => membrosRow.scroll("left", membros.length)}
                        onNext={() => membrosRow.scroll("right", membros.length)}
                        light={false}
                    />
                    <div
                        ref={membrosRow.ref}
                        className="flex gap-8 overflow-x-auto pb-6 custom-scroll snap-x"
                    >
                        {membros.map((m) => (
                            <MembroCard key={m.id} membro={m} />
                        ))}
                    </div>
                </section>
            </div>

            {overlay && overlay.departamentoSecundario && (
                <NetworkOverlay leader={overlay} deptMembers={networkMembers} onClose={() => setOverlay(null)} />
            )}
        </div>
    );
}

function SectionHeading({ label, onPrev, onNext, light }: any) {
    return (
        <div className="flex items-end justify-between mb-12">
            <div className="relative">
                <h2 className={`font-black text-4xl md:text-6xl tracking-tighter uppercase ${light ? "text-white" : "text-[#331c5e]"}`}>
                    {label}
                </h2>
                <div className="mt-4 h-2 w-24 rounded-full" style={{ background: YELLOW_ACCENT }} />
            </div>
            <div className="flex gap-4">
                <button
                    onClick={onPrev}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 ${light ? "border-white/20 bg-white/10 hover:bg-white/20 text-white" : "border-[#331c5e]/10 bg-[#331c5e]/5 hover:bg-[#331c5e]/10 text-[#331c5e]"
                        }`}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={onNext}
                    className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 ${light ? "border-white/20 bg-white/10 hover:bg-white/20 text-white" : "border-[#331c5e]/10 bg-[#331c5e]/5 hover:bg-[#331c5e]/10 text-[#331c5e]"
                        }`}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

function DiretoriaCard({ item, onClick }: { item: DiretoriaItem; onClick: () => void }) {
    const hasNet = !!item.departamentoSecundario;

    return (
        <div
            onClick={hasNet ? onClick : undefined}
            className={`flex-none w-64 md:w-72 rounded-[2.5rem] p-8 border-2 border-white/10 bg-white/5 transition-all duration-300 relative overflow-hidden group snap-center ${hasNet ? "cursor-pointer hover:bg-white/10 hover:border-white/30" : ""
                }`}
        >
            <div className="relative z-10 flex flex-col items-center text-center">
                <Avatar
                    foto={item.foto}
                    nome={item.nome}
                    gradientFrom={BRAND_PURPLE}
                    gradientTo={DARK_PURPLE}
                    size="lg"
                />

                <div className="mt-6">
                    <span
                        className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block border border-white/20 bg-white/10"
                        style={{ color: YELLOW_ACCENT }}
                    >
                        {item.setor}
                    </span>

                    <h4 className="font-black text-white text-xl leading-tight mb-1">{item.nome}</h4>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-tight">{item.cargo}</p>
                </div>

                <p className="mt-5 text-[12px] text-white/50 leading-relaxed line-clamp-3 font-medium">
                    {item.responsabilidades}
                </p>

                {hasNet && (
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 group/btn">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-brand text-[#331c5e] transition-transform duration-300 group-hover/btn:rotate-45">
                            <ArrowRight size={16} strokeWidth={3} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-yellow-brand">
                            Conectar
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

function MembroCard({ membro }: { membro: Membro }) {
    return (
        <div
            className="flex-none w-56 md:w-64 rounded-[2.5rem] p-8 border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-[#4A2984]/20 transition-all duration-300 group snap-center text-center"
        >
            <div className="flex flex-col items-center">
                <Avatar
                    foto={membro.foto}
                    nome={membro.nome}
                    gradientFrom={BRAND_PURPLE}
                    gradientTo={DARK_PURPLE}
                    size="md"
                />

                <span className="text-[10px] font-black uppercase mt-6 block tracking-widest text-[#4A2984]">
                    {membro.departamento}
                </span>

                <h4 className="font-black text-[#331c5e] text-lg mt-2 leading-tight">{membro.nome}</h4>
                <p className="text-xs text-[#331c5e]/60 font-bold uppercase mt-1">{membro.cargo}</p>

                <p className="mt-4 text-[11px] text-[#331c5e]/50 line-clamp-2 font-medium leading-relaxed">
                    {membro.responsabilidades}
                </p>
            </div>
        </div>
    );
}

function useScrollRow() {
    const ref = useRef<HTMLDivElement>(null);
    const scroll = useCallback((dir: "left" | "right", total: number) => {
        if (!ref.current) return;
        const w = 300;
        ref.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
    }, []);
    return { ref, scroll };
}
