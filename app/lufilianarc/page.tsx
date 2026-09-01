import type { Metadata } from 'next'
import LufilianArcClient from './LufilianArcClient'

export const metadata: Metadata = {
  title: 'Regional Geology — The Greater Lufilian Arc',
  description:
    "A billion-year visual history: how rifting, sedimentation, glaciation, collision and erosion built the world's richest copper–cobalt belt.",
  openGraph: {
    title: 'The Greater Lufilian Arc | Kafwego Project',
    description:
      "How a billion years of rifting, sedimentation, glaciation, collision and erosion built the world's richest copper–cobalt belt.",
    type: 'article',
  },
}

export default function LufilianArcPage() {
  return <LufilianArcClient />
}
