"use client";

import { Player } from "@/app/master-data";

// Use precise keys from master-data to ensure type consistency
const STAT_KEYS = ["power", "speed", "technique", "stamina", "mentality", "defense"] as const;
type StatKey = typeof STAT_KEYS[number];

interface RadarChartProps {
    stats: Player["stats"];
    size?: number;
}

const RadarChart = ({ stats, size = 300 }: RadarChartProps) => {
    const totalKeys = STAT_KEYS.length;
    const center = size / 2;
    const radius = (size / 2) * 0.8;

    // Calculate coordinates for each point
    const getCoordinates = (index: number, value: number) => {
        // Offset by -90 degrees to start from top
        const angle = (Math.PI * 2 * index) / totalKeys - Math.PI / 2;
        const x = center + radius * (value / 100) * Math.cos(angle);
        const y = center + radius * (value / 100) * Math.sin(angle);
        return { x, y };
    };

    // Outer polygon (100% border)
    const outerPoints = STAT_KEYS
        .map((_, i) => {
            const { x, y } = getCoordinates(i, 100);
            return `${x},${y}`;
        })
        .join(" ");

    // Data polygon (calculated from stats)
    const dataPoints = STAT_KEYS
        .map((key, i) => {
            const value = stats[key] ?? 0;
            const { x, y } = getCoordinates(i, value);
            return `${x},${y}`;
        })
        .join(" ");

    // Grid levels (visual segments)
    const gridLevels = [80, 60, 40, 20].map((level) => {
        return STAT_KEYS
            .map((_, i) => {
                const { x, y } = getCoordinates(i, level);
                return `${x},${y}`;
            })
            .join(" ");
    });

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="overflow-visible" viewBox={`0 0 ${size} ${size}`}>
                {/* Background Grid */}
                <polygon
                    points={outerPoints}
                    className="fill-zinc-900/40 stroke-zinc-800"
                    strokeWidth="1"
                />
                {gridLevels.map((points, i) => (
                    <polygon
                        key={`grid-${i}`}
                        points={points}
                        className="fill-none stroke-zinc-800/30"
                        strokeWidth="1"
                    />
                ))}

                {/* Axis Spoke Lines */}
                {STAT_KEYS.map((_, i) => {
                    const { x, y } = getCoordinates(i, 100);
                    return (
                        <line
                            key={`axis-${i}`}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            className="stroke-zinc-800/40"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data Area Geometry */}
                <polygon
                    points={dataPoints}
                    className="fill-[#d4ff00]/20 stroke-[#d4ff00] transition-all duration-500 ease-out"
                    strokeWidth="2"
                />

                {/* Data Points (Vertices) */}
                {STAT_KEYS.map((key, i) => {
                    const value = stats[key] ?? 0;
                    const { x, y } = getCoordinates(i, value);
                    return (
                        <circle
                            key={`point-${key}`}
                            cx={x}
                            cy={y}
                            r="4"
                            className="fill-white stroke-[#d4ff00]"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Axis Labels */}
                {STAT_KEYS.map((key, i) => {
                    const { x, y } = getCoordinates(i, 115);
                    return (
                        <text
                            key={`label-${key}`}
                            x={x}
                            y={y}
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
