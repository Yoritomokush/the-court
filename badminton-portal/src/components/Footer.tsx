import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-40 py-20 border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black italic tracking-tighter">
                            THE<span className="text-badminton-yellow">COURT</span>
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            「バドミントンのすべてが集まる場所」をミッションに掲げた、日本最大級のバドミントン専門プラットフォーム。
                            ファン、選手、コミュニティを繋ぎ、競技の更なる発展に貢献します。
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-badminton-yellow uppercase tracking-[0.3em]">Contents</h4>
                        <div className="flex flex-col gap-4 text-xs font-black italic tracking-widest text-zinc-400">
                            <Link href="/columns" className="hover:text-badminton-yellow transition-colors uppercase">COLUMNS</Link>
                            <Link href="/circles" className="hover:text-badminton-yellow transition-colors uppercase">CIRCLES</Link>
                            <Link href="/guide" className="hover:text-badminton-yellow transition-colors uppercase">BEGINNERS GUIDE</Link>
                            <Link href="/players" className="hover:text-badminton-yellow transition-colors uppercase">PLAYERS</Link>
                            <Link href="/#gear" className="hover:text-badminton-yellow transition-colors uppercase">GEAR HIGHLIGHT</Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black text-badminton-yellow uppercase tracking-[0.3em]">Contact</h4>
                        <p className="text-zinc-500 text-sm">
                            掲載に関するお問い合わせや、サークル情報の追加依頼はこちらから。
                        </p>
                        <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-black italic text-xs tracking-tighter uppercase hover:bg-badminton-yellow hover:text-badminton-green transition-all w-full text-center">
                            お問い合わせフォームを表示 &rarr;
                        </button>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <div className="text-[10px] font-black tracking-[0.3em] text-zinc-700 uppercase">
                        &copy; 2026 THE COURT. Pure Innovation. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
