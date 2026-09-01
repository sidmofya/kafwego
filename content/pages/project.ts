export const projectPageContent = {
  hero: {
    eyebrow: "Copper-gold exploration · Northwestern Zambia",
    title: "The Kafwego Project",
    subtitle:
      "Kafwego is an exploration-stage copper-gold project in northwestern Zambia being evaluated under an IOCG-style exploration model. Historical surface work, geological interpretation and geophysics have identified multiple targets requiring systematic testing at depth.",
  },

  location: {
    eyebrow: "Location",
    title: "Location and regional setting",
    body: "Kafwego is located in northwestern Zambia within the Greater Lufilian Arc, an established copper mining region with a long history of exploration and development.",
  },

  hypothesis: {
    eyebrow: "Geological model",
    title: "The geological hypothesis",
    paragraphs: [
      "Kafwego is currently being evaluated under an IOCG-style exploration model. The hypothesis is based on the combination of regional geophysical signature, iron-oxide alteration, quartz veining, structural setting and surface copper-gold-silver mineralisation.",
      "A large district-scale aeromagnetic anomaly has been interpreted as a concealed intrusive body at depth, with the observed surface mineralisation and alteration interpreted as related to that source.",
      "This remains a working exploration model rather than a demonstrated deposit model. Drilling is required to determine whether these observations reflect a significant mineralised system at depth.",
    ],
  },

  history: {
    eyebrow: "Exploration history",
    title: "How the project reached its current position",
    entries: [
      {
        period: "2009",
        title: "Project acquisition",
        items: [
          "Historic workings exposing copper mineralisation documented.",
          "Initial exploration focused on those historic workings.",
          "Surface mapping identified encouraging geological indicators.",
        ],
      },
      {
        period: "2011",
        title: "Independent technical assessment",
        items: [
          "Independent NI 43-101 technical report completed by Scarab Enterprises for Harmony Gold.",
          "Surface sampling confirmed copper, gold and silver mineralisation.",
          "Systematic geophysical surveys and drilling recommended.",
        ],
      },
      {
        period: "2013–2014",
        title: "Geological expansion",
        items: [
          "Detailed geological review and field investigation completed by Ripley Resources.",
          "New mineralised prospects identified at Dabwa, Chimamokwe and Kaluba.",
          "Mapping, aeromagnetic interpretation and satellite imagery expanded the mineralised footprint.",
          "Phased exploration and drilling programme recommended.",
        ],
      },
      {
        period: "Recent work",
        title: "Target definition and programme design",
        items: [
          "RC drilling programme designed with priority targets identified.",
          "QA/QC procedures and staged exploration milestones developed.",
          "Environmental approvals and licence expansion progressed.",
        ],
      },
    ],
  },

  workCompleted: [
    {
      title: "Geological mapping",
      state: "complete" as const,
      body: "Historical geological mapping completed across the licence area.",
    },
    {
      title: "Surface sampling",
      state: "complete" as const,
      body: "Copper, gold and silver mineralisation confirmed through surface sampling and laboratory assays.",
    },
    {
      title: "Independent technical review",
      state: "complete" as const,
      body: "NI 43-101 technical assessment completed, validating the exploration concept.",
    },
    {
      title: "Geophysical interpretation",
      state: "complete" as const,
      body: "Aeromagnetic datasets interpreted, identifying a significant district-scale magnetic anomaly.",
    },
    {
      title: "Remote sensing",
      state: "complete" as const,
      body: "Satellite imagery analysed to support structural interpretation and target generation.",
    },
    {
      title: "Target generation",
      state: "complete" as const,
      body: "Five priority exploration targets identified: Pit 1, Pit 2, Dabwa, Chimamokwe and Kaluba.",
    },
    {
      title: "RC drilling programme design",
      state: "complete" as const,
      body: "Phased RC drilling programme designed with priority targets and QA/QC procedures established.",
    },
    {
      title: "Approvals and licensing",
      state: "in-progress" as const,
      body: "Environmental approvals and licence work are being progressed. This work is not complete.",
    },
    {
      title: "Funding and mobilisation",
      state: "next" as const,
      body: "Funding and mobilisation for the initial drilling programme remain outstanding.",
    },
  ],

  currentPosition: {
    eyebrow: "Current position",
    title: "Where the project stands",
    paragraphs: [
      "Kafwego has completed the principal historical-data review and target-generation work required to define the next exploration phase. Priority targets have been identified and an initial RC drilling programme has been designed.",
      "The immediate focus is funding, mobilisation, completion of remaining required approvals, and execution of the initial drilling programme. No mobilisation date is currently published.",
    ],
  },

  tenure: {
    eyebrow: "Tenure",
    title: "Project tenure",
    // Rendered only when the underlying facts are verified. See project-facts.ts.
    pendingNote:
      "Current licence particulars are being confirmed against legal title and are provided to qualified counterparties through the technical diligence process. Historical licence information is not presented here as the current legal position.",
  },
};
