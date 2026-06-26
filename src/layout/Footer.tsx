import { GithubLogoIcon, EnvelopeIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'

const links = [
  { url: 'https://www.dougmcdonald.co.uk', label: 'dougmcdonald.co.uk © 2026', ariaLabel: '' },
  {
    url: 'https://github.com/dougajmcdonald',
    label: '',
    ariaLabel: 'Link to Dougs Github page',
    icon: GithubLogoIcon,
  },
  {
    url: 'mailto:dougajmcdonald@gmail.com',
    label: '',
    ariaLabel: 'Link to Dougs email',
    icon: EnvelopeIcon,
  },
]

export function Footer() {
  return (
    <footer className="border-primary-200 mt-6 flex min-h-12 w-full items-center justify-center border-t">
      <ul className="my-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-12">
        {links.map((link) => (
          <Link to={link.url} aria-label={link.ariaLabel} key={link.url}>
            {link.icon && <link.icon className="text-primary-500 size-6" />}
            {link.label && <span className="text-primary-600">{link.label}</span>}
          </Link>
        ))}
      </ul>
    </footer>
  )
}
