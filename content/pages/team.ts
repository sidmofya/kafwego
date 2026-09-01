/**
 * Team content.
 *
 * BLOCKER: no verified team biographies have been supplied. The previous version
 * of this file shipped three entries literally named "Placeholder Name".
 *
 * `leaders` intentionally remains empty. The /team route and the header navigation
 * entry both check `teamPageContent.leaders.length` and hide themselves while it is.
 * To publish: add real entries below and add Team to siteConfig.navigation.
 *
 * Each entry must answer, in two or three lines: why should an investor trust this
 * person with this particular stage of this particular project? No generic
 * leadership prose, no CV padding.
 */
export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  relevance: string;
};

export const teamPageContent = {
  hero: {
    eyebrow: "Team",
    title: "Project team",
    subtitle:
      "Kafwego's technical and commercial leadership is introduced to qualified counterparties as part of the diligence process.",
  },
  leaders: [] as TeamMember[],
  pendingNote:
    "Team biographies are provided to qualified investors and strategic partners through the technical diligence process.",
};
