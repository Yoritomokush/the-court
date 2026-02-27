"use client";

import { Player } from "@/app/master-data";
import Image from "next/image";
import RadarChart from "./RadarChart";
import PlayerCard from "./PlayerCard";

interface PlayerComparisonProps {
    player1: Player;
    player2: Player;
    onClose: () => void;
}

const STAT_LABELS = {
    power: "Power",
    speed: "Speed",
    technique: "Technique",
    stamina: "Stamina",
    mentality: "Mentality",
    defense: "Defense",
} as const;

export default function PlayerComparison({ player1, player2, onClose }: PlayerComparisonProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl transition-all">
            <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#d4ff00] hover:text-black transition-all group z-10"
            >
                <span className="text-2xl">&times;</span>
            </button>

            <div className="w-full max-w-7xl h-full overflow-y-auto no-scrollbar py-12">
                <div className="text-center mb-16">
                    <span className="text-[#d4ff00] text-xs font-black tracking-[0.4em] uppercase mb-4 block">H2H Analysis</span>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">PLAYER COMPARISON</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px_1fr] gap-12 items-start px-4">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700 w-full max-w-sm mx-auto">
                        <PlayerCard player={player1} />
                    </div>

                    {/* Central Comparison (Chart & Stats) */}
                    <div className="flex flex-col items-center gap-12">
                        <div className="relative">
                            <RadarChart
                                stats={player1.stats}
                                compareStats={player2.stats}
                                size={340}
                                color="#d4ff00"
                                compareColor="#ffffff"
                            />
                            <div className="mt-8 flex justify-center gap-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#d4ff00]" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-[#d4ff00]">{player1.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-white/60">{player2.name}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Comparison Table */}
                        <div className="w-full space-y-4">
                            {Object.entries(STAT_LABELS).map(([key, label]) => {
                                const val1 = player1.stats[key as keyof typeof player1.stats];
                                const val2 = player2.stats[key as keyof typeof player2.stats];
                                const p1Wins = val1 > val2;
                                const p2Wins = val2 > val1;

                                return (
                                    <div key={key} className="relative group">
                                        <div className="flex items-center justify-between px-2 mb-1">
                                            <span className={`text-xl font-black italic ${p1Wins ? 'text-[#d4ff00]' : 'text-zinc-600'}`}>
                                                {val1}
                                            </span>
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">{label}</span>
                                            <span className={`text-xl font-black italic ${p2Wins ? 'text-[#d4ff00]' : 'text-zinc-600'}`}>
                                                {val2}
                                            </span>
                                        </div>
                                        <div className="h-[2px] w-full bg-zinc-900 rounded-full flex overflow-hidden">
                                            <div className="flex-1 flex justify-end">
                                                <div
                                                    className={`h-full transition-all duration-1000 ${p1Wins ? 'bg-[#d4ff00]' : 'bg-zinc-800'}`}
                                                    style={{ width: `${val1}%` }}
                                                />
                                            </div>
                                            <div className="w-[1px] bg-white/10" />
                                            <div className="flex-1">
                                                <div
                                                    className={`h-full transition-all duration-1000 ${p2Wins ? 'bg-[#d4ff00]' : 'bg-zinc-800'}`}
                                                    style={{ width: `${val2}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 w-full max-w-sm mx-auto">
                        <PlayerCard player={player2} />
                    </div>
                </div>

                {/* Gear Comparison Section */}
                <div className="mt-24 px-4">
                    <h4 className="text-2xl font-black italic text-center mb-12 tracking-tighter">GEAR COMPARISON</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Rackets */}
                        <div className="bg-zinc-900/40 rounded-[32px] p-8 border border-white/5">
                            <span className="text-[10px] font-black text-[#d4ff00] uppercase tracking-widest mb-6 block text-center">Racket Models</span>
                            <div className="flex justify-between gap-8">
                                <div className="flex-1 text-center group">
                                    <div className="aspect-square relative mb-4 bg-black/40 rounded-2xl p-4 overflow-hidden">
                                        <Image src={player1.gear.racket.image} alt={player1.gear.racket.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <p className="text-xs font-black uppercase text-zinc-400 leading-tight">{player1.gear.racket.name}</p>
                                </div>
                                <div className="w-[1px] bg-white/5 my-4" />
                                <div className="flex-1 text-center group">
                                    <div className="aspect-square relative mb-4 bg-black/40 rounded-2xl p-4 overflow-hidden">
                                        <Image src={player2.gear.racket.image} alt={player2.gear.racket.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <p className="text-xs font-black uppercase text-zinc-400 leading-tight">{player2.gear.racket.name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Shoes */}
                        <div className="bg-zinc-900/40 rounded-[32px] p-8 border border-white/5">
                            <span className="text-[10px] font-black text-[#d4ff00] uppercase tracking-widest mb-6 block text-center">Shoes Models</span>
                            <div className="flex justify-between gap-8">
                                <div className="flex-1 text-center group">
                                    <div className="aspect-square relative mb-4 bg-black/40 rounded-2xl p-4 overflow-hidden">
                                        <Image src={player1.gear.shoes.image} alt={player1.gear.shoes.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <p className="text-xs font-black uppercase text-zinc-400 leading-tight">{player1.gear.shoes.name}</p>
                                </div>
                                <div className="w-[1px] bg-white/5 my-4" />
                                <div className="flex-1 text-center group">
                                    <div className="aspect-square relative mb-4 bg-black/40 rounded-2xl p-4 overflow-hidden">
                                        <Image src={player2.gear.shoes.image} alt={player2.gear.shoes.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <p className="text-xs font-black uppercase text-zinc-400 leading-tight">{player2.gear.shoes.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
