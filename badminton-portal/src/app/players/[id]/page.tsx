"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/app/master-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RadarChart from "@/components/RadarChart";
import { notFound } from "next/navigation";

export default function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const player = players.find((p) => p.id === resolvedParams.id);

    if (!player) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main>
                {/* Cover / Hero Section */}
                <section className="relative h-[85vh] w-full overflow-hidden">
                    <div className="absolute inset-0 z-0 text-[15rem] md:text-[25rem] font-black italic text-zinc-900/10 select-none whitespace-nowrap -translate-y-1/2 top-1/2 left-0 pl-10">
                        {player.name.split(' ')[0]}
                    </div>

                    <div className="absolute inset-0 z-0">
                        <Image
                            src={player.image}
                            alt={player.name}
                            fill
                            className="object-cover opacity-70 scale-105"
                            priority
                        />
                        {/* Dynamic Gradients for Premium Look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
                    </div>

                    <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-zinc-400 hover:text-[#d4ff00] hover:border-[#d4ff00]/50 transition-all group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform text-lg">&larr;</span>
                                <span className="text-[11px] font-black tracking-[0.2em] uppercase">Back to Directory</span>
                            </Link>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 bg-[#d4ff00] text-black text-[11px] font-black tracking-[0.2em] uppercase rounded-sm">
                                    {player.category}
                                </span>
                                <span className="text-zinc-500 font-black tracking-widest text-xs uppercase flex items-center gap-2">
                                    <span className="text-lg">{player.flag}</span> {player.country} Official Athlete
                                </span>
                            </div>
                            <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.85] uppercase drop-shadow-2xl">
                                {player.name.includes(' ') ? player.name.split(' ')[0] : player.name}<br />
                                {player.name.includes(' ') && (
                                    <span className="text-[#d4ff00]">{player.name.split(' ')[1]}</span>
                                )}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <div>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Current Ranking</p>
                                    <p className="text-2xl md:text-3xl text-white font-black italic tracking-tight">
                                        {player.rank}
                                    </p>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden md:block" />
                                <div>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Play Style</p>
                                    <p className="text-2xl md:text-3xl text-[#d4ff00] font-black italic tracking-tight">
                                        {player.style}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Column */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* Analysis */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-4xl font-black italic tracking-tighter uppercase">
                                        Performance<br />Analysis
                                    </h2>
                                    <div className="space-y-1">
                                        <p className="text-zinc-500 text-sm font-medium leading-relaxed italic border-l-2 border-[#d4ff00]/30 pl-4 mb-6">
                                            テクニカル・スタッツに基づいた、AIによるアスリート分析。
                                            強靭なフィジカルと卓越した戦術眼の相関を示す。
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {(Object.entries(player.stats) as [string, number][]).map(([label, value]) => (
                                                <div key={label} className="bg-zinc-900/40 p-4 border border-white/5 rounded-2xl">
                                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
                                                    <p className="text-2xl font-black italic">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center bg-zinc-900/20 rounded-[40px] border border-white/5 p-8 backdrop-blur-sm">
                                    <RadarChart stats={player.stats} size={320} />
                                </div>
                            </div>

                            {/* Gallery / Media Section */}
                            {(player.youtubeId || player.instagramPostId) && (
                                <div className="space-y-10">
                                    <h2 className="text-4xl font-black italic tracking-tighter uppercase border-[#d4ff00]">
                                        Gallery / <span className="text-[#d4ff00]">Media</span>
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {player.youtubeId && (
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">Featured Video</p>
                                                <div className="relative aspect-video w-full overflow-hidden rounded-[32px] border border-white/5 bg-zinc-900 group/video shadow-2xl">
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${player.youtubeId}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                        className="absolute inset-0 w-full h-full"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        )}
                                        {player.instagramPostId && (
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest pl-1">Candid Moments</p>
                                                <div className="relative aspect-square md:aspect-video w-full overflow-hidden rounded-[32px] border border-white/5 bg-zinc-900 shadow-2xl group/insta cursor-pointer flex items-center justify-center">
                                                    <div className="absolute inset-0 z-0 opacity-20 group-hover/insta:opacity-40 transition-opacity duration-700">
                                                        <Image
                                                            src={player.image}
                                                            alt="Instagram Fallback"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <Link
                                                        href={`https://www.instagram.com/p/${player.instagramPostId}/`}
                                                        target="_blank"
                                                        className="relative z-10 flex flex-col items-center gap-4 group/btn"
                                                    >
                                                        <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-transform">
                                                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.365-.333 2.632-1.308 3.607-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.061-1.365.333-2.632 1.308-3.607.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.724.079-3.092.443-4.277 1.628-1.185 1.184-1.549 2.552-1.628 4.277-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.079 1.724.443 3.092 1.628 4.277 1.184 1.185 2.552 1.549 4.277 1.628 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.724-.079 3.092-.443 4.277-1.628 1.185-1.184 1.549-2.552 1.628-4.277.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.079-1.724-.443-3.092-1.628-4.277-1.184-1.185-2.552-1.549-4.277-1.628-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-white font-black italic tracking-tighter uppercase text-lg">View Post</p>
                                                            <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">@instagram</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Biography */}
                            <div className="space-y-10">
                                <h2 className="text-4xl font-black italic tracking-tighter uppercase border-l-8 border-[#d4ff00] pl-8">
                                    Biography
                                </h2>
                                <div className="prose prose-invert prose-2xl max-w-none">
                                    <p className="text-zinc-300 leading-[1.6] font-medium italic">
                                        {player.name}選手は、日本が世界に誇る{player.category}のエース。
                                        「{player.style}」と称される独自のプレースタイルで、数々の国際大会を制覇してきた。
                                    </p>
                                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                                        {player.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Gear Section */}
                            <div className="bg-zinc-900/60 border border-white/10 rounded-[40px] p-10 sticky top-8 backdrop-blur-xl">
                                <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-8 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-[#d4ff00]" />
                                    Exclusive Gear
                                </h3>

                                <div className="space-y-8">
                                    <div className="group">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Professional Racket</p>
                                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 group-hover:border-[#d4ff00]/30 transition-all">
                                            <p className="font-black text-lg mb-2 group-hover:text-[#d4ff00] transition-colors uppercase italic">{player.gear.racket.name}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed mb-4">{player.gear.racket.description}</p>
                                            <Link
                                                href={player.gear.racket.link}
                                                target="_blank"
                                                className="inline-block w-full py-3 bg-[#d4ff00] text-black text-center text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                                            >
                                                View on Amazon
                                            </Link>

                                            {/* Same Racket Users */}
                                            {players.filter(p => p.id !== player.id && p.gear.racket.name === player.gear.racket.name).length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-white/5">
                                                    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-3">Same Model Users</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {players.filter(p => p.id !== player.id && p.gear.racket.name === player.gear.racket.name).map(other => (
                                                            <Link
                                                                key={other.id}
                                                                href={`/players/${other.id}`}
                                                                className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/5 hover:border-[#d4ff00]/50 transition-all group/user"
                                                            >
                                                                <div className="relative w-4 h-4 rounded-full overflow-hidden grayscale group-hover/user:grayscale-0 transition-all">
                                                                    <Image src={other.image} alt={other.name} fill className="object-cover" />
                                                                </div>
                                                                <span className="text-[8px] font-black text-zinc-400 group-hover/user:text-white uppercase tracking-tight">{other.name.split(' ').pop()}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="group">
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Power Shoes</p>
                                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 group-hover:border-[#d4ff00]/30 transition-all">
                                            <p className="font-black text-lg mb-2 group-hover:text-[#d4ff00] transition-colors uppercase italic">{player.gear.shoes.name}</p>
                                            <p className="text-zinc-500 text-xs leading-relaxed mb-4">{player.gear.shoes.description}</p>
                                            <Link
                                                href={player.gear.shoes.link}
                                                target="_blank"
                                                className="inline-block w-full py-3 bg-white/10 text-white text-center text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10 hover:bg-[#d4ff00] hover:text-black hover:border-transparent transition-all"
                                            >
                                                View on Amazon
                                            </Link>

                                            {/* Same Shoes Users */}
                                            {players.filter(p => p.id !== player.id && p.gear.shoes.name === player.gear.shoes.name).length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-white/5">
                                                    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-3">Same Model Users</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {players.filter(p => p.id !== player.id && p.gear.shoes.name === player.gear.shoes.name).map(other => (
                                                            <Link
                                                                key={other.id}
                                                                href={`/players/${other.id}`}
                                                                className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/5 hover:border-[#d4ff00]/50 transition-all group/user"
                                                            >
                                                                <div className="relative w-4 h-4 rounded-full overflow-hidden grayscale group-hover/user:grayscale-0 transition-all">
                                                                    <Image src={other.image} alt={other.name} fill className="object-cover" />
                                                                </div>
                                                                <span className="text-[8px] font-black text-zinc-400 group-hover/user:text-white uppercase tracking-tight">{other.name.split(' ').pop()}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-zinc-500 text-[10px] leading-relaxed italic">
                                        *これらのリンクはAmazonアソシエイト・プログラムのアフィリエイトリンクとして機能します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
