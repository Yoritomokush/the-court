"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { circles } from "@/app/master-data";
import CircleCard from "@/components/CircleCard";

const REGIONS = [
    { label: "ALL", filter: "ALL" },
    { label: "KANTO", filter: ["Tokyo", "Kanagawa"] },
    { label: "KANSAI", filter: ["Osaka"] },
    { label: "OTHERS", filter: ["Fukuoka", "Aichi", "Hokkaido", "Miyagi"] }
];

export default function CirclesPage() {
    const [selectedRegion, setSelectedRegion] = useState<string>("ALL");

    const filteredCircles = circles.filter((circle) => {
        if (selectedRegion === "ALL") return true;

        const regionObj = REGIONS.find(r => r.label === selectedRegion);
        if (!regionObj) return true;

        // Strict filtering against the 'filter' array values
        return (regionObj.filter as string[]).includes(circle.location);
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="pt-20">
                {/* Hero Layout Sync with Premium v2 */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
                    {/* Background Visuals */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626225967045-9410ebbbbea4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 mix-blend-overlay z-0" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black/80 z-0" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(255,255,255,0.05)_40px,rgba(255,255,255,0.05)_80px)] z-0 mix-blend-overlay" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[15rem] md:text-[25rem] font-black italic text-[#d4ff00]/[0.02] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-color-dodge z-0">
                        COMMUNITY
                    </div>

                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" />

                    <div className="relative z-10 text-center space-y-4 px-6 mt-8">
                        <span className="text-[#d4ff00] font-black tracking-[0.3em] uppercase text-xs md:text-sm drop-shadow-[0_0_10px_rgba(212,255,0,0.5)]">
                            Local Hubs
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase drop-shadow-2xl leading-none">
                            FIND YOUR <br className="md:hidden" />
                            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">COURT.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base font-medium leading-relaxed italic mt-4">
                            全国各地で活動するバドミントンサークル・クラブチームを検索可能。
                            レベルや目的に合った、最高のコミュニティを見つけよう。
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-20 min-h-[50vh]">
                    {/* Region Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 relative z-20">
                        {REGIONS.map((region) => (
                            <button
                                key={region.label}
                                onClick={() => setSelectedRegion(region.label)}
                                className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${selectedRegion === region.label
                                        ? "bg-[#d4ff00] text-black border-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.4)] scale-105"
                                        : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30"
                                    }`}
                            >
                                {region.label}
                            </button>
                        ))}
                    </div>

                    {/* Circles Grid */}
                    {filteredCircles.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
                            {filteredCircles.map((circle) => (
                                <CircleCard key={circle.id} circle={circle} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 flex flex-col items-center opacity-50">
                            <span className="text-6xl mb-4 grayscale">🏸</span>
                            <p className="text-zinc-500 font-black italic text-xl uppercase tracking-widest">
                                No communities found in this region
                            </p>
                            <span className="text-zinc-600 text-sm font-medium mt-2">Try expanding your search parameters.</span>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
