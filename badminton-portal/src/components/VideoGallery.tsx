"use client";

import { useState } from "react";
import Image from "next/image";
import { allEnglandHighlights, VideoClip } from "@/app/master-data";

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState<VideoClip | null>(null);

    const openModal = (video: VideoClip) => setSelectedVideo(video);
    const closeModal = () => setSelectedVideo(null);

    return (
        <div className="w-full max-w-5xl mx-auto mt-24 mb-16 relative group">
            <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-emerald-900 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    Trending Clips
                </span>
                <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-md">
                    🔥 ALL ENGLAND <span className="text-emerald-500">HIGHLIGHTS</span>
                </h3>
                <p className="text-zinc-400 mt-4 text-sm md:text-base font-medium">大会の名珍場面をショート動画でチェック！X (<a href="https://x.com/yoritomo05" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">@yoritomo05</a>) からのリクエストもお待ちしています。</p>
            </div>

            {/* 9:16 Tiktok/Shorts Style Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
                {allEnglandHighlights.map((clip) => (
                    <button
                        key={clip.id}
                        onClick={() => openModal(clip)}
                        className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden group/card bg-zinc-900 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2 cursor-pointer"
                    >
                        <Image
                            src={clip.thumbnailUrl}
                            alt={clip.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100"
                        />
                        {/* Gradient Overlay for Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 flex items-center gap-1.5 z-10">
                            {clip.platform === 'youtube' ? (
                                <span className="text-red-500 text-xs font-black">▶ Shorts</span>
                            ) : (
                                <span className="text-purple-500 text-xs font-black">❖ Twitch</span>
                            )}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md line-clamp-2 text-left">
                                {clip.title}
                            </h4>
                        </div>
                    </button>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300">
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <svg className="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
                        {/* Universal Embed */}
                        {selectedVideo.platform === 'youtube' ? (
                            <iframe
                                className="w-full h-full"
                                // using standard youtube embed for shorts format
                                // Added origin parameter for Vercel deployment stability
                                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&loop=1&playlist=${selectedVideo.embedId}&origin=https://the-court-eight.vercel.app`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            <iframe
                                className="w-full h-full"
                                // Hardcoding parent to Vercel domain for production as well as localhost for local testing
                                src={`https://clips.twitch.tv/embed?clip=${selectedVideo.embedId}&parent=the-court-eight.vercel.app&parent=localhost&autoplay=true`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allowFullScreen
                            />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                            <h4 className="text-white font-black text-xl md:text-2xl italic tracking-tight">{selectedVideo.title}</h4>
                            <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mt-1">{selectedVideo.platform} Clip</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
