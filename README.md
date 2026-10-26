# VS Game Hub — сайт

Лендинг компьютерного клуба на Next.js 16 (App Router), React 19, TypeScript, CSS Modules. Без UI-библиотек: дизайн из `material/` перенесён один в один, включая анимации.

## Запуск

```bash
npm install
cp .env.example .env.local   # заполни переменные
npm run dev                  # http://localhost:3000
```

Продакшен:

```bash
npm run build
npm start
```

Проверки: `npm run typecheck`, `npm run lint`.

## Что заполнить перед релизом

Все тексты-заглушки из макета вынесены в два файла:

- `src/data/site.ts` — адрес, город, телефон, часы работы, ссылки на Instagram и 2ГИС, URL карты для iframe, SEO-заголовок и описание. Поля с комментарием `TODO`.
- `src/data/prices.ts` — цены, зоны, пакеты, бегущая строка. Описания зон в `[скобках]` — заглушки.

Переменные окружения (`.env.local`):

| Переменная | Зачем |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Канонический адрес сайта: canonical, sitemap, Open Graph, schema.org |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Заявки с формы брони уходят в Telegram. Без них — только в лог сервера |

## SEO

- Метаданные через Metadata API: title, description, canonical, Open Graph, Twitter, robots.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` генерируются из `src/app/*.ts`.
- Open Graph картинка рендерится на сервере (`src/app/opengraph-image.tsx`), иконки — `icon.svg`, `apple-icon.tsx`.
- JSON-LD (`LocalBusiness` + `WebSite` + `WebPage` + офферы с ценами) — `src/components/JsonLd.tsx`.
- Шрифты через `next/font/google`: self-hosted, без внешних запросов, без layout shift.
- Семантическая разметка: один `h1`, секции с `aria-labelledby`, скип-линк, формы с `label`.

## Структура

```
src/
  app/            layout, page, globals.css, SEO-файлы, API брони
  components/     секции лендинга, каждая со своим .module.css
  data/           контент: контакты, цены, зоны
  lib/            форматирование цен
material/         исходный макет
```
