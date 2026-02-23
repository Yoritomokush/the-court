export interface Player {
    id: string;
    name: string;
    image: string; // Added image field
    rank: string;
    style: string;
    country: string;
    flag: string;
    stats: {
        power: number;
        speed: number;
        technique: number;
        stamina: number;
        mentality: number;
        defense: number;
    };
    gear: {
        racket: {
            name: string;
            image: string;
            description: string;
            link: string;
        };
        shoes: {
            name: string;
            image: string;
            description: string;
            link: string;
        };
    };
    bio: string;
}

export const players: Player[] = [
    {
        id: "kento-momota",
        name: "桃田 賢斗 (Kento Momota)",
        image: "/images/players/kento-momota.png",
        rank: "World No.1 (Highest)",
        style: "Tactical & Defensive",
        country: "Japan",
        flag: "🇯🇵",
        stats: {
            power: 82,
            speed: 88,
            technique: 100,
            stamina: 100,
            mentality: 95,
            defense: 100,
        },
        gear: {
            racket: {
                name: "ASTROX 99 Pro (White Tiger)",
                image: "/images/gear/astrox-99-pro-wt.png",
                description: "桃田選手と共に開発された、強力なパワーと緻密なコントロールを両立するフラッグシップ。ホワイトタイガーをモチーフにした伝説的モデル。",
                link: "https://www.amazon.co.jp/s?k=ASTROX+99+Pro+White+Tiger",
            },
            shoes: {
                name: "POWER CUSHION 65 Z",
                image: "/images/gear/shb65z3.png",
                description: "バドミントンシューズの金字塔。桃田選手が長年愛用し、彼の異次元のフットワークを支え続ける至高の1足。",
                link: "https://www.amazon.co.jp/s?k=POWER+CUSHION+65+Z",
            },
        },
        bio: "日本人男子初のシングルス世界王者。2019年には年間11勝を達成しギネス記録を更新。精密なヘアピンや鉄壁のレシーブを武器に、ラリーを支配する「守備からの攻撃」が最大の特徴。",
    },
    {
        id: "sara-ito",
        name: "SARA ITO",
        image: "/images/players/sara-ito.png",
        rank: "#1",
        style: "Defense",
        country: "Japan",
        flag: "🇯🇵",
        stats: {
            power: 78,
            speed: 92,
            technique: 96,
            stamina: 94,
            mentality: 98,
            defense: 95,
        },
        gear: {
            racket: {
                name: "ASTROX 88S",
                image: "/images/gear/racket-sara.png",
                description: "ネット前での素早い操作性と、正確なコントロールを重視。技巧派プレーヤーの必需品。",
                link: "https://amzn.to/example-sara-racket",
            },
            shoes: {
                name: "POWER CUSHION AERUS Z",
                image: "/images/gear/shoes-sara.png",
                description: "驚異の軽さを実現。俊敏な動きと、疲労軽減を両立させる軽量化モデル。",
                link: "https://amzn.to/example-sara-shoes",
            },
        },
        bio: "計算し尽くされた配球と、鉄壁の守備で相手のミスを誘う技巧派。現世界ランキング1位。",
    },
    {
        id: "yuki-sato",
        name: "YUKI SATO",
        image: "/images/players/yuki-sato.png",
        rank: "#5",
        style: "All Round",
        country: "Japan",
        flag: "🇯🇵",
        stats: {
            power: 85,
            speed: 85,
            technique: 85,
            stamina: 85,
            mentality: 85,
            defense: 85,
        },
        gear: {
            racket: {
                name: "DUORA 10",
                image: "/images/gear/racket-yuki.png",
                description: "フォアとバックで異なる性能を持つ、究極の二刀流ラケット。あらゆる状況に対応可能。",
                link: "https://amzn.to/example-yuki-racket",
            },
            shoes: {
                name: "POWER CUSHION ECLIPSION Z",
                image: "/images/gear/shoes-yuki.png",
                description: "安定した着地と素早い蹴り出しが可能。オールラウンダーのバランスを支える一足。",
                link: "https://amzn.to/example-yuki-shoes",
            },
        },
        bio: "全ての項目で高い水準を誇るオールラウンダー。相手に合わせてプレースタイルを変える柔軟性が武器。",
    },
];
