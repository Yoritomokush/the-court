import Link from "next/link";
import { columns } from "@/app/players/[id]/data/columns";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const column = columns.find((c) => c.id === id);
    return {
        title: column?.title || "コラム詳細",
        description: column?.excerpt || "バドミントン専門コラムの詳細ページです。",
    };
}

export function generateStaticParams() {
    return columns.map((column) => ({
        id: column.id,
    }));
}

export default async function ColumnDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const column = columns.find((c) => c.id === id);

    if (!column) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-badminton-green text-white font-sans selection:bg-badminton-yellow selection:text-badminton-green pb-20">
            <Header />

            <article className="max-w-4xl mx-auto px-6 mt-16">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 bg-badminton-yellow text-badminton-green text-[10px] font-black rounded-sm uppercase italic">
                        {column.category}
                    </span>
                    <span className="text-[10px] font-black text-zinc-500 tracking-widest">{column.date}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-12">
                    {column.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-4 py-8 border-y border-white/5 mb-16">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <span className="text-zinc-600 font-black italic text-xl">BP</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Written by</p>
                        <p className="text-badminton-yellow font-black italic tracking-tight">{column.author}</p>
                    </div>
                </div>

                {/* Main Content with Typography focus */}
                <div className="prose prose-invert max-w-none 
                    prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:tracking-tight prose-h2:text-badminton-yellow prose-h2:mt-16 prose-h2:mb-8
                    prose-p:text-zinc-300 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                    prose-strong:text-white prose-strong:font-black
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                    prose-li:text-zinc-300 prose-li:mb-2
                    prose-hr:border-white/10 prose-hr:my-16
                ">
                    {/* Render Content - Split by double newlines for basic paragraph handling if needed, 
                        but here we just use the raw text as it contains markdown-like structure 
                        that we can either handle via a markdown renderer or simple replacement.
                        For simplicity and since the content is already structured with markdown, 
                        we'll just use a simple approach for now.
                    */}
                    <div className="whitespace-pre-wrap font-medium">
                        {column.content}
                    </div>
                </div>

                {/* Share / CTA (Placeholder) */}
                <div className="mt-24 p-12 bg-zinc-900/50 rounded-3xl border border-white/5 text-center">
                    <h3 className="text-2xl font-black italic tracking-tight mb-4">この記事が気に入ったらシェア！</h3>
                    <p className="text-zinc-500 text-sm mb-8">バドミントンの魅力を広めよう。</p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-black italic text-xs tracking-tighter uppercase hover:bg-badminton-yellow hover:text-badminton-green transition-all">
                            Twitter / X
                        </button>
                        <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-black italic text-xs tracking-tighter uppercase hover:bg-badminton-yellow hover:text-badminton-green transition-all">
                            Facebook
                        </button>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
