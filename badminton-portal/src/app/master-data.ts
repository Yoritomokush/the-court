export interface Player {
  id: string;
  name: string;
  image: string;
  rank: string;
  style: string;
  country: string;
  flag: string;
  category: "国内代表" | "実業団" | "NEXT GEN";
  tier?: string;
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
    id: "yuta-watanabe",
    name: "渡辺 勇大",
    image: "/images/players/yuta-watanabe.png",
    rank: "Mixed Doubles World No.1",
    style: "Deceptive & Creative",
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表",
    tier: "S",
    stats: {
      power: 85,
      speed: 95,
      technique: 100,
      stamina: 90,
      mentality: 92,
      defense: 94,
    },
    gear: {
      racket: {
        name: "LI-NING AERONAUT 9000C",
        image: "/images/gear/racket-yuta.png",
        description: "渡辺選手の変幻自在なショットを支える、反発力とコントロールの極致。",
        link: "https://www.amazon.co.jp/s?k=LI-NING+AERONAUT+9000C",
      },
      shoes: {
        name: "LI-NING BLADED 2.0",
        image: "/images/gear/shoes-yuta.png",
        description: "コートを縦横無尽に駆け抜ける俊敏性を生む、超軽量モデル。",
        link: "https://www.amazon.co.jp/s?k=LI-NING+BLADED",
      },
    },
    bio: "混合ダブルスで世界を席巻する日本の天才。その独創的なラケットワークと、相手の虚を突く配球は「魔法」と称される。",
  },
  {
    id: "kodai-naraoka",
    name: "奈良岡 功大",
    image: "/images/players/kodai-naraoka.png",
    rank: "Men's Singles World No.3",
    style: "Endless Rally",
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表",
    tier: "S",
    stats: {
      power: 80,
      speed: 92,
      technique: 94,
      stamina: 100,
      mentality: 98,
      defense: 96,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 99 PRO",
        image: "/images/gear/astrox-99-pro.png",
        description: "粘り強いラリーから決定打を生み出す、パワーと繊細さを兼ね備えた1本。",
        link: "https://www.amazon.co.jp/s?k=YONEX+ASTROX+99+PRO",
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "長時間の激しい移動でも疲労を軽減し、安定したフットワークを支える定番モデル。",
        link: "https://www.amazon.co.jp/s?k=YONEX+POWER+CUSHION+65+Z+3",
      },
    },
    bio: "異次元のスタミナと粘り強さで、世界ランク上位に降臨。どれだけ振られても球を拾い続けるその姿勢は、次世代のスタンダードを塗り替えた。",
  },
  {
    id: "akane-yamaguchi",
    name: "山口 茜",
    image: "/images/players/akane-yamaguchi.png",
    rank: "Women's Singles World No.2",
    style: "Dynamic & Persistent",
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表",
    tier: "S",
    stats: {
      power: 88,
      speed: 96,
      technique: 95,
      stamina: 98,
      mentality: 95,
      defense: 92,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 100 ZZ",
        image: "/images/gear/astrox-100-zz.png",
        description: "鋭いスマッシュと素早いリカバリーを可能にする、山口選手の攻撃の矛。",
        link: "https://www.amazon.co.jp/s?k=YONEX+ASTROX+100+ZZ",
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "小柄な体格を活かした爆発的な動きを、多方向へのグリップ力で支援。",
        link: "https://www.amazon.co.jp/s?k=YONEX+POWER+CUSHION+65+Z+3",
      },
    },
    bio: "バドミントン界の「小さな巨人」。無尽蔵の体力と、どんな体勢からでも打ち込む強打で世界を席巻し続ける、日本が誇る絶対的エース。",
  },
  {
    id: "kento-momota",
    name: "桃田 賢斗",
    image: "/images/players/kento-momota.png",
    rank: "World No.1 (Highest)",
    style: "Tactical & Defensive",
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表",
    tier: "Legend",
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
        description: "強力なパワーと緻密なコントロールを両立するフラッグシップ。ホワイトタイガーをモチーフにした伝説モデル。",
        link: "https://www.amazon.co.jp/s?k=ASTROX+99+Pro+White+Tiger",
      },
      shoes: {
        name: "POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "彼の異次元のフットワークを支え続ける、バドミントンシューズの金字塔。",
        link: "https://www.amazon.co.jp/s?k=POWER+CUSHION+65+Z",
      },
    },
    bio: "日本人男子初のシングルス世界王者。精密なヘアピンや鉄壁のレシーブを武器に、ラリーを支配する「守備からの攻撃」が最大の特徴。",
  },
  {
    id: "tomoka-miyazaki",
    name: "宮崎 友花",
    image: "/images/players/tomoka-miyazaki.png",
    rank: "World Junior Champion",
    style: "Aggressive & Technical",
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表",
    tier: "Tier 1",
    stats: {
      power: 82,
      speed: 90,
      technique: 96,
      stamina: 88,
      mentality: 90,
      defense: 86,
    },
    gear: {
      racket: {
        name: "YONEX NANORAY 900",
        image: "/images/gear/nanoray-900.png",
        description: "鋭い角度でのドロップやカットを可能にする、繊細な操作性に特化したモデル。",
        link: "https://www.amazon.co.jp/s?k=YONEX+NANORAY+900",
      },
      shoes: {
        name: "YONEX POWER CUSHION AERUS Z",
        image: "/images/gear/shoes-sara.png",
        description: "最軽量級の自重で、コート上でのステップをより軽快に、より速く進化させる。",
        link: "https://www.amazon.co.jp/s?k=YONEX+AERUS+Z",
      },
    },
    bio: "世界ジュニアを制した次世代のヒロイン。しなやかなフォームから繰り出される多彩なショットで、シニアの舞台でも頭角を現している。",
  },
  {
    id: "kanta-tsuneyama",
    name: "常山 幹太",
    image: "/images/players/kanta-tsuneyama.png",
    rank: "Men's Singles Pro",
    style: "Solid & Balanced",
    country: "Japan",
    flag: "🇯🇵",
    category: "実業団",
    tier: "Tier 1",
    stats: {
      power: 84,
      speed: 86,
      technique: 88,
      stamina: 92,
      mentality: 90,
      defense: 88,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 88 D PRO",
        image: "/images/gear/astrox-88d-pro.png",
        description: "パワーを強化し、後陣からの重厚な一撃を可能にするディフェンス＆アタックモデル。",
        link: "https://www.amazon.co.jp/s?k=YONEX+ASTROX+88+D+PRO",
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "プロの過酷な動きを支える信頼のクッション性。確実な踏み込みを実現。",
        link: "https://www.amazon.co.jp/s?k=YONEX+POWER+CUSHION+65+Z+3",
      },
    },
    bio: "実業団トップクラスの実力を誇るベテラン。基本に忠実なプレースタイルと、粘り強いゲーム展開で若手の壁として立ちはだかる。",
  },
  {
    id: "hinata-takano",
    name: "髙野 日向",
    image: "/images/players/hinata-takano.png",
    rank: "Rising Star",
    style: "Offensive Power",
    country: "Japan",
    flag: "🇯🇵",
    category: "NEXT GEN",
    tier: "Tier 2",
    stats: {
      power: 90,
      speed: 88,
      technique: 84,
      stamina: 85,
      mentality: 88,
      defense: 82,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 77 PRO",
        image: "/images/gear/astrox-77-pro.png",
        description: "しなりを活かした力強いスマッシュを実現する、攻撃型プレーヤーの新戦力。",
        link: "https://www.amazon.co.jp/s?k=YONEX+ASTROX+77+PRO",
      },
      shoes: {
        name: "YONEX POWER CUSHION ECLIPSION Z",
        image: "/images/gear/shoes-yuki.png",
        description: "激しいフットワークでもブレない安定性を追求。パワーを確実にコートに伝える。",
        link: "https://www.amazon.co.jp/s?k=YONEX+ECLIPSION+Z",
      },
    },
    bio: "圧倒的なスピードとスマッシュの破壊力で注目される若手有望株。果敢なプレースタイルで、日本の次世代を担う存在として期待されている。",
  },
];
