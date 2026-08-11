/** Тема статьи. Задаёт группу на хабе `/blog/`. Список закрытый: новая тема добавляется здесь осознанно. */
export type ArticleTopic =
  | "move-out"
  | "move-in"
  | "deep-clean"
  | "routine"
  | "kitchen"
  | "bathroom"
  | "odor-pests"
  | "cost-booking"
  | "property-management"

/** Жанр статьи. Нужен, чтобы потом резать отдачу по типу текста, а не только по теме. */
export type ArticleGenre = "checklist" | "decision" | "problem-fix" | "cost" | "scope"

export type BlogInlinePart = string | { label: string; href: string }

export type BlogArticleSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  /** Закрывающий абзац секции со ссылкой по смыслу. Рендерится после bullets. */
  closing?: BlogInlinePart[]
}

export type BlogArticle = {
  slug: string
  title: string
  meta: string
  keywords: string
  /** Видимый бейдж на карточке и в шапке статьи. Свободный текст. */
  category: string
  topic: ArticleTopic
  genre: ArticleGenre
  readTime: string
  /** ISO-дата. Идёт и в schema, и в видимый бейдж «Updated». Одно поле, чтобы они не разъезжались. */
  date: string
  heroImage: string
  summary: string
  answer: string
  primaryLinks: Array<{ label: string; href: string }>
  sections: BlogArticleSection[]
  faqs: Array<{ q: string; a: string }>
  relatedSlugs: string[]
}

export const topicLabels: Record<ArticleTopic, string> = {
  "move-out": "Moving out",
  "move-in": "Moving in",
  "deep-clean": "Deep cleaning",
  routine: "Routines and shared living",
  kitchen: "Kitchen and appliances",
  bathroom: "Bathroom",
  "odor-pests": "Odor and pests",
  "cost-booking": "Cost and booking",
  "property-management": "Property managers",
}

export const topicOrder: ArticleTopic[] = [
  "move-out",
  "move-in",
  "deep-clean",
  "routine",
  "kitchen",
  "bathroom",
  "odor-pests",
  "cost-booking",
  "property-management",
]

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/** `2026-08-12` -> `August 12, 2026`. Без Intl, чтобы сборка и браузер давали одну и ту же строку. */
export function formatArticleDate(date: string) {
  const [year, month, day] = date.split("-")
  return `${monthNames[Number(month) - 1]} ${Number(day)}, ${year}`
}
