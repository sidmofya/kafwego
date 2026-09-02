export const siteConfig = {
  name: "Kafwego Project",
  shortDescription:
    "An exploration-stage copper-gold project in northwestern Zambia's Greater Lufilian Arc, being evaluated under an IOCG-style exploration model.",
  contact: {
    email: "invest@kafwego.com",
    location: "Northwestern Zambia",
  },
  ctas: {
    technicalPackage: {
      label: "Request Technical Package",
      href: "/contact",
    },
    contactTeam: {
      label: "Contact the Project Team",
      href: "/contact",
    },
  },
  navigation: [
    { label: "Project", href: "/project" },
    { label: "Targets", href: "/targets" },
    { label: "Exploration Program", href: "/exploration-program" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "Project", href: "/project" },
    { label: "Targets", href: "/targets" },
    { label: "Exploration Program", href: "/exploration-program" },
    { label: "Investment Case", href: "/investment-case" },
    { label: "Regional Geology", href: "/lufilianarc" },
    { label: "Responsible Development", href: "/responsible-development" },
    { label: "Contact", href: "/contact" },
    { label: "Legal & Technical Disclosures", href: "/legal" },
  ],
  legal:
    "Kafwego is an exploration-stage mineral project. Information on this website is provided for general information and preliminary discussion only. Geological interpretations and exploration targets remain subject to further investigation, including drilling. No mineral resource or mineral reserve is represented by this website. Historical technical information should be considered in its original context. Nothing on this website constitutes an offer to sell, or solicitation of an offer to purchase, any security or project interest.",
};

/**
 * Technical disclosures drafted to JORC / NI 43-101 convention.
 *
 * Kafwego is a private project and is not a reporting issuer, so these codes do
 * not legally bind it. They are followed voluntarily: the project's own technical
 * material invokes NI 43-101, the intended audience evaluates projects against
 * these standards, and public statements made now would be re-read if the project
 * ever sought a listing.
 *
 * LEGAL_REVIEW_REQUIRED — counsel must approve final wording before launch.
 */
export const technicalDisclosures = {
  explorationTarget: {
    title: "Exploration targets",
    body: "The exploration targets described on this website are conceptual in nature. There has been insufficient exploration to estimate a Mineral Resource, and it is uncertain whether further exploration will result in the estimation of a Mineral Resource. Exploration targets are not mineral resources or ore reserves.",
  },
  historicalInformation: {
    title: "Historical information",
    body: "Technical information on this website derives substantially from historical exploration undertaken between 2009 and 2014. That work has not been verified by a current Competent Person and should be considered in its original context. Historical licence information does not represent the current legal position of the project.",
  },
  forwardLooking: {
    title: "Forward-looking statements",
    body: "Statements describing planned exploration programmes, stages, outcomes and timing are forward-looking. They reflect current intentions only and are subject to funding, regulatory approvals, mobilisation and technical results. Planned programmes may be varied, deferred or not undertaken. Later exploration stages proceed only if preceding stages produce sufficient technical justification.",
  },
  competentPerson: {
    title: "Competent Person statement",
    // Rendered only when projectFacts.competentPerson is unblocked.
    bodyTemplate:
      "The technical information on this website relating to exploration results and exploration targets is based on, and fairly represents, information reviewed by {name}, {credentials}, who has sufficient experience relevant to the style of mineralisation and type of deposit under consideration and to the activity being undertaken, and who consents to its inclusion in the form and context in which it appears.",
  },
};
