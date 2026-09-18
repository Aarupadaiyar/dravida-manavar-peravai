export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H21l-6.7 7.6L22.2 21h-6.5l-5.1-6.6L4.7 21H2.6l7.2-8.2L1.9 3h6.6l4.6 6.1L18.9 3zm-1.1 16.2h1.2L7.3 4.7H6l11.8 14.5z" />
    </svg>
  )
}

export function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l6 3-6 3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const SOCIALS = [
  { id: 'instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/dmp_ditp', label: 'Instagram' },
  { id: 'facebook', Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { id: 'twitter', Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { id: 'youtube', Icon: YoutubeIcon, href: '#', label: 'YouTube' },
]
