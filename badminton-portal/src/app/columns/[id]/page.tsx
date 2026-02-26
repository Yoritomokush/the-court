"use client";

import { columns, players } from "@/app/master-data";
import { useParams, notFound } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ColumnDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const column = columns.find((c) => c.id === id);

    if (!column) {
        notFound();
    }

    // Find related players mentioned in the article or specifically tagged
    const relatedPlayers = players.filter(p =>
        column.relatedPlayerIds?.includes(p.id) ||
        column.content.includes(p.name.split(" ")[0]) ||
        (p.id === "kevin-sanjaya" && column.id === "legend-kevin-sanjaya")
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            {/* Decorative Background Patterns */}
            <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
                <div className="absolute top-20 right-10 w-96 h-96 border-4 border-white rotate-12" />
                <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border-4 border-white" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                    <span className="text-[30vw] font-black italic select-none">INDONESIA</span>
                </div>
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
                <NextLink
                    href="/columns"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d4ff00] transition-colors mb-12 text-xs font-black tracking-widest uppercase"
                >
                    <span>&larr;</span> All Columns
                </NextLink>

                {/* Article Hero */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-4 py-1.5 bg-[#d4ff00] text-black text-[10px] font-black rounded-full uppercase italic tracking-widest">
                            {column.category}
                        </span>
                        <span className="text-[10px] font-black text-zinc-500 tracking-[0.3em] uppercase">{column.date}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-12 uppercase">
                        {column.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#d4ff00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.2)]">
                                <span className="text-black font-black italic text-2xl">TC</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Written by</p>
                                <p className="text-white text-xl font-black italic tracking-tight">{column.author}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="p-3 rounded-xl bg-zinc-900 border border-white/5 hover:border-[#d4ff00]/50 transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest px-4">Share</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Featured Image placeholder/decoration if no real image */}
                <div className="aspect-[21/9] w-full bg-zinc-900 rounded-[40px] overflow-hidden mb-20 border border-white/5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <span className="text-zinc-800 font-black italic text-[15vw] opacity-10 uppercase tracking-tighter select-none group-hover:scale-105 transition-transform duration-1000 leading-none">
                            {column.category}
                        </span>
                    </div>
                    {/* If we had column.image, we would use it here. Using a premium placeholder since images aren't provided */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 mix-blend-overlay" />
                    </div>
                </div>

                {/* Article Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <div className="prose prose-invert max-w-none 
              prose-h2:text-4xl prose-h2:font-black prose-h2:italic prose-h2:tracking-tighter prose-h2:text-[#d4ff00] prose-h2:mt-20 prose-h2:mb-10 prose-h2:uppercase
              prose-p:text-zinc-300 prose-p:text-xl prose-p:leading-relaxed prose-p:mb-10 prose-p:font-medium
              prose-strong:text-white prose-strong:font-black
              prose-blockquote:border-l-4 prose-blockquote:border-[#d4ff00] prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-white prose-blockquote:my-16
            ">
                            <div className="whitespace-pre-wrap leading-[1.8]">
                                {column.content}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        {relatedPlayers.length > 0 && (
                            <div className="sticky top-32 p-8 bg-zinc-900/50 rounded-[32px] border border-white/5 backdrop-blur-sm">
                                <h3 className="text-xs font-black tracking-widest uppercase text-[#d4ff00] mb-8">Related Players</h3>
                                <div className="space-y-6">
                                    {relatedPlayers.map(player => (
                                        <NextLink
                                            key={player.id}
                                            href={`/players/${player.id}`}
                                            className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-white/5 transition-colors"
                                        >
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
                                                <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{player.country}</p>
                                                <h4 className="text-sm font-black italic tracking-tight truncate group-hover:text-[#d4ff00] transition-colors uppercase">{player.name}</h4>
                                            </div>
                                            <div className="text-[#d4ff00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                                &rarr;
                                            </div>
                                        </NextLink>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="p-8 bg-zinc-900/30 rounded-[32px] border border-white/5 italic">
                            <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                                ※本コラムは専門家の個人的な見解に基づくものであり、公式な技術指導を意図するものではありません。
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
}
