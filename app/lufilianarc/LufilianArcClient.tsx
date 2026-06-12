'use client'

import { useEffect } from 'react'

// ─── types ───────────────────────────────────────────────────────────────────
interface RockLayer { c: string; n: string; h?: number }
interface Stage {
  age: string; title: string; seds: string[]
  arch: number; amp: number; x0: number; x1: number
  sea: boolean; special: string
  cap: string; cu: { t: string; tone: string }
}

// ─── stepper data ────────────────────────────────────────────────────────────
const ROCK: Record<string, RockLayer> = {
  basement:   { c: '#6b5a4f', n: 'Cratonic basement' },
  roanLower:  { c: '#caa468', n: 'Lower Roan siliciclastics', h: 14 },
  copper:     { c: '#1d9e75', n: 'Copper–cobalt horizon',     h: 9  },
  roanUpper:  { c: '#ddc28f', n: 'Upper Roan',                h: 16 },
  mwashia:    { c: '#9c5340', n: 'Mwashia volcanics',         h: 12 },
  grand:      { c: '#c9d4db', n: 'Grand Conglomérat (glacial)', h: 14 },
  nguba:      { c: '#c6b386', n: 'Nguba carbonate',           h: 14 },
  petit:      { c: '#e2e9ee', n: 'Petit Conglomérat (glacial)', h: 12 },
  kundelungu: { c: '#b6a87f', n: 'Upper Kundelungu',          h: 16 },
}
const FULL = ['roanLower','copper','roanUpper','mwashia','grand','nguba','petit','kundelungu']

const STAGES: Stage[] = [
  { age:'~2.5 Ga', title:'Cratonic basement', seds:[], arch:0, amp:0, x0:80, x1:600, sea:false, special:'craton',
    cap:'The Congo and Kalahari cratons stand consolidated. These two ancient plates are the actors whose eventual collision drives the whole story.',
    cu:{ t:'No copper yet — basement only', tone:'gray' } },
  { age:'~880 Ma', title:'Rodinia rifts apart', seds:[], arch:0, amp:0, x0:80, x1:600, sea:true, special:'rift',
    cap:'Rodinia breaks up. The crust stretches and drops along faults, the sea floods in from the southeast, and granites (Nchanga, Lusaka) are emplaced — opening the basin that will host the copper.',
    cu:{ t:'Basin forming — host rocks not yet laid down', tone:'gray' } },
  { age:'880–765 Ma', title:'Roan Group deposited', seds:['roanLower','copper','roanUpper'], arch:0, amp:0, x0:80, x1:600, sea:true, special:'cu',
    cap:'Siliciclastic and carbonate sediment fills the rift. As it buries and compacts, copper–cobalt-rich fluids precipitate metal into a reduced horizon — the ore forms now, during diagenesis, long before any mountains.',
    cu:{ t:'Copper locks in — diagenetic, pre-orogenic', tone:'teal' } },
  { age:'~765 Ma', title:'Mwashia volcanism', seds:['roanLower','copper','roanUpper','mwashia'], arch:0, amp:0, x0:80, x1:600, sea:true, special:'volcano',
    cap:'Lavas erupt across the basin, dated to ~765 Ma. They cap the Roan and give geologists a firm minimum age for the copper-bearing strata beneath.',
    cu:{ t:'Buried and preserved', tone:'blue' } },
  { age:'~735 Ma', title:'Grand Conglomérat glaciation', seds:['roanLower','copper','roanUpper','mwashia','grand'], arch:0, amp:0, x0:80, x1:600, sea:true, special:'ice',
    cap:'The Sturtian ice age. A planet-wide glaciation dumps a thick diamictite — the Grand Conglomérat — across the basin, sealing the copper ever deeper.',
    cu:{ t:'Buried and preserved', tone:'blue' } },
  { age:'~635 Ma', title:'Petit Conglomérat glaciation', seds:FULL, arch:0, amp:0, x0:80, x1:600, sea:true, special:'ice',
    cap:'A second, Marinoan, glaciation lays down the Petit Conglomérat, followed by post-glacial carbonates. The full Katanga Supergroup pile is now complete.',
    cu:{ t:'Buried deep under the full pile', tone:'blue' } },
  { age:'~595 Ma', title:'First deformation (D1)', seds:FULL, arch:8, amp:5, x0:110, x1:570, sea:false, special:'compress',
    cap:'The regime inverts from stretching to squeezing. The Kalahari plate begins pushing north, gently warping the strata. Pb–Zn deposits are emplaced in the Lower Kundelungu during this first pulse.',
    cu:{ t:'Stable; Pb–Zn emplaced during D1', tone:'amber' } },
  { age:'550–530 Ma', title:'Lufilian orogeny (D2)', seds:FULL, arch:34, amp:13, x0:140, x1:540, sea:false, special:'compress',
    cap:'Final collision. An indenter of the southern plate drives thrust sheets and folds, bending the belt into its convex-northward arc and lifting the copper-bearing Roan from the deepest levels of the basin.',
    cu:{ t:'Folded and thrust upward', tone:'coral' } },
  { age:'~500 Ma+', title:'Erosion exposes the ore', seds:FULL, arch:34, amp:13, x0:140, x1:540, sea:false, special:'erode',
    cap:'Tens of millions of years of erosion plane off the mountains. The fold crests are cut away, bringing the copper–cobalt horizon to the surface — where it is now worked in open-pit mines across the Copperbelt.',
    cu:{ t:'Exposed at surface — mineable', tone:'teal' } },
]

const TONE: Record<string, [string, string]> = {
  gray:  ['#e8e2da', '#525862'],
  teal:  ['#0d3d2c', '#5ecba6'],
  blue:  ['#0d2540', '#80c0f0'],
  amber: ['#3c2a0e', '#e8a840'],
  coral: ['#3c1e12', '#e07858'],
}

