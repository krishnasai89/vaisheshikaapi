export interface PhysicsComparisonPoint {
  phenomenon: string;
  vaisheshikaSutraConcept: {
    sanskritTerm: string;
    mechanism: string;
    sutraReference: string;
  };
  westernScientificMilestone: {
    discoverer: string;
    timeline: string;
    equivalentLaw: string;
  };
  synthesis: string;
}

export interface PhysicsComparisonMatrix {
  title: string;
  description: string;
  comparisons: PhysicsComparisonPoint[];
}

export const vaisheshikaPhysicsMatrix: PhysicsComparisonMatrix = {
  title: "Vaiśeṣika vs. Western Science Physics Matrix",
  description:
    "A cross-cultural technical correlation analyzing kinematics, fluid behavior, and thermodynamics between the Vaiśeṣika Sūtras and modern classical mechanics.",
  comparisons: [
    {
      phenomenon: "Gravity & Free Fall Acceleration",
      vaisheshikaSutraConcept: {
        sanskritTerm: "Gurutva / Saṁskāra",
        mechanism:
          "The absolute initial downward drop of an unattached macro-object is caused entirely by an inherent attribute of weight/gravity (Gurutva). The continued velocity during the fall is sustained by kinetic momentum (Saṁskāra).",
        sutraReference: "VS 5.1.7 & 5.1.18",
      },
      westernScientificMilestone: {
        discoverer: "Galileo Galilei / Sir Isaac Newton",
        timeline: "17th Century CE",
        equivalentLaw:
          "Gravitational Acceleration (F = mg) & Law of Inertia / Momentum (p = mv).",
      },
      synthesis:
        "Kaṇāda correctly isolated gravity as an inherent physical property that produces motion, while cleanly separating the force of weight from the object's subsequent momentum during a free-fall transition.",
    },
    {
      phenomenon: "Capillary Action & Transpiration Pull",
      vaisheshikaSutraConcept: {
        sanskritTerm: "Abhisaṁpātana",
        mechanism:
          "Water moves upward through a plant's internal micro-channels or a cotton wick against gravity. This is driven by localized evaporation pressure caused by solar heat atoms (Tejas), creating a structural fluid pull.",
        sutraReference: "VS 5.2.5",
      },
      westernScientificMilestone: {
        discoverer: "Thomas Young / Henry Dixon",
        timeline: "19th - 20th Century CE",
        equivalentLaw:
          "Capillary Fluid Dynamics & Cohesion-Tension Theory of sap ascent.",
      },
      synthesis:
        "Centuries before Western physics modeled surface tension and transpiration pull, Kaṇāda mapped fluid ascension to thermal evaporation and specialized channel dynamics.",
    },
    {
      phenomenon: "Fluid Dynamics & Hydrodynamics",
      vaisheshikaSutraConcept: {
        sanskritTerm: "Dravatva / Syandana",
        mechanism:
          "The horizontal and downward streaming flow of liquids across a gradient (Syandana) occurs due to the interaction of baseline gravity (Gurutva) with the liquid's inherent property of fluidity (Dravatva).",
        sutraReference: "VS 5.2.4",
      },
      westernScientificMilestone: {
        discoverer: "Daniel Bernoulli / Blaise Pascal",
        timeline: "17th - 18th Century CE",
        equivalentLaw:
          "Navier-Stokes equations & Bernoulli's Principle of fluid motion.",
      },
      synthesis:
        "Vaiśeṣika views fluid flow as a dynamic calculation where gravity acts upon an elemental atomic bond structure that allows shearing movement.",
    },
    {
      phenomenon: "Thermal Buoyancy & Convection",
      vaisheshikaSutraConcept: {
        sanskritTerm: "Tejas / Adṛṣṭa-Karman",
        mechanism:
          "Flames and radiant heat particles (Tejas) inherently move upward because they lack mass-heavy gravity (Gurutva). Air currents move sideways due to pressure changes and kinetic collisions.",
        sutraReference: "VS 5.2.13",
      },
      westernScientificMilestone: {
        discoverer: "Archimedes / Joseph Fourier",
        timeline: "Antiquity to 18th Century CE",
        equivalentLaw:
          "Buoyancy Principles & Heat Transfer / Convection Theory.",
      },
      synthesis:
        "While Western science describes convection using density differences, Kaṇāda modeled it at the particle level by defining heat atoms as natively devoid of the downward gravitational trait.",
    },
  ],
};
