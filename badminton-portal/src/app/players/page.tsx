"use client";

import { useState, useMemo } from "react";
import { players, Player } from "@/app/master-data";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerCard from "@/components/PlayerCard";

export default function PlayersListPage() {
    const [filters, setFilters] = useState({
        nationality: "All",
        event: "All",
        category: "All",
    });

    const filteredPlayers = useMemo(() => {
        return players.filter((p) => {
            const matchNationality =
                filters.nationality === "All" || p.country === filters.nationality;

            const matchEvent =
                filters.event === "All" ||
                (filters.event === "Singles" && p.category.includes("シングルス")) ||
                (filters.event === "Doubles" && p.category.includes("ダブルス") && !p.category.includes("混合")) ||
                (filters.event === "Mixed" && p.category.includes("混合"));

            const matchCategory =
                filters.category === "All" ||
                (filters.category === "National" && p.category.includes("国内代表")) ||
                (filters.category === "Corporate" && p.category.includes("実業団")) ||
                (filters.category === "Pro" && p.category.includes("プロ")) ||
                (filters.category === "NextGen" && p.category.includes("NEXT GEN"));

            return matchNationality && matchEvent && matchCategory;
        });
    }, [filters]);

    const FilterButton = ({
        label,
        value,
        current,
        onClick,
    }: {
        label: string;
        value: string;
        current: string;
        onClick: (val: string) => void;
    }) => (
        <button
            onClick={() => onClick(value)}
            className={`px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all shrink-0 ${current === value
                ? "bg-[#d4ff00] text-black shadow-[0_5px_10px_rgba(212,255,0,0.2)]"
                : "text-zinc-500 hover:text-white hover:bg-white/5 border border-white/5"
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <div>
                            <span className="text-[#d4ff00] text-xs font-black tracking-[0.3em] uppercase mb-2 block">
                                Elite Database
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
                                PLAYER<br />
                                <span className="text-[#d4ff00]">ARCHIVE.</span>
                            </h1>
                        </div>

                        {/* Filter Controls */}
                        <div className="space-y-4 bg-zinc-900/40 p-6 rounded-[32px] border border-white/5 backdrop-blur-xl">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest w-20">Nationality</span>
                                <div className="flex gap-2">
                                    <FilterButton label="All" value="All" current={filters.nationality} onClick={(v) => setFilters({ ...filters, nationality: v })} />
                                    <FilterButton label="Japan" value="Japan" current={filters.nationality} onClick={(v) => setFilters({ ...filters, nationality: v })} />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest w-20">Event Type</span>
                                <div className="flex gap-2">
                                    <FilterButton label="All" value="All" current={filters.event} onClick={(v) => setFilters({ ...filters, event: v })} />
                                    <FilterButton label="Singles" value="Singles" current={filters.event} onClick={(v) => setFilters({ ...filters, event: v })} />
                                    <FilterButton label="Doubles" value="Doubles" current={filters.event} onClick={(v) => setFilters({ ...filters, event: v })} />
                                    <FilterButton label="Mixed" value="Mixed" current={filters.event} onClick={(v) => setFilters({ ...filters, event: v })} />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest w-20">Category</span>
                                <div className="flex gap-2">
                                    <FilterButton label="All" value="All" current={filters.category} onClick={(v) => setFilters({ ...filters, category: v })} />
                                    <FilterButton label="National" value="National" current={filters.category} onClick={(v) => setFilters({ ...filters, category: v })} />
                                    <FilterButton label="Corporate" value="Corporate" current={filters.category} onClick={(v) => setFilters({ ...filters, category: v })} />
                                    <FilterButton label="Pro" value="Pro" current={filters.category} onClick={(v) => setFilters({ ...filters, category: v })} />
                                    <FilterButton label="Next Gen" value="NextGen" current={filters.category} onClick={(v) => setFilters({ ...filters, category: v })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dense Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                    {filteredPlayers.map((player) => (
                        <PlayerCard
                            key={player.id}
                            player={player}
                        />
                    ))}
                </div>

                {filteredPlayers.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-zinc-600 font-black italic text-2xl uppercase tracking-tighter">No players matching the filters.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
