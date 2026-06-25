export interface ReferenceLink {
  label: string;
  url: string;
}

export interface FounderProfile {
  name: string;
  aliases: string[];
  historicalEra: string;
  birthplaceRegion: string;
  summary: string;
  etymologyLegend: {
    title: string;
    narrative: string;
    keyTerm: string;
    definition: string;
  };
  scientificContributions: {
    title: string;
    description: string;
  }[];
  coreContributions: {
    title: string;
    description: string;
  }[];
  historicalEvolution: {
    title: string;
    description: string;
  };
  references: ReferenceLink[];
}

export const kanadaProfile: FounderProfile = {
  name: "Sage Kaṇāda",
  aliases: [
    "Kashyapa",
    "Kanada Kashyapa",
    "Acharya Kanada",
    "Ulūka",
    "Kana-bhuk",
  ],
  historicalEra: "c. 600 BCE - 2nd Century BCE",
  birthplaceRegion: "Present-day Gujarat, India",
  summary:
    "Sage Kaṇāda was an ancient Indian philosopher and natural scientist celebrated as the father of Indian atomic theory. He conceptualized the existence of indivisible particles centuries before Western thinkers like Democritus or John Dalton. He founded the Vaiśeṣika school of philosophy, expounding its core principles in the seminal text known as the Vaiśeṣika Sūtras, which merged logical realism with systematic scientific observation to achieve spiritual liberation.",
  etymologyLegend: {
    title: "The Legend of the Atom Eater",
    narrative:
      "Born as Kashyapa, he earned the name 'Kaṇāda' due to his fascination with the fundamental building blocks of matter. According to legend, the breakthrough concept of the atom occurred to him while walking with food in his hand. As he nibbled, he threw away the microscopic leftover crumbs and realized that matter could be divided progressively into smaller and smaller pieces until it reached a terminal particle so small that it could not be split further.",
    keyTerm: "Kaṇa",
    definition: "The smallest possible particle, grain, or crumb.",
  },
  coreContributions: [
    {
      title: "Atomic Theory (Paramāṇuvāda)",
      description:
        "Proposed that all physical matter is composed of paramāṇu (atoms), which are indestructible, indivisible, and eternal. He suggested these particles combine structurally into diads and triads to create macro-molecules, even foreseeing chemical transformations resulting from these atomic combinations.",
    },
    {
      title: "Physics, Force & Motion",
      description:
        "Pioneered early concepts of classical physics in his sūtras. He explained motion as a function of applied force, cause, and momentum, tracking mechanical principles that bear a striking conceptual similarity to modern laws of motion (such as Newton's First Law).",
    },
    {
      title: "The Seven Categories of Reality (Padārthas)",
      description:
        "Organized all knowable existence into a systematic, realist metaphysical taxonomy: Substance (dravya), Quality (guṇa), Action/Motion (karma), Generality (sāmānya), Particularity (viśeṣa), Inherence (samavāya), and later Non-existence (abhāva).",
    },
  ],
  historicalEvolution: {
    title: "Evolution into the Modern World (Nyāya-Vaiśeṣika Fusion)",
    description:
      "Because of their shared realistic ontology and complementary approaches to epistemology, the Vaiśeṣika school eventually fused with the Nyāya school of logic over the centuries. This formed a integrated, robust tradition known as Nyāya-Vaiśeṣika, which deeply shaped classical Indian science, metaphysics, and logic down into the modern era.",
  },
  references: [
    {
      label: "Wikipedia Kaṇāda Profile",
      url: "https://en.wikipedia.org/wiki/Ka%E1%B9%87%C4%81da",
    },
    {
      label: "eSamskriti Historical Breakdown",
      url: "https://www.esamskriti.com",
    },
  ],
  scientificContributions: [
    {
      title: "Paramāṇuvāda (Atomic Realism)",
      description:
        "Proposed that the physical universe is ultimately reducible to indivisible, indestructible, and eternal point-particles called Paramāṇu. Conceptualized how these baseline units combine into diads and triads to synthesize macro-matter.",
    },
    {
      title: "Early Kinematics and Physics",
      description:
        "Pioneered early mechanical principles in the Vaiśeṣika Sūtras, defining motion as a rule-governed function of applied force and momentum, closely mirroring fundamental laws of modern classical mechanics.",
    },
    {
      title: "Systematic Metaphysical Taxonomy",
      description:
        "Organized all knowable reality into objective, real-world structural categories (Padārthas), establishing a realist scientific paradigm where empirical observation leads to spiritual liberation.",
    },
  ],
};
