import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/core/Reveal'
import { BLOG_POSTS } from '../data/blogs'
import { useLang } from '../i18n/LanguageContext'

export default function BlogDetail() {
  const { blogId } = useParams<{ blogId: string }>()
  const post = BLOG_POSTS.find((p) => p.id === blogId)
  const { t } = useLang()

  if (!post) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="blog-detail">
            <Link to="/blog" className="blog-detail-back">
              &larr; {t('page.blogBack')}
            </Link>
            <p>{t('page.blogNotFound')}</p>
          </div>
        </div>
      </section>
    )
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id)

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="blog-detail">
          <Link to="/blog" className="blog-detail-back">
            &larr; {t('page.blogBack')}
          </Link>
          <div className="blog-detail-header">
            {post.date && <span className="blog-detail-date">{post.date}</span>}
            <h1 className="blog-detail-title">{post.title}</h1>
          </div>
          <p className="blog-detail-content">{post.content}</p>
        </Reveal>

        {otherPosts.length > 0 && (
          <div className="blog-detail-others">
            <h3 className="events-title">{t('blogDetail.otherPosts')}</h3>
            <div className="blog-detail-others-list">
              {otherPosts.map((other) => (
                <Link key={other.id} to={`/blog/${other.id}`} className="blog-detail-other-card">
                  <span>{other.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