// ─── burial-curve data ───────────────────────────────────────────────────────
const KP: [number, number][] = [
  [877,0],[850,0.8],[765,2.0],[735,2.6],[700,3.2],[635,4.2],
  [600,5.2],[595,5.4],[575,5.2],[550,4.6],[540,3.6],[530,2.6],
  [510,1.9],[500,1.6],[450,1.1],[400,0.8],[300,0.5],[200,0.3],[100,0.15],[0,0],
]
const ERAS: [number, number, string, string, string, string][] = [
  [2560,880,'Quiet cratonic basement','The Congo and Kalahari cratons sit stable for nearly 1.7 billion years. The longest chapter on the chart is the emptiest — nothing copper-related happens at all.','gray','No copper — the host basin doesn\'t exist yet'],
  [880,868,'Rodinia rifts apart','The crust stretches and founders, granites intrude, and the sea floods the new basin from the southeast.','gray','Basin opening'],
  [868,765,'Roan deposition — copper locks in','Rift sediment piles up; during burial and compaction, Cu–Co-rich fluids precipitate the ore into reduced Roan strata. The endowment is banked here, at the very start of the curve.','teal','Copper precipitating during diagenesis'],
  [765,740,'Mwashia volcanism','Lavas cap the Roan at ~765 Ma, sealing the ore under a volcanic lid.','blue','Buried ~2 km, sinking'],
  [740,700,'Sturtian glaciation','The Grand Conglomérat diamictite blankets the basin during a global ice age.','blue','Buried ~3 km'],
  [700,650,'Nguba platform','Post-glacial carbonates stack up; the basin keeps subsiding and the copper keeps sinking.','blue','Buried ~3.5–4 km'],
  [650,630,'Marinoan glaciation','The Petit Conglomérat records a second global ice age, followed by more carbonate.','blue','Buried ~4.5 km'],
  [630,600,'Final Kundelungu fill','The Katanga Supergroup is complete. The copper approaches its deepest point.','blue','Near maximum burial'],
  [600,595,'Regime inverts','Extension flips to compression as the Kalahari plate closes on the Congo plate.','amber','At maximum burial ~5.4 km'],
  [595,550,'D1 compression','First folding and a metamorphic peak at ~595 Ma; Pb–Zn deposits are emplaced in the Lower Kundelungu.','amber','Folding begins — uplift starts'],
  [550,530,'D2 — the Lufilian orogeny','Final collision. Thrust sheets stack, the belt bends into its arc, and the Roan rides structurally upward from the basin floor — the steep rise on the curve.','coral','Rapid structural uplift'],
  [530,490,'Mountains stand','The young arc towers over the region and erosion attacks it immediately.','coral','Rising toward the surface'],
  [490,0,'Erosion and exposure','Half a billion years of slow planing strips the fold crests, finally cutting down to the ore. The curve\'s long gentle tail is the wait between orogeny and open pit.','blue','Shallowing under erosion'],
]

function bcDepth(t: number): number | null {
  if (t > 877) return null
  for (let i = 0; i < KP.length - 1; i++) {
    const a = KP[i], b = KP[i + 1]
    if (t <= a[0] && t >= b[0]) {
      const f = (a[0] - t) / ((a[0] - b[0]) || 1)
      return a[1] + f * (b[1] - a[1])
    }
  }
  return 0
}
function bcEra(t: number) {
  for (const e of ERAS) if (t <= e[0] && t > e[1]) return e
  return ERAS[ERAS.length - 1]
}

