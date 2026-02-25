"use client";

import { players } from "@/app/master-data";
import { useMemo } from "react";

export default function StatisticsRanking() {
    const stats = useMemo(() => {
        const racketCounts: Record<string, number> = {};
        const brandCounts: Record<string, number> = {};
        const totalPlayers = players.length;

        players.forEach((player) => {
            const racketName = player.gear.racket.name;
            racketCounts[racketName] = (racketCounts[racketName] || 0) + 1;

            // Extract brand
            let brand = "OTHER";
            const upperRacket = racketName.toUpperCase();
            if (upperRacket.includes("YONEX") || upperRacket.includes("ASTROX") || upperRacket.includes("NANOFLARE") || upperRacket.includes("DUORA") || upperRacket.includes("NANORAY") || upperRacket.includes("ARCSABER")) {
                brand = "YONEX";
            } else if (upperRacket.includes("LI-NING") || upperRacket.includes("AERONAUT")) {
                brand = "LI-NING";
            } else if (upperRacket.includes("VICTOR") || upperRacket.includes("THRUSTER")) {
                brand = "VICTOR";
            } else if (upperRacket.includes("MIZUNO") || upperRacket.includes("ALTIUS")) {
                brand = "MIZUNO";
            } else {
                // Fallback: take the first word as brand if it looks like one
                const firstWord = racketName.split(" ")[0];
                if (["GOSEN", "ADIDAS", "BABOLAT"].includes(firstWord.toUpperCase())) {
                    brand = firstWord.toUpperCase();
                }
            }
            brandCounts[brand] = (brandCounts[brand] || 0) + 1;
        });

        // Top 3 Rackets
        const topRackets = Object.entries(racketCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([name, count]) => ({ name, count }));

        // Brand Share
        const brandShare = Object.entries(brandCounts)
            .map(([name, count]) => ({
                name,
                count,
                percentage: Math.round((count / totalPlayers) * 100),
            }))
            .sort((a, b) => b.count - a.count);

        return { topRackets, brandShare };
    }, []);

    return (
        <section className="relative overflow-hidden">
            <div className="flex flex-col mb-12">
                <span className="text-[#d4ff00] text-xs font-black tracking-[0.3em] uppercase mb-2 block">Insights & Analytics</span>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">THE COURT STATISTICS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Racket Ranking */}
                <div className="bg-zinc-900/40 rounded-[32px] p-8 border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black italic tracking-tight text-white/90">TOP RACKET MODELS</h3>
                        <span className="text-[10px] font-black text-zinc-500 tracking-widest uppercase">Usage Ranking</span>
                    </div>

                    <div className="space-y-6">
                        {stats.topRackets.map((racket, idx) => (
                            <div key={racket.name} className="group">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors truncate pr-4">
                                        <span className="text-[#d4ff00] mr-2">0{idx + 1}</span>
                                        {racket.name}
                                    </span>
                                    <span className="text-xs font-black text-[#d4ff00] uppercase tracking-tighter shrink-0">
                                        {racket.count} Users
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#d4ff00] to-[#b8dd00] rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(racket.count / players.length) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brand Share */}
                <div className="bg-zinc-900/40 rounded-[32px] p-8 border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black italic tracking-tight text-white/90">BRAND MARKET SHARE</h3>
                        <span className="text-[10px] font-black text-zinc-500 tracking-widest uppercase">Global Pro Scene</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {stats.brandShare.map((brand) => (
                            <div key={brand.name} className="relative group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#d4ff00]/30 transition-all">
                                <div className="text-[10px] font-black text-zinc-500 mb-1 uppercase tracking-tight">{brand.name}</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black italic text-white group-hover:text-[#d4ff00] transition-colors">{brand.percentage}</span>
                                    <span className="text-xs font-bold text-zinc-400">%</span>
                                </div>
                                {/* Minimal bar indicator */}
                                <div className="absolute bottom-0 left-0 h-[2px] bg-[#d4ff00] transition-all duration-700 opacity-0 group-hover:opacity-100" style={{ width: `${brand.percentage}%` }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#d4ff00]/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
