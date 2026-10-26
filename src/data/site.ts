/**
 * Единая точка правды для контактов, адреса и SEO.
 * Поля, помеченные TODO, — заглушки из макета: заполни их реальными данными.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vsgamehub.kz").replace(/\/$/, "");

/** Карточка клуба в 2ГИС: из кода виджета «Поделиться → Виджет». */
const twoGis = {
  city: "nur_sultan",
  firmId: "70000001113089736",
  lat: 51.15291668780162,
  lon: 71.47346735000612,
  zoom: 16,
};

const twoGisWidgetUrl = `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
  JSON.stringify({ pos: { lat: twoGis.lat, lon: twoGis.lon, zoom: twoGis.zoom }, opt: { city: twoGis.city }, org: twoGis.firmId }),
)}`;

export const site = {
  name: "VS Game Hub",
  shortName: "VS GAME HUB",
  tagline: "компьютерный клуб",
  url: SITE_URL,

  phone: "+7 700 757 73 48",
  phoneE164: "+77007577348",
  phoneHref: "tel:+77007577348",
  /** Номер для wa.me без «+». */
  whatsappPhone: "77007577348",

  address: {
    street: "Жирентаева 15А, 4 этаж",
    city: "Астана",
    region: "Астана",
    countryCode: "KZ",
    countryName: "Казахстан",
  },

  /** Координаты для schema.org GeoCoordinates. */
  geo: { lat: twoGis.lat, lon: twoGis.lon },

  /** Режим работы — по карточке в 2ГИС. Текст показывается в контактах. */
  hours: "Круглосуточно",
  /** Режим работы для schema.org. Пусто = не выводится. */
  openingHours: ["Mo-Su 00:00-24:00"] as string[],

  social: {
    // TODO: ссылка на Instagram клуба.
    instagram: "#",
    /** Карточка клуба в 2ГИС. */
    twoGis: `https://2gis.kz/${twoGis.city}/firm/${twoGis.firmId}`,
    /** Построить маршрут до клуба в 2ГИС. */
    twoGisRoute: `https://2gis.kz/${twoGis.city}/center/${twoGis.lon},${twoGis.lat}/zoom/${twoGis.zoom}/routeTab/rsType/bus/to/${twoGis.lon},${twoGis.lat}${encodeURIComponent("╎VS Game Hub")}`,
  },

  /** iframe карты в контактах. Пусто = заглушка из макета. */
  mapEmbedUrl: twoGisWidgetUrl,

  seo: {
    title: "VS Game Hub — компьютерный клуб в Астане: игровые ПК и PlayStation",
    description:
      "Компьютерный клуб VS Game Hub в Астане: игровые ПК от 500 ₸/час, PlayStation от 1 500 ₸/час, общий зал и VIP. Пакеты 2+1 и 3+2, ночь 22:00–08:00 от 2 500 ₸. Жирентаева 15А, 4 этаж.",
    keywords: [
      "компьютерный клуб Астана",
      "игровой клуб Астана",
      "VS Game Hub",
      "PlayStation клуб Астана",
      "киберклуб",
      "игровые ПК почасово",
      "ночной пакет компьютерный клуб",
      "Жирентаева 15А",
    ],
  },
} as const;

export const NAV = [
  { href: "#zones", label: "Зоны" },
  { href: "#prices", label: "Цены" },
  { href: "#packages", label: "Пакеты" },
  { href: "#booking", label: "Бронь" },
  { href: "#contacts", label: "Контакты" },
] as const;