// ─── component ───────────────────────────────────────────────────────────────
export default function LufilianArcClient() {

  // ── stepper ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const NS = 'http://www.w3.org/2000/svg'
    const baseY = 210, basementH = 30, seaY = 58, erodeY = 128

    const svg = document.getElementById('luf-viz') as SVGSVGElement | null
    if (!svg) return
    const defs = svg.querySelector('defs')!

    function svgEl(type: string, attrs: Record<string, string | number>) {
      const e = document.createElementNS(NS, type)
      for (const k in attrs) e.setAttribute(k, String(attrs[k]))
      return e
    }
    function txtEl(x: number, y: number, s: string, extra?: Record<string, string>) {
      const e = svgEl('text', { x, y, 'font-size': 12, fill: '#7a6e62', 'font-family': 'ui-sans-serif, system-ui, sans-serif' })
      if (extra) Object.entries(extra).forEach(([k, v]) => e.setAttribute(k, v))
      e.textContent = s
      return e
    }

    function band(x0: number, x1: number, yTop: number, h: number, arch: number, amp: number) {
      const L = x1 - x0, N = 56
      const yt = (x: number) => yTop - arch * Math.sin(Math.PI * (x - x0) / L) + amp * Math.sin((x - x0) / L * Math.PI * 3)
      let d = ''
      for (let i = 0; i <= N; i++) { const x = x0 + L * i / N; d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + yt(x).toFixed(1) }
      for (let i = N; i >= 0; i--) { const x = x0 + L * i / N; d += 'L' + x.toFixed(1) + ' ' + (yt(x) + h).toFixed(1) }
      return d + 'Z'
    }

    function render(i: number) {
      const s = STAGES[i]
      Array.from(svg.children).forEach(n => { if (n !== defs) svg.removeChild(n) })
      const g = svgEl('g', {})
      const clip = s.special === 'erode' ? 'url(#luf-erode)' : 'none'

      const stack = [{ key: 'basement', h: basementH }, ...s.seds.map(k => ({ key: k, h: ROCK[k].h! }))]
      let cur = baseY
      const layerG = svgEl('g', { 'clip-path': clip })
      for (const ly of stack) {
        const top = cur - ly.h
        layerG.appendChild(svgEl('path', { d: band(s.x0, s.x1, top, ly.h, s.arch, s.amp), fill: ROCK[ly.key].c, stroke: 'rgba(0,0,0,0.25)', 'stroke-width': 0.5 }))
        cur = top
      }
      const pileTop = cur
      g.appendChild(layerG)

      if (s.sea) {
        g.appendChild(svgEl('rect', { x: s.x0, y: seaY, width: s.x1 - s.x0, height: Math.max(2, pileTop - seaY), fill: 'rgba(100,160,220,0.25)' }))
        g.appendChild(svgEl('line', { x1: s.x0, y1: seaY, x2: s.x1, y2: seaY, stroke: '#5a9bd8', 'stroke-width': 1 }))
        g.appendChild(txtEl(s.x1 - 4, seaY - 5, 'sea', { 'text-anchor': 'end', fill: '#3a80c0' }))
      }
      if (s.special === 'craton') {
        g.appendChild(txtEl(180, baseY - 9, 'Congo craton', { 'text-anchor': 'middle', fill: '#7a6860' }))
        g.appendChild(txtEl(470, baseY - 9, 'Kalahari craton', { 'text-anchor': 'middle', fill: '#7a6860' }))
      }
      if (s.special === 'rift') {
        g.appendChild(svgEl('line', { x1: 300, y1: pileTop, x2: 340, y2: baseY, stroke: '#3d332c', 'stroke-width': 1.2 }))
        g.appendChild(svgEl('line', { x1: 380, y1: pileTop, x2: 340, y2: baseY, stroke: '#3d332c', 'stroke-width': 1.2 }))
        g.appendChild(svgEl('polygon', { points: `300,${pileTop} 380,${pileTop} 340,${baseY}`, fill: '#5a4a40' }))
        g.appendChild(svgEl('line', { x1: 235, y1: 74, x2: 175, y2: 74, stroke: '#c06040', 'stroke-width': 2, 'marker-end': 'url(#luf-arr)' }))
        g.appendChild(svgEl('line', { x1: 445, y1: 74, x2: 505, y2: 74, stroke: '#c06040', 'stroke-width': 2, 'marker-end': 'url(#luf-arr)' }))
        g.appendChild(svgEl('ellipse', { cx: 250, cy: pileTop + 10, rx: 18, ry: 9, fill: '#b76a82' }))
        g.appendChild(svgEl('ellipse', { cx: 430, cy: pileTop + 10, rx: 16, ry: 8, fill: '#b76a82' }))
        g.appendChild(txtEl(340, 48, 'rift basin opens; granites intrude', { 'text-anchor': 'middle' }))
      }
      if (s.special === 'cu') {
        const cy = baseY - basementH - ROCK.roanLower.h! - ROCK.copper.h! / 2
        g.appendChild(svgEl('line', { x1: s.x1 - 30, y1: cy, x2: 620, y2: cy - 22, stroke: '#1d9e75', 'stroke-width': 0.8, 'stroke-dasharray': '3 2' }))
        g.appendChild(txtEl(620, cy - 26, 'Cu–Co fixed in pore space', { 'text-anchor': 'end', fill: '#1d9e75' }))
      }
      if (s.special === 'volcano') {
        g.appendChild(svgEl('polygon', { points: `470,${pileTop} 530,${pileTop} 500,${pileTop - 34}`, fill: '#9c5340' }))
        g.appendChild(svgEl('circle', { cx: 500, cy: pileTop - 40, r: 3, fill: '#cf6a4f' }))
        g.appendChild(svgEl('circle', { cx: 507, cy: pileTop - 48, r: 2.4, fill: '#cf6a4f' }))
        g.appendChild(txtEl(500, pileTop - 52, 'volcanism', { 'text-anchor': 'middle' }))
      }
      if (s.special === 'ice') {
        const it = pileTop - 15
        let d = `M${s.x0} ${pileTop}`
        for (let x = s.x0; x <= s.x1; x += 40) d += `Q${x + 20} ${it - 7} ${Math.min(x + 40, s.x1)} ${it}`
        d += `L${s.x1} ${pileTop}Z`
        g.appendChild(svgEl('path', { d, fill: 'rgba(200,225,240,0.70)', stroke: '#9fb2bd', 'stroke-width': 0.8 }))
        for (let x = s.x0 + 40; x < s.x1; x += 70) g.appendChild(svgEl('line', { x1: x, y1: pileTop, x2: x, y2: it - 3, stroke: '#9fb2bd', 'stroke-width': 0.6 }))
        g.appendChild(txtEl((s.x0 + s.x1) / 2, it - 12, 'continental ice sheet', { 'text-anchor': 'middle', fill: '#5888a8' }))
      }
      if (s.special === 'compress') {
        g.appendChild(svgEl('line', { x1: 70, y1: 78, x2: s.x0 - 6, y2: 78, stroke: '#c06040', 'stroke-width': 2, 'marker-end': 'url(#luf-arr)' }))
        g.appendChild(svgEl('line', { x1: 610, y1: 78, x2: s.x1 + 6, y2: 78, stroke: '#c06040', 'stroke-width': 2, 'marker-end': 'url(#luf-arr)' }))
        g.appendChild(txtEl(340, 42, i === 7 ? 'collision — thrust & fold the arc' : 'crustal shortening begins', { 'text-anchor': 'middle', fill: '#c06040' }))
      }
      if (s.special === 'erode') {
        g.appendChild(svgEl('line', { x1: 60, y1: erodeY, x2: 620, y2: erodeY, stroke: '#7a6e62', 'stroke-width': 1.2, 'stroke-dasharray': '6 3' }))
        g.appendChild(svgEl('polygon', { points: `320,${erodeY} 380,${erodeY} 366,${erodeY + 26} 334,${erodeY + 26}`, fill: 'none', stroke: '#a09080', 'stroke-width': 1 }))
        ;[288, 350, 412].forEach(x => g.appendChild(svgEl('rect', { x: x - 9, y: erodeY - 2, width: 18, height: 4, fill: '#1d9e75' })))
        g.appendChild(txtEl(350, erodeY - 8, 'copper exposed at surface', { 'text-anchor': 'middle', fill: '#1d9e75' }))
        g.appendChild(txtEl(350, erodeY + 40, 'open-pit mine', { 'text-anchor': 'middle' }))
      }
      svg.appendChild(g)

      const ageEl = document.getElementById('luf-age')
      const stepEl = document.getElementById('luf-step-num')
      const titleEl = document.getElementById('luf-title')
      const cuEl = document.getElementById('luf-cu')
      const capEl = document.getElementById('luf-cap')
      const chipsEl = document.getElementById('luf-chips')
      if (ageEl) ageEl.textContent = s.age
      if (stepEl) stepEl.textContent = `stage ${i + 1} of 9`
      if (titleEl) titleEl.textContent = s.title
      if (capEl) capEl.textContent = s.cap
      if (cuEl) {
        const [bg, fg] = TONE[s.cu.tone]
        cuEl.textContent = s.cu.t
        cuEl.style.background = bg
        cuEl.style.color = fg
      }
      if (chipsEl) {
        chipsEl.innerHTML = ''
        const keys = s.seds.length ? ['basement', ...s.seds] : ['basement']
        keys.forEach(k => {
          const c = document.createElement('span')
          c.style.cssText = 'display:inline-flex;align-items:center;gap:.3rem;font-size:11px;color:#525862'
          c.innerHTML = `<span style="width:11px;height:11px;border-radius:2px;background:${ROCK[k].c};border:0.5px solid rgba(0,0,0,0.12)"></span>${ROCK[k].n}`
          chipsEl.appendChild(c)
        })
      }
      Array.from(document.getElementById('luf-dots')?.children ?? []).forEach((d, j) => {
        const dot = d as HTMLElement
        dot.style.background = j === i ? '#A95A33' : '#d8d0c8'
        dot.style.transform = j === i ? 'scale(1.4)' : 'scale(1)'
      })
      const prevBtn = document.getElementById('luf-prev') as HTMLButtonElement | null
      const nextBtn = document.getElementById('luf-next') as HTMLButtonElement | null
      if (prevBtn) prevBtn.disabled = i === 0
      if (nextBtn) nextBtn.disabled = i === 8
    }

    let idx = 0
    const dotsEl = document.getElementById('luf-dots')

    const dotClickHandlers: (() => void)[] = []
    STAGES.forEach((_, j) => {
      const d = document.createElement('button')
      d.setAttribute('aria-label', `Go to ${STAGES[j].age} — ${STAGES[j].title}`)
      d.style.cssText = 'width:10px;height:10px;border-radius:50%;border:none;padding:0;cursor:pointer;transition:transform .15s,background .15s;background:#d8d0c8'
      const handler = () => { idx = j; render(idx) }
      d.addEventListener('click', handler)
      dotClickHandlers.push(handler)
      dotsEl?.appendChild(d)
    })

    const prevBtn = document.getElementById('luf-prev')
    const nextBtn = document.getElementById('luf-next')
    const handlePrev = () => { if (idx > 0) { idx--; render(idx) } }
    const handleNext = () => { if (idx < 8) { idx++; render(idx) } }
    const handleKey = (e: Event) => {
      const ke = e as KeyboardEvent
      if (ke.key === 'ArrowRight' && idx < 8) { idx++; render(idx); ke.preventDefault() }
      if (ke.key === 'ArrowLeft' && idx > 0) { idx--; render(idx); ke.preventDefault() }
    }
    prevBtn?.addEventListener('click', handlePrev)
    nextBtn?.addEventListener('click', handleNext)
    svg.addEventListener('keydown', handleKey)

    render(0)

    return () => {
      prevBtn?.removeEventListener('click', handlePrev)
      nextBtn?.removeEventListener('click', handleNext)
      svg.removeEventListener('keydown', handleKey)
      Array.from(dotsEl?.children ?? []).forEach((d, j) => {
        d.removeEventListener('click', dotClickHandlers[j])
      })
      dotsEl && (dotsEl.innerHTML = '')
      Array.from(svg.children).forEach(n => { if (n !== defs) svg.removeChild(n) })
    }
  }, [])

  // ── burial curve ───────────────────────────────────────────────────────────
  useEffect(() => {
    const NS = 'http://www.w3.org/2000/svg'
    const toX = (t: number) => 40 + (2560 - t) * 0.234375
    const toY = (d: number) => 30 + d * 30

    const bcSvg = document.getElementById('luf-bc-svg') as SVGSVGElement | null
    const dynG = document.getElementById('luf-bc-dyn')
    const ageEl = document.getElementById('luf-bc-age')
    const depEl = document.getElementById('luf-bc-depth')
    const titEl = document.getElementById('luf-bc-title')
    const pilEl = document.getElementById('luf-bc-pill') as HTMLElement | null
    const desEl = document.getElementById('luf-bc-desc')
    const sldEl = document.getElementById('luf-bc-slider') as HTMLInputElement | null
    const playBtn = document.getElementById('luf-bc-play') as HTMLButtonElement | null
    const spdEl = document.getElementById('luf-bc-speed')
    if (!bcSvg || !dynG || !sldEl || !playBtn) return

    function svgEl(type: string, attrs: Record<string, string | number>) {
      const e = document.createElementNS(NS, type)
      for (const k in attrs) e.setAttribute(k, String(attrs[k]))
      return e
    }

    // build static curve elements
    let fillD = `M${toX(877)} ${toY(0)}`, lineD = `M${toX(877)} ${toY(0)}`
    KP.forEach(p => { const seg = `L${toX(p[0]).toFixed(1)} ${toY(p[1]).toFixed(1)}`; fillD += seg; lineD += seg })
    fillD += 'L640 30Z'
    dynG.appendChild(svgEl('path', { d: fillD, fill: 'rgba(160,110,50,0.12)' }))
    dynG.appendChild(svgEl('path', { d: lineD, fill: 'none', stroke: '#1D9E75', 'stroke-width': 2.5, 'stroke-linejoin': 'round' }))
    ;[880, 765, 735, 635, 595, 550, 530].forEach(t =>
      dynG.appendChild(svgEl('circle', { cx: toX(t), cy: 26, r: 2, fill: '#a09080' }))
    )
    const ph = svgEl('line', { x1: 40, y1: 30, x2: 40, y2: 210, stroke: '#c0b8b0', 'stroke-width': 1, 'stroke-dasharray': '3 2' })
    const dot = svgEl('circle', { r: 4.5, fill: '#1D9E75', stroke: '#ffffff', 'stroke-width': 1.5, visibility: 'hidden' })
    dynG.appendChild(ph)
    dynG.appendChild(dot)

    function fmt(t: number) { return t >= 1000 ? (t / 1000).toFixed(2) + ' Ga' : Math.round(t) + ' Ma' }

    function render(t: number) {
      const x = toX(t)
      ph.setAttribute('x1', String(x)); ph.setAttribute('x2', String(x))
      const d = bcDepth(t)
      if (d === null) {
        dot.setAttribute('visibility', 'hidden')
        if (depEl) depEl.textContent = 'copper not yet deposited'
      } else {
        dot.setAttribute('visibility', 'visible')
        dot.setAttribute('cx', String(x)); dot.setAttribute('cy', String(toY(d)))
        if (depEl) depEl.textContent = d < 0.15 ? 'copper at the surface' : `copper ${d.toFixed(1)} km below surface`
      }
      const e = bcEra(t)
      if (ageEl) ageEl.textContent = fmt(t)
      if (titEl) titEl.textContent = e[2]
      if (desEl) desEl.textContent = e[3]
      let tone = e[4]; let txt = e[5]
      if (e[0] === 490 && t <= 120) { tone = 'teal'; txt = 'Exposed — open-pit mineable' }
      if (pilEl) {
        pilEl.textContent = txt
        const [bg, fg] = TONE[tone]
        pilEl.style.background = bg; pilEl.style.color = fg
      }
    }

    const SLOW_AT = 1650
    function step(v: number) {
      if (v < SLOW_AT - 80) return 8
      if (v < SLOW_AT) return 8 - (8 - 1) * ((v - (SLOW_AT - 80)) / 80)
      return 1
    }

    let timer: ReturnType<typeof setInterval> | null = null
    function setVal(v: number) { sldEl.value = String(v); render(2560 - v) }
    function stop() {
      if (timer !== null) { clearInterval(timer); timer = null }
      playBtn.textContent = '▶'
      if (spdEl) spdEl.textContent = ''
    }
    function handlePlay() {
      if (timer !== null) { stop(); return }
      if (+sldEl.value >= 2560) setVal(0)
      playBtn.textContent = '❚❚'
      timer = setInterval(() => {
        let v = +sldEl.value
        v += step(v)
        if (v >= 2560) { setVal(2560); stop(); return }
        setVal(v)
        if (spdEl) spdEl.textContent = v < SLOW_AT ? 'fast-forward' : 'slowed ×8'
      }, 25)
      if (spdEl) spdEl.textContent = +sldEl.value < SLOW_AT ? 'fast-forward' : 'slowed ×8'
    }
    function handleSlider() { render(2560 - +sldEl.value) }
    function scrub(e: PointerEvent) {
      const r = bcSvg.getBoundingClientRect()
      const sx = (e.clientX - r.left) / r.width * 680
      let v = (sx - 40) / 600 * 2560; v = Math.max(0, Math.min(2560, v))
      if (timer !== null) stop()
      setVal(v)
    }
    function handlePointerDown(e: PointerEvent) { bcSvg.setPointerCapture(e.pointerId); scrub(e) }
    function handlePointerMove(e: PointerEvent) { if (e.buttons) scrub(e) }

    playBtn.addEventListener('click', handlePlay)
    sldEl.addEventListener('input', handleSlider)
    bcSvg.addEventListener('pointerdown', handlePointerDown)
    bcSvg.addEventListener('pointermove', handlePointerMove)

    render(2560)

    return () => {
      if (timer !== null) clearInterval(timer)
      playBtn.removeEventListener('click', handlePlay)
      sldEl.removeEventListener('input', handleSlider)
      bcSvg.removeEventListener('pointerdown', handlePointerDown)
      bcSvg.removeEventListener('pointermove', handlePointerMove)
      dynG.innerHTML = ''
    }
  }, [])

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-stone-50 border-b border-stone-200 pt-24 pb-16">
        <div className="container-shell">
          <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
            A visual geology briefing
          </p>
          <h1 className="text-4xl md:text-[46px] font-semibold text-charcoal-900 leading-tight mb-5">
            The Greater Lufilian Arc:<br className="hidden sm:block" />{' '}
            a billion years in four pictures
          </h1>
          <p className="text-charcoal-600 text-lg leading-relaxed max-w-2xl mb-8">
            Stretching roughly 800&nbsp;kilometres across northern Zambia and the southern
            Democratic Republic of Congo, the Lufilian Arc is the crumpled rim of an ancient
            rift basin — and the host of the richest copper–cobalt endowment on Earth. This
            page tells its story four ways: as a sequence of moments, at true scale, as a
            single line through deep time, and as the structure it left behind.
          </p>
          <ul className="flex flex-wrap gap-2 mb-8 list-none p-0" aria-label="Key dates">
            {[
              ['~880 Ma', 'rift opens'],
              ['880–765 Ma', 'copper locks in'],
              ['595–530 Ma', 'continents collide'],
              ['~500 Ma → today', 'erosion exposes the ore'],
            ].map(([date, label]) => (
              <li key={date} className="flex items-center gap-1.5 text-[13px] bg-white border border-stone-200 rounded-full px-4 py-1.5 text-charcoal-600">
                <span className="font-semibold text-charcoal-900">{date}</span>
                {label}
              </li>
            ))}
          </ul>
          <nav aria-label="Page sections" className="flex flex-wrap gap-x-6 gap-y-1.5 text-[14px]">
            {(['story','scale','curve','structure'] as const).map((id, i) => (
              <a key={id} href={`#${id}`} className="text-copper-500 hover:text-copper-600 transition-colors underline-offset-4 hover:underline">
                {i + 1}&nbsp;·&nbsp;{['The story','True scale','One line','The structure'][i]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Part 1: Stepper ──────────────────────────────────────────────── */}
      <section id="story" className="section-gap bg-white">
        <div className="container-shell">
          <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Part one</p>
          <h2 className="text-[30px] font-semibold text-charcoal-900 mb-4">The story, stage by stage</h2>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-3">
            Every picture on this page is a different view of the same five-act plot. Two ancient
            continental blocks — the Congo and Kalahari cratons — drift apart as the supercontinent
            Rodinia breaks up. The rift between them floods with sea water and fills with sediment:
            the Katanga Supergroup. Inside the oldest of those sediments, the Roan Group,
            copper- and cobalt-rich fluids quietly precipitate metal during burial — long before
            any mountain exists. The basin then slams shut as the two cratons collide, folding and
            stacking the strata into the great northward-bulging arc. Finally, half a billion years
            of erosion strips the mountains down to their roots and delivers the copper to the surface.
          </p>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-7">
            The explorer below redraws one patch of crust at nine moments in that history.
            Step through with the buttons, the dots, or your keyboard&rsquo;s arrow keys.
          </p>

          {/* stepper card */}
          <div className="rounded-lg border border-stone-200 bg-stone-25 p-6">
            <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span id="luf-age" className="text-2xl font-semibold text-charcoal-900" suppressHydrationWarning>~2.5 Ga</span>
                  <span id="luf-step-num" className="text-xs text-charcoal-400" suppressHydrationWarning>stage 1 of 9</span>
                </div>
                <div id="luf-title" className="text-base font-semibold text-charcoal-700 mt-0.5" suppressHydrationWarning>Cratonic basement</div>
              </div>
              <div id="luf-cu" className="text-xs px-3 py-1.5 rounded-md whitespace-nowrap" suppressHydrationWarning />
            </div>

            <svg
              id="luf-viz"
              width="100%"
              viewBox="0 0 680 250"
              role="img"
              tabIndex={0}
              className="block"
              style={{ outline: 'none', cursor: 'default' }}
            >
              <title>Greater Lufilian Arc cross-section through time</title>
              <desc>Schematic geological cross-section that changes with each stage.</desc>
              <defs>
                <marker id="luf-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
                <clipPath id="luf-erode"><rect x="0" y="128" width="680" height="122"/></clipPath>
              </defs>
            </svg>

            <div id="luf-cap" className="text-sm leading-relaxed text-charcoal-600 min-h-[3em] mt-3" suppressHydrationWarning />
            <div id="luf-chips" className="flex flex-wrap gap-x-3 gap-y-1 mt-3 min-h-[1.5em]" suppressHydrationWarning />

            <div className="flex items-center justify-between gap-3 mt-5">
              <button
                id="luf-prev"
                aria-label="Previous stage"
                className="px-4 py-2 border border-stone-300 bg-white text-charcoal-700 rounded text-sm hover:border-stone-400 hover:text-charcoal-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ‹ Prev
              </button>
              <div id="luf-dots" className="flex gap-2 flex-wrap justify-center" />
              <button
                id="luf-next"
                aria-label="Next stage"
                className="px-4 py-2 border border-stone-300 bg-white text-charcoal-700 rounded text-sm hover:border-stone-400 hover:text-charcoal-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next ›
              </button>
            </div>
          </div>

          <div className="border-l-2 border-copper-500/40 pl-4 mt-6 text-[14px] text-charcoal-600 leading-relaxed max-w-2xl">
            <strong className="font-semibold text-charcoal-900">What to notice:</strong> the copper
            (teal layer) appears at stage&nbsp;3 and never changes again. Every stage after that
            is about <em>moving</em> the metal — burying it, folding it, lifting it — not making
            it. The status pill tracks where the copper is at each moment.
          </div>
        </div>
      </section>

      {/* ── Part 2: True-scale timeline ───────────────────────────────────── */}
      <section id="scale" className="section-gap bg-stone-25">
        <div className="container-shell">
          <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Part two</p>
          <h2 className="text-[30px] font-semibold text-charcoal-900 mb-4">Time, drawn honestly</h2>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-7">
            Evenly spaced timelines flatter the boring parts. Drawn at true scale — every
            millimetre worth the same number of years — the arc&rsquo;s history looks very
            different: nearly two-thirds of the record is silent cratonic basement where nothing
            copper-related happens at all. Rifting, deposition, mineralization, two global ice
            ages, continental collision and exposure all crowd into the final sixth of the bar.
          </p>

          <div className="rounded-lg border border-stone-200 bg-white p-6">
            <svg width="100%" viewBox="0 0 680 290" role="img" aria-label="True-scale timeline of the Greater Lufilian Arc">
              <title>True-scale timeline of the Greater Lufilian Arc</title>
              <desc>A 2.56-billion-year bar drawn to true scale, with a zoom window expanding the 900 to 480 million year interval.</desc>
              <text x="40" y="58" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Full 2.56-billion-year span — true scale</text>
              {/* top bar */}
              <rect x="40" y="70" width="393.75" height="24" fill="#4a4438"/>
              <rect x="433.75" y="70" width="58.55" height="24" fill="#9c5e1a"/>
              <rect x="492.3" y="70" width="8.2" height="24" fill="#38342e"/>
              <rect x="500.5" y="70" width="15.3" height="24" fill="#8c3818"/>
              <rect x="515.8" y="70" width="124.2" height="24" fill="#38342e"/>
              <rect x="433.75" y="82" width="26.95" height="12" fill="#1D9E75"/>
              <rect x="40" y="70" width="600" height="24" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
              {/* top tick marks */}
              {[40,171.25,288.4,405.6,640].map((x,i) => <line key={i} x1={x} y1="94" x2={x} y2="100" stroke="#a09080" strokeWidth="1"/>)}
              <text x="40"     y="112" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">2.5 Ga</text>
              <text x="171.25" y="112" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">2.0</text>
              <text x="288.4"  y="112" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">1.5</text>
              <text x="405.6"  y="112" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">1.0</text>
              <text x="640"    y="112" fontSize="12" fill="#7a6e62" textAnchor="end"    fontFamily="ui-sans-serif,system-ui,sans-serif">today</text>
              {/* zoom window */}
              <rect x="429" y="64" width="98.5" height="36" fill="none" stroke="#a09080" strokeWidth="1" strokeDasharray="4 2"/>
              {/* leader lines */}
              <line x1="429" y1="100" x2="40" y2="160" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="4 3"/>
              <line x1="527.5" y1="100" x2="640" y2="160" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="4 3"/>
              {/* bottom bar */}
              <rect x="40"    y="160" width="28.6"  height="24" fill="#4a4438"/>
              <rect x="68.6"  y="160" width="357.1" height="24" fill="#9c5e1a"/>
              <rect x="425.7" y="160" width="50"    height="24" fill="#38342e"/>
              <rect x="475.7" y="160" width="92.9"  height="24" fill="#8c3818"/>
              <rect x="568.6" y="160" width="71.4"  height="24" fill="#38342e"/>
              <rect x="68.6"  y="172" width="164.3" height="12" fill="#1D9E75"/>
              <rect x="40"    y="160" width="600"   height="24" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
              {/* event dots */}
              {[68.6,232.9,275.7,418.6,475.7,554,615].map((x,i) => <circle key={i} cx={x} cy="189" r="2.5" fill="#a09080"/>)}
              {/* event leaders */}
              <line x1="68.6"  y1="192" x2="76"  y2="202" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="232.9" y1="192" x2="218" y2="202" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="275.7" y1="192" x2="275.7" y2="230" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="418.6" y1="192" x2="413" y2="202" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="475.7" y1="192" x2="475.7" y2="230" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="554"   y1="192" x2="551" y2="202" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              <line x1="615"   y1="192" x2="606" y2="228" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="3 2"/>
              {/* event labels */}
              <text x="80"    y="210" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Rifting · 880 Ma</text>
              <text x="200"   y="210" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Mwashia · 765 Ma</text>
              <text x="410"   y="210" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Marinoan · 635 Ma</text>
              <text x="550"   y="210" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">D2 · 550–530 Ma</text>
              <text x="275.7" y="238" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Sturtian · 735 Ma</text>
              <text x="475.7" y="238" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">D1 · 595 Ma</text>
              <text x="604"   y="238" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Ore exposed</text>
              {/* legend */}
              <rect x="40"  y="262" width="10" height="10" fill="#4a4438"/>
              <text x="56"  y="270" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Basement</text>
              <rect x="126" y="262" width="10" height="10" fill="#9c5e1a"/>
              <text x="142" y="270" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Deposition</text>
              <rect x="225" y="262" width="10" height="10" fill="#1D9E75"/>
              <text x="241" y="270" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Copper (Roan)</text>
              <rect x="344" y="262" width="10" height="10" fill="#8c3818"/>
              <text x="360" y="270" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Orogeny</text>
              <rect x="424" y="262" width="10" height="10" fill="#38342e"/>
              <text x="440" y="270" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Erosion</text>
            </svg>
          </div>

          <div className="border-l-2 border-copper-500/40 pl-4 mt-6 text-[14px] text-charcoal-600 leading-relaxed max-w-2xl">
            <strong className="font-semibold text-charcoal-900">How to read it:</strong> the top bar
            is the whole 2.56-billion-year record. The dashed window marks the 900–480&nbsp;Ma
            interval, expanded in the lower bar. The teal block is the moment the copper formed —
            right at the start of the action, hundreds of millions of years before the
            orange-red collision that built the mountains.
          </div>
        </div>
      </section>

      {/* ── Part 3: Burial curve ──────────────────────────────────────────── */}
      <section id="curve" className="section-gap bg-white">
        <div className="container-shell">
          <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Part three</p>
          <h2 className="text-[30px] font-semibold text-charcoal-900 mb-4">One line through deep time</h2>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-3">
            If the arc&rsquo;s history had to be compressed into a single line, it would be this
            one: the depth of the copper horizon below the ground surface, plotted at true scale
            from 2.56 billion years ago to today. The line doesn&rsquo;t exist for the first
            1.7 billion years — there is no basin and no copper. Then it plunges as sediment
            piles on top of the ore, kinks sharply upward when the collision lifts it, and drifts
            slowly back to zero as erosion does the rest.
          </p>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-7">
            Press play. The animation fast-forwards through the silent eon in a few seconds, then
            slows about eightfold the moment the rift opens — so deposition, burial, collision
            and exhumation each get time to breathe. You can also drag the slider, or click
            anywhere on the chart.
          </p>

          <div className="rounded-lg border border-stone-200 bg-stone-25 p-6">
            <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span id="luf-bc-age" className="text-2xl font-semibold text-charcoal-900" suppressHydrationWarning>2.56 Ga</span>
                  <span id="luf-bc-depth" className="text-xs text-charcoal-400" suppressHydrationWarning></span>
                </div>
                <div id="luf-bc-title" className="text-base font-semibold text-charcoal-700 mt-0.5" suppressHydrationWarning>Quiet cratonic basement</div>
              </div>
              <div id="luf-bc-pill" className="text-xs px-3 py-1.5 rounded-md whitespace-nowrap" suppressHydrationWarning />
            </div>

            <svg
              id="luf-bc-svg"
              width="100%"
              viewBox="0 0 680 240"
              role="img"
              className="block"
              style={{ cursor: 'crosshair', touchAction: 'none' }}
            >
              <title>Copper horizon depth through time, true scale</title>
              <desc>Line chart of burial depth versus time at linear scale.</desc>
              {/* shading bands */}
              <rect x="433.75" y="30" width="58.55" height="180" fill="rgba(200,130,40,0.08)"/>
              <rect x="500.5"  y="30" width="15.3"  height="180" fill="rgba(180,70,30,0.10)"/>
              {/* grid */}
              <line x1="40" y1="30"  x2="640" y2="30"  stroke="#dbd5cd" strokeWidth="1"/>
              <line x1="40" y1="90"  x2="640" y2="90"  stroke="#e8e2dc" strokeWidth="0.7"/>
              <line x1="40" y1="150" x2="640" y2="150" stroke="#e8e2dc" strokeWidth="0.7"/>
              <line x1="40" y1="210" x2="640" y2="210" stroke="#dbd5cd" strokeWidth="1"/>
              {/* y-axis labels */}
              <text x="36" y="34"  textAnchor="end" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">0</text>
              <text x="36" y="94"  textAnchor="end" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">2</text>
              <text x="36" y="154" textAnchor="end" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">4</text>
              <text x="36" y="214" textAnchor="end" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">6 km</text>
              <text x="48" y="48"  fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Depth of the Cu–Co horizon below the surface</text>
              {/* x-axis ticks */}
              {[54.1,171.25,288.4,405.6,522.8,640].map((x,i) => <line key={i} x1={x} y1="210" x2={x} y2="216" stroke="#a09080" strokeWidth="1"/>)}
              <text x="54.1"   y="230" textAnchor="middle" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">2.5 Ga</text>
              <text x="171.25" y="230" textAnchor="middle" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">2.0</text>
              <text x="288.4"  y="230" textAnchor="middle" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">1.5</text>
              <text x="405.6"  y="230" textAnchor="middle" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">1.0</text>
              <text x="522.8"  y="230" textAnchor="middle" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">0.5</text>
              <text x="640"    y="230" textAnchor="end"    fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">today</text>
              {/* dynamic group */}
              <g id="luf-bc-dyn" />
            </svg>

            <div id="luf-bc-desc" className="text-sm leading-relaxed text-charcoal-600 min-h-[3em] mt-3" suppressHydrationWarning />

            <div className="flex items-center gap-3 mt-4">
              <button
                id="luf-bc-play"
                aria-label="Play through time"
                className="flex items-center justify-center w-10 h-10 border border-stone-300 bg-white text-charcoal-700 rounded text-sm hover:border-stone-400 hover:text-charcoal-900 transition-colors flex-shrink-0"
                suppressHydrationWarning
              >
                ▶
              </button>
              <span id="luf-bc-speed" className="text-[11px] text-charcoal-400 w-24 flex-shrink-0" suppressHydrationWarning />
              <input
                id="luf-bc-slider"
                type="range"
                min="0"
                max="2560"
                step="0.5"
                defaultValue="0"
                aria-label="Time scrubber from 2.56 billion years ago to today"
                className="flex-1 accent-copper-500"
              />
            </div>
          </div>

          <div className="border-l-2 border-copper-500/40 pl-4 mt-6 text-[14px] text-charcoal-600 leading-relaxed max-w-2xl">
            <strong className="font-semibold text-charcoal-900">What the shape means:</strong> the
            long descent is burial — lavas, two glacial deposits and a kilometre-stack of
            carbonates piling onto the ore. The sharp kink inside the amber-coral band is the
            Lufilian orogeny, the only fast event on the chart. The gentle tail is half a billion
            years of erosion — the wait between mountain-building and open-pit mining.
          </div>
          <p className="text-[13px] text-charcoal-400 max-w-2xl mt-3 leading-relaxed">
            Depth values are illustrative. The shape — deposited shallow, buried deep, lifted fast,
            exhumed slowly — follows the published sequence of events, but the kilometre figures
            are schematic, not a measured burial-history model.
          </p>
        </div>
      </section>

      {/* ── Part 4: Structural section ────────────────────────────────────── */}
      <section id="structure" className="section-gap bg-stone-25">
        <div className="container-shell">
          <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">Part four</p>
          <h2 className="text-[30px] font-semibold text-charcoal-900 mb-4">Where everything ended up</h2>
          <p className="text-charcoal-600 leading-relaxed max-w-2xl mb-7">
            The collision left a distinctive architecture, and this section through the arc&rsquo;s
            western arm — from the undeformed foreland in the northwest to the hinterland in the
            southeast — shows it. Reading left to right: flat-lying cover on the Congo craton;
            the thrust front; a stack of far-travelled allochthonous nappes that carry the
            cobalt-rich dolomite-hosted ore; the Kakoma–Kamano Thrust; the less-travelled
            para-autochthonous Zambian cover with its siliciclastic-hosted, lower-cobalt ore;
            a dome where basement pushed up through the pile; and finally the Mwembeshi Shear
            Zone — the hard southern wall separating the Lufilian Arc from the Zambezi Belt.
          </p>

          <div className="rounded-lg border border-stone-200 bg-white p-6">
            <svg width="100%" viewBox="0 0 680 340" role="img">
              <title>Structural cross-section of the Lufilian Arc western arm</title>
              <desc>Schematic NW to SE section showing foreland, allochthonous nappes, Kakoma-Kamano thrust, Zambian cover, basement dome and Mwembeshi shear zone.</desc>
              <defs>
                <marker id="luf2-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
                <pattern id="luf-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#c8c0b8" strokeWidth="1.2"/>
                </pattern>
              </defs>
              {/* NW / SE labels */}
              <text x="40"  y="46" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">NW · foreland</text>
              <text x="640" y="46" fontSize="12" fill="#7a6e62" textAnchor="end" fontFamily="ui-sans-serif,system-ui,sans-serif">SE · hinterland</text>
              {/* basement fill */}
              <path d="M40 215 L180 215 L420 210 C445 196 465 150 480 142 C495 150 515 196 530 200 L640 205 L640 300 L40 300 Z" fill="#6b5a4f"/>
              {/* Katangan cover */}
              <path d="M40 170 L200 165 L250 150 L320 145 L390 150 L440 150 L465 144 L480 140 L495 144 L520 152 L560 150 L600 150 L600 203 L530 200 C515 196 495 150 480 142 C465 150 445 196 420 210 L180 215 L40 215 Z" fill="#caa468"/>
              {/* Mwembeshi zone */}
              <path d="M615 152 L640 155 L640 300 L615 300 Z" fill="#a89c8c"/>
              <path d="M600 150 L615 152 L615 300 L600 300 Z" fill="#8a8378"/>
              <path d="M600 150 L615 152 L615 300 L600 300 Z" fill="url(#luf-hatch)" opacity="0.7"/>
              {/* bedding lines */}
              <line x1="46" y1="186" x2="190" y2="184" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8"/>
              <line x1="46" y1="198" x2="192" y2="197" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8"/>
              {/* copper horizon */}
              <line x1="48"  y1="208" x2="186" y2="208" stroke="#1D9E75" strokeWidth="3.5"/>
              <path d="M212 206 C226 194 236 178 240 165" fill="none" stroke="#1D9E75" strokeWidth="3.5"/>
              <path d="M280 205 C297 190 310 168 317 154" fill="none" stroke="#1D9E75" strokeWidth="3.5"/>
              <path d="M352 204 C372 188 388 168 397 158" fill="none" stroke="#1D9E75" strokeWidth="3.5"/>
              <path d="M530 190 Q545 172 560 186 Q575 198 590 182" fill="none" stroke="#1D9E75" strokeWidth="3.5"/>
              {/* thrust faults */}
              <path d="M200 213 C218 198 230 178 235 158" fill="none" stroke="#c06040" strokeWidth="1.4"/>
              <path d="M268 212 C288 195 304 168 312 147" fill="none" stroke="#c06040" strokeWidth="1.4"/>
              <path d="M340 211 C362 192 382 166 392 151" fill="none" stroke="#c06040" strokeWidth="1.4"/>
              {/* top line */}
              <path d="M40 170 L200 165 L250 150 L320 145 L390 150 L440 150 L465 144 L480 140 L495 144 L520 152 L560 150 L600 150" fill="none" stroke="#7a6860" strokeWidth="1"/>
              <path d="M615 152 L640 155" fill="none" stroke="#7a6860" strokeWidth="1"/>
              {/* transport arrow */}
              <line x1="360" y1="108" x2="290" y2="108" stroke="#c06040" strokeWidth="2" markerEnd="url(#luf2-arr)"/>
              {/* floating labels */}
              <text x="325" y="92"  fontSize="12" fill="#a06040" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">NW-directed thrust transport</text>
              <text x="115" y="150" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Foreland cover</text>
              <text x="280" y="124" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Allochthonous nappes</text>
              <text x="400" y="144" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Kakoma–Kamano thrust</text>
              <text x="640" y="140" fontSize="12" fill="#7a6e62" textAnchor="end"    fontFamily="ui-sans-serif,system-ui,sans-serif">Zambezi belt</text>
              {/* Kafwego pin */}
              <circle cx="500" cy="122" r="4" fill="#1D9E75"/>
              <line x1="500" y1="127" x2="500" y2="148" stroke="#1D9E75" strokeWidth="1.2"/>
              <text x="500" y="108" fontSize="12" fill="#1d9e75" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Kafwego (approx.)</text>
              {/* on-fill labels */}
              <text x="140" y="250" fontSize="12" textAnchor="middle" fill="#d4c8b4" fontFamily="ui-sans-serif,system-ui,sans-serif">Congo craton basement</text>
              <text x="480" y="238" fontSize="12" textAnchor="middle" fill="#d4c8b4" fontFamily="ui-sans-serif,system-ui,sans-serif">Basement dome</text>
              <text x="558" y="178" fontSize="12" textAnchor="middle" fill="#3a2808" fontFamily="ui-sans-serif,system-ui,sans-serif">Zambian cover</text>
              {/* Mwembeshi label */}
              <line x1="607" y1="302" x2="592" y2="310" stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="4 3"/>
              <text x="575" y="318" fontSize="12" fill="#7a6e62" textAnchor="middle" fontFamily="ui-sans-serif,system-ui,sans-serif">Mwembeshi shear zone</text>
              {/* legend */}
              <rect x="40" y="310" width="10" height="10" fill="#6b5a4f"/>
              <text x="56" y="318" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Basement</text>
              <rect x="126" y="310" width="10" height="10" fill="#caa468"/>
              <text x="142" y="318" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Katangan cover</text>
              <rect x="251" y="313" width="14" height="4" fill="#1D9E75"/>
              <text x="271" y="318" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Cu–Co horizon</text>
              <line x1="372" y1="315" x2="390" y2="315" stroke="#c06040" strokeWidth="1.4"/>
              <text x="396" y="318" fontSize="12" fill="#7a6e62" fontFamily="ui-sans-serif,system-ui,sans-serif">Thrust fault</text>
            </svg>
          </div>

          <div className="border-l-2 border-copper-500/40 pl-4 mt-6 text-[14px] text-charcoal-600 leading-relaxed max-w-2xl">
            <strong className="font-semibold text-charcoal-900">What to notice:</strong> the teal line
            is one rock layer wearing four costumes — flat and deep in the foreland, sliced and
            stacked in the nappes, folded in the Zambian cover. Same copper horizon, four
            structural fates. That is why ore character changes across the belt: the transported
            Congolese nappes carry cobalt-rich dolomite-hosted ore, while the Zambian cover
            carries siliciclastic-hosted ore with lower cobalt. The Kafwego pin is positional
            shorthand only — it places the project in the correct structural domain, nothing
            more precise.
          </div>
        </div>
      </section>

      {/* ── Takeaway ─────────────────────────────────────────────────────── */}
      <section className="section-gap bg-stone-50">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="text-copper-500 text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">The point</p>
            <h2 className="text-[30px] font-semibold text-charcoal-900 mb-5">The copper was banked early</h2>
            <p className="text-charcoal-600 leading-relaxed">
              If you remember one thing from this page, make it this: the metal entered the rocks
              in the first visible moment of the story — during quiet burial of rift sediments,
              roughly 350 million years before the mountains rose. Everything that followed —
              glaciations, collision, the bending of the arc, the long erosional wait — was
              geology deciding <em>when</em> the copper would become reachable, not <em>whether</em>{' '}
              it existed. Endowment came first; access came a billion years later.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-stone-50 border-t border-stone-200">
        <div className="container-shell">
          <p className="text-[13px] text-charcoal-400 leading-relaxed max-w-3xl">
            These graphics are schematic teaching models compiled from published accounts of
            Greater Lufilian Arc geology. Layer thicknesses, burial depths and structural
            geometry are illustrative — sound for explaining the system, but not a substitute
            for published cross-sections or technical reporting. Ages follow commonly cited
            values (rift onset ~880&nbsp;Ma; Mwashia volcanism ~765&nbsp;Ma; Sturtian and
            Marinoan glaciations ~735 and ~635&nbsp;Ma; Lufilian deformation ~595–530&nbsp;Ma).
          </p>
        </div>
      </section>
    </>
  )
}
