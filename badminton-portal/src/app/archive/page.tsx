import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allEnglandResults } from "@/app/master-data";
import Link from "next/link";

export default function ArchivePage() {
    // Group matches by stage
    const groupedMatches = allEnglandResults.reduce((acc, match) => {
        if (!acc[match.stage]) {
            acc[match.stage] = [];
        }
        acc[match.stage].push(match);
        return acc;
    }, {} as Record<string, typeof allEnglandResults>);

    // Define the order of stages to display
    const stageOrder = ["1回戦", "2回戦", "準々決勝", "準決勝", "決勝"];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-900 to-green-800 border border-green-500/30 text-green-400 text-[10px] font-black tracking-[0.3em] uppercase rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        Tournament Archive
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-2xl">
                        ALL ENGLAND<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300">RECORDS.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto">
                        全英オープン2026の全試合結果と熱狂の記憶。
                    </p>
                </div>
            </section>

            {/* Archive List Section */}
            <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
                {stageOrder.map((stage) => {
                    const matches = groupedMatches[stage];
                    if (!matches || matches.length === 0) return null;

                    return (
                        <section key={stage} className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
                            <div className="flex items-center gap-6">
                                <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white uppercase flex items-center gap-4">
                                    <span className="text-yellow-500">///</span>
                                    {stage}
                                </h2>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            <div className="grid gap-6">
                                {matches.map((match) => (
                                    <div
                                        key={match.id}
                                        className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-zinc-900/50 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-colors group"
                                    >
                                        <div className="flex flex-col gap-2 min-w-[120px]">
                                            <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase bg-black px-3 py-1.5 rounded-full w-fit">
                                                {match.category}
                                            </span>
                                            {match.date && (
                                                <span className="text-xs font-bold text-zinc-600 tracking-wider">
                                                    {match.date}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                                            {/* Player 1 */}
                                            <div className={`flex items-center gap-4 w-full md:w-2/5 justify-end ${match.player1.isWin ? 'text-white' : 'text-zinc-500'}`}>
                                                {match.player1.isWin && <span className="text-yellow-500 text-xs font-black italic">WIN</span>}
                                                <span className="text-xl md:text-2xl font-black italic tracking-tight">{match.player1.name}</span>
                                            </div>

                                            {/* Score */}
                                            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
                                                <div className="flex items-center gap-3 text-2xl font-black italic">
                                                    <span className={match.player1.isWin ? 'text-white' : 'text-zinc-600'}>{match.player1.sets}</span>
                                                    <span className="text-zinc-700">-</span>
                                                    <span className={match.player2.isWin ? 'text-white' : 'text-zinc-600'}>{match.player2.sets}</span>
                                                </div>
                                                {match.scores.length > 0 && (
                                                    <div className="flex gap-2 mt-2">
                                                        {match.scores.map((score, idx) => (
                                                            <span key={idx} className="text-[10px] bg-white/5 px-2 py-1 rounded text-zinc-400 font-bold tracking-wider">
                                                                {score}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Player 2 */}
                                            <div className={`flex items-center gap-4 w-full md:w-2/5 justify-start ${match.player2.isWin ? 'text-white' : 'text-zinc-500'}`}>
                                                <span className="text-xl md:text-2xl font-black italic tracking-tight">{match.player2.name}</span>
                                                {match.player2.isWin && <span className="text-yellow-500 text-xs font-black italic">WIN</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}

                <div className="flex justify-center pt-12 border-t border-white/10">
                    <Link href="/" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-black italic tracking-widest text-sm uppercase rounded-full hover:bg-white hover:text-black transition-all">
                        &larr; Back to Home
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
