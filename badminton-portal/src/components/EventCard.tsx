import React from "react";
import { Tournament } from "@/app/master-data";

interface EventCardProps {
    tournament: Tournament;
}

const EventCard: React.FC<EventCardProps> = ({ tournament }) => {
    const isUpcoming = tournament.status === "Upcoming";

    // Generate giant watermark from category (e.g., 'S1000' or 'DOM')
    const watermark = tournament.category.includes("1000") ? "1000" :
        tournament.category.includes("750") ? "750" :
            tournament.category.includes("500") ? "500" :
                tournament.category === "Domestic" ? "DOM" : "INT";

    return (
        <div className={`group relative w-full overflow-hidden rounded-[32px] bg-zinc-950 transition-all duration-700 border shadow-2xl flex flex-col justify-end p-8 md:p-12
            ${isUpcoming ? "border-[#d4ff00]/50 hover:border-[#d4ff00]" : "border-white/10 hover:border-white/30"}`}>

            {/* Outline Glow if Upcoming */}
            {isUpcoming && (
                <div className="absolute inset-0 rounded-[32px] ring-1 ring-[#d4ff00]/30 shadow-[0_0_30px_rgba(212,255,0,0.15)] group-hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] transition-all duration-700 pointer-events-none z-30" />
            )}

            {/* Inner Glow (Edge Light) */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/5 group-hover:ring-white/20 transition-all duration-700 z-30 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] z-30 pointer-events-none" />

            {/* Layer 1 & 2: Base Gradient and Angled Accent Stripe */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 z-0" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)] z-0 mix-blend-overlay" />

            {/* Giant Watermark Typography */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[8rem] md:text-[15rem] font-black italic text-white/[0.03] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-overlay z-0 select-none">
                {watermark}
            </div>

            {/* Background/Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/80 to-black z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">

                <div className="flex flex-col flex-1">
                    {/* Top Badges */}
                    <div className="flex flex-wrap gap-3 items-center mb-6">
                        {isUpcoming && (
                            <span className="px-3 py-1 bg-[#d4ff00] text-black text-[10px] md:text-xs font-black tracking-[0.2em] uppercase rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.4)] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                NEXT EVENT
                            </span>
                        )}
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase rounded-sm backdrop-blur-md">
                            {tournament.category}
                        </span>

                        <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase ml-auto md:ml-0
                            ${tournament.status === "Ongoing" ? "text-red-500 animate-pulse" :
                                tournament.status === "Finished" ? "text-zinc-500" : "text-white"}`}>
                            {tournament.status}
                        </span>
                    </div>

                    {/* Title & Dates */}
                    <div className="space-y-2">
                        <p className="text-[#d4ff00] text-sm md:text-base font-black tracking-widest font-mono">
                            {tournament.date}
                        </p>
                        <h3 className={`text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-[1.1] transition-colors
                            ${isUpcoming ? "text-white group-hover:text-[#d4ff00] drop-shadow-lg" : "text-zinc-300 group-hover:text-white"}`}>
                            {tournament.name}
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-4 max-w-2xl line-clamp-2 md:line-clamp-none">
                        {tournament.description}
                    </p>
                </div>

                {/* Right / Bottom Info */}
                <div className="flex flex-row md:flex-col items-end justify-between md:justify-end shrink-0 pt-4 md:pt-0 border-t border-white/10 md:border-none">
                    <div className="flex flex-col items-start md:items-end w-full">
                        <span className="text-zinc-500 text-[10px] font-black tracking-[0.2em] uppercase mb-1">Location</span>
                        <div className="flex items-center gap-2 text-white">
                            <svg className="w-4 h-4 text-[#d4ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm md:text-base font-bold tracking-wide">{tournament.location}</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Accent Line Bottom */}
            <div className={`absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-700 ease-out z-20
                ${isUpcoming ? "bg-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.5)] group-hover:w-full" : "bg-white group-hover:w-1/3"}`} />
        </div>
    );
};

export default EventCard;
