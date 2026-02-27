"use client";

import { news, players } from "@/app/master-data";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextImage from "next/image";

export default function NewsDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const item = news.find((n) => n.id === id);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d4ff00] transition-colors mb-12 text-xs font-black tracking-widest uppercase"
                >
                    <span>&larr;</span> Back to News
                </Link>

                <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-zinc-500 tracking-tighter">
                            {item.date}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-black tracking-widest border bg-[#d4ff00]/10 text-[#d4ff00] border-[#d4ff00]/20">
                            {item.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
                        {item.title}
                    </h1>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-400 leading-relaxed whitespace-pre-wrap mb-16">
                        {item.content}
                    </p>

                    {item.results && item.results.length > 0 && (
                        <div className="mt-16 space-y-8">
                            <h3 className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-4">
                                <span className="w-8 h-[2px] bg-[#d4ff00]" />
                                Match Results
                            </h3>
                            <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white/5 text-[10px] font-black tracking-widest uppercase text-zinc-500">
                                            <th className="px-8 py-4">Round</th>
                                            <th className="px-8 py-4">Opponent</th>
                                            <th className="px-8 py-4 text-center">Score</th>
                                            <th className="px-8 py-4 text-right">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {item.results.map((res, idx) => (
                                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-8 py-6 text-sm font-bold text-zinc-400">{res.round}</td>
                                                <td className="px-8 py-6 font-bold">{res.opponent}</td>
                                                <td className="px-8 py-6 text-center font-mono text-[#d4ff00]">{res.score}</td>
                                                <td className="px-8 py-6 text-right">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${res.isWin ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                                                        }`}>
                                                        {res.isWin ? "WIN" : "LOSS"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {item.relatedPlayerIds && item.relatedPlayerIds.length > 0 && (
                    <div className="mt-24 space-y-10">
                        <h3 className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-[#d4ff00]" />
                            Related Athletes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.relatedPlayerIds.map(playerId => {
                                const player = players.find((p: any) => p.id === playerId);
                                if (!player) return null;
                                return (
                                    <Link
                                        key={player.id}
                                        href={`/players/${player.id}`}
                                        className="group bg-zinc-900/50 rounded-2xl p-4 border border-white/5 hover:border-[#d4ff00]/30 transition-all flex items-center gap-4"
                                    >
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                                            {player.image && !player.image.includes("placeholder") ? (
                                                <NextImage src={player.image} alt={player.name} fill className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center font-black text-zinc-700 italic text-lg">
                                                    {player.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-[#d4ff00] uppercase tracking-widest">{player.category}</p>
                                            <h4 className="font-bold text-base group-hover:text-[#d4ff00] transition-colors">{player.name}</h4>
                                        </div>
                                        <span className="ml-auto text-zinc-700 group-hover:text-[#d4ff00] transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="mt-20 pt-10 border-t border-white/5">
                    <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-black italic mb-2">Want more updates?</h3>
                            <p className="text-zinc-500 text-sm font-medium">Follow us on official channels for real-time alerts.</p>
                        </div>
                        <button className="bg-[#d4ff00] text-black px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(212,255,0,0.3)]">
                            Follow @TheCourt
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
