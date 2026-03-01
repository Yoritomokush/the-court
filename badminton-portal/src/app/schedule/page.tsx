"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tournaments, Tournament } from "@/app/master-data";
import EventCard from "@/components/EventCard";

const CATEGORIES = ["ALL", "BWF", "DOMESTIC"];

export default function SchedulePage() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredTournaments = tournaments.filter((tournament) => {
        if (selectedCategory === "ALL") return true;
        if (selectedCategory === "BWF") return tournament.category.includes("BWF") || tournament.category.includes("Major");
        if (selectedCategory === "DOMESTIC") return tournament.category === "Domestic";
        return true;
    });

    // Sort: Upcoming (nearest) first, then Ongoing, then Finished
    const sortedTournaments = [...filteredTournaments].sort((a, b) => {
        const statusOrder = { "Upcoming": 1, "Ongoing": 2, "Finished": 3 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="pt-20">
                {/* Hero Layout */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 z-0" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(255,255,255,0.1)_40px,rgba(255,255,255,0.1)_80px)] z-0 mix-blend-overlay" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[10rem] md:text-[25rem] font-black italic text-white/[0.04] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-overlay z-0">
                        SCHEDULE
                    </div>

                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

                    <div className="relative z-10 text-center space-y-4 px-6">
                        <span className="text-[#d4ff00] font-black tracking-[0.3em] uppercase text-sm drop-shadow-lg">
                            Tournament Calendar
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase drop-shadow-2xl">
                            Elite <span className="text-[#d4ff00]">Events</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base font-medium leading-relaxed italic">
                            2026シーズンの主要な国際大会および国内大会のスケジュール。
                            歴史を刻む次なる激闘の舞台を見逃すな。
                        </p>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 py-20 min-h-[50vh]">
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

                    {/* Vertical Timeline Container */}
                    <div className="relative">
                        {/* Timeline Center Line (Desktop) / Left Line (Mobile) */}
                        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-white/10 rounded-full z-0" />

                        {/* Events List */}
                        <div className="space-y-12 relative z-10 pl-16 md:pl-28">
                            {sortedTournaments.length > 0 ? (
                                sortedTournaments.map((tournament, index) => (
                                    <div key={tournament.id} className="relative">
                                        {/* Timeline Node Marker */}
                                        <div className={`absolute -left-16 md:-left-28 top-8 w-4 h-4 rounded-full border-4 border-black z-20 ${tournament.status === "Upcoming" ? "bg-[#d4ff00] shadow-[0_0_15px_rgba(212,255,0,0.8)]" : "bg-zinc-600"
                                            }`} />

                                        <EventCard tournament={tournament} />
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-zinc-500 font-black italic text-xl uppercase tracking-widest">
                                        No upcoming events found
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
