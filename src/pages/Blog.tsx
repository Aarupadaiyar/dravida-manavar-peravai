import { Newspaper } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogs'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function Blog() {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <Newspaper size={22} />
          </span>
          <div className="eyebrow">{t('blog.eyebrow')}</div>
          <h1 className="section-title">{t('blog.title')}</h1>
          <p className="page-header-subtitle">{t('page.blogSubtitle')}</p>
        </Reveal>

        {BLOG_POSTS.length === 0 ? (
          <p className="blog-empty-state">{t('page.blogEmpty')}</p>
        ) : (
          <div className="blog-card-grid">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.id} delayMs={Math.min(i, 6) * 60} variant="scale">
                <article className="blog-card" onClick={() => navigate(`/blog/${post.id}`)}>
                  {post.date && <span className="blog-card-date">{post.date}</span>}
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-summary">{post.summary}</p>
                  <span className="blog-card-readmore">{t('blog.readMore')} &rarr;</span>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
