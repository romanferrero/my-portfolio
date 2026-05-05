import { Code2, FolderGit2, GraduationCap, MapPin } from "lucide-react"

/**
 * Quick-glance facts shown in the About section.
 * Strings are kept as i18n keys so they can be translated.
 *
 * `value` is shown as the big number/label, and `labelKey` is resolved via
 * t() against `about.stats.<key>`.
 */
export const ABOUT_STATS = [
  { Icon: GraduationCap, value: "4+", labelKey: "career" },
  { Icon: FolderGit2, value: "10+", labelKey: "projects" },
  { Icon: Code2, value: "5+", labelKey: "languages" },
  { Icon: MapPin, value: "UY", labelKey: "location" },
]
