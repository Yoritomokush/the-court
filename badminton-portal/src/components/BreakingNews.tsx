"use client";

import React from "react";
import { isBreaking, BREAKING_NEWS_TEXT } from "@/app/master-data";
import { AlertTriangle } from "lucide-react";

export default function BreakingNews() {
    if (!isBreaking) return null;

    return (
        <div className="w-full bg-red-600 text-white overflow-hidden flex items-center h-12 relative z-50">
            <div className="absolute left-0 top-0 bottom-0 bg-red-700 px-4 flex items-center gap-2 z-10 shadow-[10px_0_20px_rgba(220,38,38,1)]">
                <AlertTriangle className="w-4 h-4 text-white animate-pulse" />
                <span className="font-black italic tracking-widest text-sm whitespace-nowrap">号外 / BREAKING NEWS</span>
            </div>

            {/* 
        This wrapper is long enough to cover two loops of the text,
        which creates a seamless infinite marquee effect without jump cuts.
      */}
            <div className="flex w-[200%] animate-marquee pl-48 md:pl-56">
                <div className="flex-1 flex gap-16 md:gap-32 items-center text-sm md:text-base font-bold tracking-widest whitespace-nowrap">
                    <span>{BREAKING_NEWS_TEXT}</span>
                    <span>{BREAKING_NEWS_TEXT}</span>
                    <span>{BREAKING_NEWS_TEXT}</span>
                    <span>{BREAKING_NEWS_TEXT}</span>
                </div>
            </div>
        </div>
    );
}
