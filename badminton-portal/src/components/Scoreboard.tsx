import React, { useState, useEffect } from "react";
import { allEnglandResults, LiveMatchResult } from "@/app/master-data";

const MatchRow: React.FC<{ match: LiveMatchResult }> = ({ match }) => {
    const { player1, player2 } = match;

    // Set-level score formatting
    const renderScores = () => {
        return (
            <div className="flex gap-2 text-zinc-400 text-xs md:text-sm font-mono tracking-wider">
                {match.scores.map((s, idx) => (
                    <span key={idx} className="bg-black/40 px-2 py-1 rounded">
                        {s}
                    </span>
                ))}
            </div>
        );
    };

    // Voting Logic
    const [votes, setVotes] = useState<number>(0);
    const [hasVoted, setHasVoted] = useState<boolean>(false);

    useEffect(() => {
        const key = `badminton_votes_${match.id}`;
        const savedVotes = localStorage.getItem(key);
        if (savedVotes) {
            setVotes(parseInt(savedVotes, 10));
        } else {
            // Initial random-ish votes for styling demo, or 0
            const initialVotes = Math.floor(Math.random() * 500) + 100;
            setVotes(initialVotes);
            localStorage.setItem(key, initialVotes.toString());
        }

        const votedStatus = localStorage.getItem(`${key}_has_voted`);
        if (votedStatus === 'true') {
            setHasVoted(true);
        }
    }, [match.id]);

    const handleVote = () => {
        if (hasVoted) return;

        const key = `badminton_votes_${match.id}`;
        const newVotes = votes + 1;
        setVotes(newVotes);
        setHasVoted(true);
        localStorage.setItem(key, newVotes.toString());
        localStorage.setItem(`${key}_has_voted`, 'true');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-4 border-b border-white/5 hover:bg-white/5 transition-colors px-4 md:px-6 group">
            {/* Category / match info */}
            <div className="w-full md:w-auto mb-3 md:mb-0 flex items-center justify-between gap-3">
                <span className="text-[10px] md:text-xs font-black tracking-widest text-zinc-500 uppercase bg-black/50 px-2 py-1 rounded border border-white/5">
                    {match.category}
                </span>

                <button
                    onClick={handleVote}
                    disabled={hasVoted}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all text-xs font-black ${hasVoted
                        ? "bg-orange-500/20 border-orange-500/50 text-orange-500 cursor-not-allowed"
                        : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 cursor-pointer"
                        }`}
                >
                    <span className={`text-sm ${hasVoted ? "animate-pulse" : ""}`}>🔥</span>
                    <span className="tracking-widest">{votes.toLocaleString()}</span>
                </button>
            </div>

            {/* Main Scoreboard Area */}
            <div className="flex-1 flex items-center justify-between w-full max-w-2xl mx-auto">

                {/* Player 1 */}
                <div className={`flex flex-col items-center md:items-end w-1/3 text-center md:text-right ${player1.isWin ? "text-white" : "text-zinc-500"}`}>
                    <span className="font-bold text-sm md:text-base leading-tight">
                        {player1.name}
                    </span>
                    {player1.isWin && (
                        <span className="text-orange-500 text-[10px] font-black tracking-widest uppercase mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L5.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 014 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L8 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            WIN
                        </span>
                    )}
                </div>

                {/* Score & Sets */}
                <div className="flex flex-col items-center justify-center w-1/3 px-2">
                    <div className="flex items-center gap-3 text-2xl md:text-3xl font-black italic tracking-tighter">
                        <span className={player1.isWin ? "text-orange-500" : "text-zinc-500"}>{player1.sets}</span>
                        <span className="text-zinc-700 text-lg">-</span>
                        <span className={player2.isWin ? "text-orange-500" : "text-zinc-500"}>{player2.sets}</span>
                    </div>
                    <div className="mt-2 text-center hidden md:block">
                        {renderScores()}
                    </div>
                </div>

                {/* Player 2 */}
                <div className={`flex flex-col items-center md:items-start w-1/3 text-center md:text-left ${player2.isWin ? "text-white" : "text-zinc-500"}`}>
                    <span className="font-bold text-sm md:text-base leading-tight">
                        {player2.name}
                    </span>
                    {player2.isWin && (
                        <span className="text-orange-500 text-[10px] font-black tracking-widest uppercase mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L5.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 014 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L8 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            WIN
                        </span>
                    )}
                </div>

            </div>

            {/* Mobile Scores (Shown below players on small screens) */}
            <div className="w-full text-center mt-3 md:hidden">
                {renderScores()}
            </div>

        </div>
    );
};

export default function Scoreboard() {
    if (!allEnglandResults || allEnglandResults.length === 0) return null;

    return (
        <div className="w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
            {/* Header */}
            <div className="relative bg-emerald-900 px-6 py-4 flex items-center justify-between overflow-hidden">
                {/* Background glow/pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_40px)] mix-blend-overlay" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />

                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <h2 className="text-white font-black italic tracking-wider text-sm md:text-base uppercase flex items-center gap-2 drop-shadow-md">
                        全英オープン 2026
                        <span className="text-green-300 font-medium tracking-normal hidden md:inline">- Day 1/2 結果速報</span>
                    </h2>
                </div>
                <div className="relative z-10 text-emerald-200/50 text-[10px] md:text-xs font-black tracking-widest uppercase">
                    Live Updates
                </div>
            </div>

            {/* Matches List */}
            <div className="flex flex-col bg-zinc-900">
                {allEnglandResults.map((match) => (
                    <MatchRow key={match.id} match={match} />
                ))}
            </div>

            {/* Footer / More Link */}
            <div className="bg-zinc-950/50 px-6 py-3 flex justify-center border-t border-white/5">
                <button className="text-zinc-500 hover:text-orange-500 text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2">
                    View Full Tournament Tree <span>&rarr;</span>
                </button>
            </div>
        </div>
    );
}
