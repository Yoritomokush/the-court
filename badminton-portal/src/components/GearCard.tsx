import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gear, getAmazonLink, players } from "@/app/master-data";

interface GearCardProps {
    gear: Gear;
}

const GearCard: React.FC<GearCardProps> = ({ gear }) => {
    // Generate an initials watermark similar to Premium v2 logic in PlayerCard
    const initials = gear.brand.charAt(0).toUpperCase() + gear.category.charAt(0).toUpperCase();

    return (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-[32px] bg-zinc-950 transition-all duration-700 border border-white/10 shadow-2xl hover:border-white/30 flex flex-col justify-end">
            {/* Inner Glow (Edge Light) */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-700 z-30 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] z-30 pointer-events-none" />

            {/* Layer 1 & 2: Base Gradient and Angled Accent Stripe */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 z-0" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)] z-0 mix-blend-overlay" />

            {/* Giant Watermark Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[8rem] font-black italic text-white/[0.04] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-overlay z-0">
                {initials}
            </div>

            {/* Background/Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

            {gear.image ? (
                <div className="absolute inset-0 flex items-center justify-center pt-8 pb-32">
                    <div className="relative w-4/5 h-4/5 group-hover:scale-110 transition-transform duration-1000 ease-out z-10 drop-shadow-2xl">
                        <Image
                            src={gear.image}
                            alt={gear.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            ) : null}

            {/* Content overlays */}
            <div className="relative z-20 flex flex-col justify-between p-6 h-full">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-[#d4ff00] text-black text-[10px] font-black tracking-[0.2em] uppercase rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.4)]">
                        {gear.category}
                    </span>
                    <span className="text-white text-[10px] font-black tracking-widest uppercase">
                        {gear.brand}
                    </span>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col w-full mt-auto">
                    <h3 className="text-2xl font-black italic tracking-tighter leading-[1.1] mb-2 text-white group-hover:text-[#d4ff00] transition-colors uppercase drop-shadow-lg">
                        {gear.name}
                    </h3>

                    <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
                        {gear.description}
                    </p>

                    {/* Used By Section */}
                    {gear.usedBy.length > 0 && (
                        <div className="mb-4">
                            <p className="text-[#d4ff00] text-[9px] font-black tracking-[0.2em] uppercase mb-2 opacity-80">
                                Used By
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {gear.usedBy.map(playerId => {
                                    const player = players.find(p => p.id === playerId);
                                    if (!player) return null;
                                    return (
                                        <Link
                                            key={playerId}
                                            href={`/players/${playerId}`}
                                            className="flex items-center gap-2 px-2 py-1 bg-white/10 rounded-full border border-white/10 hover:border-[#d4ff00]/50 hover:bg-white/20 transition-all z-30"
                                        >
                                            <div className="relative w-4 h-4 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                                <Image src={player.image} alt={player.name} fill className="object-cover" />
                                            </div>
                                            <span className="text-[9px] font-black text-white hover:text-[#d4ff00] uppercase tracking-tight">
                                                {player.name.split(' ').pop()}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className="flex items-end justify-between w-full mt-2 mb-4">
                        <div className="flex flex-col">
                            <span className="text-zinc-400 text-[10px] font-black tracking-widest uppercase italic">Est. Price</span>
                            <span className="text-white text-lg font-black italic leading-none">{gear.price}</span>
                        </div>
                    </div>

                    {/* Amazon Affiliate Button */}
                    <Link
                        href={getAmazonLink(gear.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#d4ff00] text-black text-center text-[12px] font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors relative z-30 shadow-[0_0_20px_rgba(212,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
                    >
                        Check Price on Amazon
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d4ff00] transition-all duration-500 group-hover:w-full z-20" />
        </div>
    );
};

export default GearCard;
