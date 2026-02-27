import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@/app/master-data";
import PlayerSilhouette from "./PlayerSilhouette";

interface PlayerCardProps {
    player: Player;
    href?: string;
    isSelected?: boolean;
    showCompareButton?: boolean;
    onCompareToggle?: (player: Player) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
    player,
    href = `/players/${player.id}`,
    isSelected = false,
    showCompareButton = false,
    onCompareToggle,
}) => {
    const isFallback = !player.image || player.image.includes("placeholder");

    const CardContent = (
        <div className={`group relative aspect-[3/4] overflow-hidden rounded-[32px] bg-zinc-900 shadow-2xl transition-all duration-700 ${isSelected ? "border-2 border-[#d4ff00]" : "border border-white/5 hover:border-[#d4ff00]/50"}`}>

            {/* Background/Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

            {!isFallback ? (
                <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 overflow-hidden">
                    {/* Fallback Graphic */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#d4ff00_0%,transparent_70%)] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center scale-150 group-hover:scale-[1.6] transition-transform duration-1000 group-hover:-translate-y-4">
                        <PlayerSilhouette />
                    </div>

                    {/* Huge watermark text for fallback */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[8rem] font-black italic text-white/[0.02] whitespace-nowrap pointer-events-none tracking-tighter">
                        {player.country.toUpperCase()}
                    </div>
                </div>
            )}

            {/* Content overlays (No margin, full spread) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                {/* Top Section: Category & Flag */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <span className="px-2 py-1 bg-[#d4ff00] text-black text-[9px] font-black tracking-widest uppercase rounded-sm inline-block self-start shadow-[0_0_15px_rgba(212,255,0,0.4)]">
                            {player.category.split(" / ").pop()}
                        </span>
                        {isFallback && (
                            <span className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[8px] font-black tracking-widest uppercase rounded-sm inline-block self-start mt-1 border border-white/10">
                                NO IMAGE DATA
                            </span>
                        )}
                    </div>
                    <div className="text-3xl filter drop-shadow-md group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 origin-top-right">
                        {player.flag}
                    </div>
                </div>

                {/* Bottom Section: Name, Rank, and optional buttons */}
                <div className="flex flex-col w-full">
                    {/* Nationality / Brand background text */}
                    <div className="text-[#d4ff00] text-[9px] font-black tracking-[0.2em] uppercase mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        {player.country} // {player.team}
                    </div>

                    <h3 className="text-3xl font-black italic tracking-tighter leading-[0.9] mb-2 group-hover:text-[#d4ff00] transition-colors uppercase drop-shadow-lg">
                        {player.name}
                    </h3>

                    <div className="flex items-end justify-between w-full mt-2">
                        <div className="flex flex-col">
                            <span className="text-zinc-400 text-[10px] font-black tracking-widest uppercase italic">World Rank</span>
                            <span className="text-white text-lg font-black italic leading-none">{player.rank.includes("World No.") ? player.rank.split("World No.")[1] || player.rank : player.rank}</span>
                        </div>

                        {showCompareButton && onCompareToggle && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onCompareToggle(player);
                                }}
                                className={`px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${isSelected
                                    ? "bg-[#d4ff00] text-black border-[#d4ff00] shadow-[0_0_15px_rgba(212,255,0,0.4)]"
                                    : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40"
                                    }`}
                            >
                                {isSelected ? "Selected" : "Compare"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d4ff00] transition-all duration-500 group-hover:w-full z-20" />
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block w-full">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
};

export default PlayerCard;
