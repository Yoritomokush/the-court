import React from "react";

const PlayerSilhouette: React.FC<{ className?: string }> = ({ className = "absolute inset-0 w-full h-full text-white/5" }) => (
    <svg
        viewBox="0 0 200 200"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Abstract dynamic silhouette of a badminton player */}
        <path d="M 120 40 A 15 15 0 1 0 120 10 A 15 15 0 1 0 120 40 Z" />
        <path d="M 115 45 C 100 50, 90 70, 95 90 C 100 110, 110 130, 80 160 L 95 165 C 120 135, 115 110, 110 95 C 130 105, 145 95, 160 80 L 150 70 C 135 85, 125 75, 115 45 Z" />
        <path d="M 95 90 C 70 80, 50 100, 40 115 L 50 125 C 60 110, 75 95, 95 90 Z" />
        {/* Racket */}
        <line x1="45" y1="120" x2="20" y2="150" stroke="currentColor" strokeWidth="4" />
        <circle cx="15" cy="155" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
);

export default PlayerSilhouette;
