"use client";

import { useState } from "react";
import { worldRankings, domesticRankings, CategoryRankings, RankingEntry } from "@/app/master-data";

type Region = "WORLD" | "DOMESTIC";
type CategoryKey = keyof CategoryRankings;

const CATEGORIES: { key: CategoryKey; label: string }[] = [
    { key: "ms", label: "男子単" },
    { key: "ws", label: "女子単" },
    { key: "md", label: "男子複" },
    { key: "wd", label: "女子複" },
    { key: "xd", label: "混合複" },
];

export default function RankingsSection() {
    const [region, setRegion] = useState<Region>("WORLD");
    const [category, setCategory] = useState<CategoryKey>("ms");

    const currentRankings = region === "WORLD" ? worldRankings : domesticRankings;
    const data = currentRankings[category];

    return (
        <section className="relative space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <span className="text-[#d4ff00] text-xs font-black tracking-[0.3em] uppercase mb-2 block">Performance Board</span>
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">RANKINGS</h2>
                </div>

                {/* Region Tabs */}
                <div className="flex bg-zinc-900 p-1 rounded-2xl border border-white/5">
                    {(["WORLD", "DOMESTIC"] as Region[]).map((r) => (
                        <button
                            key={r}
                            onClick={() => setRegion(r)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${region === r
                                ? "bg-[#d4ff00] text-black shadow-[0_0_20px_rgba(212,255,0,0.2)]"
                                : "text-zinc-500 hover:text-white"
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/40 rounded-[40px] border border-white/5 p-8 md:p-12 backdrop-blur-sm">
                {/* Category Sub-Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-white/5">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setCategory(cat.key)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${category === cat.key
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-zinc-500 border-white/10 hover:border-white/30"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Rankings Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-zinc-500 text-[10px] font-black tracking-widest uppercase">
                                <th className="pb-6 w-16">Rank</th>
                                <th className="pb-6">Player</th>
                                <th className="pb-6">Team / Country</th>
                                {region === "WORLD" && <th className="pb-6 text-right">Points</th>}
                                <th className="pb-6 w-12 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.map((item: RankingEntry) => (
                                <tr key={item.rank} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6">
                                        <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center text-sm font-black italic ${item.rank === 1 ? "bg-[#d4ff00] text-black" :
                                            item.rank <= 3 ? "bg-zinc-800 text-zinc-300" : "text-zinc-600"
                                            }`}>
                                            {item.rank}
                                        </div>
                                    </td>
                                    <td className="py-6 pr-4">
                                        <div className="flex items-center gap-3">
                                            {item.flag && <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{item.flag}</span>}
                                            <div className="text-lg font-bold group-hover:text-[#d4ff00] transition-colors whitespace-nowrap">{item.name}</div>
                                        </div>
                                    </td>
                                    <td className="py-6 text-zinc-400 font-medium text-sm">
                                        {item.team}
                                    </td>
                                    {region === "WORLD" && (
                                        <td className="py-6 text-right font-mono text-zinc-300 text-sm">
                                            {item.points || "-"}
                                        </td>
                                    )}
                                    <td className="py-6 text-right">
                                        {item.change === "up" && <span className="text-emerald-500 text-xs">▲</span>}
                                        {item.change === "down" && <span className="text-rose-500 text-xs">▼</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                    <span>Last Updated: 2026.02.26</span>
                    <span className="text-zinc-600">Source: BWF / NBA Official</span>
                </div>
            </div>
        </section>
    );
}
