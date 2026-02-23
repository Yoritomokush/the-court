"use client";

import { useState } from "react";
import Link from "next/link";
import { circles, Circle } from "@/app/players/[id]/data/circles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CirclesPage() {
    const [prefecture, setPrefecture] = useState("All");
    const [level, setLevel] = useState("All");

    const filteredCircles = circles.filter(circle => {
        return (prefecture === "All" || circle.prefecture === prefecture) &&
            (level === "All" || circle.level === level);
    });

    return (
        <div className="min-h-screen bg-badminton-green text-white font-sans selection:bg-badminton-yellow selection:text-badminton-green pb-20">
            <Header />

            <main className="max-w-7xl mx-auto px-6 pt-32 space-y-16">
                <header className="space-y-4">
                    <span className="text-badminton-yellow text-xs font-black tracking-[0.3em] uppercase">Community Directory</span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                        FIND YOUR<br />
                        <span className="text-badminton-yellow">CIRCLE</span>
                    </h1>
                    <p className="max-w-2xl text-zinc-400 text-lg font-medium leading-relaxed">
                        一緒にバドミントンを楽しむ仲間を見つけよう。地域を絞って、自分のレベルに合ったサークルを検索できます。
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Search Panel */}
                    <aside className="lg:w-72 shrink-0 space-y-8">
                        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl space-y-8">
                            <div>
                                <h3 className="text-xs font-black text-badminton-yellow uppercase tracking-widest mb-6">Region</h3>
                                <div className="space-y-3">
                                    {["All", "東京都", "大阪府", "神奈川県", "愛知県", "福岡県"].map((p) => (
                                        <label key={p} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="prefecture"
                                                className="hidden peer"
                                                checked={prefecture === p}
                                                onChange={() => setPrefecture(p)}
                                            />
                                            <div className="w-4 h-4 rounded-full border border-white/20 peer-checked:border-badminton-yellow peer-checked:bg-badminton-yellow transition-all" />
                                            <span className="text-sm font-bold text-zinc-500 peer-checked:text-white group-hover:text-white transition-colors">{p === "All" ? "全国すべて" : p}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="text-xs font-black text-badminton-yellow uppercase tracking-widest mb-6">Expertise Level</h3>
                                <div className="space-y-3">
                                    {["All", "Beginner", "Intermediate", "Advanced", "All Levels"].map((l) => (
                                        <label key={l} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="level"
                                                className="hidden peer"
                                                checked={level === l}
                                                onChange={() => setLevel(l)}
                                            />
                                            <div className="w-4 h-4 rounded-full border border-white/20 peer-checked:border-badminton-yellow peer-checked:bg-badminton-yellow transition-all" />
                                            <span className="text-sm font-bold text-zinc-500 peer-checked:text-white group-hover:text-white transition-colors">
                                                {l === "All" ? "すべてのレベル" : l}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <span className="text-xs font-black italic tracking-widest text-zinc-500">
                                {filteredCircles.length} CIRCLES FOUND
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredCircles.map((circle) => (
                                <div key={circle.id} className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden group hover:border-badminton-yellow/50 transition-all duration-300">
                                    <div className="p-8 space-y-6">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className="px-2 py-0.5 bg-badminton-yellow text-badminton-green text-[9px] font-black rounded-sm uppercase italic mb-2 inline-block">
                                                    {circle.level}
                                                </span>
                                                <h2 className="text-2xl font-black italic tracking-tight group-hover:text-badminton-yellow transition-colors leading-none">
                                                    {circle.name}
                                                </h2>
                                                <p className="text-zinc-500 text-[10px] font-black mt-2 uppercase tracking-widest">
                                                    {circle.prefecture} / {circle.city}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                                            {circle.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                            <div>
                                                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Schedule</p>
                                                <p className="text-[11px] font-bold text-white truncate">{circle.schedule}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Fee</p>
                                                <p className="text-[11px] font-bold text-white uppercase">{circle.fee}</p>
                                            </div>
                                        </div>

                                        <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-black italic text-xs tracking-tighter uppercase group-hover:bg-badminton-yellow group-hover:text-badminton-green group-hover:border-badminton-yellow transition-all">
                                            参加希望・詳細を問い合わせ &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {filteredCircles.length === 0 && (
                                <div className="col-span-full py-32 text-center bg-zinc-900/10 rounded-[40px] border border-dashed border-white/10">
                                    <p className="text-zinc-600 font-black italic text-2xl">該当するサークルが見つかりませんでした。</p>
                                    <p className="text-zinc-700 text-sm mt-2">フィルター条件を変えて再検索してください。</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
