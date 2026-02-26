"use client";

import { news } from "@/app/master-data";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const item = news.find((n) => n.id === id);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff00] selection:text-black">
            <Header />

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#d4ff00] transition-colors mb-12 text-xs font-black tracking-widest uppercase"
                >
                    <span>&larr;</span> Back to News
                </Link>

                <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-zinc-500 tracking-tighter">
                            {item.date}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-black tracking-widest border bg-[#d4ff00]/10 text-[#d4ff00] border-[#d4ff00]/20">
                            {item.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight">
                        {item.title}
                    </h1>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-400 leading-relaxed whitespace-pre-wrap">
                        {item.content}
                    </p>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5">
                    <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-black italic mb-2">Want more updates?</h3>
                            <p className="text-zinc-500 text-sm font-medium">Follow us on official channels for real-time alerts.</p>
                        </div>
                        <button className="bg-[#d4ff00] text-black px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(212,255,0,0.3)]">
                            Follow @TheCourt
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
