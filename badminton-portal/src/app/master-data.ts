export interface Player {
  id: string;
  name: string;
  image?: string;
  rank: string;
  style: string;
  country: string;
  flag: string;
  category: string;
  gender: "Male" | "Female";
  team: string;
  worldRank: string;
  awards: {
    year: string;
    event: string;
    result: string;
  }[];
  sns?: {
    instagram?: string;
    x?: string;
    youtube?: string;
  };
  tags?: string[];
  tier?: string;
  partnerName?: string;
  youtubeId?: string;
  instagramPostId?: string;
  instagramPostUrl?: string; // New: Full Instagram URL for embedding
  racketId?: string; // New: Direct link to Gear ID
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

export interface News {
  id: string;
  date: string;
  title: string;
  category: "TOURNAMENT" | "GEAR" | "TOPIC";
  content: string;
  results?: MatchResult[];
  relatedPlayerIds?: string[];
}

export interface MatchResult {
  round: string;
  opponent: string;
  score: string;
  isWin: boolean;
}

export interface LiveMatchResult {
  id: string;
  category: string;
  player1: { name: string; isWin: boolean; sets: number };
  player2: { name: string; isWin: boolean; sets: number };
  scores: string[];
}

export interface RankingEntry {
  rank: number;
  name: string;
  team: string;
  points?: string;
  change?: "up" | "down" | "none";
  flag?: string;
}

export interface CategoryRankings {
  ms: RankingEntry[];
  ws: RankingEntry[];
  md: RankingEntry[];
  wd: RankingEntry[];
  xd: RankingEntry[];
}

export interface Column {
  id: string;
  title: string;
  date: string;
  category: "TACTICS" | "HISTORY" | "LEGEND" | "全英OP特集";
  author: string;
  image?: string;
  excerpt: string;
  content: string;
  relatedPlayerIds?: string[];
}

export interface Gear {
  id: string;
  name: string;
  brand: string;
  category: "RACKET" | "SHOES" | "STRINGS";
  description: string;
  price: string;
  usedBy: string[]; // Player IDs
  image?: string;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  category: "BWF Super 1000" | "BWF Super 750" | "BWF Super 500" | "Domestic" | "Major Event";
  status: "Upcoming" | "Ongoing" | "Finished";
  description: string;
}

export interface Circle {
  id: string;
  name: string;
  location: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All";
  schedule: string;
  description: string;
  recruiting: boolean;
}

export const AFFILIATE_ID = "yoritomo04-22";

/**
 * Creates a localized Amazon Japan search link with affiliate ID.
 */
export const getAmazonLink = (query: string): string => {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&tag=${AFFILIATE_ID}`;
};

export const allEnglandResults: LiveMatchResult[] = [
  {
    id: "ae-2026-qf-m1",
    category: "MS",
    player1: { name: "渡邉 航貴", isWin: false, sets: 0 },
    player2: { name: "L.セン", isWin: false, sets: 0 },
    scores: []
  },
  {
    id: "ae-2026-qf-m2",
    category: "MS",
    player1: { name: "奈良岡 功大", isWin: false, sets: 0 },
    player2: { name: "C.A.ドゥイ・ワルドヨ", isWin: false, sets: 0 },
    scores: []
  },
  {
    id: "ae-2026-qf-m3",
    category: "WS",
    player1: { name: "山口 茜", isWin: false, sets: 0 },
    player2: { name: "グレゴリア・M・トゥンジュン", isWin: false, sets: 0 },
    scores: []
  },
  {
    id: "ae-2026-qf-m4",
    category: "WD",
    player1: { name: "志田/松山", isWin: false, sets: 0 },
    player2: { name: "タン/ティナー", isWin: false, sets: 0 },
    scores: []
  }
];

export const players: Player[] = [
  {
    id: "yuta-watanabe",
    name: "渡辺 勇大",

    rank: "Mixed Doubles World No.1",
    gender: "Male",
    team: "BIPROGY",
    worldRank: "1",
    awards: [
      { year: "2024", event: "全英オープン", result: "優勝" },
      { year: "2021", event: "東京オリンピック", result: "銅メダル" },
      { year: "2023", event: "世界選手権", result: "銅メダル" }
    ],
    sns: {
      instagram: "yuta.watanabe0613",
      x: "bwf_watanabe",
      youtube: "UC6u-vF_Iswc"
    },
    partnerName: "田口 真彩",
    youtubeId: "o6u-vF_Iswc",
    instagramPostId: "C8P9z9RS9M9",
    style: "Deceptive & Creative",
    tags: ["変幻自在", "コートの魔術師"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 混合ダブルス",
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
        link: getAmazonLink("LI-NING AERONAUT 9000C"),
      },
      shoes: {
        name: "LI-NING BLADED 2.0",
        image: "/images/gear/shoes-yuta.png",
        description: "コートを縦横無尽に駆け抜ける俊敏性を生む、超軽量モデル。",
        link: getAmazonLink("LI-NING BLADED"),
      },
    },
    bio: "「ミニオンズ」として世界を席巻した、インドネシアが生んだ史上最高の天才。前衛での予測能力と反射速度は他の追随を許さず、相手を翻弄するプレースタイルで一時代を築いた。",
  },
  {
    id: "viktor-axelsen",
    name: "ビクター・アクセルセン",

    rank: "Men's Singles World No.1",
    gender: "Male",
    team: "Denmark National",
    worldRank: "1",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "金メダル" },
      { year: "2021", event: "東京オリンピック", result: "金メダル" },
      { year: "2022", event: "世界選手権", result: "優勝" }
    ],
    sns: { instagram: "viktoraxelsen" },
    instagramPostUrl: "https://www.instagram.com/p/DBY_mIBy_5y/",
    style: "Dominant & Precise",
    tags: ["絶対王者", "精密機械"],
    country: "Denmark",
    flag: "🇩🇰",
    category: "プロ / 男子シングルス",
    tier: "S",
    racketId: "astrox-100zz",
    stats: { power: 100, speed: 88, technique: 95, stamina: 92, mentality: 96, defense: 90 },
    gear: {
      racket: { name: "YONEX ASTROX 100 ZZ", image: "/images/gear/astrox-100-zz.png", description: "世界王者のパワーを支える、極細シャフトの最高峰。", link: getAmazonLink("YONEX ASTROX 100 ZZ") },
      shoes: { name: "YONEX POWER CUSHION 65 Z", image: "/images/gear/shb65z3.png", description: "王者のフットワークを支える究極の安定性。", link: getAmazonLink("YONEX POWER CUSHION 65 Z") }
    },
    bio: "現代バドミントン界の絶対王者。194cmの長身から繰り出される角度のある強打は、他を寄せ付けない破壊力を持つ。デンマークが誇る、史上最強のシングルスプレーヤーの一人。"
  },
  {
    id: "an-se-young",
    name: "アン・セヨン",

    rank: "Women's Singles World No.1",
    gender: "Female",
    team: "Samsung Life Insurance",
    worldRank: "1",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "金メダル" },
      { year: "2023", event: "世界選手権", result: "優勝" },
      { year: "2023", event: "全英オープン", result: "優勝" }
    ],
    sns: { instagram: "a_sy_2225" },
    instagramPostUrl: "https://www.instagram.com/p/C-P9pPyS9Y9/",
    style: "Wall-like Defense",
    tags: ["無尽蔵のスタミナ", "新世代の女王"],
    country: "Korea",
    flag: "🇰🇷",
    category: "プロ / 女子シングルス",
    tier: "S",
    racketId: "astrox-77-pro",
    stats: { power: 85, speed: 92, technique: 94, stamina: 100, mentality: 98, defense: 100 },
    gear: {
      racket: { name: "YONEX ASTROX 77 PRO", image: "/images/gear/astrox-77-pro.png", description: "しなりでシャトルを捉える、新世代のコントロールモデル。", link: getAmazonLink("YONEX ASTROX 77 PRO") },
      shoes: { name: "YONEX POWER CUSHION AERUS Z", image: "/images/gear/shoes-yuta.png", description: "鉄壁の守備を支える、究極の軽さとフットワーク。", link: getAmazonLink("YONEX AERUS Z") }
    },
    bio: "「셔틀콕 천재（シャトルコックの天才）」と称される、韓国の絶対的女王。異次元の守備範囲と、相手を疲れさせる驚異的な粘り強いプレーは、女子シングルスの歴史に新たな時代を告げた。"
  },
  {
    id: "chen-yu-fei",
    name: "陳雨菲",

    rank: "Women's Singles World No.2",
    gender: "Female",
    team: "China National",
    worldRank: "2",
    awards: [
      { year: "2021", event: "東京オリンピック", result: "金メダル" },
      { year: "2023", event: "全英オープン", result: "準優勝" }
    ],
    sns: { instagram: "chenyufeiii" },
    instagramPostUrl: "https://www.instagram.com/p/C8P9z9RS9M9/",
    style: "Stable & Tactical",
    tags: ["百戦錬磨の巧者", "中国の司令塔"],
    country: "China",
    flag: "🇨🇳",
    category: "プロ / 女子シングルス",
    tier: "S",
    stats: { power: 82, speed: 88, technique: 96, stamina: 92, mentality: 94, defense: 95 },
    gear: {
      racket: { name: "YONEX ASTROX 77 PRO", image: "/images/gear/astrox-77-pro.png", description: "安定したショット精度を生み出す攻撃型モデル。", link: getAmazonLink("YONEX ASTROX 77 PRO") },
      shoes: { name: "YONEX POWER CUSHION 65 Z", image: "/images/gear/shb65z3.png", description: "長時間の激闘に耐えうる、信頼のオールラウンドモデル。", link: getAmazonLink("YONEX POWER CUSHION 65 Z") }
    },
    bio: "中国の司令塔。堅実なプレーと、一瞬の隙も見逃さない高い戦術理解度は、世界中のトップランカーたちにとって最も攻略困難な壁の一つ。"
  },
  {
    id: "liang-wang",
    name: "リャン・ウェイカン / ワン・チャン",

    rank: "Men's Doubles World No.1",
    gender: "Male",
    team: "China National",
    worldRank: "1",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "銀メダル" },
      { year: "2024", event: "全英オープン", result: "準優勝" }
    ],
    sns: { instagram: "liangwekang" },
    instagramPostUrl: "https://www.instagram.com/p/C-P9pPyS9X8/",
    style: "Ultra Power Rush",
    tags: ["爆撃の連打", "若き中国のエース"],
    country: "China",
    flag: "🇨🇳",
    category: "プロ / 男子ダブルス",
    tier: "S",
    stats: { power: 100, speed: 96, technique: 90, stamina: 88, mentality: 92, defense: 88 },
    gear: {
      racket: { name: "YONEX ASTROX 88 D PRO", image: "/images/gear/astrox-88d-pro.png", description: "後衛からの破壊的な連打を可能にする、ダブルス専用パワーモデル。", link: getAmazonLink("YONEX ASTROX 88 D PRO") },
      shoes: { name: "YONEX POWER CUSHION 65 Z", image: "/images/gear/shb65z3.png", description: "激しい攻防を足元から力強く支える一足。", link: getAmazonLink("YONEX POWER CUSHION 65 Z") }
    },
    bio: "中国の若き新星ペア。リャンの破壊的なスマッシュと、ワンの鉄壁の配球が噛み合った攻撃スタイルは、現在の男子ダブルス界において最も恐れられるコンビネーションの一つ。"
  },
  {
    id: "jeong-kim",
    name: "チョン・ナウン / キム・ヘジョン",

    rank: "Women's Doubles World No.5",
    gender: "Female",
    team: "Korea National",
    worldRank: "5",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "混合銀 (鄭)" },
      { year: "2023", event: "世界選手権", result: "銅メダル" }
    ],
    sns: { instagram: "jeong_na_eun" },
    instagramPostUrl: "https://www.instagram.com/p/C-A9Rtyy9X8/",
    style: "Persistent Rally",
    tags: ["粘りの女帝", "鉄の結束"],
    country: "Korea",
    flag: "🇰🇷",
    category: "プロ / 女子ダブルス",
    tier: "S",
    stats: { power: 84, speed: 86, technique: 92, stamina: 96, mentality: 94, defense: 98 },
    gear: {
      racket: { name: "YONEX NANOFLARE 700", image: "/images/gear/nanoflare-700.png", description: "高次元の操作性で、繊細なラケットワークを支援。", link: getAmazonLink("YONEX NANOFLARE 700") },
      shoes: { name: "YONEX POWER CUSHION 65 Z", image: "/images/gear/shb65z3.png", description: "安定した足取りで、長いラリーを制する一足。", link: getAmazonLink("YONEX POWER CUSHION 65 Z") }
    },
    bio: "韓国女子ダブルスの伝統を継承する、粘り強いプレースタイル。緻密なディフェンスと、相手の虚を突くカウンターは一級品。"
  },
  {
    id: "dechapol-sapsiree",
    name: "デチャポル / サプシリー",

    rank: "Mixed Doubles World No.6",
    gender: "Female",
    team: "Thailand National",
    worldRank: "6",
    awards: [
      { year: "2021", event: "世界選手権", result: "優勝" },
      { year: "2022", event: "全英オープン", result: "準優勝" }
    ],
    sns: { instagram: "popor_sapsiree" },
    instagramPostUrl: "https://www.instagram.com/p/C_W4WzYS8z-/",
    style: "Speed & Fluidity",
    tags: ["閃光の連携", "タイの至宝"],
    country: "Thailand",
    flag: "🇹🇭",
    category: "プロ / 混合ダブルス",
    tier: "S",
    stats: { power: 88, speed: 96, technique: 94, stamina: 90, mentality: 92, defense: 88 },
    gear: {
      racket: { name: "YONEX NANOFLARE 700", image: "/images/gear/nanoflare-700.png", description: "スピードと操作性を兼ね備えた、混合ダブルスのスペシャリスト向けモデル。", link: getAmazonLink("YONEX NANOFLARE 700") },
      shoes: { name: "YONEX POWER CUSHION 65 Z", image: "/images/gear/shb65z3.png", description: "タイの灼熱のコートを縦横無尽に駆け抜ける俊敏性を生む一足。", link: getAmazonLink("YONEX POWER CUSHION 65 Z") }
    },
    bio: "タイが誇る、世界最高峰の混合ダブルス。サプシリーの変幻自在なネットプレーと、デチャポルの強烈なスマッシュは、見る者を魅了し続けている。"
  },
  {
    id: "anthony-ginting",
    name: "アンソニー・ギンティン",

    rank: "Men's Singles World No.4",
    gender: "Male",
    team: "SGS PLN Bandung",
    worldRank: "4",
    awards: [
      { year: "2021", event: "東京オリンピック", result: "銅メダル" },
      { year: "2024", event: "全英オープン", result: "準優勝" }
    ],
    sns: { instagram: "sinisukanthony" },
    instagramPostUrl: "https://www.instagram.com/p/C-P9pPyS8Y9/",
    style: "God-speed & Aggressive",
    tags: ["神速の攻撃", "インドネシアの至宝"],
    country: "Indonesia",
    flag: "🇮🇩",
    category: "プロ / 男子シングルス",
    tier: "S",
    stats: { power: 94, speed: 100, technique: 98, stamina: 85, mentality: 90, defense: 88 },
    gear: {
      racket: { name: "LI-NING AERONAUT 9000C", image: "/images/gear/racket-yuta.png", description: "爆発的なスピードを生む、ギンティン選手の武器。", link: getAmazonLink("LI-NING AERONAUT 9000C") },
      shoes: { name: "LI-NING BLADED 2.0", image: "/images/gear/shoes-yuta.png", description: "異次元の瞬発力を支える、超軽量モデル。", link: getAmazonLink("LI-NING BLADED") }
    },
    bio: "インドネシアの至宝。世界最高峰のスプリットステップと、圧倒的な初速を誇る。その攻撃的なプレースタイルは、タウフィク・ヒダヤットの後継者として世界中のファンを熱狂させる。"
  },
  {
    id: "tai-tzu-ying",
    name: "タイ・ツーイン",

    rank: "Women's Singles World No.3",
    gender: "Female",
    team: "Cooperative Bank",
    worldRank: "3",
    awards: [
      { year: "2021", event: "東京オリンピック", result: "銀メダル" },
      { year: "2023", event: "BWFワールドツアーファイナルズ", result: "優勝" }
    ],
    sns: { instagram: "taitzuying" },
    instagramPostUrl: "https://www.instagram.com/p/C7X9z9RS9S9/",
    style: "Deceptive & Artistic",
    tags: ["コートの魔術師", "台湾の至宝"],
    country: "Taiwan",
    flag: "🇹🇼",
    category: "プロ / 女子シングルス",
    tier: "S",
    stats: { power: 80, speed: 88, technique: 100, stamina: 88, mentality: 92, defense: 94 },
    gear: {
      racket: { name: "VICTOR THRUSTER F CLAW", image: "/images/gear/ryuga2.png", description: "彼女の「魔法」を支える、独自の弾き性能を持つモデル。", link: getAmazonLink("VICTOR THRUSTER") },
      shoes: { name: "VICTOR P9200CC", image: "/images/gear/shb65z3.png", description: "唯一無二のフットワークを支える究極のクッション性。", link: getAmazonLink("VICTOR SHOES") }
    },
    bio: "女子シングルス界の「マジシャン」。教科書を無視した変幻自在なショットと、常人には真似できない手首の使い方は、バドミントンを芸術の域へと高めた。台湾が世界に誇る史上最高のテクニシャン。"
  },
  {
    id: "kodai-naraoka",
    name: "奈良岡 功大",

    rank: "Men's Singles World No.3",
    gender: "Male",
    team: "FWD日本",
    worldRank: "3",
    awards: [
      { year: "2023", event: "世界選手権", result: "銀メダル" },
      { year: "2023", event: "中国マスターズ", result: "優勝" }
    ],
    sns: {
      instagram: "kodai_.naraoka"
    },
    style: "Endless Rally",
    tags: ["粘りの鉄壁", "新時代の守護神"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 男子シングルス",
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
        link: getAmazonLink("YONEX ASTROX 99 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "長時間の激しい移動でも疲労を軽減し、安定したフットワークを支える定番モデル。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z 3"),
      },
    },
    bio: "異次元のスタミナと粘り強さで、世界ランク上位に降臨。どれだけ振られても球を拾い続けるその姿勢は、次世代のスタンダードを塗り替えた。",
  },
  {
    id: "akane-yamaguchi",
    name: "山口 茜",

    rank: "Women's Singles World No.2",
    gender: "Female",
    team: "再春館製薬所",
    worldRank: "2",
    awards: [
      { year: "2022", event: "世界選手権", result: "優勝" },
      { year: "2021", event: "世界選手権", result: "優勝" },
      { year: "2023", event: "全英オープン", result: "準優勝" }
    ],
    sns: {
      instagram: "akane.yamaguchi66",
      x: "akane71066"
    },
    style: "Dynamic & Persistent",
    tags: ["小さな巨人", "絶対的エース"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子シングルス",
    tier: "S",
    racketId: "astrox-100zz",
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
        link: getAmazonLink("YONEX ASTROX 100 ZZ"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "小柄な体格を活かした爆発的な動きを、多方向へのグリップ力で支援。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z 3"),
      },
    },
    bio: "バドミントン界の「小さな巨人」。無尽蔵の体力と、どんな体勢からでも打ち込む強打で世界を席巻し続ける、日本が誇る絶対的エース。",
  },
  {
    id: "kento-momota",
    name: "桃田 賢斗",

    rank: "World No.1 (Highest)",
    gender: "Male",
    team: "NTT東日本",
    worldRank: "Legacy",
    awards: [
      { year: "2019", event: "世界選手権", result: "優勝" },
      { year: "2018", event: "世界選手権", result: "優勝" },
      { year: "2019", event: "全英オープン", result: "優勝" }
    ],
    sns: {
      instagram: "momota_kento",
      youtube: "UC6u-vF_Iswc"
    },
    style: "Tactical & Defensive",
    tags: ["不屈の天才", "ヘアピンマスター"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 男子シングルス",
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
        description: "強力なパワーと緻密なコントロールを両立するフラッグシップ. ホワイトタイガーをモチーフにした伝説モデル。",
        link: getAmazonLink("ASTROX 99 Pro White Tiger"),
      },
      shoes: {
        name: "POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "彼の異次元のフットワークを支え続ける、バドミントンシューズの金字塔。",
        link: getAmazonLink("POWER CUSHION 65 Z"),
      },
    },
    bio: "日本人男子初のシングルス世界王者。精密なヘアピンや鉄壁のレシーブを武器に、ラリーを支配する「守備からの攻撃」が最大の特徴。",
  },
  {
    id: "tomoka-miyazaki",
    name: "宮崎 友花",

    rank: "World Junior Champion",
    gender: "Female",
    team: "柳井商工高校",
    worldRank: "25",
    awards: [
      { year: "2022", event: "世界ジュニア選手権", result: "優勝" },
      { year: "2024", event: "オルレアン・マスターズ", result: "優勝" }
    ],
    sns: {
      instagram: "tomoka_miyazaki_"
    },
    style: "Aggressive & Technical",
    tags: ["次世代のヒロイン", "天性のラケットワーク"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子シングルス",
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
        link: getAmazonLink("YONEX NANORAY 900"),
      },
      shoes: {
        name: "YONEX POWER CUSHION AERUS Z",
        image: "/images/gear/shoes-sara.png",
        description: "最軽量級の自重で、コート上でのステップをより軽快に、より速く進化させる。",
        link: getAmazonLink("YONEX AERUS Z"),
      },
    },
    bio: "世界ジュニアを制した次世代のヒロイン. しなやかなフォームから繰り出される多彩なショットで、シニアの舞台でも頭角を現している。",
  },
  {
    id: "kanta-tsuneyama",
    name: "常山 幹太",

    rank: "Men's Singles Pro",
    gender: "Male",
    team: "トナミ運輸",
    worldRank: "18",
    awards: [
      { year: "2021", event: "フランスオープン", result: "優勝" }
    ],
    style: "Solid & Balanced",
    tags: ["玄人好みの技巧派", "鉄壁のトナミ"],
    country: "Japan",
    flag: "🇯🇵",
    category: "実業団 / 男子シングルス",
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
        link: getAmazonLink("YONEX ASTROX 88 D PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z 3",
        image: "/images/gear/shb65z3.png",
        description: "プロの過酷な動きを支える信頼のクッション性. 確実な踏み込みを実現。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z 3"),
      },
    },
    bio: "実業団トップクラスの実力を誇るベテラン. 基本に忠実なプレースタイルと、粘り強いゲーム展開で若手の壁として立ちはだかる。",
  },
  {
    id: "hinata-takano",
    name: "髙野 日向",

    rank: "Rising Star",
    gender: "Male",
    team: "明治大学",
    worldRank: "120",
    awards: [
      { year: "2023", event: "インカレ", result: "ベスト4" }
    ],
    style: "Offensive Power",
    tags: ["ライジングスター", "稲妻のスマッシュ"],
    country: "Japan",
    flag: "🇯🇵",
    category: "NEXT GEN / 男子シングルス",
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
        link: getAmazonLink("YONEX ASTROX 77 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION ECLIPSION Z",
        image: "/images/gear/shoes-yuki.png",
        description: "激しいフットワークでもブレない安定性を追求. パワーを確実にコートに伝える。",
        link: getAmazonLink("YONEX ECLIPSION Z"),
      },
    },
    bio: "圧倒的なスピードとスマッシュの破壊力で注目される若手有望株. 果敢なプレースタイルで、日本の次世代を担う存在として期待されている。",
  },
  {
    id: "chiharu-shida",
    name: "志田 千陽",

    rank: "Women's Doubles World No.4",
    gender: "Female",
    team: "再春館製薬所",
    worldRank: "4",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "銅メダル" },
      { year: "2024", event: "全英オープン", result: "準優勝" }
    ],
    sns: {
      instagram: "chiharu_shida",
      x: "chiharushida"
    },
    partnerName: "松山 奈未",
    youtubeId: "W1T0h8c1v9U",
    instagramPostId: "C_W4WzYS8z-",
    style: "Speed & Artistic",
    tags: ["コートの妖精", "電光石火"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子ダブルス",
    tier: "S",
    stats: {
      power: 82,
      speed: 98,
      technique: 95,
      stamina: 90,
      mentality: 94,
      defense: 92,
    },
    gear: {
      racket: {
        name: "YONEX NANOFLARE 800 PRO",
        image: "/images/gear/nanoflare-800-pro.png",
        description: "極限の低空気抵抗を追求し、超高速ラリーを制する操作性を実現. 志田選手の電光石火েরプレーを支える。",
        link: getAmazonLink("YONEX NANOFLARE 800 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z WOMEN",
        image: "/images/gear/shb65z3.png",
        description: "オールラウンドな性能で、俊敏なステップワークと高い安定性を両立. コートの端まで瞬時にカバーする。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "世界を魅了する「シダマツ」ペアのスピードメーカー. 低空での高速ラリーと、相手の隙を突く予測力は世界屈指. 常に笑顔を絶やさないプレースタイルでファンを熱狂させる。",
  },
  {
    id: "nami-matsuyama",
    name: "松山 奈未",

    rank: "Women's Doubles World No.4",
    gender: "Female",
    team: "再春館製薬所",
    worldRank: "4",
    awards: [
      { year: "2024", event: "パリオリンピック", result: "銅メダル" },
      { year: "2024", event: "全英オープン", result: "準優勝" }
    ],
    sns: {
      instagram: "nami.matsuyama"
    },
    partnerName: "志田 千陽",
    style: "Aggressive & Balanced",
    tags: ["シダマツ", "超高速ドライブ"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子ダブルス",
    tier: "S",
    stats: {
      power: 88,
      speed: 92,
      technique: 94,
      stamina: 92,
      mentality: 95,
      defense: 96,
    },
    gear: {
      racket: {
        name: "YONEX NANOFLARE 700 PRO",
        image: "/images/gear/nanoflare-700-pro.png",
        description: "弾き性能と振り抜きやすさを極めた最新モデル. 後衛からの攻撃力と、前衛での繊細なタッチを両立させる。",
        link: getAmazonLink("YONEX NANOFLARE 700 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z WOMEN",
        image: "/images/gear/shb65z3.png",
        description: "長時間にわたるダブルスの激しい攻防を支える、抜群のクッション性とフィット感。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "「シダマツ」ペアの攻撃の要. 重厚なスマッシュと、鉄壁のディフェンスでラリーを支配. どんな劣勢でも最後までシャトルを追う粘り強さは、日本の女子ダブルスの伝統を体現している。",
  },
  {
    id: "takuro-hoki",
    name: "保木 卓朗",

    rank: "Men's Doubles World No.6",
    gender: "Male",
    team: "トナミ運輸",
    worldRank: "6",
    awards: [
      { year: "2021", event: "世界選手権", result: "優勝" },
      { year: "2024", event: "シンガポールオープン", result: "準優勝" }
    ],
    sns: {
      instagram: "takurohoki"
    },
    partnerName: "小林 優吾",
    style: "Power & Control",
    tags: ["閃光のドライブ", "トナミのエース"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 男子ダブルス",
    tier: "S",
    stats: {
      power: 96,
      speed: 90,
      technique: 92,
      stamina: 88,
      mentality: 94,
      defense: 90,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 100 ZZ",
        image: "/images/gear/astrox-100-zz.png",
        description: "連続強打を可能にするパワーと、緻密な操作性を生む極細シャフト. 保木選手の重い一撃を武器に変える。",
        link: getAmazonLink("YONEX ASTROX 100 ZZ"),
      },
      shoes: {
        name: "YONEX POWER CUSHION AERUS Z MEN",
        image: "/images/gear/shoes-yuta.png",
        description: "ヨネックス史上最軽量のバドミントンシューズ. コート上の第一歩をより速く、より鋭く. 俊敏性を極限まで高める。",
        link: getAmazonLink("YONEX POWER CUSHION AERUS Z"),
      },
    },
    bio: "男子ダブルス「ホキコバ」ペアの主将. 正確無比な配球と、会場を揺らすほどの重厚なスマッシュが武器. 世界選手権を制したその勝負強さは、日本男子の誇り。",
  },
  {
    id: "yugo-kobayashi",
    name: "小林 優吾",

    rank: "Men's Doubles World No.6",
    gender: "Male",
    team: "トナミ運輸",
    worldRank: "6",
    awards: [
      { year: "2021", event: "世界選手権", result: "優勝" }
    ],
    sns: {
      instagram: "kobayashi0710"
    },
    partnerName: "保木 卓朗",
    style: "Extreme Smash",
    tags: ["破壊の豪腕", "情熱のダイナモ"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 男子ダブルス",
    tier: "S",
    stats: {
      power: 100,
      speed: 92,
      technique: 88,
      stamina: 90,
      mentality: 92,
      defense: 88,
    },
    gear: {
      racket: {
        name: "YONEX DUORA Z-STRIKE",
        image: "/images/gear/astrox-100-zz.png",
        description: "フォアとバックで異なる形状を持つデュオラ. 小林選手の角度ある破壊的なスマッシュを最大化する設計。",
        link: getAmazonLink("YONEX DUORA Z-STRIKE"),
      },
      shoes: {
        name: "YONEX POWER CUSHION AERUS Z MEN",
        image: "/images/gear/shoes-yuta.png",
        description: "爆発的な加速を生み出す超軽量設計. 大きな歩幅での移動をサポートし、後衛からの攻撃的なフットワークを支える。",
        link: getAmazonLink("YONEX POWER CUSHION AERUS Z"),
      },
    },
    bio: "「ホキコバ」ペアが誇る世界最高峰のハードヒッター. 異次元の角度から突き刺さるスマッシュは、相手のガードを粉砕する. 情熱的なプレーでチームに活力を与えるダイナモ。",
  },
  {
    id: "kenta-nishimoto",
    name: "西本 拳太",

    rank: "Men's Singles World No.12",
    gender: "Male",
    team: "ジェイテクト",
    worldRank: "12",
    awards: [
      { year: "2023", event: "スペインマスターズ", result: "優勝" },
      { year: "2022", event: "ジャパンオープン", result: "優勝" }
    ],
    sns: {
      instagram: "nishimoto0830",
      x: "n_kenta0830"
    },
    style: "Relentless Persistence",
    tags: ["魂のスマッシュ", "不屈の精神"],
    country: "Japan",
    flag: "🇯🇵",
    category: "実業団 / 男子シングルス",
    tier: "S",
    stats: {
      power: 86,
      speed: 90,
      technique: 92,
      stamina: 98,
      mentality: 100,
      defense: 94,
    },
    gear: {
      racket: {
        name: "VICTOR THRUSTER RYUGA II PRO",
        image: "/images/gear/ryuga2.png",
        description: "破壊力抜群のヘッドヘビー設計. 西本選手の粘り強いラリーからの一撃必殺をサポートするパワーモデル。",
        link: getAmazonLink("VICTOR THRUSTER RYUGA II"),
      },
      shoes: {
        name: "VICTOR ALL-AROUND SHOES",
        image: "/images/gear/shb65z3.png",
        description: "安定性と反発力を兼ね備えたプロ仕様. 長時間、長距離を走り抜く過酷なシングルスに最適化されている。",
        link: getAmazonLink("VICTOR BADMINTON SHOES"),
      },
    },
    bio: "「不屈の闘志」を体現する日本のシングルスエース. どんな強敵に対しても最後まで食らいつく執念と、緻密なゲームメイクで勝利を手繰り寄せる. そのタフな精神は全プレーヤーの模範。",
  },
  {
    id: "aya-ohori",
    name: "大堀 彩",

    rank: "Women's Singles World No.9",
    gender: "Female",
    team: "トナミ運輸",
    worldRank: "9",
    awards: [
      { year: "2024", event: "タイマスターズ", result: "優勝" },
      { year: "2023", event: "アジア大会", result: "銅メダル" }
    ],
    sns: {
      instagram: "ayatoriiiii"
    },
    style: "Elegant Left-Hander",
    tags: ["クール・ビューティー", "華麗なるサウスポー"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子シングルス",
    tier: "S",
    racketId: "astrox-100zz",
    stats: {
      power: 84,
      speed: 88,
      technique: 96,
      stamina: 88,
      mentality: 92,
      defense: 90,
    },
    gear: {
      racket: {
        name: "YONEX NANORAY 900",
        image: "/images/gear/nanoray-900.png",
        description: "繊細なタッチと鋭い弾き. 左利きの独特な角度からのショットにさらなるキレを与えるテクニカルモデル。",
        link: getAmazonLink("YONEX NANORAY 900"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "信頼のフィット感とクッション性. 華麗なフットワークを足元から支え、正確なポジショニングを可能にする。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "サウスポーから繰り出される多彩なショットで世界を翻弄するクール・ビューティー. しなやかなフォームから放たれるクロススマッシュ and 精密なドロップは、芸術の域に達している。",
  },
  {
    id: "nozomi-okuhara",
    name: "奥原 希望",

    rank: "Former World Champion",
    gender: "Female",
    team: "太陽ホールディングス",
    worldRank: "15",
    awards: [
      { year: "2017", event: "世界選手権", result: "優勝" },
      { year: "2016", event: "リオオリンピック", result: "銅メダル" },
      { year: "2021", event: "全英オープン", result: "優勝" }
    ],
    sns: {
      instagram: "okuharanozomi",
      x: "nozomi_o11",
      youtube: "UC6u-vF_Iswc"
    },
    style: "Mobile Wall",
    tags: ["不動の精神", "無敵のステップ"],
    country: "Japan",
    flag: "🇯🇵",
    category: "実業団 / 女子シングルス",
    tier: "Legend",
    stats: {
      power: 78,
      speed: 100,
      technique: 98,
      stamina: 100,
      mentality: 100,
      defense: 100,
    },
    gear: {
      racket: {
        name: "MIZUNO ALTIUS 01 SPEED",
        image: "/images/gear/altius.png",
        description: "一瞬の反応を逃さない、超高速スウィングと正確なコントロールを実現. 奥原選手の「拾う」力を最大化。",
        link: getAmazonLink("MIZUNO ALTIUS 01 SPEED"),
      },
      shoes: {
        name: "MIZUNO WAVE FANG PRO",
        image: "/images/gear/wave-fang.png",
        description: "天然皮革による最高のフィット感と、爆発的な蹴り出し. 世界一とも言われる彼女のフットワークの根幹。",
        link: getAmazonLink("MIZUNO WAVE FANG PRO"),
      },
    },
    bio: "世界女王に上り詰めた「日本の宝」. 何度転んでも立ち上がり、シャトルを追い続ける姿は世界中の人の心を打った. その「奥原ステップ」は、バドミントンの歴史に刻まれている。",
  },
  {
    id: "arisa-higashino",
    name: "東野 有紗",

    rank: "Mixed Doubles World No.1",
    gender: "Female",
    team: "BIPROGY",
    worldRank: "1",
    awards: [
      { year: "2024", event: "全英オープン", result: "優勝" },
      { year: "2021", event: "東京オリンピック", result: "銅メダル" }
    ],
    sns: {
      instagram: "aripei.meee",
      x: "aripei_0801"
    },
    partnerName: "渡辺 勇大",
    style: "Jumping Smash & Reflex",
    tags: ["跳躍の豪腕", "超反応の狩人"],
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 混合ダブルス",
    tier: "S",
    stats: {
      power: 94,
      speed: 96,
      technique: 92,
      stamina: 90,
      mentality: 95,
      defense: 88,
    },
    gear: {
      racket: {
        name: "YONEX NANOFLARE 700",
        image: "/images/gear/nanoflare-700.png",
        description: "高次元の操作性とスピードを両立. コートを飛び回る東野選手のジャンピングスマッシュに鋭い弾きを与える。",
        link: getAmazonLink("YONEX NANOFLARE 700"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z WOMEN",
        image: "/images/gear/shb65z3.png",
        description: "瞬発的なスタートとストップを繰り返す、混合ダブルスの過酷な動きをサポート. 関節への衝撃をエネルギーに変える。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "ワタガシペアの「攻め」を象徴する. 女子プレーヤーとしては異例のジャンピングスマッシュで観客を圧倒. 前衛での超人的な反応速度は、世界中の強豪男子さえも震え上がらせる。",
  },
  {
    id: "yuki-fukushima",
    name: "福島 由紀",

    rank: "Women's Doubles Leader",
    gender: "Female",
    team: "岐阜Bluvic",
    worldRank: "10",
    awards: [
      { year: "2019", event: "世界選手権", result: "銀メダル" },
      { year: "2018", event: "世界選手権", result: "銀メダル" }
    ],
    sns: {
      instagram: "fukushimayuki_ga"
    },
    partnerName: "廣田 彩花",
    style: "Solid Iron Wall",
    tags: ["絶対防壁", "頼れる大黒柱"],
    country: "Japan",
    flag: "🇯🇵",
    category: "実業団 / 女子ダブルス",
    tier: "S",
    stats: {
      power: 88,
      speed: 86,
      technique: 92,
      stamina: 100,
      mentality: 98,
      defense: 100,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 88 D PRO",
        image: "/images/gear/astrox-88d-pro.png",
        description: "後衛での「決定力」を追求. 重いスマッシュを連続で打ち込むためのエネルギーを蓄える設計。",
        link: getAmazonLink("YONEX ASTROX 88 D PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "プロが選ぶ信頼の一足. 福島選手の力強い踏み込みと、長いラリーを支える究極のクッション性を提供。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "鉄壁のディフェンスを誇る女子ダブルスの大黒柱. どんな強打も無効化する防御力と、相手の体力を削る執拗なラリーは、世界のペアにとって悪夢そのもの. 日本代表を牽引する精神的支柱。",
  },
  {
    id: "daigo-tanioka",
    name: "谷岡 大后",

    rank: "Junior National Star",
    gender: "Male",
    team: "ふたば未来学園高校",
    worldRank: "Junior No.1",
    awards: [
      { year: "2023", event: "世界ジュニア選手権", result: "ベスト8" }
    ],
    style: "Balanced Tech",
    tags: ["次世代の旗手", "天才の系譜"],
    country: "Japan",
    flag: "🇯🇵",
    category: "NEXT GEN / 男子シングルス",
    tier: "Tier 2",
    stats: {
      power: 82,
      speed: 84,
      technique: 88,
      stamina: 85,
      mentality: 86,
      defense: 84,
    },
    gear: {
      racket: {
        name: "YONEX ARCSABER 11 PRO",
        image: "/images/gear/arcsaber-11-pro.png",
        description: "球持ちの良さと強烈なパワーを両立. 次世代を担う谷岡選手の、緻密かつ攻撃的なゲームスタイルを引き出す。",
        link: getAmazonLink("YONEX ARCSABER 11 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "世界のトッププレーヤーが愛用するオールラウンドモデル。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "ジュニア界から飛躍する、次世代シングルスの旗手. 卓越したテクニックと、安定したフットワークは同世代でも群を抜く. 世界ジュニアでの経験を糧に、シニアのトップ層を脅かす存在へ。",
  },
  {
    id: "yuta-okimoto",
    name: "沖本 優大",

    rank: "Rising Youth Talent",
    gender: "Male",
    team: "BIPROGY",
    worldRank: "Rising",
    awards: [
      { year: "2023", event: "全日本総合選手権", result: "準優勝" }
    ],
    style: "Smart Aggression",
    tags: ["新風の若武者", "変幻の頭脳"],
    country: "Japan",
    flag: "🇯🇵",
    category: "NEXT GEN / 男子シングルス",
    tier: "Tier 1",
    stats: {
      power: 90,
      speed: 94,
      technique: 88,
      stamina: 92,
      mentality: 90,
      defense: 86,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 77 PRO",
        image: "/images/gear/astrox-77-pro.png",
        description: "しなやかさと反発を高度に融合. 沖本選手のスピーディーな展開からの急襲を、より鋭く、より正確に具現化する。",
        link: getAmazonLink("YONEX ASTROX 77 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION AERUS Z",
        image: "/images/gear/shoes-yuta.png",
        description: "軽さを追求し、俊敏な反応を可能にするモデル. 若さ溢れるアグレッシブなプレーを、加速力でバックアップ。",
        link: getAmazonLink("YONEX POWER CUSHION AERUS Z"),
      },
    },
    bio: "型にハマらない自由な発想と、高い身体能力を併せ持つユース世代の期待. 劣勢からの一発で流れを変える勝負強さを持ち、日本のバドミントン界に新しい風を吹き込む若武者。",
  },
  {
    id: "kevin-sanjaya",
    name: "ケビン・サンジャヤ・スカムルジョ",

    rank: "Former Men's Doubles No.1",
    gender: "Male",
    team: "PB Djarum",
    worldRank: "Legacy",
    awards: [
      { year: "2018", event: "アジア大会", result: "金メダル" },
      { year: "2017", event: "BWFスーパーシリーズファイナルズ", result: "優勝" },
      { year: "2019", event: "全英オープン", result: "準優勝" }
    ],
    style: "God-like Reflexes",
    tags: ["煽る天才", "神殺しの前衛"],
    country: "Indonesia",
    flag: "🇮🇩",
    category: "プロ / 男子ダブルス",
    tier: "Legend",
    stats: {
      power: 85,
      speed: 100,
      technique: 100,
      stamina: 88,
      mentality: 95,
      defense: 92,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 88 S PRO",
        image: "/images/gear/astrox-88s-pro.png",
        description: "究極の前衛性能。ケビンの神速のタッチを支える、弾きとコントロールの極致。",
        link: getAmazonLink("YONEX ASTROX 88 S PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z",
        image: "/images/gear/shb65z3.png",
        description: "一瞬の判断をフットワークに変える、絶対的な信頼を誇る一足。",
        link: getAmazonLink("YONEX POWER CUSHION 65 Z"),
      },
    },
    bio: "「ミニオンズ」として世界を席巻した、インドネシアが生んだ史上最高の天才。前衛での予測能力と反射速度は他の追随を許さず、相手を翻弄するプレースタイルで一時代を築いた。",
  },
];

export const columns: Column[] = [
  {
    id: "legend-kevin-sanjaya",
    title: "煽る天才、愛される異端：ケビン・サンジャヤ・スカムルジョの軌跡",
    date: "2026.02.26",
    category: "LEGEND",
    author: "Badminton Portal Editorial",

    excerpt: "「ミニオンズ」の爆誕から黄金時代へ。相手の精神を削り、観客を狂喜させた稀代の天才が残したもの。",
    content: `
## 「最速」を超えた「神速」の前衛

バドミントン男子ダブルスの歴史は、マーカス・フェルナルディ・ギデオンとケビン・サンジャヤ・スカムルジョという「ミニオンズ」の登場によって塗り替えられた。中でもケビンの前衛は、もはや物理法則を無視しているかのような反応速度だった。

相手のドライブをネット際で叩き落とすのではない。相手が打とうとした瞬間に、既にラケットがそこにある。この「予知」に近い読みと、170cmという小柄な体格を補って余りある爆発的な反射神経は、ダブルスの概念そのものを変えてしまった。

## 「煽り」の裏に隠された冷徹な計算

ケビンを象徴するのが、時折見せる相手を挑発するような仕草や、ラケットを振らずにシャトルを見送るような「不遜な」振る舞いだ。しばしば物議を醸したが、これすらも彼の戦術の一部であったことは間違いいない。

バドミントンは精神のスポーツだ。一瞬の苛立ちがショットの精度を狂わせ、一手の迷いが致命的な隙を生む。ケビンは、自らが「悪役」を買って出ることで相手の平常心を奪い、その隙を必殺のカウンターで仕留める。彼はコート全体を支配する演出家だった。

## インドネシアが愛した「魂（ソウル）」

なぜ、これほどまでに生意気で、時に傲慢に見えるプレーヤーが、インドネシアで英雄として愛されるのか。それは、彼が誰よりもバドミントンを「遊んでいた」からだ。

圧倒的な圧力の中でさえ、トリッキーなショットで遊び、局面を楽しんでみせる。その姿は、かつて竹のラケットを握っていたインドネシアの子供たちの夢そのものだった。「教科書通りでなくていい、楽しめ。そして勝て」。ケビン・サンジャヤが残したこの強烈なメッセージは、次世代のプレーヤーたちの指針として、これからもインドネシアのコートに鳴り響き続けるだろう。
    `,
  },
  {
    id: "indonesia-national-sport",
    title: "なぜバドミントンはインドネシアの「国技」なのか：魂を揺さぶる歴史の深層",
    date: "2026.02.26",
    category: "HISTORY",
    author: "Badminton Portal Editorial",

    excerpt: "1992年バルセロナ。あの時、島国は揺れた。バドミントンが単なるスポーツを超え、民族の誇りとなった歴史的背景を紐解く。",
    content: `
## バルセロナに降り立った一対の「神」

1992年8月4日。バルセロナ・オリンピックのバドミントン会場は、異様な熱気に包まれていた。混合ダブルスではない。男子シングルスのアラン・ブディクスマと、女子シングルスのスシ・スサンティ。後に結婚し「ゴールデン・カップル」と呼ばれる二人が、同日にインドネシア初となるオリンピック金メダルをもたらした瞬間だ。

当時、長い植民地支配と混迷を極めた経済状況にあったインドネシアにとって、この金メダルは単なる銀盤の追加ではなかった。それは「我々は世界で一番になれる」という、民族の自尊心が初めて結実した歴史的転換点だったのだ。

## 植民地からの解放と「シャトルの舞」

インドネシアにおけるバドミントンの歴史は、オランダ統治時代に遡る。イギリスからもたらされたこのスポーツは、ジャワ島の裏路地（カンポン）へと広がり、竹のラケットと手作りのシャトルで遊ぶ子供たちの間で独自の進化を遂げた。

土地が狭く、設備が限られていたとしても、一本のネット（あるいは紐）さえあれば始められる。この手軽さが、多様な民族が暮らす島々の共通言語となった。1950年代、初めてトマス杯（男子団体戦）を制したとき、バドミントンは名実ともにインドネシアのアイデンティティとなった。

## 1万7000の島々を繋ぐ「唯一の誇り」

現在でも、バドミントンの主要大会が開催されると、ジャカルタのセナヤン・バドミントン・ホール（現イストラ・セナヤン）は地鳴りのような「エア（合唱）」と「イ・ア・イ・ア」という歓声に包まれる。

政治、言語、宗教が多様なこの国において、バドミントンは唯一、国民全員が同じ方向を向ける魔法の杖だ。道端の市場でも、高級ホテルのロビーでも、トッププレーヤーの試合は人々を釘付けにする。この国にとってバドミントンは、汗を流す競技である以上に、生きる希望そのものなのである。
    `,
  },
  {
    id: "indonesia-playstyle-essence",
    title: "「美学」が支配するコート：インドネシア流プレイスタイルの真髄",
    date: "2026.02.26",
    category: "TACTICS",
    author: "Badminton Portal Editorial",

    excerpt: "手首を殺し、相手を欺く。教科書にはない「創造性」を土壌にするインドネシアンスタイルの正体とは。",
    content: `
## 理屈を超えた「リストワーク」の魔法

多くの国が「フィジカル」と「効率」を追求する中で、インドネシアの選手だけは異なる次元でシャトルを扱っているように見える。その最たるものが、変幻自在なリストワークだ。

テイクバックを極限まで小さくし、インパクトの瞬間までコースを悟らせない。ネット前でシャトルを「置く」のではなく、あたかも手品のように「消す」ヘアピン。この技術は、幼少期から草の根の狭いコートで、いかに相手の逆を突くかを遊びの中で学んできた「創造性」の産物である。

## タウフィク・ヒダヤット：天才の系譜

インドネシア流の「美」を完成させた男といえば、タウフィク・ヒダヤットを外すことはできない。彼のバックハンド・スマッシュは伝説だが、本質はその「冷静な残虐性」にある。

フルパワーで打つのではなく、相手が一番嫌がる場所へ、一番嫌がるタイミングでシャトルを放り込む。そのエレガントな立ち振る舞いは、後の多くの選手たちに「力で制するのではなく、技で選らす」というスタイルを植え付けた。

## 育成システム：型を教えず、感覚を育む

インドネシアの育成機関であるPBジャラムなどのクラブでは、過度な型（フォーム）の強制を行わないことで知られる。まず「シャトルを打つ楽しさ」と「相手を騙す快感」を刷り込み、その後に必要なフィジカルを肉付けしていく。

この「感覚ファースト」の教育が、後にヘンドラ・セティアワンのような「コートの囲碁師」や、渡辺勇大選手も憧れたという変幻自在なプレーを生み出している。バドミントンは計算ではなく、表現なのだ。彼らのプレーがこれほどまでに観客を魅了するのは、それが単なるスポーツの枠を超えた「芸術」だからに他ならない。
    `,
  },
  {
    id: "all-england-2026-vol1",
    title: "【全英OP特集 Vol.1】100年を超える歴史と伝統。バドミントン界の「聖地」を知る",
    date: "2026.03.03",
    category: "全英OP特集",
    author: "THE COURT Editorial Team",
    excerpt: "今週から4週にわたり、この格式高き大会の魅力と、2026年大会の熱狂をお届けします。",
    content: "バドミントン競技において、世界選手権やオリンピックと同等、あるいはそれ以上の権威を持つと言われるのが「全英オープン（YONEX All England Open Badminton Championships）」です。1899年に第1回大会が開催されて以来、100年以上の歴史を誇るこの大会は、まさにバドミントン界の「聖地」。BWFワールドツアー最高峰のSuper 1000に位置づけられ、選ばれしトッププレイヤーのみがそのグレーとグリーンの伝統的なコートに立つことを許されます。今週から4週にわたり、この格式高き大会の魅力と、2026年大会の熱狂をお届けします。",
  }
];

export const news: News[] = [
  {
    id: "news-8",
    date: "2026.02.27",
    title: "【注目】全英オープン2026：渡辺・田口の新ペアが最高峰の舞台へ挑戦！",
    category: "TOURNAMENT",
    content: "3月3日から開催されるバドミントンの聖地・全英オープン。混合ダブルスで新たにペアを結成した渡辺勇大・田口真彩ペアが出場予定です。強豪ひしめく最高峰の舞台で、どのようなプレーを見せてくれるのか世界中から熱い視線が注がれています。",
    relatedPlayerIds: ["yuta-watanabe", "maya-taguchi"]
  },
  {
    id: "news-7",
    date: "2026.02.15",
    title: "YONEX 待望の新作「ASTROX 88S/D PRO 3rd Gen」発売決定",
    category: "GEAR",
    content: "前衛・後衛それぞれの役割に特化した名器が第3世代へ進化。ケビン選手、ギデオン選手らも開発に携わった究極のダブルスモデル。",
    relatedPlayerIds: ["kevin-sanjaya"]
  },
  {
    id: "news-6",
    date: "2026.01.20",
    title: "マレーシアオープン2026、山口茜選手が準優勝の好発進",
    category: "TOURNAMENT",
    content: "シーズン開幕戦となったマレーシアオープン。山口選手は決勝で惜しくもアン・セヨン選手に敗れたものの、盤石の強さを見せた。",
    results: [
      { round: "Final", opponent: "An Se-young (KOR)", score: "18-21, 21-19, 15-21", isWin: false },
      { round: "Semi-Final", opponent: "Tai Tzu-ying (TPE)", score: "21-14, 21-16", isWin: true }
    ],
    relatedPlayerIds: ["akane-yamaguchi", "an-se-young", "tai-tzu-ying"]
  },
  {
    id: "news-5",
    date: "2025.12.15",
    title: "2025年 年間最終世界ランキング発表：日本勢3種目でTOP3を維持",
    category: "TOPIC",
    content: "BWFが発表した2025年最終ランキング。女子ダブルス「シダマツ」ペア、混合ダブルス「ワタガシ」ペアらが上位を独占。",
    relatedPlayerIds: ["chiharu-shida", "nami-matsuyama", "yuta-watanabe"]
  },
  {
    id: "news-4",
    date: "2025.11.23",
    title: "熊本マスターズジャパン2025、志田・松山ペアが地元で金メダル",
    category: "TOURNAMENT",
    content: "超満員の観衆の中、再春館製薬所の地元・熊本で開催。シダマツペアが気迫のプレーで中国ペアを破り、見事優勝を飾った。",
    results: [
      { round: "Final", opponent: "Liu / Tan (CHN)", score: "21-18, 21-15", isWin: true },
      { round: "Semi-Final", opponent: "Baek / Lee (KOR)", score: "15-21, 21-18, 23-21", isWin: true }
    ],
    relatedPlayerIds: ["chiharu-shida", "nami-matsuyama"]
  },
  {
    id: "news-3",
    date: "2025.08.30",
    title: "世界選手権2025閉幕：奈良岡功大が男子シングルスで初の銀メダル",
    category: "TOURNAMENT",
    content: "パリ五輪を経てさらに進化した奈良岡選手。決勝でビクター・アクセルセン選手と歴史に残る100分超えの死闘を繰り広げた。",
    results: [
      { round: "Final", opponent: "Viktor Axelsen (DEN)", score: "21-19, 18-21, 15-21", isWin: false },
      { round: "Semi-Final", opponent: "Kunlavut Vitidsarn (THA)", score: "21-14, 21-12", isWin: true }
    ],
    relatedPlayerIds: ["kodai-naraoka", "viktor-axelsen"]
  }
];

export const worldRankings: CategoryRankings = {
  ms: [
    { rank: 1, name: "Viktor Axelsen", team: "DEN", points: "115,400", change: "none", flag: "🇩🇰" },
    { rank: 2, name: "Shi Yu Qi", team: "CHN", points: "102,400", change: "none", flag: "🇨🇳" },
    { rank: 3, name: "Jonatan Christie", team: "INA", points: "98,200", change: "up", flag: "🇮🇩" },
    { rank: 4, name: "奈良岡 功大", team: "JPN", points: "96,500", change: "down", flag: "🇯🇵" },
    { rank: 5, name: "Anthony Ginting", team: "INA", points: "92,100", change: "none", flag: "🇮🇩" },
  ],
  ws: [
    { rank: 1, name: "An Se-young", team: "KOR", points: "118,500", change: "none", flag: "🇰🇷" },
    { rank: 2, name: "Chen Yu Fei", team: "CHN", points: "105,200", change: "none", flag: "🇨🇳" },
    { rank: 3, name: "Tai Tzu-ying", team: "TPE", points: "97,800", change: "up", flag: "🇹🇼" },
    { rank: 4, name: "山口 茜", team: "JPN", points: "94,200", change: "down", flag: "🇯🇵" },
    { rank: 5, name: "Carolina Marin", team: "ESP", points: "91,500", change: "none", flag: "🇪🇸" },
  ],
  md: [
    { rank: 1, name: "Liang W.K. / Wang C.", team: "CHN", points: "101,200", change: "none", flag: "🇨🇳" },
    { rank: 2, name: "Kang M.H. / Seo S.J.", team: "KOR", points: "98,500", change: "up", flag: "🇰🇷" },
    { rank: 3, name: "Satwiksairaj / Chirag", team: "IND", points: "97,100", change: "down", flag: "🇮🇳" },
    { rank: 4, name: "保木 卓朗 / 小林 優吾", team: "JPN", points: "92,400", change: "none", flag: "🇯🇵" },
    { rank: 5, name: "Chia / Soh", team: "MAS", points: "90,100", change: "none", flag: "🇲🇾" },
  ],
  wd: [
    { rank: 1, name: "Chen Q.C. / Jia Y.F.", team: "CHN", points: "116,400", change: "none", flag: "🇨🇳" },
    { rank: 2, name: "Baek H.N. / Lee S.H.", team: "KOR", points: "102,100", change: "none", flag: "🇰🇷" },
    { rank: 3, name: "Liu S.S. / Tan N.", team: "CHN", points: "98,700", change: "up", flag: "🇨🇳" },
    { rank: 4, name: "志田 千陽 / 松山 奈未", team: "JPN", points: "96,200", change: "down", flag: "🇯🇵" },
    { rank: 5, name: "Jeong N.E. / Kim H.J.", team: "KOR", points: "94,100", change: "none", flag: "🇰🇷" },
  ],
  xd: [
    { rank: 1, name: "Zheng S.W. / Huang Y.Q.", team: "CHN", points: "120,400", change: "none", flag: "🇨🇳" },
    { rank: 2, name: "Feng Y.Z. / Huang D.P.", team: "CHN", points: "108,200", change: "none", flag: "🇨🇳" },
    { rank: 3, name: "Seo S.J. / Chae Y.J.", team: "KOR", points: "101,500", change: "none", flag: "🇰🇷" },
    { rank: 4, name: "渡辺 勇大 / 田口 真彩", team: "JPN", points: "98,700", change: "up", flag: "🇯🇵" },
    { rank: 5, name: "Dechapol / Sapsiree", team: "THA", points: "95,400", change: "down", flag: "🇹🇭" },
  ],
};

export const domesticRankings: CategoryRankings = {
  ms: [
    { rank: 1, name: "奈良岡 功大", team: "FWDグループ", points: "JPN 1", change: "none", flag: "🇯🇵" },
    { rank: 2, name: "西本 拳太", team: "JTEKT", points: "JPN 2", change: "none", flag: "🇯🇵" },
    { rank: 3, name: "渡邉 航貴", team: "BIPROGY", points: "JPN 3", change: "up", flag: "🇯🇵" },
    { rank: 4, name: "常山 明良", team: "JTEKT", points: "JPN 4", change: "none", flag: "🇯🇵" },
    { rank: 5, name: "桃田 賢斗", team: "NTT東日本", points: "Legacy", change: "none", flag: "🇯🇵" },
  ],
  ws: [
    { rank: 1, name: "山口 茜", team: "再春館製薬所", points: "JPN 1", change: "none", flag: "🇯🇵" },
    { rank: 2, name: "大堀 彩", team: "トナミ運輸", points: "JPN 2", change: "none", flag: "🇯🇵" },
    { rank: 3, name: "奥原 希望", team: "太陽ホールディングス", points: "JPN 3", change: "up", flag: "🇯🇵" },
    { rank: 4, name: "仁平 菜月", team: "ヨネックス", points: "JPN 4", change: "none", flag: "🇯🇵" },
    { rank: 5, name: "宮崎 友花", team: "柳井商工高校", points: "Rising", change: "up", flag: "🇯🇵" },
  ],
  md: [
    { rank: 1, name: "保木 / 小林", team: "トナミ運輸", points: "JPN 1", change: "none", flag: "🇯🇵" },
    { rank: 2, name: "古賀 / 齋藤", team: "NTT東日本", points: "JPN 2", change: "up", flag: "🇯🇵" },
    { rank: 3, name: "岡村 / 三橋", team: "BIPROGY", points: "JPN 3", change: "down", flag: "🇯🇵" },
    { rank: 4, name: "竹内 / 松居", team: "日立情報通信エンジニアリング", points: "JPN 4", change: "none", flag: "🇯🇵" },
    { rank: 5, name: "西本 / 高野", team: "Various", points: "JPN 5", change: "none", flag: "🇯🇵" },
  ],
  wd: [
    { rank: 1, name: "志田 / 松山", team: "再春館製薬所", points: "JPN 1", change: "none", flag: "🇯🇵" },
    { rank: 2, name: "松本 / 永原", team: "北都銀行", points: "JPN 2", change: "none", flag: "🇯🇵" },
    { rank: 3, name: "櫻本 / 宮浦", team: "ヨネックス", points: "JPN 3", change: "up", flag: "🇯🇵" },
    { rank: 4, name: "中西 / 岩永", team: "BIPROGY", points: "JPN 4", change: "down", flag: "🇯🇵" },
    { rank: 5, name: "福島 / 廣田", team: "丸杉", points: "JPN 5", change: "none", flag: "🇯🇵" },
  ],
  xd: [
    { rank: 1, name: "渡辺 / 田口", team: "BIPROGY/ACT SAIKYO", points: "JPN 1", change: "none", flag: "🇯🇵" },
    { rank: 2, name: "金子 / 松友", team: "BIPROGY", points: "JPN 2", change: "none", flag: "🇯🇵" },
    { rank: 3, name: "緑川 / 齋藤", team: "NTT東日本", points: "JPN 3", change: "up", flag: "🇯🇵" },
    { rank: 4, name: "山下 / 篠谷", team: "NTT東日本", points: "JPN 4", change: "none", flag: "🇯🇵" },
    { rank: 5, name: "江藤 / 霜上", team: "Various", points: "JPN 5", change: "none", flag: "🇯🇵" },
  ],
};



export const gears: Gear[] = [
  {
    id: "astrox-88d-pro",
    name: "YONEX ASTROX 88 D PRO (3rd Gen)",
    brand: "YONEX",
    category: "RACKET",
    description: "破壊的な後衛からの連打を可能にする、ダブルス専用パワーモデルの最新第3世代。",
    price: "¥25,000〜",
    usedBy: ["liang-wang", "kanta-tsuneyama", "yuki-fukushima"],
    image: "/images/gear/astrox-88d-pro.png"
  },
  {
    id: "astrox-88s-pro",
    name: "YONEX ASTROX 88 S PRO (3rd Gen)",
    brand: "YONEX",
    category: "RACKET",
    description: "究極の前衛卓越モデル。球持ちと弾きを両立し、神速のタッチを生み出す。",
    price: "¥25,000〜",
    usedBy: ["kevin-sanjaya"],
    image: "/images/gear/astrox-88s-pro.png"
  },
  {
    id: "astrox-100zz",
    name: "YONEX ASTROX 100 ZZ",
    brand: "YONEX",
    category: "RACKET",
    description: "鋭い連続強打を生み出すハイエンドモデル。細径シャフトによる規格外のしなりが特徴。",
    price: "¥28,000〜",
    usedBy: ["viktor-axelsen", "akane-yamaguchi", "takuro-hoki"],
    image: "/images/gear/astrox-100-zz.png"
  },
  {
    id: "nanoflare-700-pro",
    name: "YONEX NANOFLARE 700 PRO",
    brand: "YONEX",
    category: "RACKET",
    description: "高次元の操作性とスピードを両立。コートを自在に飛び回るためのクリアな打球感。",
    price: "¥24,000〜",
    usedBy: ["nami-matsuyama", "dechapol-sapsiree", "arisa-higashino"],
    image: "/images/gear/nanoflare-700-pro.png"
  },
  {
    id: "nanoflare-1000z",
    name: "YONEX NANOFLARE 1000Z",
    brand: "YONEX",
    category: "RACKET",
    description: "最速の初速とパワーを誇る弾き系フラッグシップ。強烈な弾道でラリーを圧倒する。",
    price: "¥29,000〜",
    usedBy: [],
    image: "/images/gear/nanoflare-700.png"
  },
  {
    id: "arcsaber-11-pro",
    name: "YONEX ARCSABER 11 PRO",
    brand: "YONEX",
    category: "RACKET",
    description: "比類なき球持ちの良さ。緻密なコントロールでゲームを支配するプレーメイカー向け。",
    price: "¥26,000〜",
    usedBy: ["daigo-tanioka"],
    image: "/images/gear/arcsaber-11-pro.png"
  },
  {
    id: "thruster-ryuga-2",
    name: "VICTOR THRUSTER RYUGA II PRO",
    brand: "VICTOR",
    category: "RACKET",
    description: "極端なヘッドヘビーが放つ重砲。後衛から相手を制圧するための強烈なスマッシュをアシスト。",
    price: "¥24,000〜",
    usedBy: ["kenta-nishimoto", "tai-tzu-ying"],
    image: "/images/gear/ryuga2.png"
  },
  {
    id: "lining-aeronaut-9000c",
    name: "LI-NING AERONAUT 9000C",
    brand: "LI-NING",
    category: "RACKET",
    description: "風を切り裂くエアロフレーム。スピードと破壊力を併せ持つ、トップ選手特注モデル。",
    price: "¥27,000〜",
    usedBy: ["yuta-watanabe", "anthony-ginting"],
    image: "/images/gear/racket-yuta.png"
  },
  {
    id: "shb65z3",
    name: "YONEX POWER CUSHION 65 Z3",
    brand: "YONEX",
    category: "SHOES",
    description: "プロ選手から最も選ばれる完成されたオールラウンダー。高いグリップ力とクッション性。",
    price: "¥15,000〜",
    usedBy: ["viktor-axelsen", "kodai-naraoka", "akane-yamaguchi", "liang-wang"],
    image: "/images/gear/shb65z3.png"
  },
  {
    id: "aerus-z",
    name: "YONEX POWER CUSHION AERUS Z",
    brand: "YONEX",
    category: "SHOES",
    description: "ヨネックス史上最軽量。超機敏なステップを可能にするスピード重視のフットワークギア。",
    price: "¥16,000〜",
    usedBy: ["an-se-young", "tomoka-miyazaki", "takuro-hoki", "yuta-okimoto"],
    image: "/images/gear/shoes-yuta.png"
  },
  {
    id: "lining-bladed-2",
    name: "LI-NING BLADED 2.0",
    brand: "LI-NING",
    category: "SHOES",
    description: "異次元の瞬発力と爆発的な加速を支える。超軽量でいて安定したフィット感を提供。",
    price: "¥18,000〜",
    usedBy: ["yuta-watanabe", "anthony-ginting"],
    image: "/images/gear/shoes-yuta.png"
  },
  {
    id: "exobolt-63",
    name: "YONEX EXBOLT 63",
    brand: "YONEX",
    category: "STRINGS",
    description: "高反発「エクスボルト」の極細0.63mm。圧倒的な弾き音とスピードでシャトルを飛ばす。",
    price: "¥1,300〜",
    usedBy: [],
    image: "/images/gear/placeholder.png"
  },
  {
    id: "aerobite",
    name: "YONEX AEROBITE",
    brand: "YONEX",
    category: "STRINGS",
    description: "ハイブリッドストリングの王道。強烈なスピンと食いつきでヘアピンの精度が劇的に向上。",
    price: "¥1,500〜",
    usedBy: [],
    image: "/images/gear/placeholder.png"
  }
];

export const tournaments: Tournament[] = [
  {
    id: "all-england-2026",
    name: "YONEX All England Open Badminton Championships 2026",
    date: "2026.03.03 - 2026.03.08",
    location: "Birmingham, UK",
    category: "BWF Super 1000",
    status: "Upcoming",
    description: "世界最古・最も権威あるバドミントントーナメント。選ばれしトッププレーヤーのみが集う「聖地」での決戦。"
  },
  {
    id: "thomas-uber-2026",
    name: "TotalEnergies BWF Thomas & Uber Cup Finals 2026",
    date: "2026.04.28 - 2026.05.05",
    location: "Horsens, Denmark",
    category: "Major Event",
    status: "Upcoming",
    description: "2年に1度開催される男女の国別対抗戦。各国のプライドをかけた熱き団体戦が幕を開ける。"
  },
  {
    id: "malaysia-open-2026",
    name: "PETRONAS Malaysia Open 2026",
    date: "2026.01.06 - 2026.01.11",
    location: "Kuala Lumpur, Malaysia",
    category: "BWF Super 1000",
    status: "Finished",
    description: "シーズンの幕開けを告げるスーパー1000大会。熱狂的な地元ファンの大歓声の中で新年の初陣を飾る。"
  },
  {
    id: "japan-open-2026",
    name: "DAIHATSU Japan Open 2026",
    date: "2026.08.18 - 2026.08.23",
    location: "Yokohama, Japan",
    category: "BWF Super 750",
    status: "Upcoming",
    description: "日本国内で開催される最大の国際大会。自国開催のプレッシャーの中、日本代表選手の活躍が期待される。"
  },
  {
    id: "all-japan-2026",
    name: "第80回 全日本総合バドミントン選手権大会",
    date: "2026.12.22 - 2026.12.27",
    location: "Tokyo, Japan",
    category: "Domestic",
    status: "Upcoming",
    description: "日本一を決める国内最高峰の大会。国内外で活躍するトップ選手から新世代までが集結し、真の日本一を競う。"
  },
  {
    id: "world-tour-finals-2026",
    name: "HSBC BWF World Tour Finals 2026",
    date: "2026.12.09 - 2026.12.13",
    location: "Hangzhou, China",
    category: "Major Event",
    status: "Upcoming",
    description: "年間ツアーランキング上位8名/ペアのみに出場権が与えられる、1年を締めくくる頂上決戦。"
  }
];

export const circles: Circle[] = [
  {
    id: "tokyo-smashers",
    name: "Tokyo Neo Smashers",
    location: "Tokyo",
    level: "Intermediate",
    schedule: "毎週水曜・土曜 19:00 - 21:00",
    description: "都内を中心に活動する20代〜30代の社会人サークル。基礎打ちからダブルスのゲーム練習まで幅広く行っています。基礎が打てる方、楽しく真剣に打ち合える方を募集中。",
    recruiting: true
  },
  {
    id: "osaka-advance",
    name: "Osaka Advance BC",
    location: "Osaka",
    level: "Advanced",
    schedule: "毎週日曜 13:00 - 17:00",
    description: "市民大会の1部・2部出場者が中心のガチ勢サークル。高いレベルでバドミントンを追求したい競技思考の方大歓迎です。",
    recruiting: false
  },
  {
    id: "fukuoka-wings",
    name: "Fukuoka Wings",
    location: "Fukuoka",
    level: "All",
    schedule: "隔週木曜・毎週日曜 18:00 - 21:00",
    description: "初心者から上級者まで一緒に楽しめるアットホームなサークル。ワイワイ楽しく羽を打つことをモットーにしており、ラケットの貸し出しもあります。",
    recruiting: true
  },
  {
    id: "yokohama-clear",
    name: "Yokohama Clear Points",
    location: "Kanagawa",
    level: "Intermediate",
    schedule: "毎週火曜・金曜 19:30 - 21:30",
    description: "横浜市内の体育館を中心に活動中。基礎打ちの後、男女混合でダブルスの試合を回しています。運動不足解消にも最適です。",
    recruiting: true
  },
  {
    id: "nagoya-drop",
    name: "Nagoya Drop Shots",
    location: "Aichi",
    level: "Beginner",
    schedule: "毎週土曜 10:00 - 13:00",
    description: "最近バドミントンを始めたばかりの方、もう一度基礎から習いたい方を対象にした練習メインのサークルです。コーチ経験者が優しく教えます。",
    recruiting: true
  },
  {
    id: "sapporo-snow",
    name: "Sapporo Snow Shuttles",
    location: "Hokkaido",
    level: "Intermediate",
    schedule: "毎週水曜 19:00 - 21:00",
    description: "冬の寒さにも負けず毎週元気に活動中！学生から社会人まで幅広い年齢層が参加しています。たまに合宿や飲み会も開催します。",
    recruiting: false
  },
  {
    id: "sendai-drive",
    name: "Sendai Drive Core",
    location: "Miyagi",
    level: "Advanced",
    schedule: "毎週金曜・日曜 18:00 - 21:00",
    description: "東北エリアの大会上位進出を目指す競技向けチーム。フットワークやパターン練習など実戦を想定したハードなメニューが中心です。",
    recruiting: true
  }
];
