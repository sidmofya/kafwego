import { projectFacts, isPublishable } from "@/content/project-facts";

/**
 * Regional setting — Kafwego within the Greater Lufilian Arc, with established
 * operations shown for jurisdictional context.
 *
 * Redrawn from the project technical deck (p3/p4). Positions are schematic. The
 * qualifier below is load-bearing: nearby operations indicate that this is a
 * working copper jurisdiction, NOT that mineralisation continues into Kafwego.
 */
export function RegionalContextMap({ className = "" }: { className?: string }) {
  const ops = isPublishable(projectFacts.nearbyOperations)
    ? projectFacts.nearbyOperations.value
    : [];

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
        <svg
          viewBox="0 0 800 520"
          className="h-auto w-full"
          role="img"
          aria-labelledby="regional-map-title regional-map-desc"
        >
          <title id="regional-map-title">
            Kafwego within the Greater Lufilian Arc, northwestern Zambia
          </title>
          <desc id="regional-map-desc">
            A schematic regional map showing the Kafwego project at the western end of
            the Greater Lufilian Arc, with the Kansanshi, Sentinel and Lumwana copper
            operations shown to the north-east, east and south respectively.
          </desc>

          <rect width="800" height="520" fill="#FBFAF9" />

          {/* Greater Lufilian Arc envelope */}
          <ellipse
            cx="410"
            cy="250"
            rx="290"
            ry="96"
            transform="rotate(-19 410 250)"
            fill="#A95A33"
            fillOpacity="0.09"
            stroke="#A95A33"
            strokeWidth="1.8"
            strokeDasharray="8 6"
          />
          <text
            x="410"
            y="256"
            textAnchor="middle"
            transform="rotate(-19 410 256)"
            fill="#8A4A2A"
            fontSize="19"
            fontWeight="600"
            letterSpacing="2"
          >
            GREATER LUFILIAN ARC
          </text>

          {/* Kafwego */}
          <g>
            <path d="M 196 330 l 11 20 h -22 Z" fill="#A95A33" transform="translate(0,-2)" />
            <circle cx="196" cy="330" r="9" fill="#A95A33" />
            <rect x="96" y="358" width="200" height="34" rx="4" fill="#A95A33" />
            <text x="196" y="381" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="700">
              KAFWEGO PROJECT
            </text>
          </g>

          {/* Established operations */}
          {[
            { x: 560, y: 150, name: "Kansanshi" },
            { x: 612, y: 258, name: "Sentinel" },
            { x: 388, y: 396, name: "Lumwana" },
          ].map((op) => (
            <g key={op.name}>
              <circle cx={op.x} cy={op.y} r="8" fill="none" stroke="#3F444C" strokeWidth="2.5" />
              <path
                d={`M ${op.x - 5} ${op.y - 5} L ${op.x + 5} ${op.y + 5} M ${op.x + 5} ${op.y - 5} L ${op.x - 5} ${op.y + 5}`}
                stroke="#3F444C"
                strokeWidth="2"
              />
              <text x={op.x + 15} y={op.y + 5} fill="#3F444C" fontSize="17" fontWeight="600">
                {op.name}
              </text>
            </g>
          ))}

          <text x="60" y="60" fill="#525862" fontSize="17" fontWeight="600" letterSpacing="1.5">
            ZAMBIA
          </text>

          <g transform="translate(730, 60)">
            <path d="M 0 30 L 0 -12" stroke="#3F444C" strokeWidth="2.5" />
            <path d="M 0 -20 L 7 -3 L 0 -8 L -7 -3 Z" fill="#3F444C" />
            <text x="0" y="48" textAnchor="middle" fill="#3F444C" fontSize="17" fontWeight="700">N</text>
          </g>
        </svg>
      </div>

      {ops.length > 0 && (
        <dl className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-100 bg-white">
          {ops.map((op) => (
            <div key={op.name} className="flex flex-wrap gap-x-4 gap-y-1 p-4 text-sm">
              <dt className="font-medium text-charcoal-900">{op.name}</dt>
              <dd className="text-charcoal-500">{op.operator}</dd>
              <dd className="ml-auto font-medium text-copper-600">{op.distance}</dd>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-3 text-xs leading-relaxed text-charcoal-500">
        Schematic representation redrawn from project technical material; positions are
        indicative. Established regional operations are shown to indicate jurisdictional
        and geological context only. They are separate projects under separate ownership
        and should not be interpreted as evidence of mineralisation, grade, deposit style
        or scale at Kafwego.
      </p>
    </div>
  );
}
