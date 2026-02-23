export interface Circle {
    id: string;
    name: string;
    prefecture: string;
    city: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    schedule: string;
    description: string;
    fee: string;
    contact: string;
    image: string;
}

export const circles: Circle[] = [
    {
        id: "osaka-smile-badminton",
        name: "大阪スマイルバドミントン",
        prefecture: "大阪府",
        city: "大阪市",
        level: "Beginner",
        schedule: "毎週土曜日 18:00〜21:00",
        description: "未経験者・初心者大歓迎のゆるいサークルです！基礎練習から簡単な試合形式まで、笑い絶えず楽しく活動しています。ラケットの貸出もありますので、手ぶらで体験に来てください。",
        fee: "500円 / 回",
        contact: "公式LINEまたはインスタDMより",
        image: "/images/circles/osaka-smile.png"
    }
];
