import type { Article } from '../data/mockArticles';
import { ArrowUpRight } from 'lucide-react';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col items-start border-b border-gray-200 py-10 transition-colors hover:bg-gray-50 sm:py-12 sm:-mx-8 sm:px-8 sm:rounded-2xl sm:border-transparent">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={article.date} className="font-mono text-gray-500">
          {article.date}
        </time>
        <span className="relative z-10 rounded-full border border-gray-200 bg-white px-3 py-1 font-medium text-gray-600">
          {article.category}
        </span>
        <span className="font-mono text-gray-400 hidden sm:inline-block">
          {article.readTime}
        </span>
      </div>
      
      <div className="group relative mt-4 max-w-3xl">
        <h3 className="font-sans text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 sm:text-3xl">
          <a href="#">
            <span className="absolute inset-0" />
            {article.title}
          </a>
        </h3>
        <p className="mt-4 line-clamp-3 font-sans text-base leading-relaxed text-gray-600">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {article.tags.map(tag => (
          <span key={tag} className="font-mono text-xs font-medium text-gray-400">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 min-w-12 items-center justify-center hidden md:flex">
        <div className="rounded-full bg-gray-100 p-3 text-gray-900 transition-transform group-hover:scale-110">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </article>
  );
}
