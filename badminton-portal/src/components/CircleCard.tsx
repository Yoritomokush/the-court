import React from "react";
import { Circle } from "@/app/master-data";

interface CircleCardProps {
    circle: Circle;
}

const CircleCard: React.FC<CircleCardProps> = ({ circle }) => {
    const isRecruiting = circle.recruiting;

    // Giant watermark from the first letter of the location or name
    const initials = circle.location.substring(0, 3).toUpperCase();

    // Mapping color badges for level
    const levelColors = {
        "Beginner": "border-[#93c5fd] text-[#93c5fd] bg-[#93c5fd]/10",
        "Intermediate": "border-[#fcd34d] text-[#fcd34d] bg-[#fcd34d]/10",
        "Advanced": "border-[#f87171] text-[#f87171] bg-[#f87171]/10",
        "All": "border-white/50 text-white bg-white/10"
    };
    const levelStyle = levelColors[circle.level] || levelColors["All"];

    return (
        <div className="group relative w-full overflow-hidden rounded-[32px] bg-zinc-950 transition-all duration-700 border border-white/10 shadow-2xl hover:border-white/30 flex flex-col p-8 md:p-10 min-h-[400px]">
            {/* Outline Glow if Recruiting */}
            {isRecruiting && (
                <div className="absolute inset-0 rounded-[32px] ring-1 ring-[#d4ff00]/20 shadow-[0_0_20px_rgba(212,255,0,0.1)] group-hover:shadow-[0_0_40px_rgba(212,255,0,0.25)] transition-all duration-700 pointer-events-none z-30" />
            )}

            {/* Inner Glow (Edge Light) */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/5 group-hover:ring-white/20 transition-all duration-700 z-30 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] z-30 pointer-events-none" />

            {/* Layer 1 & 2: Base Gradient and Angled Accent Stripe */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,40,45,1)_0%,rgba(15,15,18,1)_100%)] z-0" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.03)_20px,rgba(255,255,255,0.03)_40px)] z-0 mix-blend-overlay" />

            {/* Giant Watermark Typography - Represents Location */}
            <div className="absolute -bottom-10 right-0 md:-right-10 text-[10rem] md:text-[14rem] font-black italic text-white/[0.04] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-overlay z-0 select-none leading-none">
                {initials}
            </div>

            <div className="relative z-20 flex flex-col h-full">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex flex-col">
                        <span className="text-zinc-500 text-[10px] md:text-xs font-black tracking-widest uppercase italic mb-1">
                            {circle.location}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase leading-[1.1] text-white group-hover:text-[#d4ff00] transition-colors drop-shadow-lg">
                            {circle.name}
                        </h3>
                    </div>

                    {isRecruiting && (
                        <span className="px-3 py-1.5 bg-[#d4ff00] text-black text-[10px] md:text-xs font-black tracking-[0.2em] uppercase rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.4)] animate-pulse shrink-0">
                            RECRUITING
                        </span>
                    )}
                </div>

                {/* Level Tag */}
                <div className="mb-6">
                    <span className={`px-4 py-1.5 border box-border rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase ${levelStyle}`}>
                        {circle.level} Level
                    </span>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-medium flex-grow">
                    {circle.description}
                </p>

                {/* Footer Info / Schedule */}
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-zinc-600 text-[10px] font-black tracking-[0.2em] uppercase mb-1 drop-shadow-sm">Schedule</span>
                        <span className="text-white text-xs md:text-sm font-bold tracking-wide">{circle.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#d4ff00] group-hover:translate-x-2 transition-transform cursor-pointer">
                        <span className="text-[10px] md:text-xs font-black tracking-widest uppercase hidden md:inline-block">Contact Info</span>
                        <span className="text-xl leading-none">&rarr;</span>
                    </div>
                </div>
            </div>

            {/* Accent Line Bottom */}
            <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-700 ease-out z-20
                ${isRecruiting ? "bg-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.5)] group-hover:w-full" : "bg-white group-hover:w-1/3"}`} />
        </div>
    );
};

export default CircleCard;
