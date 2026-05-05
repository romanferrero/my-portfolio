import { Code2, FolderGit2, GraduationCap, MapPin } from "lucide-react"

/**
 * Quick-glance facts shown in the About section.
 * Values are pulled from the actual CV (carrera since 03/2020, stack from
 * the "Aptitudes" section). Update here as things change.
 */
export const ABOUT_STATS = [
  { Icon: GraduationCap, value: "6+", labelKey: "career" },
  { Icon: FolderGit2, value: "10+", labelKey: "projects" },
  { Icon: Code2, value: "8+", labelKey: "languages" },
  { Icon: MapPin, value: "UY", labelKey: "location" },
]
