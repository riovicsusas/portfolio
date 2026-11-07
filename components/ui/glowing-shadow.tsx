'use client'

import type { AnchorHTMLAttributes } from 'react'

/** Compact link adaptation of Designali's Glowing Shadow component.
 * Source: https://21st.dev/@designali-in/components/glowing-shadow
 * Shared styles also serve the static professional links and logo buttons.
 */
export function GlowingShadow({ className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={`glowing-shadow ${className}`} />
}
