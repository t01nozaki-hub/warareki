export type Finalist = {
  id: string;
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  name: string;
  rank: number | string;
  currentActivity: string;
  snsLinks?: {
    x?: string;
    youtube?: string;
  };
  affiliateProduct?: {
    title: string;
    url: string;
  };
};

export const finalistsData: Finalist[] = [
  {
    id: "f-m1-2001-2",
    tournament: "M-1",
    year: 2001,
    name: "ハリガネロック",
    rank: 2,
    currentActivity: "2014年にコンビ解散。それぞれの道を歩む。",
    affiliateProduct: { title: "ハリガネロック DVD", url: "YOUR_AMAZON_AFFILIATE_ID_HARIGANE" }
  },
  {
    id: "f-m1-2004-2",
    tournament: "M-1",
    year: 2004,
    name: "南海キャンディーズ",
    rank: 2,
    currentActivity: "山里は多数の番組MCとして活躍中。しずちゃんは俳優業やボクシングなどで多才な才能を発揮。",
    snsLinks: { x: "https://twitter.com/YAMA414" },
    affiliateProduct: { title: "天才はあきらめた (山里亮太 著)", url: "YOUR_AMAZON_AFFILIATE_ID_YAMA" }
  },
  {
    id: "f-m1-2004-3",
    tournament: "M-1",
    year: 2004,
    name: "麒麟",
    rank: 3,
    currentActivity: "川島は朝の顔として大ブレイク。田村はバスケ関連の番組等で活躍中。",
    snsLinks: { x: "https://twitter.com/akira5423" },
    affiliateProduct: { title: "ホームレス中学生 (田村裕 著)", url: "YOUR_AMAZON_AFFILIATE_ID_TAMURA" }
  },
  {
    id: "f-m1-2019-2",
    tournament: "M-1",
    year: 2019,
    name: "かまいたち",
    rank: 2,
    currentActivity: "テレビ・YouTube共に圧倒的なレギュラー本数を持つ超売れっ子コンビ。",
    snsLinks: { youtube: "https://www.youtube.com/@kamaitachi.channel" },
    affiliateProduct: { title: "かまいたち ライブDVD", url: "YOUR_AMAZON_AFFILIATE_ID_KAMA" }
  },
  {
    id: "f-m1-2019-3",
    tournament: "M-1",
    year: 2019,
    name: "ぺこぱ",
    rank: 3,
    currentActivity: "「ノリツッコまない漫才」で大ブレイク。バラエティ番組に多数出演。",
    snsLinks: { x: "https://twitter.com/shupei0716" },
  },
  {
    id: "f-m1-2023-2",
    tournament: "M-1",
    year: 2023,
    name: "ヤーレンズ",
    rank: 2,
    currentActivity: "決勝後のブレイクにより、各メディアで大活躍中。お笑いライブにも多数出演し続けている。",
    snsLinks: { x: "https://twitter.com/yarlens_narita" },
    affiliateProduct: { title: "ヤーレンズ 関連グッズ", url: "YOUR_AFFILIATE_ID_YARLENS" }
  }
];
