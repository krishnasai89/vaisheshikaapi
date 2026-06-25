// src/data.ts
import { ch1 } from "./chapters/ch1";
import { ch2 } from "./chapters/ch2";
import { ch3 } from "./chapters/ch3";
import { ch4 } from "./chapters/ch4";
import { ch5 } from "./chapters/ch5";
import { ch6 } from "./chapters/ch6";
import { ch7 } from "./chapters/ch7";
import { ch8 } from "./chapters/ch8";
import { ch9 } from "./chapters/ch9";
import { ch10 } from "./chapters/ch10";
import { vaisheshikaIntro, PhilosophyOverview } from "./meta/about";
import { kanadaProfile, FounderProfile } from "./meta/founder";
import {
  vaisheshikaModernTechMap,
  ModernTechSynthesis,
} from "./meta/modernMapping";
import {
  vaisheshikaViewpointMatrix,
  PhilosophyViewpointMatrix,
} from "./meta/viewpoints";
import {
  vaisheshikaPhysicsMatrix,
  PhysicsComparisonMatrix,
} from "./meta/physicsComparison";

export interface IntroSection {
  id: string;
  title: string;
  content: string;
  bullets?: string[];
}

export interface Viewpoint {
  how_people_think: string;
  the_reality_is: string;
}

export interface Verse {
  id: string;
  verseNumber: string;
  ahnika: 1 | 2;
  sanskrit: string;
  transliteration: string;
  translation: string;
  commentary?: string;
  philosophy: string;
  viewpoint: Viewpoint;
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  verses: Verse[];
}

export interface VaisheshikaEngine {
  overview: PhilosophyOverview;
  founder: FounderProfile;
  modernTechnicalSynthesis: ModernTechSynthesis;
  globalViewpointMatrix: PhilosophyViewpointMatrix;
  physicsComparisonMatrix: PhysicsComparisonMatrix;
  chapters: Chapter[];
}

export const vaisheshikaData: Chapter[] = [
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  ch7,
  ch8,
  ch9,
  ch10,
];

export const fullyCompiledSystem: VaisheshikaEngine = {
  overview: vaisheshikaIntro,
  founder: kanadaProfile,
  modernTechnicalSynthesis: vaisheshikaModernTechMap,
  globalViewpointMatrix: vaisheshikaViewpointMatrix,
  physicsComparisonMatrix: vaisheshikaPhysicsMatrix,
  chapters: vaisheshikaData,
};
