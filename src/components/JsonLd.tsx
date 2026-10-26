import { PLATFORMS, ZONES } from "@/data/prices";
import { site } from "@/data/site";

/**
 * Структурированные данные schema.org: локальный бизнес + сайт + предложения с ценами.
 * Проверка: https://search.google.com/test/rich-results и https://validator.schema.org
 */
export function JsonLd() {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;

  const hourlyOffers = ZONES.map((z) => ({
    "@type": "Offer",
    name: `${z.title} — 1 час`,
    priceCurrency: "KZT",
    price: z.from,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: z.from,
      priceCurrency: "KZT",
      unitCode: "HUR",
      unitText: "час",
    },
    itemOffered: { "@type": "Service", name: z.title, serviceType: "Аренда игрового места" },
    availability: "https://schema.org/InStock",
  }));

  const nightPc = PLATFORMS.pc.hall.find((r) => r.name === "Ночь");
  const nightOffer = nightPc
    ? [
        {
          "@type": "Offer",
          name: "Ночной пакет, ПК · общий зал (22:00 – 08:00)",
          priceCurrency: "KZT",
          price: nightPc.price,
          itemOffered: { "@type": "Service", name: "Ночной пакет на ПК", serviceType: "Аренда игрового места" },
          availability: "https://schema.org/InStock",
        },
      ]
    : [];

  const sameAs = [site.social.instagram, site.social.twoGis].filter((u) => u && u !== "#");

  const business: Record<string, unknown> = {
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    description: site.seo.description,
    url: site.url,
    telephone: site.phoneE164,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    priceRange: "500 – 10 000 ₸",
    currenciesAccepted: "KZT",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lon,
    },
    hasMap: site.social.twoGis,
    areaServed: { "@type": "City", name: site.address.city },
    makesOffer: [...hourlyOffers, ...nightOffer],
  };
  if (site.openingHours.length) business.openingHours = site.openingHours;
  if (sameAs.length) business.sameAs = sameAs;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        inLanguage: "ru",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.seo.title,
        description: site.seo.description,
        inLanguage: "ru",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON внутри <script>: экранируем "<", чтобы нельзя было закрыть тег.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
