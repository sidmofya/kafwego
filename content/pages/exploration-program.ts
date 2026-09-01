export const explorationProgramContent = {
  hero: {
    eyebrow: "Stage-gated exploration",
    title: "Testing the model one decision at a time",
    subtitle:
      "Kafwego's exploration programme is structured so that capital commitment increases only as geological evidence strengthens. Each stage is designed to answer a specific technical question, and the next stage proceeds only if the answer justifies it.",
  },

  currentStage: {
    eyebrow: "Current stage",
    title: "Historical exploration has brought the project to its first real subsurface test",
    body: "Target generation and programme design are complete. Drilling is the next major technical step, subject to funding, mobilisation and completion of remaining required approvals.",
  },

  stages: [
    {
      number: "Stage 1",
      title: "Exploration validation",
      activities: [
        "Validate historical exploration data",
        "Refine the geological interpretation",
        "Confirm priority drill targets",
        "Complete approvals and mobilisation preparation",
      ],
      outcome: "Targets sufficiently defined and validated for initial drilling.",
      conditional: false,
    },
    {
      number: "Stage 2",
      title: "750 m RC proof of concept",
      activities: [
        "Test priority IOCG targets at depth",
        "Validate or reject key elements of the geological model",
        "Evaluate mineralisation style and continuity",
        "Complete geological logging",
        "Conduct QA/QC-controlled sampling and laboratory assays",
      ],
      outcome:
        "Subsurface evidence sufficient to determine whether follow-up drilling is justified.",
      conditional: false,
    },
    {
      number: "Stage 3",
      title: "Follow-up and resource-definition drilling",
      activities: [
        "Additional RC drilling of approximately 5,250 m (1,500 m followed by 3,750 m)",
        "Follow-up geophysics",
        "Geological modelling and 3D interpretation",
        "Assessment against resource-reporting requirements",
      ],
      outcome:
        "Sufficient subsurface data to support an assessment of whether a mineral resource can be estimated.",
      conditional: true,
      conditionalNote:
        "This stage is not scheduled and is not assumed. It would proceed only if the preceding drilling produces sufficient technical justification. There has been insufficient exploration to estimate a mineral resource, and it is uncertain whether further exploration will result in one.",
    },
  ],

  gate: {
    eyebrow: "The technical gate",
    title: "What happens when the results come back",
    description:
      "The value of a stage-gated programme is that a negative or ambiguous result is a legitimate and inexpensive outcome. The gate below is the decision the initial programme exists to inform.",
    inputLabel: "Five priority targets",
    testLabel: "750 m RC proof-of-concept drilling",
    gateLabel: "Technical gate",
    branches: [
      {
        outcome: "Insufficient evidence",
        decision:
          "Stop or reinterpret. The exploration model is revised or the project is not advanced further on the current thesis.",
      },
      {
        outcome: "Partial evidence",
        decision:
          "Refine. Targets are re-ranked and the programme is redesigned around what the drilling actually showed.",
      },
      {
        outcome: "Strong evidence",
        decision:
          "Advance to follow-up drilling, with scope and budget set by the results rather than by the original plan.",
      },
    ],
  },
};
