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

## Заявки

Бэкенда нет: все кнопки «Забронировать», карточки пакетов и форма брони ведут в WhatsApp клуба (`wa.me`) с предзаполненным текстом. Форма собирает имя, телефон, зону, дату и время в сообщение. Тексты и номер — `src/lib/whatsapp.ts`, `site.whatsappPhone`.

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
  app/            layout, page, globals.css, SEO-файлы
  components/     секции лендинга, каждая со своим .module.css
  data/           контент: контакты, цены, зоны
  lib/            форматирование цен, ссылки WhatsApp
material/         исходный макет
```
