# Как добавить статью

Одна статья это один файл в `src/content/articles/`. Имя файла равно слагу, точка ts на конце.

Больше нигде регистрировать не нужно. Sitemap читает эту же папку, статический HTML генерируется по sitemap, ссылка на хабе `/blog/` появляется сама.

Сборка упадёт, если имя файла не совпало со слагом, если дата не в формате `YYYY-MM-DD` или если слаг повторяется.

## Шаблон

```ts
import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "тот-же-текст-что-в-имени-файла",
  title: "Заголовок вопросом, Title Case",
  meta: "Одно предложение, 150-160 знаков, что человек получит на странице.",
  keywords: "пять фраз, через запятую, без повторов, живым языком, без мусора",
  category: "Move-out cleaning",
  topic: "move-out",
  genre: "checklist",
  readTime: "7 min read",
  date: "2026-08-12",
  heroImage: "/apartment-hero-new.jpg",
  summary: "Одно предложение для карточки в блоге и подзаголовка в шапке.",
  answer: "Два предложения. Прямой ответ на вопрос из заголовка, без разгона.",
  primaryLinks: [
    { label: "Move-out cleaning service", href: "/move-out-apartment-cleaning/" },
    { label: "Apartment cleaning pricing", href: "/apartment-cleaning-pricing/" },
    { label: "Apartment cleaning checklist", href: "/apartment-cleaning-checklist/" },
  ],
  sections: [
    {
      title: "Секция с абзацами",
      paragraphs: ["Абзац.", "Ещё абзац."],
    },
    {
      title: "Секция со списком",
      paragraphs: ["Вводный абзац перед списком."],
      bullets: ["Пункт.", "Пункт.", "Пункт."],
    },
    {
      title: "Последняя секция, когда звать клинера",
      paragraphs: ["Когда это уже задача не на вечер."],
      closing: [
        "Если это про ваш случай, вот что делает ",
        { label: "move-out apartment cleaning", href: "/move-out-apartment-cleaning/" },
        ": духовка, холодильник, ванная, полы и чек для лендлорда.",
      ],
    },
  ],
  faqs: [
    { q: "Вопрос как его задают в поиске?", a: "Ответ в два предложения." },
    { q: "Вопрос?", a: "Ответ." },
    { q: "Вопрос?", a: "Ответ." },
    { q: "Вопрос?", a: "Ответ." },
  ],
  relatedSlugs: ["слаг", "слаг", "слаг"],
}

export default article
```

## Размер

Держим формат, который уже стоит на 25 статьях: **6 секций, 4 FAQ, 650-750 слов** тела. Меньше не берут, больше не нужно.

## Поля, которые легко перепутать

- `category`: видимый бейдж, свободный текст.
- `topic`: закрытый список из `src/content/types.ts`. Задаёт группу на хабе `/blog/`. Новая тема добавляется в тип осознанно, а не по ходу.
- `genre`: тоже закрытый список. Нужен, чтобы потом посмотреть отдачу по типу текста, а не только по теме. Варианты: `checklist`, `decision`, `problem-fix`, `cost`, `scope`.
- `date`: одна ISO-дата на всё. Из неё берётся и `datePublished` в schema, и видимый бейдж «Updated».
- `heroImage`: три картинки в `public`, чередуем `/apartment-hero-new.jpg`, `/apartment-detail-new.jpg`, `/apartment-supplies-new.jpg`.

## Как писать

- Заголовок это вопрос арендатора, а не тема. Не «Balcony cleaning», а «Apartment Balcony Cleaning Without Drips».
- `answer` отвечает сразу. Человек закрыл вкладку через пять секунд и всё равно получил своё.
- Читатель один: renter в квартире. Не домовладелец, не покупатель дома.
- Одна секция всегда про границу: что зона жильца, а что зона maintenance или лендлорда. Это то, что отличает текст от генерённого.
- Последняя секция всегда про то, когда звать клинера, и в ней `closing` со ссылкой на услугу. Продажа в конце, а не в начале.
- Ключ живёт в `keywords`. В тексте фраза встречается сама, набивать не надо.
- В видимом тексте не должно быть слов Reddit, SEO, target question, meta description.
- Темы берём из живых вопросов (r/Apartmentliving, r/CleaningTips, r/renting, r/PropertyManagement), а не из подборок ключей.
- Не дублировать уже закрытую тему. Полный список тем виден на `/blog/`.

## Перед push

```bash
npm run lint && npm run build
```

Дальше проверить, что новые слаги попали в `public/sitemap.xml` и что `dist/blog/<slug>/index.html` существует. Потом commit и push в `main`, Render соберёт сам.
