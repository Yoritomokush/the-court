export interface Player {
  id: string;
  name: string;
  image: string;
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
  tier?: string;
  partnerName?: string;
  youtubeId?: string;
  instagramPostId?: string;
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
}

export interface Column {
  id: string;
  title: string;
  date: string;
  category: "TACTICS" | "HISTORY" | "LEGEND";
  author: string;
  image: string;
  excerpt: string;
  content: string;
  relatedPlayerIds?: string[];
}

const AFFILIATE_ID = "yoritomo04-22";

/**
 * Creates a localized Amazon Japan search link with affiliate ID.
 */
const getAmazonLink = (query: string): string => {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&tag=${AFFILIATE_ID}`;
};

export const players: Player[] = [
  {
    id: "yuta-watanabe",
    name: "渡辺 勇大",
    image: "/images/players/yuta-watanabe.png",
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
    partnerName: "東野 有紗",
    youtubeId: "o6u-vF_Iswc",
    instagramPostId: "C8P9z9RS9M9",
    style: "Deceptive & Creative",
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
    bio: "混合ダブルスで世界を席巻する日本の天才。その独創的なラケットワークと、相手の虚を突く配球は「魔法」と称される。",
  },
  {
    id: "kodai-naraoka",
    name: "奈良岡 功大",
    image: "/images/players/kodai-naraoka.png",
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
    image: "/images/players/akane-yamaguchi.png",
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
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子シングルス",
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
    image: "/images/players/kento-momota.png",
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
    image: "/images/players/tomoka-miyazaki.png",
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
    image: "/images/players/kanta-tsuneyama.png",
    rank: "Men's Singles Pro",
    gender: "Male",
    team: "トナミ運輸",
    worldRank: "18",
    awards: [
      { year: "2021", event: "フランスオープン", result: "優勝" }
    ],
    style: "Solid & Balanced",
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
    image: "/images/players/hinata-takano.png",
    rank: "Rising Star",
    gender: "Male",
    team: "明治大学",
    worldRank: "120",
    awards: [
      { year: "2023", event: "インカレ", result: "ベスト4" }
    ],
    style: "Offensive Power",
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
    image: "/images/players/chiharu-shida.jpg",
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
    image: "/images/players/nami-matsuyama.jpg",
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
    image: "/images/players/takuro-hoki.jpg",
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
    image: "/images/players/yugo-kobayashi.jpg",
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
    image: "/images/players/kenta-nishimoto.jpg",
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
    image: "/images/players/aya-ohori.jpg",
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
    country: "Japan",
    flag: "🇯🇵",
    category: "国内代表 / 女子シングルス",
    tier: "S",
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
    image: "/images/players/nozomi-okuhara.jpg",
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
    image: "/images/players/arisa-higashino.jpg",
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
    image: "/images/players/yuki-fukushima.jpg",
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
    image: "/images/players/daigo-tanioka.jpg",
    rank: "Junior National Star",
    gender: "Male",
    team: "ふたば未来学園高校",
    worldRank: "Junior No.1",
    awards: [
      { year: "2023", event: "世界ジュニア選手権", result: "ベスト8" }
    ],
    style: "Balanced Tech",
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
    image: "/images/players/yuta-okimoto.jpg",
    rank: "Rising Youth Talent",
    gender: "Male",
    team: "BIPROGY",
    worldRank: "Rising",
    awards: [
      { year: "2023", event: "全日本総合選手権", result: "準優勝" }
    ],
    style: "Smart Aggression",
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
    image: "/images/players/kevin-sanjaya.jpg",
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
    image: "/images/columns/kevin-sanjaya.jpg",
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
    image: "/images/columns/indonesia-gold.jpg",
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
    image: "/images/columns/indonesia-netplay.jpg",
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
];

export const news: News[] = [
  {
    id: "news-8",
    date: "2026.02.26",
    title: "【速報】全英オープン2026開幕直前！日本勢のドローが発表",
    category: "TOURNAMENT",
    content: "バドミントンの聖地で開催される全英オープン。連覇を狙う渡辺・東野ペア、そして復活を期す奈良岡選手の初戦の相手が決定した。",
  },
  {
    id: "news-7",
    date: "2026.02.15",
    title: "YONEX 待望の新作「ASTROX 88S/D PRO 3rd Gen」発売決定",
    category: "GEAR",
    content: "前衛・後衛それぞれの役割に特化した名器が第3世代へ進化。ケビン選手、ギデオン選手らも開発に携わった究極のダブルスモデル。",
  },
  {
    id: "news-6",
    date: "2026.01.20",
    title: "マレーシアオープン2026、山口茜選手が準優勝の好発進",
    category: "TOURNAMENT",
    content: "シーズン開幕戦となったマレーシアオープン。山口選手は決勝で惜しくもアン・セヨン選手に敗れたものの、盤石の強さを見せた。",
  },
  {
    id: "news-5",
    date: "2025.12.15",
    title: "2025年 年間最終世界ランキング発表：日本勢3種目でTOP3を維持",
    category: "TOPIC",
    content: "BWFが発表した2025年最終ランキング。女子ダブルス「シダマツ」ペア、混合ダブルス「ワタガシ」ペアらが上位を独占。",
  },
  {
    id: "news-4",
    date: "2025.11.23",
    title: "熊本マスターズジャパン2025、志田・松山ペアが地元で金メダル",
    category: "TOURNAMENT",
    content: "超満員の観衆の中、再春館製薬所の地元・熊本で開催。シダマツペアが気迫のプレーで中国ペアを破り、見事優勝を飾った。",
  },
  {
    id: "news-3",
    date: "2025.08.30",
    title: "世界選手権2025閉幕：奈良岡功大が男子シングルスで初の銀メダル",
    category: "TOURNAMENT",
    content: "パリ五輪を経てさらに進化した奈良岡選手。決勝でビクター・アクセルセン選手と歴史に残る100分超えの死闘を繰り広げた。",
  },
  {
    id: "news-2",
    date: "2025.07.12",
    title: "【戦術解説】最新トレンド「超低空ドライブ」の攻略法を公開",
    category: "TOPIC",
    content: "現代バドミントンの要となるドライブ合戦。インドネシア勢が得意とする低空戦をいかに制するか、専門家が詳しく分析。",
  },
  {
    id: "news-1",
    date: "2025.05.18",
    title: "スディルマン杯2025、日本代表は惜しくも準々決勝で敗退",
    category: "TOURNAMENT",
    content: "男女混合団体戦の最高峰。強豪・韓国を相手に最後まで食らいつくも、2-3で惜敗。次戦への課題が明確となった。",
  },
];
