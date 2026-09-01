/**
 * Exploration targets — sourced from the technical deck p9 ("Exploration Targets").
 *
 * Target names and significance text are quoted or closely paraphrased from the
 * source table. The evidence matrix below is derived STRICTLY from each target's
 * own significance text. Where a criterion is not marked for a target, that means
 * the source does not specify it for that target — it does NOT mean the evidence
 * is absent. That distinction is stated on the page and must not be dropped.
 */

export type TargetEvidenceKey =
  | "mineralisation"
  | "ironOxide"
  | "quartzVeining"
  | "structural"
  | "historical";

export type ExplorationTarget = {
  id: string;
  name: string;
  significance: string;
  evidence: TargetEvidenceKey[];
};

export const targetsContent = {
  hero: {
    eyebrow: "Exploration targets",
    title: "Five targets. One geological question.",
    subtitle:
      "Historical exploration and subsequent interpretation have produced five priority target areas across the Kafwego licence. Each reflects a different combination of mineralisation, alteration, structure and geophysical evidence. Drilling is intended to determine which, if any, represent significant mineralised systems at depth.",
  },

  targets: [
    {
      id: "pit-1",
      name: "Pit 1",
      significance:
        "Historical copper mineralisation with priority drill targets identified.",
      evidence: ["mineralisation", "historical"],
    },
    {
      id: "pit-2",
      name: "Pit 2",
      significance:
        "Copper-gold mineralisation associated with quartz veining and iron-oxide alteration.",
      evidence: ["mineralisation", "quartzVeining", "ironOxide"],
    },
    {
      id: "dabwa",
      name: "Dabwa",
      significance:
        "Extensive surface mineralisation requiring systematic drill testing.",
      evidence: ["mineralisation"],
    },
    {
      id: "chimamokwe",
      name: "Chimamokwe",
      significance:
        "Structural target with favourable geology and alteration characteristics.",
      evidence: ["structural", "ironOxide"],
    },
    {
      id: "kaluba",
      name: "Kaluba",
      significance:
        "Priority regional target supported by historical exploration and geological interpretation.",
      evidence: ["historical"],
    },
  ] as ExplorationTarget[],

  evidenceLabels: {
    mineralisation: "Surface mineralisation",
    ironOxide: "Iron-oxide alteration",
    quartzVeining: "Quartz veining",
    structural: "Structural setting",
    historical: "Historical exploration",
  } as Record<TargetEvidenceKey, string>,

  evidenceMatrixCaption:
    "Derived from the significance recorded for each target in the project technical material. An unmarked cell means the source does not specify that criterion for that target — it does not indicate that the evidence is absent.",

  selectionCriteria: [
    "Copper, gold and silver mineralisation",
    "Iron-oxide (hematite and magnetite) alteration",
    "Quartz-vein systems",
    "Structural intersections and fault corridors",
    "Aeromagnetic anomalies",
    "Geological continuity between prospects",
  ],

  qualifier:
    "Target descriptions summarise historical exploration and current interpretation. These are exploration targets, not mineral resources or ore reserves.",
};
