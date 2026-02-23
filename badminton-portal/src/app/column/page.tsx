import Image from "next/image";
import Link from "next/link";
import { columns } from "@/app/players/[id]/data/columns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "スペシャルコラム",
    description: "世界最強インドネシア勢の秘密や、最新の戦術解説など、バドミントンをより深く楽しむための専門コラム。記事一覧はこちら。",
};

export default function ColumnListPage() {
    return (
        <div className="min-h-screen bg-badminton-green text-white font-sans selection:bg-badminton-yellow selection:text-badminton-green pb-20">
            <Header />

            <main className="max-w-7xl mx-auto px-6 mt-16 space-y-20">
                <header className="space-y-4">
                    <span className="text-badminton-yellow text-xs font-black tracking-[0.3em] uppercase">Special Features</span>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                        BADMINTON<br />
                        <span className="text-badminton-yellow">COLUMN</span>
                    </h1>
                    <p className="max-w-2xl text-zinc-400 text-lg font-medium leading-relaxed">
                        技術、戦術、そして業界の裏側まで。バドミントンの「今」を深く切り取るスペシャルコラム。
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {columns.map((column) => (
                        <Link
                            key={column.id}
                            href={`/column/${column.id}`}
                            className="group flex flex-col bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-badminton-yellow/50 transition-all duration-300"
                        >
                            <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
                                <div className="h-full w-full flex items-center justify-center bg-zinc-900">
                                    <span className="text-zinc-800 font-black italic text-4xl opacity-20 uppercase tracking-tighter">COLUMN</span>
                                </div>
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-badminton-yellow text-badminton-green text-[10px] font-black rounded-sm uppercase italic">
                                        {column.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-black text-zinc-500 tracking-widest">{column.date}</span>
                                    <span className="text-[10px] font-black text-badminton-yellow tracking-widest uppercase">{column.author}</span>
                                </div>
                                <h2 className="text-2xl font-black italic tracking-tight leading-snug group-hover:text-badminton-yellow transition-colors mb-4">
                                    {column.title}
                                </h2>
                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-8">
                                    {column.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-xs font-black italic tracking-tighter uppercase group-hover:translate-x-2 transition-transform inline-block">
                                        READ MORE &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
