export type PlatformKey = "pc" | "ps";
export type HallKey = "hall" | "vip";
export type ZoneKey = `${PlatformKey}-${HallKey}`;

export type PriceRow = {
  name: string;
  /** Подпись под названием. Пусто = «Почасовая оплата». */
  note?: string;
  /** Цена в тенге за весь пакет. */
  price: number;
  /** Сколько часов входит — для расчёта «≈ за час». */
  hours: number;
};

export type Platform = {
  label: string;
  hall: PriceRow[];
  vip: PriceRow[];
};

export const PLATFORMS: Record<PlatformKey, Platform> = {
  pc: {
    label: "ПК",
    hall: [
      { name: "1 час", price: 500, hours: 1 },
      { name: "Пакет 2+1", note: "3 часа по цене 2", price: 1000, hours: 3 },
      { name: "Пакет 3+2", note: "5 часов по цене 3", price: 1500, hours: 5 },
      { name: "Утро", note: "08:00 – 13:00", price: 1500, hours: 5 },
      { name: "Ночь", note: "22:00 – 08:00", price: 2500, hours: 10 },
    ],
    vip: [
      { name: "1 час", price: 800, hours: 1 },
      { name: "Пакет 2+1", note: "3 часа по цене 2", price: 1600, hours: 3 },
      { name: "Пакет 3+2", note: "5 часов по цене 3", price: 2500, hours: 5 },
      { name: "Утро", note: "08:00 – 13:00", price: 1800, hours: 5 },
      { name: "Ночь", note: "22:00 – 08:00", price: 3000, hours: 10 },
    ],
  },
  ps: {
    label: "PlayStation",
    hall: [
      { name: "1 час", price: 1500, hours: 1 },
      { name: "Пакет 2+1", note: "3 часа по цене 2", price: 3000, hours: 3 },
      { name: "Ночь", note: "22:00 – 08:00", price: 6000, hours: 10 },
    ],
    vip: [
      { name: "1 час", price: 2500, hours: 1 },
      { name: "Пакет 2+1", note: "3 часа по цене 2", price: 5000, hours: 3 },
      { name: "Ночь", note: "22:00 – 08:00", price: 10000, hours: 10 },
    ],
  },
};

export const PLATFORM_KEYS: PlatformKey[] = ["pc", "ps"];

export const HALLS: { key: HallKey; label: string }[] = [
  { key: "hall", label: "Общий зал" },
  { key: "vip", label: "VIP" },
];

export type Zone = {
  key: ZoneKey;
  num: string;
  title: string;
  shortTitle: string;
  text: string;
  from: number;
  platform: PlatformKey;
  vip: boolean;
};

// TODO: тексты в [скобках] — заглушки из макета. Впиши реальное железо и описание зон.
export const ZONES: Zone[] = [
  {
    key: "pc-hall",
    num: "01",
    title: "ПК · Общий зал",
    shortTitle: "ПК · Зал",
    text: "Игровые ПК для катки с друзьями. [Железо: видеокарта, монитор, Гц]",
    from: 500,
    platform: "pc",
    vip: false,
  },
  {
    key: "pc-vip",
    num: "02",
    title: "ПК · VIP",
    shortTitle: "ПК · VIP",
    text: "Отдельная зона и больше комфорта. [Чем отличается VIP]",
    from: 800,
    platform: "pc",
    vip: true,
  },
  {
    key: "ps-hall",
    num: "03",
    title: "PS · Общий зал",
    shortTitle: "PS · Зал",
    text: "PlayStation с большим экраном — играйте вдвоём. [Модель консоли]",
    from: 1500,
    platform: "ps",
    vip: false,
  },
  {
    key: "ps-vip",
    num: "04",
    title: "PS · VIP",
    shortTitle: "PS · VIP",
    text: "Приватная комната с консолью для компании. [Вместимость]",
    from: 2500,
    platform: "ps",
    vip: true,
  },
];

export type Pack = {
  key: string;
  title: string;
  lead: string;
  text: string;
  featured?: boolean;
  badge?: string;
};

export const PACKAGES: Pack[] = [
  { key: "2-1", title: "2+1", lead: "Платишь за 2 часа — играешь 3", text: "ПК и PlayStation, общий зал и VIP." },
  { key: "3-2", title: "3+2", lead: "Платишь за 3 часа — играешь 5", text: "Только ПК: общий зал и VIP." },
  { key: "morning", title: "Утро", lead: "08:00 – 13:00, 5 часов", text: "ПК: 1 500 ₸ в зале, 1 800 ₸ в VIP." },
  {
    key: "night",
    title: "Ночь",
    lead: "22:00 – 08:00, 10 часов",
    text: "ПК в зале — 250 ₸ за час. Есть на ПК и PS.",
    featured: true,
    badge: "ВЫГОДНЕЕ ВСЕГО",
  },
];

export const TICKER = [
  "ПК — 500 ₸/ЧАС",
  "PLAYSTATION — 1 500 ₸/ЧАС",
  "ПАКЕТ 2+1",
  "ПАКЕТ 3+2",
  "НОЧЬ 22:00–08:00",
  "VIP ОТ 800 ₸",
];
