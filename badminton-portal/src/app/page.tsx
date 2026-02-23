"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/app/master-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = ["ALL", "国内代表", "実業団", "NEXT GEN"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredPlayers = activeCategory === "ALL"
    ? players
    : players.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4ff00]/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mb-20">
          <span className="inline-block px-4 py-1 bg-[#d4ff00]/10 border border-[#d4ff00]/20 text-[#d4ff00] text-[10px] font-black tracking-[0.3em] uppercase mb-8 rounded-full">
            Japan's Premium Badminton Hub
          </span>
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-8 leading-[0.85] uppercase">
            WHERE EVERY<br />
            <span className="text-[#d4ff00]">COURT MATTERS.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            バドミントンのすべてが集まる場所。
            <br />世界と日本の「今」を、圧倒的なビジュアルとデータで体験する。
          </p>
        </div>

        {/* Feature Navigation Grid */}
        <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "PLAYERS", desc: "世界を戦う選手たちの詳細データ", link: "#players", icon: "👤", color: "bg-zinc-900" },
            { title: "COLUMN", desc: "専門家による技術・戦術解説", link: "/column", icon: "✍️", color: "bg-zinc-900" },
            { title: "CIRCLES", desc: "地域の仲間と繋がる、サークル検索", link: "/circles", icon: "🏸", color: "bg-zinc-900" },
            { title: "GUIDE", desc: "バドミントンを始める初心者の方へ", link: "/guide", icon: "✨", color: "bg-[#d4ff00]", text: "text-black" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`${item.color} ${item.text || "text-white"} p-8 rounded-[32px] border border-white/5 hover:border-[#d4ff00]/50 transition-all group relative overflow-hidden flex flex-col justify-between h-64 shadow-2xl`}
            >
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-[0.03] italic font-black grayscale">{item.title}</div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                <p className={`${item.text ? "opacity-80" : "text-zinc-500"} text-xs font-bold leading-relaxed`}>{item.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                Explore Now <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-40">
        {/* Player Directory Section */}
        <section id="players">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-[#d4ff00] text-xs font-black tracking-widest uppercase mb-2 block">Premium Directory</span>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">PLAYER DIRECTORY</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-zinc-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-xs font-black tracking-tighter transition-all ${activeCategory === cat
                    ? "bg-[#d4ff00] text-black"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Large Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPlayers.map((player) => (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-[40px] bg-zinc-900 border border-white/5 hover:border-[#d4ff00]/50 transition-all duration-700 shadow-2xl"
              >
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80 z-10" />

                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />

                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#d4ff00] text-black text-[9px] font-black tracking-widest uppercase rounded-full">
                      {player.category}
                    </span>
                    <span className="text-white/40 text-[9px] font-black tracking-widest uppercase">
                      {player.country}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none mb-3 group-hover:text-[#d4ff00] transition-colors">
                    {player.name}
                  </h3>

                  <p className="text-zinc-400 text-sm font-bold italic tracking-tight mb-6">
                    {player.rank}
                  </p>

                  <div className="flex items-center gap-3 text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">Enter Profile</span>
                    <div className="w-8 h-[1px] bg-[#d4ff00]" />
                    <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Gear Highlight Section */}
        <section id="gear" className="relative bg-zinc-900/50 rounded-[40px] p-8 md:p-20 overflow-hidden group border border-white/5 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4ff00]/10 rounded-full blur-[120px] -mr-[200px] -mt-[200px] opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-[#d4ff00] text-black text-[10px] font-black rounded-full uppercase tracking-widest">
                Editors Choice 2026
              </span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9]">
                CRAFTED FOR<br />
                <span className="text-[#d4ff00]">ABSOLUTE</span> POWER.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-xl">
                最新カーボン「NANO-CORE X」を採用。
                スイングスピードを15%向上させ、かつてない反発力と
                ミリ単位のコントロールを両立。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#d4ff00] text-black font-black italic px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(212,255,0,0.3)] text-sm uppercase tracking-widest">
                  Get the Gear &rarr;
                </button>
                <button className="bg-white/5 text-white border border-white/10 font-bold italic px-10 py-5 rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                  Learn Technology
                </button>
              </div>
            </div>
            <div className="aspect-square bg-black/40 rounded-[32px] border border-white/5 flex items-center justify-center relative group/img overflow-hidden">
              <span className="text-zinc-800 font-black italic text-8xl md:text-9xl rotate-[-45deg] opacity-20 group-hover:scale-110 transition-transform duration-700">GEAR</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
