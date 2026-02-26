"use client";

import { news } from "@/app/master-data";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsListPage() {
    const allNews = [...news].reverse();

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "TOURNAMENT":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "GEAR":
                return "bg-[#d4ff00]/10 text-[#d4ff00] border-[#d4ff00]/20";
            case "TOPIC":
                return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
            default:
                return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
                <div className="flex flex-col mb-16">
                    <span className="text-[#d4ff00] text-xs font-black tracking-[0.3em] uppercase mb-2 block">Archive</span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
                        LATEST<br />
                        <span className="text-[#d4ff00]">NEWS.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-1">
                    {allNews.map((item) => (
                        <Link
                            key={item.id}
                            href={`/news/${item.id}`}
                            className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-white/5 hover:border-[#d4ff00]/30 transition-all no-underline"
                        >
                            <div className="flex items-center gap-6 shrink-0">
                                <span className="text-sm font-black text-zinc-500 tracking-tighter w-24">
                                    {item.date}
                                </span>
                                <span className={`px-3 py-1 rounded text-[10px] font-black tracking-widest border ${getCategoryColor(item.category)}`}>
                                    {item.category}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-300 group-hover:text-white transition-all flex-1 leading-tight">
                                {item.title}
                            </h2>

                            <div className="flex items-center gap-4 text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                                <span className="text-xs font-black tracking-widest uppercase italic">Full Story</span>
                                <span className="text-2xl">&rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
