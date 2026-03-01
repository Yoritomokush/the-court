"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GearCard from "@/components/GearCard";
import { gears } from "@/app/master-data";

const CATEGORIES = ["ALL", "RACKETS", "SHOES", "STRINGS"];

export default function GearPage() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredGears = gears.filter((gear) => {
        if (selectedCategory === "ALL") return true;
        return gear.category + "S" === selectedCategory || gear.category === selectedCategory;
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="pt-20">
                {/* Hero Layout Sync with Premium v2 */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 z-0" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(255,255,255,0.1)_40px,rgba(255,255,255,0.1)_80px)] z-0 mix-blend-overlay" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[15rem] md:text-[30rem] font-black italic text-white/[0.04] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-overlay z-0">
                        G.E.
                    </div>

                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

                    <div className="relative z-10 text-center space-y-4 px-6">
                        <span className="text-[#d4ff00] font-black tracking-[0.3em] uppercase text-sm drop-shadow-lg">
                            Professional Equipment
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase drop-shadow-2xl">
                            Elite <span className="text-[#d4ff00]">Gear</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base font-medium leading-relaxed italic">
                            世界最高峰の闘いを支える、プロフェッショナル仕様のバドミントンギア。
                            各カテゴリーの最高傑作を、独自規格によるアソシエイトリンク経由で提供します。
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-20 min-h-[50vh]">
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-20">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${selectedCategory === category
                                    ? "bg-[#d4ff00] text-black border-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.4)] scale-105"
                                    : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gear Grid */}
                    {filteredGears.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredGears.map((gear) => (
                                <GearCard key={gear.id} gear={gear} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 font-black italic text-xl uppercase tracking-widest">
                                No equipment found in this category
                            </p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
