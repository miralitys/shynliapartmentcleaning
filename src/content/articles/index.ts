import type { BlogArticle } from "../types"

/**
 * Статьи подхватываются по файлам. Новый файл в этой папке = новая статья на сайте.
 * Отдельно нигде регистрировать не нужно: sitemap читает эту же папку.
 */
const modules = import.meta.glob<{ default: BlogArticle }>("./*.ts", { eager: true })

const loaded = Object.entries(modules)
  .filter(([path]) => !path.endsWith("index.ts"))
  .map(([path, module]) => {
    const fileSlug = path.replace(/^\.\//, "").replace(/\.ts$/, "")
    const article = module.default

    if (!article) {
      throw new Error(`Article file ${path} has no default export.`)
    }

    if (article.slug !== fileSlug) {
      throw new Error(`Article file ${path} has slug "${article.slug}". Имя файла и slug должны совпадать.`)
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(article.date)) {
      throw new Error(`Article ${article.slug} has date "${article.date}". Формат должен быть YYYY-MM-DD.`)
    }

    return article
  })

const seen = new Set<string>()
for (const article of loaded) {
  if (seen.has(article.slug)) {
    throw new Error(`Duplicate article slug: ${article.slug}`)
  }
  seen.add(article.slug)
}

/** Свежие сверху. При равной дате порядок по слагу, чтобы сборка была детерминированной. */
export const blogArticles: BlogArticle[] = loaded.sort((a, b) => {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1
  return a.slug < b.slug ? -1 : 1
})

/** Крупная карточка на `/blog/`. Держим на лучшей статье, а не на самой свежей. */
export const featuredArticleSlug = "apartment-move-out-cleaning-checklist"

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}

export function getArticlesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getArticle(slug))
    .filter((article): article is BlogArticle => Boolean(article))
}
