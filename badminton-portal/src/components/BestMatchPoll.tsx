"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { allEnglandResults, players as allPlayers } from "@/app/master-data";
import Image from "next/image";

export default function BestMatchPoll() {
    const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [results, setResults] = useState<{ [key: string]: number }>({});

    // Initialize fake results data
    useEffect(() => {
        const savedVote = localStorage.getItem("best_match_vote");
        if (savedVote) {
            setHasVoted(true);
            setSelectedMatch(savedVote);
        }

        const mockResults: { [key: string]: number } = {};
        allEnglandResults.forEach((match, index) => {
            // Seed the initial votes (deterministically for matching IDs)
            const savedCount = localStorage.getItem(`best_match_count_${match.id}`);
            if (savedCount) {
                mockResults[match.id] = parseInt(savedCount, 10);
            } else {
                const initialCount = 1000 - (index * 200) + Math.floor(Math.random() * 50);
                mockResults[match.id] = initialCount;
                localStorage.setItem(`best_match_count_${match.id}`, initialCount.toString());
            }
        });
        setResults(mockResults);

    }, []);

    const totalVotes = Object.values(results).reduce((sum, val) => sum + val, 0);

    const handleVote = (matchId: string) => {
        if (hasVoted) return;

        // Update local state
        const newResults = { ...results, [matchId]: (results[matchId] || 0) + 1 };
        setResults(newResults);
        setHasVoted(true);
        setSelectedMatch(matchId);

        // Save to localStorage
        localStorage.setItem("best_match_vote", matchId);
        localStorage.setItem(`best_match_count_${matchId}`, newResults[matchId].toString());

        // Fire Confetti
        triggerConfetti();
    };

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            }));
        }, 250);
    };

    const getShareUrl = (playerTag?: string, playerName?: string) => {
        if (!selectedMatch) return "#";
        const match = allEnglandResults.find(m => m.id === selectedMatch);
        if (!match) return "#";

        // Use customized text based on whether a sticker was generated
        const customText = playerTag && playerName
            ? `【全英オープン2026】${playerTag}「${playerName}」の限定ステッカーを獲得しました！🎁 あなたのベストマッチは？ 🏸 @yoritomo05`
            : `【全英オープン2026】私のベストマッチは「${match.player1.name} VS ${match.player2.name}」！🔥 リアルタイム結果をチェック 🏸 @yoritomo05`;

        const hashtags = "全英オープン,THECOURT,バドミントン";
        // Use the live production URL
        const url = "https://the-court-eight.vercel.app/";

        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(customText)}&hashtags=${encodeURIComponent(hashtags)}&url=${encodeURIComponent(url)}`;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://the-court.example.com");
        alert("ステッカーのURLをクリップボードにコピーしました！SNSでシェアしてください！");
    };

    // Helper to find the "Winner" of the selected match to assign the sticker to
    // If we can't find a winner easily, default to player 1.
    const getGiftPlayer = () => {
        if (!selectedMatch) return null;
        const match = allEnglandResults.find(m => m.id === selectedMatch);
        if (!match) return null;

        const targetPlayerName = match.player1.isWin ? match.player1.name : match.player2.name;
        // Find full player data to extract tags (二つ名)
        return allPlayers.find(p => p.name === targetPlayerName || targetPlayerName.includes(p.name.split(' ')[0]));
    };

    const giftPlayer = getGiftPlayer();
    // Default values if tags/image are missing to prevent TS errors
    const safeTags = giftPlayer?.tags || [];
    const safeImage = giftPlayer?.image || "";
    const safeName = giftPlayer?.name || "";

    return (
        <>
            <div className="w-full max-w-5xl mx-auto mt-16 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black rounded-[40px] border border-white/10 shadow-2xl overflow-hidden p-6 md:p-10 relative group">
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter drop-shadow-md">
                            ベストマッチ投票<br />
                            <span className="text-xl md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-400 block mt-2 uppercase">BEST MATCH POLL</span>
                        </h2>
                        <p className="text-zinc-400 mt-2 text-sm md:text-base font-medium">全英オープン2026 Day 1、あなたが最も心を打たれた試合は？</p>
                    </div>
                    <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-black tracking-widest uppercase text-zinc-300">Live Poll: <span className="text-white">{totalVotes.toLocaleString()} Votes</span></span>
                    </div>
                </div>

                <div className="grid gap-3 relative z-10">
                    {allEnglandResults.map((match) => {
                        const votes = results[match.id] || 0;
                        const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : "0";
                        const isWinner = selectedMatch === match.id;

                        return (
                            <button
                                key={match.id}
                                onClick={() => handleVote(match.id)}
                                disabled={hasVoted}
                                className={`relative w-full overflow-hidden rounded-2xl p-4 md:p-6 text-left transition-all duration-500 border
                        ${hasVoted && !isWinner ? 'opacity-50 grayscale' : 'opacity-100 grayscale-0'}
                        ${!hasVoted ? 'hover:border-orange-500/50 hover:bg-white/5 cursor-pointer border-white/5 bg-black/40' : ''}
                        ${isWinner ? 'border-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.2)] bg-zinc-900/80 cursor-default' : ''}
                    `}
                            >
                                {/* Progress Bar (Visible after voting) */}
                                {hasVoted && (
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 -z-10 transition-all duration-1000 ease-out"
                                        style={{ width: `${percentage}%` }}
                                    />
                                )}

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] md:text-xs font-black tracking-widest text-zinc-500 uppercase bg-black px-2 py-1 rounded w-12 text-center shrink-0">
                                            {match.category}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-sm md:text-base md:text-lg italic tracking-tight text-white flex flex-wrap items-center gap-2">
                                                <span className={match.player1.isWin ? 'text-white' : 'text-zinc-400'}>{match.player1.name}</span>
                                                <span className="text-orange-500 text-[10px] tracking-widest font-black uppercase">VS</span>
                                                <span className={match.player2.isWin ? 'text-white' : 'text-zinc-400'}>{match.player2.name}</span>
                                            </h4>
                                        </div>
                                    </div>

                                    {hasVoted ? (
                                        <div className="text-right shrink-0">
                                            <p className="text-2xl font-black italic text-white drop-shadow-md">{percentage}%</p>
                                        </div>
                                    ) : (
                                        <div className="shrink-0">
                                            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-colors text-zinc-500 font-bold">🎯</span>
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

            </div>

            {/* Thank You Gift Area (Visible after voting) */}
            {hasVoted && (
                <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                            Voter Exclusive Reward
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white drop-shadow-md">
                            THANK YOU GIFT
                        </h3>
                        <p className="text-zinc-400 mt-2 text-sm">投票ありがとうございます。限定デジタルステッカーをプレゼント！</p>
                    </div>

                    {/* Advanced Sticker UI */}
                    {giftPlayer && safeTags.length > 0 ? (
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            {/* Sticker Render */}
                            <div className="relative w-64 h-80 rounded-2xl bg-black border-[3px] border-orange-500/80 shadow-[0_0_40px_rgba(255,215,0,0.15)] overflow-hidden group/sticker transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer" onClick={copyToClipboard}>
                                {/* Inner gold rim effect */}
                                <div className="absolute inset-2 border border-orange-300/30 rounded-xl z-20 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-yellow-500/10 z-0" />

                                {/* Holographic foil overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover/sticker:opacity-100 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-color-dodge transition-opacity duration-700 z-30 pointer-events-none" />
                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/sticker:translate-x-full transition-transform duration-1000 ease-in-out z-30 pointer-events-none -skew-x-12" />

                                {/* Player Silhouette BG */}
                                {safeImage && !safeImage.includes("placeholder") && (
                                    <Image
                                        src={safeImage}
                                        alt={safeName}
                                        fill
                                        className="object-cover opacity-30 mix-blend-luminosity scale-110 group-hover/sticker:scale-100 transition-transform duration-700 z-0 grayscale"
                                    />
                                )}

                                <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase mb-4 drop-shadow-[0_0_5px_rgba(234,88,12,0.8)]">
                                        All England 2026
                                    </span>
                                    <h4 className="text-4xl font-black italic tracking-tighter text-white leading-none drop-shadow-2xl mb-2">
                                        {safeTags[0]}
                                    </h4>
                                    <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-400 my-4" />
                                    <p className="text-lg font-black tracking-widest text-zinc-300 uppercase">
                                        {safeName}
                                    </p>
                                </div>
                            </div>

                            {/* Download / Share Actions */}
                            <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-auto">
                                <button
                                    onClick={copyToClipboard}
                                    className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full border border-white/10 transition-colors font-black uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                                    URLをコピーする
                                </button>

                                <Link
                                    href={getShareUrl(safeTags[0], safeName)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full border-none transition-transform hover:scale-105 font-black uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-3 shadow-xl"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    ステッカーをゲットしてXで報告する
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Fallback UI if player data not found */
                        <div className="text-center p-8 bg-black/40 border border-white/5 rounded-2xl mx-auto max-w-lg">
                            <p className="text-zinc-400 font-bold mb-6">ベストマッチの投票ありがとうございました！結果はLIVE配信にも反映されます。</p>
                            <Link
                                href={getShareUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-black uppercase tracking-widest"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                投票をXでシェアする
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
