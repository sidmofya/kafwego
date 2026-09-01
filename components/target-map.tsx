"use client";

import { useState } from "react";
import { targetsContent } from "@/content/pages/targets";

/**
 * Recreation of the Kafwego licence and priority target areas.
 *
 * Redrawn from the project technical deck (p9, "Exploration Targets") in the site
 * palette, without third-party branding. Target positions preserve their relative
 * arrangement in the source. The boundary and target outlines are indicative
 * schematic representations, not survey-accurate geometry, and no coordinates are
 * published here.
 */

// Licence boundary — rectilinear trace of the source outline.
const LICENCE_PATH =
  "M 170 250 L 268 250 L 268 150 L 596 150 L 596 196 L 792 196 L 792 300 " +
  "L 864 300 L 864 470 L 700 470 L 700 524 L 428 524 L 428 556 L 240 556 " +
  "L 240 430 L 170 430 Z";

// Drainage — the watercourse along the eastern side of the licence.
const DRAINAGE_PATH = "M 812 140 C 800 220, 838 268, 820 340 C 806 402, 836 452, 826 540";

type TargetGeometry = { cx: number; cy: number; rx: number; ry: number };

const TARGET_GEOMETRY: Record<string, TargetGeometry> = {
  "pit-1": { cx: 470, cy: 226, rx: 74, ry: 40 },
  "pit-2": { cx: 340, cy: 320, rx: 74, ry: 40 },
  dabwa: { cx: 664, cy: 336, rx: 70, ry: 38 },
  chimamokwe: { cx: 468, cy: 420, rx: 88, ry: 40 },
  kaluba: { cx: 654, cy: 458, rx: 74, ry: 38 },
};

export function TargetMap({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
        <svg
          viewBox="0 0 1000 640"
          className="h-auto w-full"
          role="img"
          aria-labelledby="target-map-title target-map-desc"
        >
          <title id="target-map-title">
            Kafwego licence area showing five priority exploration targets
          </title>
          <desc id="target-map-desc">
            A schematic map of the Kafwego project licence boundary containing five
            priority exploration target areas: {targetsContent.targets.map((t) => t.name).join(", ")}.
            A watercourse runs along the eastern side of the licence. Scale bar shows
            ten kilometres.
          </desc>

          <rect width="1000" height="640" fill="#FBFAF9" />

          <path
            d={DRAINAGE_PATH}
            fill="none"
            stroke="#BBD3E0"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          <path
            d={LICENCE_PATH}
            fill="#F5F2EF"
            fillOpacity="0.75"
            stroke="#3F444C"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {targetsContent.targets.map((target) => {
            const geom = TARGET_GEOMETRY[target.id];
            if (!geom) return null;
            const isActive = active === target.id;
            const dimmed = active !== null && !isActive;

            return (
              <g
                key={target.id}
                onMouseEnter={() => setActive(target.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(target.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="button"
                aria-label={`${target.name}: ${target.significance}`}
                className="cursor-pointer outline-none"
                style={{ opacity: dimmed ? 0.4 : 1, transition: "opacity 150ms" }}
              >
                <ellipse
                  cx={geom.cx}
                  cy={geom.cy}
                  rx={geom.rx}
                  ry={geom.ry}
                  fill={isActive ? "#A95A33" : "#A95A33"}
                  fillOpacity={isActive ? 0.16 : 0.07}
                  stroke="#A95A33"
                  strokeWidth={isActive ? 2.5 : 1.8}
                  strokeDasharray="7 5"
                />
                <text
                  x={geom.cx}
                  y={geom.cy + 6}
                  textAnchor="middle"
                  className="select-none"
                  fill="#17191C"
                  fontSize="21"
                  fontWeight={isActive ? 700 : 600}
                >
                  {target.name}
                </text>
              </g>
            );
          })}

          {/* North arrow */}
          <g transform="translate(912, 92)">
            <path d="M 0 34 L 0 -14" stroke="#3F444C" strokeWidth="2.5" />
            <path d="M 0 -22 L 8 -4 L 0 -9 L -8 -4 Z" fill="#3F444C" />
            <text x="0" y="52" textAnchor="middle" fill="#3F444C" fontSize="19" fontWeight="700">
              N
            </text>
          </g>

          {/* Scale bar — 0 to 10 km */}
          <g transform="translate(112, 578)">
            <rect x="0" y="0" width="60" height="9" fill="#3F444C" />
            <rect x="60" y="0" width="60" height="9" fill="#FBFAF9" stroke="#3F444C" strokeWidth="1.5" />
            <text x="0" y="-8" textAnchor="middle" fill="#525862" fontSize="16">0</text>
            <text x="60" y="-8" textAnchor="middle" fill="#525862" fontSize="16">5</text>
            <text x="120" y="-8" textAnchor="middle" fill="#525862" fontSize="16">10 km</text>
          </g>

          {/* Legend */}
          <g transform="translate(112, 92)">
            <rect x="0" y="-14" width="26" height="18" fill="#F5F2EF" stroke="#3F444C" strokeWidth="2" />
            <text x="38" y="1" fill="#525862" fontSize="17">Kafwego project licence</text>
            <ellipse
              cx="13"
              cy="28"
              rx="13"
              ry="9"
              fill="#A95A33"
              fillOpacity="0.07"
              stroke="#A95A33"
              strokeWidth="1.8"
              strokeDasharray="5 4"
            />
            <text x="38" y="34" fill="#525862" fontSize="17">Priority target area</text>
          </g>
        </svg>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-charcoal-500">
        Schematic representation redrawn from project technical material. Licence
        boundary and target outlines are indicative and are not survey-accurate. No
        coordinates are published on this website. Priority target areas are
        exploration targets, not mineral resources or reserves.
      </p>
    </div>
  );
}
