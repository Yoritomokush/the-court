"use client";

import React from "react";

interface JerseyFallbackProps {
    name: string;
    nationality: string;
    className?: string;
}

const JerseyFallback: React.FC<JerseyFallbackProps> = ({ name, nationality, className = "" }) => {
    // Extract last name for the jersey
    const lastName = name.split(" ").pop()?.toUpperCase() || name.toUpperCase();

    // Mapping for nationality-based colors
    const colorMap: Record<string, { primary: string; secondary: string; accent: string }> = {
        "Japan": { primary: "#111", secondary: "#000", accent: "#d4ff00" },
        "China": { primary: "#c8102e", secondary: "#a00d25", accent: "#ffcd00" },
        "Korea": { primary: "#0047a0", secondary: "#003375", accent: "#cd2e3a" },
        "Denmark": { primary: "#c8102e", secondary: "#a00d25", accent: "#ffffff" },
        "Indonesia": { primary: "#ff0000", secondary: "#cc0000", accent: "#ffffff" },
        "Thailand": { primary: "#2d2a4a", secondary: "#1a182b", accent: "#ffffff" },
        "Taiwan": { primary: "#0000ff", secondary: "#0000cc", accent: "#ffffff" },
    };

    const colors = colorMap[nationality] || colorMap["Japan"];

    // Simple hash for "numbers" based on name
    const jerseyNumber = (name.length * 7) % 99 + 1;

    return (
        <div className={`relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Graphic Patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#d4ff00_0%,transparent_70%)] opacity-10" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            {/* Jersey SVG Shape */}
            <svg
                viewBox="0 0 200 240"
                className="w-3/4 h-3/4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Jersey Main Body */}
                <path
                    d="M40 40 L60 20 L140 20 L160 40 L180 50 L180 90 L160 80 L160 220 L40 220 L40 80 L20 90 L20 50 Z"
                    fill="url(#jerseyGradient)"
                />

                {/* Neckline */}
                <path d="M80 20 C80 35 120 35 120 20" stroke={colors.accent} strokeWidth="4" />

                {/* Sleeves details */}
                <path d="M40 50 L20 60" stroke={colors.accent} strokeWidth="2" style={{ opacity: 0.3 }} />
                <path d="M160 50 L180 60" stroke={colors.accent} strokeWidth="2" style={{ opacity: 0.3 }} />

                {/* Gradients */}
                <defs>
                    <linearGradient id="jerseyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                </defs>

                {/* Text Details */}
                <text
                    x="100"
                    y="70"
                    textAnchor="middle"
                    fill={colors.accent}
                    className="font-black italic uppercase"
                    style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.6 }}
                >
                    {nationality}
                </text>

                <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    fill={colors.accent}
                    className="font-black italic uppercase"
                    style={{ fontSize: '16px', letterSpacing: '1px' }}
                >
                    {lastName}
                </text>

                <text
                    x="100"
                    y="180"
                    textAnchor="middle"
                    fill="white"
                    className="font-black italic"
                    style={{ fontSize: '60px', opacity: 0.9 }}
                >
                    {jerseyNumber}
                </text>
            </svg>

            {/* Bottom Label inspired by premium sports branding */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="h-px w-12 bg-zinc-800 mb-2" />
                <span className="text-[8px] font-black tracking-[0.4em] text-zinc-600 uppercase">Pro Authentic</span>
            </div>
        </div>
    );
};

export default JerseyFallback;
