"use client";

import { Player } from "@/app/master-data";

// Use precise keys from master-data to ensure type consistency
const STAT_KEYS = ["power", "speed", "technique", "stamina", "mentality", "defense"] as const;
type StatKey = typeof STAT_KEYS[number];

interface RadarChartProps {
    stats: Player["stats"];
    compareStats?: Player["stats"];
    size?: number;
    color?: string;
    compareColor?: string;
}

const RadarChart = ({
    stats,
    compareStats,
    size = 300,
    color = "#d4ff00",
    compareColor = "#ffffff"
}: RadarChartProps) => {
    const totalKeys = STAT_KEYS.length;
    const center = size / 2;
    const radius = (size / 2) * 0.8;

    // Calculate coordinates for each point
    const getCoordinates = (index: number, value: number) => {
        const angle = (Math.PI * 2 * index) / totalKeys - Math.PI / 2;
        const x = center + radius * (value / 100) * Math.cos(angle);
        const y = center + radius * (value / 100) * Math.sin(angle);
        return { x, y };
    };

    // Helper to generate points for a stat set
    const generatePoints = (targetStats: Player["stats"]) => {
        return STAT_KEYS
            .map((key, i) => {
                const value = targetStats[key] ?? 0;
                const { x, y } = getCoordinates(i, value);
                return `${x},${y}`;
            })
            .join(" ");
    };

    const outerPoints = STAT_KEYS.map((_, i) => {
        const { x, y } = getCoordinates(i, 100);
        return `${x},${y}`;
    }).join(" ");

    const dataPoints = generatePoints(stats);
    const compareDataPoints = compareStats ? generatePoints(compareStats) : null;

    const gridLevels = [80, 60, 40, 20].map((level) => {
        return STAT_KEYS.map((_, i) => getCoordinates(i, level)).map(p => `${p.x},${p.y}`).join(" ");
    });

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="overflow-visible" viewBox={`0 0 ${size} ${size}`}>
                {/* Background Grid */}
                <polygon points={outerPoints} className="fill-zinc-900/40 stroke-zinc-800" strokeWidth="1" />
                {gridLevels.map((points, i) => (
                    <polygon key={`grid-${i}`} points={points} className="fill-none stroke-zinc-800/30" strokeWidth="1" />
                ))}

                {/* Axis Spoke Lines */}
                {STAT_KEYS.map((_, i) => {
                    const { x, y } = getCoordinates(i, 100);
                    return (
                        <line key={`axis-${i}`} x1={center} y1={center} x2={x} y2={y} className="stroke-zinc-800/40" strokeWidth="1" />
                    );
                })}

                {/* Comparison Data Area (Behind Primary) */}
                {compareDataPoints && (
                    <polygon
                        points={compareDataPoints}
                        className="transition-all duration-700 ease-out"
                        fill={compareColor}
                        fillOpacity="0.1"
                        stroke={compareColor}
                        strokeWidth="2"
                        strokeDasharray="4 2"
                    />
                )}

                {/* Primary Data Area */}
                <polygon
                    points={dataPoints}
                    className="transition-all duration-500 ease-out"
                    fill={color}
                    fillOpacity="0.2"
                    stroke={color}
                    strokeWidth="3"
                />

                {/* Axis Labels */}
                {STAT_KEYS.map((key, i) => {
                    const { x, y } = getCoordinates(i, 115);
                    return (
                        <text
                            key={`label-${key}`}
                            x={x} y={y}
                            className="fill-zinc-500 font-black text-[10px] uppercase tracking-tighter"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {key}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

export default RadarChart;
