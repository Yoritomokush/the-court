import React from "react";

export default function TournamentDraw() {
    return (
        <div className="w-full max-w-5xl mx-auto mt-8 bg-zinc-900/80 rounded-[32px] border border-emerald-500/20 shadow-2xl overflow-hidden backdrop-blur-sm lg:p-8 p-6 group relative">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-black italic tracking-tighter text-white flex items-center gap-3 drop-shadow-md">
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                    JAPAN SQUAD DRAW <span className="text-zinc-500 text-sm tracking-widest ml-2 hidden sm:inline">- 勝ち上がり状況</span>
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    Live Draw
                </span>
            </div>

            <div className="space-y-6 relative z-10">
                {/* Visual Connector Line */}
                <div className="absolute left-6 md:left-[8.5rem] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent hidden md:block" />

                {/* Match 1 - MS Watanabe */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group/match">
                    <div className="w-24 text-[10px] font-black tracking-widest uppercase text-zinc-500 pt-2 shrink-0 md:text-right">
                        Round 1
                    </div>
                    {/* Node Dot (Desktop) */}
                    <div className="absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-900 -translate-x-1.5 hidden md:block group-hover/match:scale-150 group-hover/match:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all z-10" />

                    <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 md:p-5 hover:border-emerald-500/30 transition-colors w-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black italic">渡邉 航貴</span>
                                <span className="text-[10px] font-black text-white bg-emerald-600 px-2 py-0.5 rounded uppercase tracking-wider">WIN</span>
                            </div>
                            <span className="text-zinc-500 text-sm font-black italic">2-0</span>
                        </div>
                        <div className="mt-2 text-xs text-zinc-500 flex items-center gap-2">
                            <span className="text-zinc-600 line-through">A.アントンセン</span>
                        </div>
                    </div>
                </div>

                {/* Next Match preview (Connecting from Watanabe) */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group/match">
                    <div className="w-24 text-[10px] font-black tracking-widest uppercase text-emerald-400 pt-2 shrink-0 md:text-right">
                        Round 2
                    </div>
                    {/* Node Dot (Desktop) */}
                    <div className="absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-900 -translate-x-1.5 hidden md:block group-hover/match:scale-150 group-hover/match:border-emerald-500 transition-all z-10" />

                    <div className="flex-1 bg-zinc-900 border border-white/10 border-dashed rounded-2xl p-4 md:p-5 w-full md:w-2/3 opacity-80 mt-2">
                        <div className="flex items-center gap-3 text-zinc-400">
                            <span className="text-emerald-400 font-black italic">渡邉 航貴</span>
                            <span className="text-[10px] uppercase font-bold tracking-widest">VS</span>
                            <span className="italic font-bold">L.シーフェイ</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-2 tracking-widest">NEXT MATCH</p>
                    </div>
                </div>

                {/* Match 2 - MD Hoki/Kobayashi */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group/match mt-8">
                    <div className="w-24 text-[10px] font-black tracking-widest uppercase text-zinc-500 pt-2 shrink-0 md:text-right">
                        Round 1
                    </div>
                    {/* Node Dot (Desktop) */}
                    <div className="absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-900 -translate-x-1.5 hidden md:block group-hover/match:scale-150 group-hover/match:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all z-10" />

                    <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 md:p-5 hover:border-emerald-500/30 transition-colors w-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black italic">保木/小林</span>
                                <span className="text-[10px] font-black text-white bg-emerald-600 px-2 py-0.5 rounded uppercase tracking-wider">WIN</span>
                            </div>
                            <span className="text-zinc-500 text-sm font-black italic">2-0</span>
                        </div>
                        <div className="mt-2 text-xs text-zinc-500 flex items-center gap-2">
                            <span className="text-zinc-600 line-through">陳/林</span>
                        </div>
                    </div>
                </div>

                {/* Match 3 (Loss) - MS Nishimoto */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group/match mt-8">
                    <div className="w-24 text-[10px] font-black tracking-widest uppercase text-zinc-500 pt-2 shrink-0 md:text-right">
                        Round 1
                    </div>
                    {/* Node Dot (Desktop) */}
                    <div className="absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-red-500/50 border-2 border-zinc-900 -translate-x-1.5 hidden md:block group-hover/match:scale-150 transition-all z-10" />

                    <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 md:p-5 w-full relative overflow-hidden opacity-60">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/50" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black italic line-through text-zinc-500">西本 拳太</span>
                            </div>
                            <span className="text-zinc-600 text-sm font-black italic">1-2</span>
                        </div>
                        <div className="mt-2 text-xs text-zinc-400 flex items-center gap-2">
                            <span className="text-white">レオン・ジュンハオ <span className="text-[8px] bg-red-900/50 text-red-200 px-1 py-0.5 rounded ml-1">WIN</span></span>
                        </div>
                    </div>
                </div>

                {/* Match 4 - WS Yamaguchi */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start relative group/match mt-8">
                    <div className="w-24 text-[10px] font-black tracking-widest uppercase text-zinc-500 pt-2 shrink-0 md:text-right">
                        Round 1
                    </div>
                    {/* Node Dot (Desktop) */}
                    <div className="absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-900 -translate-x-1.5 hidden md:block group-hover/match:scale-150 group-hover/match:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all z-10" />

                    <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 md:p-5 hover:border-emerald-500/30 transition-colors w-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black italic">山口 茜</span>
                                <span className="text-[10px] font-black text-white bg-emerald-600 px-2 py-0.5 rounded uppercase tracking-wider">WIN</span>
                            </div>
                            <span className="text-zinc-500 text-sm font-black italic">2-0</span>
                        </div>
                        <div className="mt-2 text-xs text-zinc-500 flex items-center gap-2">
                            <span className="text-zinc-600 line-through">宋碩芸</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
