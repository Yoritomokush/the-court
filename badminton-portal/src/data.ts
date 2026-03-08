// src/data.ts
export type Tier = 'S' | 'Tier1' | 'Tier2' | 'Tier3';
export type Category = '国内代表' | '実業団' | 'NEXT GEN';

export interface Player {
  id: string;
  name: string;
  team: string;
  tier: Tier;
  category: Category;
  description: string;
  stats: { power: number; speed: number; technique: number };
}

export const players: Player[] = [
  {
    id: 'yuta-watanabe',
    name: '渡辺 勇大 (Yuta Watanabe)',
    team: 'J-POWER',
    tier: 'S',
    category: '国内代表',
    description: '左利きのマエストロ。混合ダブルスで世界を魅了する。',
    stats: { power: 85, speed: 95, technique: 100 }
  },
  {
    id: 'kodai-naraoka',
    name: '奈良岡 功大 (Kodai Naraoka)',
    team: 'NTT東日本',
    tier: 'Tier1',
    category: '国内代表',
    description: '驚異的な粘りとスタミナを誇る、日本のエース。',
    stats: { power: 80, speed: 90, technique: 95 }
  },
  {
    id: 'tomoka-miyazaki',
    name: '宮崎 友花 (Tomoka Miyazaki)',
    team: 'ACT SAIKYO',
    tier: 'Tier1',
    category: '国内代表',
    description: '次世代を担う天才。しなやかなスイングが武器。',
    stats: { power: 75, speed: 92, technique: 94 }
  },
  {
    id: 'kanta-tsuneyama',
    name: '常山 幹太 (Kanta Tsuneyama)',
    team: 'トナミ運輸',
    tier: 'Tier2',
    category: '実業団',
    description: 'トナミ運輸を支える大黒柱。安定したプレーが魅力。',
    stats: { power: 82, speed: 85, technique: 88 }
  },
  {
    id: 'hinata-takano',
    name: '髙野 日向 (Hinata Takano)',
    team: '埼玉栄高',
    tier: 'Tier3',
    category: 'NEXT GEN',
    description: '高校界を席巻する期待の星。',
    stats: { power: 78, speed: 88, technique: 82 }
  }
];