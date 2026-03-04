"use client";

import React, { useEffect, useState } from "react";
import { allEnglandResults } from "@/app/master-data";

export default function PollResultsForOBS() {
    const [results, setResults] = useState<{ [key: string]: number }>({});

    // Refresh fake poll results periodically to simulate live data
    useEffect(() => {
        // Load initial
        const fetchResults = () => {
            const mockResults: { [key: string]: number } = {};
            allEnglandResults.forEach((match, index) => {
                const savedCount = localStorage.getItem(`best_match_count_${match.id}`);
                if (savedCount) {
                    mockResults[match.id] = parseInt(savedCount, 10);
                } else {
                    const initialCount = 1000 - (index * 200) + Math.floor(Math.random() * 50);
                    mockResults[match.id] = initialCount;
                }
            });
            setResults(mockResults);
        };

        fetchResults();

        // Poll for updates (e.g. from localStorage changes in another tab)
        const interval = setInterval(() => {
            fetchResults();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const totalVotes = Object.values(results).reduce((sum, val) => sum + val, 0);

    // Sort by highest votes
    const sortedMatches = [...allEnglandResults].sort((a, b) => {
        const votesA = results[a.id] || 0;
        const votesB = results[b.id] || 0;
        return votesB - votesA;
    });

    return (
        // Background is transparent to support OBS chroma key or transparent overlay
        <div className="min-h-screen bg-transparent p-8 font-sans text-white">
            <div className="max-w-3xl border-l-[16px] border-orange-500 bg-black/80 backdrop-blur-md p-8 rounded-r-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-y border-r border-white/10">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-5xl font-black italic tracking-tighter drop-shadow-lg uppercase text-white leading-tight">
                        Best Match<br />
                        <span className="text-orange-500">Live Poll</span>
                    </h1>
                    <div className="text-right">
                        <div className="flex items-center justify-end gap-3 mb-1">
                            <span className="w-4 h-4 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                            <span className="text-red-500 font-bold tracking-widest text-xl uppercase italic">LIVE</span>
                        </div>
                        <p className="text-zinc-400 font-bold text-lg">{totalVotes.toLocaleString()} Votes</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {sortedMatches.map((match, index) => {
                        const votes = results[match.id] || 0;
                        const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : "0";
                        const isTop = index === 0;

                        return (
                            <div key={match.id} className="relative">
                                <div className="flex items-end justify-between mb-2 relative z-10 px-2">
                                    <div className="flex items-center gap-4">
                                        <span className={`text-2xl font-black italic w-8 text-center drop-shadow-md ${isTop ? 'text-[#d4ff00]' : 'text-zinc-500'}`}>
                                            {index + 1}
                                        </span>
                                        <h2 className="text-3xl font-black tracking-tight drop-shadow-md">
                                            {match.player1.name} <span className="text-orange-500 px-1 text-2xl font-bold uppercase italic mx-1">vs</span> {match.player2.name}
                                        </h2>
                                    </div>
                                    <span className={`text-4xl font-black italic drop-shadow-lg ${isTop ? 'text-white' : 'text-zinc-400'}`}>
                                        {percentage}%
                                    </span>
                                </div>

                                <div className="h-4 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/10">
                                    <div
                                        className={`h-full transition-all duration-1000 ease-out ${isTop ? 'bg-gradient-to-r from-orange-500 to-amber-400' : 'bg-zinc-600'}`}
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 pt-4 border-t border-white/10 flex items-center gap-4">
                    <svg className="w-8 h-8 fill-zinc-400" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span className="text-zinc-400 font-bold text-xl tracking-widest border border-white/10 bg-white/5 px-4 py-1 rounded-md">@yoritomo05</span>
                    <span className="text-zinc-500 text-lg font-bold ml-2">をタグ付けして投票しよう！</span>
                </div>
            </div>
        </div>
    );
}
