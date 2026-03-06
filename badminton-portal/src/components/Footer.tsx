import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-40 py-20 border-t border-orange-500/30 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Column 1: Brand & Concept */}
                    <div className="space-y-6 md:col-span-1">
                        <h3 className="text-2xl font-black italic tracking-tighter text-white">
                            THE<span className="text-orange-500">COURT</span>
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-medium">
                            バドミントンの深淵に触れるポータルサイト。<br />
                            ファン、選手、コミュニティを繋ぎ、競技の更なる発展と熱狂へ貢献します。
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6 md:col-span-1">
                        <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Quick Links</h4>
                        <div className="flex flex-col gap-3 text-sm font-black italic tracking-wider text-zinc-500">
                            <Link href="/players" className="hover:text-orange-500 hover:translate-x-1 transition-all">PLAYERS / 選手名鑑</Link>
                            <Link href="/archive" className="hover:text-amber-500 hover:translate-x-1 transition-all">ARCHIVE / 試合結果一覧</Link>
                            <Link href="/#rankings" className="hover:text-orange-500 hover:translate-x-1 transition-all">RANKINGS / 世界ランキング</Link>
                            <Link href="/schedule" className="hover:text-orange-500 hover:translate-x-1 transition-all">SCHEDULE / 大会スケジュール</Link>
                            <Link href="/gear" className="hover:text-orange-500 hover:translate-x-1 transition-all">GEAR / ギアレビュー</Link>
                            <Link href="/circles" className="hover:text-orange-500 hover:translate-x-1 transition-all">CIRCLES / コミュニティ検索</Link>
                        </div>
                    </div>

                    {/* Column 3: Connect (Socials) */}
                    <div className="space-y-6 md:col-span-1">
                        <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://x.com/yoritomo05" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 w-fit">
                                <div className="p-2 border border-zinc-800 rounded-full group-hover:border-white group-hover:bg-white transition-colors flex items-center justify-center">
                                    {/* X Logo SVG */}
                                    <svg className="w-4 h-4 fill-zinc-500 group-hover:fill-black transition-colors" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </div>
                                <span className="text-sm font-black italic text-zinc-500 group-hover:text-white transition-colors">@yoritomo05</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6 md:col-span-1">
                        <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Contact</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            掲載に関するお問い合わせや、情報の追加依頼はこちらから承ります。
                        </p>
                        <button className="group flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-xl font-black italic text-xs tracking-tighter uppercase hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-500 hover:text-white hover:border-transparent transition-all w-full">
                            <Mail className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                            <span>Contact Us</span>
                        </button>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
                        &copy; 2026 THE COURT. Pure Innovation. All rights reserved.
                    </div>
                    <div className="text-[10px] font-black tracking-widest text-zinc-700 uppercase">
                        Designed for Badminton Enthusiasts.
                    </div>
                </div>
            </div>
        </footer>
    );
}
