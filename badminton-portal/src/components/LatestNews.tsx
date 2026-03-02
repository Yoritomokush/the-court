"use client";

import { news } from "@/app/master-data";
import Link from "next/link";

export default function LatestNews() {
    // Take last 3 items and reverse to show most recent first
    const latestNews = [...news]
        .sort((a, b) => new Date(b.date.replace(/\./g, "-")).getTime() - new Date(a.date.replace(/\./g, "-")).getTime())
        .slice(0, 3);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "TOURNAMENT":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "GEAR":
                return "bg-orange-500/10 text-orange-500 border-orange-500/20";
            case "TOPIC":
                return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
            default:
                return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
        }
    };

    return (
        <section className="relative">
            <div className="flex flex-col mb-10">
                <span className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase mb-2 block">The Hub</span>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
                    最新ニュース <span className="text-lg md:text-2xl tracking-widest text-zinc-500 block mt-1 uppercase">LATEST NEWS</span>
                </h2>
            </div>

            <div className="space-y-1">
                {latestNews.map((item) => (
                    <Link
                        key={item.id}
                        href={`/news/${item.id}`}
                        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-white/5 hover:border-orange-500/30 transition-all no-underline"
                    >
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-sm font-black text-zinc-500 tracking-tighter w-24">
                                {item.date}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-widest border ${getCategoryColor(item.category)}`}>
                                {item.category}
                            </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-zinc-300 group-hover:text-white group-hover:translate-x-1 transition-all flex-1">
                            {item.title}
                        </h3>

                        <div className="hidden md:flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                            <span className="text-[10px] font-black tracking-widest uppercase">Read</span>
                            <span className="text-lg">&rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12">
                <Link
                    href="/news"
                    className="inline-flex items-center gap-3 text-zinc-500 hover:text-orange-500 transition-colors group"
                >
                    <span className="text-xs font-black tracking-[0.2em] uppercase">View All Insights</span>
                    <div className="w-12 h-[1px] bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
            </div>
        </section>
    );
}
