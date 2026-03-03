"use client";

import { columns } from "@/app/master-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextLink from "next/link";

export default function ColumnsListPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
            <Header />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
                <div className="flex flex-col mb-16">
                    <span className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase mb-2 block">Insights & Tactics</span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85]">
                        分析コラム<br />
                        <span className="text-xl md:text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-400 block mt-3 uppercase">THE COLUMNS.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {columns.map((column) => {
                        const isAllEngland = column.category === "全英OP特集";
                        return (
                            <NextLink
                                key={column.id}
                                href={`/columns/${column.id}`}
                                className={`group flex flex-col rounded-3xl overflow-hidden transition-all duration-300 relative ${isAllEngland
                                        ? "bg-gradient-to-br from-emerald-900 to-green-800 border border-yellow-600 hover:border-yellow-400"
                                        : "bg-zinc-900/30 border border-white/5 hover:border-orange-500/50"
                                    }`}
                            >
                                {/* ALL ENGLAND Watermark Background for the Card */}
                                {isAllEngland && (
                                    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                                        <span className="text-[6vw] font-black italic opacity-5 text-white whitespace-nowrap select-none">ALL ENGLAND</span>
                                    </div>
                                )}
                                {/* Special Feature Badge */}
                                {isAllEngland && (
                                    <div className="absolute top-4 right-4 z-30">
                                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black border-none text-[10px] font-black rounded uppercase italic shadow-lg">
                                            SPECIAL FEATURE
                                        </span>
                                    </div>
                                )}

                                <div className="relative aspect-video bg-zinc-800 overflow-hidden z-10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                    <div className="h-full w-full flex items-center justify-center bg-zinc-900">
                                        <span className="text-zinc-800 font-black italic text-4xl opacity-20 uppercase tracking-tighter">INSIGHT</span>
                                    </div>
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1 text-white border-none text-[10px] font-black rounded uppercase italic ${isAllEngland ? "bg-gradient-to-r from-emerald-600 to-green-500" : "bg-gradient-to-r from-orange-600 to-amber-500"
                                            }`}>
                                            {column.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1 z-10">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`text-[10px] font-black tracking-widest ${isAllEngland ? "text-green-300" : "text-zinc-500"}`}>{column.date}</span>
                                        <span className={`text-[10px] font-black tracking-widest uppercase italic ${isAllEngland ? "text-yellow-500" : "text-orange-500"}`}>{column.author}</span>
                                    </div>
                                    <h2 className={`text-2xl font-black italic tracking-tight leading-snug transition-colors mb-4 ${isAllEngland ? "group-hover:text-yellow-500" : "group-hover:text-orange-500"
                                        }`}>
                                        {column.title}
                                    </h2>
                                    <p className={`text-sm leading-relaxed line-clamp-3 mb-8 font-medium ${isAllEngland ? "text-green-100/70" : "text-zinc-500"}`}>
                                        {column.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <span className={`text-xs font-black italic tracking-tighter uppercase group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 ${isAllEngland ? "text-white" : ""
                                            }`}>
                                            Start Reading <span className={`${isAllEngland ? "text-yellow-500" : "text-orange-500"}`}>&rarr;</span>
                                        </span>
                                    </div>
                                </div>
                            </NextLink>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
