import { Github, Linkedin, Mail } from "lucide-react"

import { Container } from "../ui/Container.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { SOCIAL_LINKS } from "../../data/social.js"

const SOCIALS = [
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: Github },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: SOCIAL_LINKS.email, label: "Email", Icon: Mail },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-text-muted">
          &copy; {year} Roman Ferrero. {t("footer.rights")}
        </p>

        <ul className="flex items-center gap-1">
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="
                  inline-flex h-9 w-9 items-center justify-center rounded-full
                  text-text-muted transition-colors
                  hover:bg-bg-elevated hover:text-accent
                "
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-text-muted">
          {t("footer.builtWith")}{" "}
          <span className="font-medium text-text-strong">React</span>
          {" + "}
          <span className="font-medium text-text-strong">Tailwind</span>
        </p>
      </Container>
    </footer>
  )
}
