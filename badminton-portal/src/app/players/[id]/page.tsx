"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/app/master-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RadarChart from "@/components/RadarChart";
import { notFound } from "next/navigation";

export default function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const player = players.find((p) => p.id === resolvedParams.id);

    if (!player) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main>
                {/* Cover / Hero Section */}
                <section className="relative h-[85vh] w-full overflow-hidden">
                    <div className="absolute inset-0 z-0 text-[15rem] md:text-[25rem] font-black italic text-zinc-900/10 select-none whitespace-nowrap -translate-y-1/2 top-1/2 left-0 pl-10">
                        {player.name.split(' ')[0]}
                    </div>

                    <div className="absolute inset-0 z-0">
                        <Image
                            src={player.image}
                            alt={player.name}
                            fill
                            className="object-cover opacity-70 scale-105"
                            priority
                        />
                        {/* Dynamic Gradients for Premium Look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
                    </div>

                    <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-zinc-400 hover:text-[#d4ff00] hover:border-[#d4ff00]/50 transition-all group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform text-lg">&larr;</span>
                                <span className="text-[11px] font-black tracking-[0.2em] uppercase">Back to Directory</span>
                            </Link>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 bg-[#d4ff00] text-black text-[11px] font-black tracking-[0.2em] uppercase rounded-sm">
                                    {player.category}
                                </span>
                                <span className="text-zinc-500 font-black tracking-widest text-xs uppercase flex items-center gap-2">
                                    <span className="text-lg">{player.flag}</span> {player.country} Official Athlete
                                </span>
                            </div>
                            <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.85] uppercase drop-shadow-2xl">
                                {player.name.includes(' ') ? player.name.split(' ')[0] : player.name}<br />
                                {player.name.includes(' ') && (
                                    <span className="text-[#d4ff00]">{player.name.split(' ')[1]}</span>
                                )}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <div>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Current Ranking</p>
                                    <p className="text-2xl md:text-3xl text-white font-black italic tracking-tight">
                                        {player.rank}
                                    </p>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden md:block" />
                                <div>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Play Style</p>
                                    <p className="text-2xl md:text-3xl text-[#d4ff00] font-black italic tracking-tight">
                                        {player.style}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Column */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* Analysis */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-4xl font-black italic tracking-tighter uppercase">
                                        Performance<br />Analysis
                                    </h2>
                                    <div className="space-y-1">
                                        <p className="text-zinc-500 text-sm font-medium leading-relaxed italic border-l-2 border-[#d4ff00]/30 pl-4 mb-6">
                                            テクニカル・スタッツに基づいた、AIによるアスリート分析。
                                            強靭なフィジカルと卓越した戦術眼の相関を示す。
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(player.stats).map(([label, value]) => (
                                                <div key={label} className="bg-zinc-900/40 p-4 border border-white/5 rounded-2xl">
                                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                                                    <p className="text-2xl font-black italic">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center bg-zinc-900/20 rounded-[40px] border border-white/5 p-8 backdrop-blur-sm">
                                    <RadarChart stats={player.stats} size={320} />
                                </div>
                            </div>

                            {/* Biography */}
                            <div className="space-y-10">
                                <h2 className="text-4xl font-black italic tracking-tighter uppercase border-l-8 border-[#d4ff00] pl-8">
                                    Biography
                                </h2>
                                <div className="prose prose-invert prose-2xl max-w-none">
                                    <p className="text-zinc-300 leading-[1.6] font-medium italic">
                                        {player.name}選手は、日本が世界に誇る{player.category}のエース。
                                        「{player.style}」と称される独自のプレースタイルで、数々の国際大会を制覇してきた。
                                    </p>
                                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                                        {player.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Gear Section */}
                            <div className="bg-zinc-900/60 border border-white/10 rounded-[40px] p-10 sticky top-8 backdrop-blur-xl">
                                <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-[#d4ff00]" />
                                    Exclusive Gear
                                </h3>

                                <div className="space-y-8">
                                    <div className="group">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Professional Racket</p>
                                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 group-hover:border-[#d4ff00]/30 transition-all">
                                            <p className="font-black text-lg mb-2 group-hover:text-[#d4ff00] transition-colors uppercase italic">{player.gear.racket.name}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed mb-4">{player.gear.racket.description}</p>
                                            <Link
                                                href={player.gear.racket.link}
                                                target="_blank"
                                                className="inline-block w-full py-3 bg-[#d4ff00] text-black text-center text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                                            >
                                                View on Amazon
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Power Shoes</p>
                                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 group-hover:border-[#d4ff00]/30 transition-all">
                                            <p className="font-black text-lg mb-2 group-hover:text-[#d4ff00] transition-colors uppercase italic">{player.gear.shoes.name}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed mb-4">{player.gear.shoes.description}</p>
                                            <Link
                                                href={player.gear.shoes.link}
                                                target="_blank"
                                                className="inline-block w-full py-3 bg-white/10 text-white text-center text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10 hover:bg-[#d4ff00] hover:text-black hover:border-transparent transition-all"
                                            >
                                                View on Amazon
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-zinc-500 text-[10px] leading-relaxed italic">
                                        *これらのリンクはAmazonアソシエイト・プログラムのアフィリエイトリンクとして機能します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
