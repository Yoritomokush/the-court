"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { players, Player, columns } from "@/app/master-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatisticsRanking from "@/components/StatisticsRanking";
import LatestNews from "@/components/LatestNews";
import RankinsSection from "@/components/RankingsSection";
import PlayerComparison from "@/components/PlayerComparison";
import PlayerCard from "@/components/PlayerCard";
import Scoreboard from "@/components/Scoreboard";
import TournamentDraw from "@/components/TournamentDraw";
import BestMatchPoll from "@/components/BestMatchPoll";

const CATEGORIES = ["すべて", "男子シングルス", "女子シングルス", "男子ダブルス", "女子ダブルス", "混合ダブルス"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Home() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const togglePlayerSelection = (player: Player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    } else if (selectedPlayers.length < 2) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  // Featured Players: one for each of the 5 major categories
  const featuredPlayers = useMemo(() => {
    const majorCategories = ["男子シングルス", "女子シングルス", "男子ダブルス", "女子ダブルス", "混合ダブルス"];
    return majorCategories.map(cat =>
      players.find(p => p.category.includes(cat))
    ).filter(Boolean) as Player[];
  }, []);

  const latestColumn = columns[0];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mb-20">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-600/10 to-amber-400/10 border border-orange-500/20 text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 rounded-full">
            Japan's Premium Badminton Hub
          </span>
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-8 leading-[0.85] uppercase">
            WHERE EVERY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-400">COURT MATTERS.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            バドミントンのすべてが集まる場所。
            <br />世界と日本の「今」を、圧倒的なビジュアルとデータで体験する。
          </p>
        </div>

        {/* Feature Navigation Grid */}
        <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "PLAYERS", desc: "世界を戦う選手たちの詳細データ", link: "/players", icon: "👤", color: "bg-zinc-900" },
            { title: "COLUMN", desc: "専門家による技術・戦術解説", link: "/columns", icon: "✍️", color: "bg-zinc-900" },
            { title: "CIRCLES", desc: "地域の仲間と繋がる、サークル検索", link: "/circles", icon: "🏸", color: "bg-zinc-900" },
            { title: "GUIDE", desc: "バドミントンを始める初心者の方へ", link: "/guide", icon: "✨", color: "bg-gradient-to-r from-orange-600 to-amber-500 border-none", text: "text-white" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`${item.color} ${item.text || "text-white"} p-8 rounded-[32px] border border-white/5 hover:border-orange-500/50 transition-all group relative overflow-hidden flex flex-col justify-between h-64 shadow-2xl`}
            >
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-[0.03] italic font-black grayscale">{item.title}</div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                <p className={`${item.text ? "opacity-90" : "text-zinc-500"} text-xs font-bold leading-relaxed`}>{item.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                Explore Now <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-40">

        {/* 0. LIVE SCOREBOARD & DRAW */}
        <section className="w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-16 pb-8">
          <Scoreboard />

          <div className="flex justify-center -mt-8 mb-8 relative z-20">
            <Link href="/archive" className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-full hover:border-orange-500/50 hover:bg-white/5 transition-all group shadow-xl">
              <span className="text-zinc-400 group-hover:text-white transition-colors text-xs font-black tracking-widest uppercase">全試合結果記録を見る</span>
              <span className="text-orange-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <TournamentDraw />
          <BestMatchPoll />
        </section>

        {/* 1. LATEST NEWS */}
        <LatestNews />

        {/* 1.5 RANKINGS */}
        <RankinsSection />

        {/* 2. FEATURED PLAYERS */}
        <section id="players">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-orange-500 text-xs font-black tracking-widest uppercase mb-2 block">Premium Selection</span>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
                注目の選手たち <span className="text-lg md:text-2xl tracking-widest text-zinc-500 block mt-1 uppercase">FEATURED PLAYERS</span>
              </h2>
            </div>
            <Link href="/players" className="group flex items-center gap-3 text-zinc-500 hover:text-orange-500 transition-colors">
              <span className="text-xs font-black tracking-widest uppercase italic">Show All Players</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                isSelected={!!selectedPlayers.find(p => p.id === player.id)}
                showCompareButton={true}
                onCompareToggle={togglePlayerSelection}
              />
            ))}
          </div>
        </section>

        {/* 3. RECENT COLUMN */}
        {latestColumn && (
          <section id="column">
            <div className="flex flex-col mb-12">
              <span className="text-orange-500 text-xs font-black tracking-[0.3em] uppercase mb-2 block">Deep Analysis</span>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
                最新分析コラム <span className="text-lg md:text-2xl tracking-widest text-zinc-500 block mt-1 uppercase">RECENT COLUMN</span>
              </h2>
            </div>

            <Link
              href={`/columns/${latestColumn.id}`}
              className={`group relative block aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-300 ${latestColumn.category === "全英OP特集" ? "border-[3px] border-yellow-600 hover:border-yellow-400" : "border border-white/5"
                }`}
            >
              {latestColumn.category === "全英OP特集" ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-green-800 z-0 flex items-center justify-center overflow-hidden">
                    <span className="text-[12vw] font-black italic opacity-5 text-white whitespace-nowrap select-none tracking-tighter mix-blend-overlay">ALL ENGLAND</span>
                  </div>
                  <div className="absolute top-8 right-8 z-30">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black border-none text-xs font-black rounded uppercase italic shadow-lg">
                      SPECIAL FEATURE
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-0">
                  <span className="text-zinc-800 font-black italic text-[12vw] opacity-10 uppercase tracking-tighter leading-none">ANALYSIS</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />

              <div className="absolute inset-0 flex items-center p-12 md:p-20 z-20">
                <div className="max-w-2xl space-y-6">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-white border-none text-[10px] font-black rounded uppercase italic ${latestColumn.category === "全英OP特集" ? "bg-gradient-to-r from-emerald-600 to-green-500" : "bg-gradient-to-r from-orange-600 to-amber-500"
                      }`}>
                      {latestColumn.category}
                    </span>
                    <span className={`text-xs font-black tracking-widest ${latestColumn.category === "全英OP特集" ? "text-green-300" : "text-zinc-500"
                      }`}>{latestColumn.date}</span>
                  </div>
                  <h3 className={`text-4xl md:text-6xl font-black italic tracking-tighter leading-none transition-colors uppercase ${latestColumn.category === "全英OP特集" ? "group-hover:text-yellow-500" : "group-hover:text-orange-500"
                    }`}>
                    {latestColumn.title}
                  </h3>
                  <p className={`text-lg font-medium line-clamp-2 md:line-clamp-3 ${latestColumn.category === "全英OP特集" ? "text-green-100/80" : "text-zinc-400"
                    }`}>
                    {latestColumn.excerpt}
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                    <span className={`text-xs font-black tracking-widest uppercase italic group-hover:translate-x-2 transition-transform flex items-center gap-3 ${latestColumn.category === "全英OP特集" ? "text-white" : ""
                      }`}>
                      Read Full Analysis <span className={`text-xl ${latestColumn.category === "全英OP特集" ? "text-yellow-500" : "text-orange-500"
                        }`}>&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* 4. COMMUNITY BANNERS (Stylish Belt Banner) */}
        <section id="circles" className="relative group overflow-hidden rounded-[40px] border border-white/5">
          <Link
            href="/circles"
            className="relative block w-full py-16 md:py-24 bg-zinc-900 overflow-hidden no-underline"
          >
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626225967045-9410ebbbbea4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale scale-110 group-hover:scale-100 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <span className="text-orange-500 text-xs font-black tracking-[0.4em] uppercase block">Join the Game</span>
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none">
                  コミュニティを探す<br />
                  <span className="text-lg md:text-2xl tracking-widest text-orange-500 block mt-3 uppercase group-hover:text-amber-400 transition-colors duration-500">FIND YOUR COMMUNITY.</span>
                </h2>
                <p className="text-zinc-400 text-lg font-medium tracking-tight">
                  あなたの街のバドミントンコミュニティを探す。
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6">
                <div className="flex -space-x-3 mb-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-black text-zinc-500 italic">User</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <span className="hidden lg:block text-zinc-500 text-xs font-black uppercase tracking-widest text-right">
                    100+ Clubs<br />Nationwide
                  </span>
                  <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                    &rarr;
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Sub-text Decoration */}
            <div className="absolute bottom-4 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
              <span className="text-9xl font-black italic uppercase tracking-tighter inline-block animate-marquee leading-none">
                NETWORKING COMMUNITY CIRCLE BADMINTON CLUB PLAY TOGETHER &nbsp;
              </span>
            </div>
          </Link>
        </section>

        {/* 5. GEAR STATISTICS & STORE */}
        <section id="gear" className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <StatisticsRanking />
            </div>

            <div className="relative bg-zinc-900/50 rounded-[40px] p-8 md:p-12 overflow-hidden group border border-white/5 backdrop-blur-sm h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -mr-[150px] -mt-[150px] opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-8">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest border-none">
                  Performance Gear
                </span>
                <h2 className="text-5xl font-black italic tracking-tighter leading-[0.9]">
                  至高のギア<br />
                  <span className="text-lg md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-400 block mt-3 uppercase">MASTER YOUR CRAFT.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-md">
                  プロが選ぶ、勝利のための最先端ギア。
                  統計データに基づいた最適な一本を提案。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black italic px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(234,88,12,0.3)] text-xs uppercase tracking-widest">
                    Browse Store &rarr;
                  </button>
                  <button className="bg-white/5 text-white border border-white/10 font-bold italic px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-xs uppercase tracking-widest">
                    Compare Gear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Comparison Overlay Trigger */}
      {selectedPlayers.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="flex -space-x-4">
            {selectedPlayers.map(p => (
              <div key={p.id} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden relative">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center font-black text-xs text-zinc-500">
                    {p.name.charAt(0)}
                  </div>
                )}
              </div>
            ))}
            {selectedPlayers.length === 1 && (
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-white/20 text-xs font-black italic">
                VS
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">
              {selectedPlayers.length === 1 ? "Select another player" : "Ready to Compare"}
            </span>
            {selectedPlayers.length === 2 ? (
              <button
                onClick={() => { }} // Actual Modal handled below
                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(234,88,12,0.3)] border-none"
              >
                Compare Now
              </button>
            ) : null}
            <button
              onClick={() => setSelectedPlayers([])}
              className="text-white/40 hover:text-white transition-colors text-xs font-black"
            >
              CLEAR
            </button>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {selectedPlayers.length === 2 && (
        <PlayerComparison
          player1={selectedPlayers[0]}
          player2={selectedPlayers[1]}
          onClose={() => setSelectedPlayers([])}
        />
      )}
    </div>
  );
}
