export interface Player {
  id: string;
  name: string;
  image: string;
  rank: string;
  style: string;
  country: string;
  flag: string;
  category: string;
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

const AFFILIATE_ID = "your-id-22";

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
        description: "極限の低空気抵抗を追求し、超高速ラリーを制する操作性を実現. 志田選手の電光石火のプレーを支える。",
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
    bio: "サウスポーから繰り出される多彩なショットで世界を翻弄するクール・ビューティー. しなやかなフォームから放たれるクロススマッシュと精密なドロップは、芸術の域に達している。",
  },
  {
    id: "nozomi-okuhara",
    name: "奥原 希望",
    image: "/images/players/nozomi-okuhara.jpg",
    rank: "Former World Champion",
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
    style: "Balanced Tech",
    country: "Japan",
    flag: "🇯🇵",
    category: "NEXT GEN / 男子シングルス",
    tier: "Tier 1",
    stats: {
      power: 85,
      speed: 92,
      technique: 94,
      stamina: 90,
      mentality: 88,
      defense: 90,
    },
    gear: {
      racket: {
        name: "YONEX ASTROX 99 PRO",
        image: "/images/gear/astrox-99-pro.png",
        description: "球持ちの良さと強烈なパワーを両立. 次世代を担う谷岡選手の、緻密かつ攻撃的なゲームスタイルを引き出す。",
        link: getAmazonLink("YONEX ASTROX 99 PRO"),
      },
      shoes: {
        name: "YONEX POWER CUSHION 65 Z WIDE",
        image: "/images/gear/shb65z3.png",
        description: "足幅の広いプレーヤーにも対応し、安定したグリップを提供. 激動のジュニアからシニアへの階段を支える。",
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
];
