import React from "react";
import Link from "next/link";

const LiveTicker: React.FC = () => {
    return (
        <div className="fixed top-20 inset-x-0 z-40 bg-gradient-to-r from-red-900 via-black to-red-900 border-b border-red-500/30 overflow-hidden shadow-[0_5px_20px_rgba(220,38,38,0.3)] h-10 flex items-center">
            <div className="w-full relative flex items-center h-full">
                {/* Visual Indicator (Pulsing Red Dot) overlayed on the left edge */}
                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-black via-black to-transparent w-24 z-10 flex items-center px-4 md:px-6">
                    <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]"></span>
                    </span>
                    <span className="text-white font-black italic tracking-widest text-[10px] uppercase shadow-black drop-shadow-md">LIVE</span>
                </div>

                {/* Marquee Content */}
                <div className="whitespace-nowrap animate-marquee flex items-center">
                    <span className="text-white text-xs font-bold tracking-wider mx-8 flex items-center gap-3">
                        YONEX All England Open 2026 (March 3-8) 開幕！
                        <span className="text-amber-400 text-lg">🏆</span>
                        <span className="text-orange-400 font-black">【全英OP特集 Vol.1】</span>
                        100年を超える歴史と伝統。バドミントン界の「聖地」を知る -
                        <Link href="/columns/all-england-2026-vol1" className="text-white underline decoration-orange-500 underline-offset-4 font-black hover:text-orange-400 transition-colors">
                            今すぐチェック！
                        </Link>
                    </span>
                    <span className="text-zinc-600 font-black mx-12">///</span>
                    {/* Duplicate for seamless infinite scrolling */}
                    <span className="text-white text-xs font-bold tracking-wider mx-8 flex items-center gap-3">
                        YONEX All England Open 2026 (March 3-8) 開幕！
                        <span className="text-amber-400 text-lg">🏆</span>
                        <span className="text-orange-400 font-black">【全英OP特集 Vol.1】</span>
                        100年を超える歴史と伝統。バドミントン界の「聖地」を知る -
                        <Link href="/columns/all-england-2026-vol1" className="text-white underline decoration-orange-500 underline-offset-4 font-black hover:text-orange-400 transition-colors">
                            今すぐチェック！
                        </Link>
                    </span>
                    <span className="text-zinc-600 font-black mx-12">///</span>
                    <span className="text-white text-xs font-bold tracking-wider mx-8 flex items-center gap-3">
                        YONEX All England Open 2026 (March 3-8) 開幕！
                        <span className="text-amber-400 text-lg">🏆</span>
                        <span className="text-orange-400 font-black">【全英OP特集 Vol.1】</span>
                        100年を超える歴史と伝統。バドミントン界の「聖地」を知る -
                        <Link href="/columns/all-england-2026-vol1" className="text-white underline decoration-orange-500 underline-offset-4 font-black hover:text-orange-400 transition-colors">
                            今すぐチェック！
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LiveTicker;
