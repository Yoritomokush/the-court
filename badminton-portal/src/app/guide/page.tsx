import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "初心者ガイド",
    description: "バドミントンを始めたい方への完全ガイド。道具の選び方、基本ルール、自分に合ったサークルの探し方まで詳しく解説します。",
};

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-badminton-green text-white font-sans selection:bg-badminton-yellow selection:text-badminton-green">
            <Header />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32">
                {/* Hero Section */}
                <header className="space-y-4">
                    <span className="text-badminton-yellow text-xs font-black tracking-[0.3em] uppercase">Step by Step Guide</span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                        BEGINNERS<br />
                        <span className="text-badminton-yellow">WELCOME.</span>
                    </h1>
                    <p className="max-w-2xl text-zinc-400 text-lg font-medium leading-relaxed">
                        バドミントンを一生の趣味に。未経験からでも安心して始められるよう、必要なステップを丁寧にまとめました。
                    </p>
                </header>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Step 1: Gear */}
                    <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-[40px] space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 text-9xl font-black text-white/5 italic">01</div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black italic tracking-tighter text-badminton-yellow capitalize">道具を揃える</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed">まずは自分の「相棒」となるラケットと、怪我を防ぐ専用シューズを手に入れましょう。</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> 初心者は「軽量・ヘッドライト」がおすすめ
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> シューズは必ずバドミントン専用を
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/#gear"
                                className="inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-black italic text-[10px] tracking-tighter uppercase hover:bg-badminton-yellow hover:text-badminton-green transition-all"
                            >
                                おすすめギアをチェック &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Step 2: Rule */}
                    <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-[40px] space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 text-9xl font-black text-white/5 italic">02</div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black italic tracking-tighter text-badminton-yellow capitalize">ルールを覚える</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed">意外とシビアなサーブや、イン・アウトの判定など、基本をマスターしましょう。</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> 21点3ゲームマッチ、ラリーポイント制
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> サーブはウエストより下で打つ
                            </li>
                        </ul>
                        <div className="pt-4">
                            <button className="inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-black italic text-[10px] tracking-tighter uppercase cursor-not-allowed opacity-50">
                                ルール詳細（準備中）
                            </button>
                        </div>
                    </div>

                    {/* Step 3: Circle */}
                    <div className="bg-zinc-900/50 border border-white/5 p-10 rounded-[40px] space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 text-9xl font-black text-white/5 italic">03</div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black italic tracking-tighter text-badminton-yellow capitalize">仲間を探す</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed">一人ではなく、地域のサークルに参加することで飛躍的に上達が早まります。</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> 雰囲気やレベルが自分に合っているか確認
                            </li>
                            <li className="flex gap-3 text-sm font-bold text-zinc-300">
                                <span className="text-badminton-yellow">✔</span> 多くのサークルで「体験参加」が可能
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/circles"
                                className="inline-block bg-badminton-yellow text-badminton-green px-6 py-3 rounded-xl font-black italic text-[10px] tracking-tighter uppercase hover:scale-105 transition-all"
                            >
                                サークルを探す &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Detailed Section */}
                <section className="bg-zinc-900 rounded-[40px] p-8 md:p-20 border border-white/5">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter">なぜバドミントンなのか？</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                世界最速の球技でありながら、老若男女がそれぞれのレベルで生涯楽しめるスポーツ。
                                瞬時の判断、戦略的な配給、そして仲間を思いやるペアリング。
                                バドミントンが持つ奥深い魅力を、ぜひ体感してください。
                            </p>
                        </div>
                        <div className="aspect-video relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-badminton-yellow/10 z-10" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-20 h-20 bg-badminton-yellow rounded-full flex items-center justify-center text-badminton-green animate-pulse">
                                    <span className="text-4xl">▶</span>
                                </div>
                            </div>
                            <div className="h-full w-full bg-zinc-800 flex items-center justify-center">
                                <span className="text-zinc-700 font-black italic text-6xl">GUIDE VIDEO</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
