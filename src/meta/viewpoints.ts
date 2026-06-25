export interface GlobalMisconception {
  id: string;
  myth: string;
  reality: string;
  canonicalEvidence: string;
}

export interface PhilosophyViewpointMatrix {
  title: string;
  description: string;
  takeaway: string;
  paradigms: GlobalMisconception[];
}

export const vaisheshikaViewpointMatrix: PhilosophyViewpointMatrix = {
  title: "Vaiśeṣika Systemic Viewpoint Matrix",
  description:
    "Deconstructing modern historical biases and misinterpretations surrounding Sage Kaṇāda's scientific ontology, contrasted against the objective reality of the sūtras.",
  takeaway:
    "While mainstream perspectives often relegate ancient systems to mystical allegory, the Vaiśeṣika Sūtra operates as an engineering schema that values empirical observation, mathematical realism, and clear logic as the definitive gateways to mental clarity.",
  paradigms: [
    {
      id: "religious-vs-physics",
      myth: "Vaiśeṣika is a theological or mystical script filled with religious storytelling and mythological metaphors.",
      reality:
        "It is a highly structured textbook of physics, logistics, and material realism. Maharishi Kaṇāda rarely invokes deities, choosing instead to explain cosmic mechanics through atomic combinations, fluid dynamics, gravity, and thermal energy.",
      canonicalEvidence:
        "Books 1 through 5 are entirely dedicated to mapping kinematics, chemical transformations under thermal heat, and spatial mechanics.",
    },
    {
      id: "lucky-guess-vs-geometry",
      myth: "Ancient Indian atomism was merely a lucky philosophical guess rather than a formal, rule-governed physics model.",
      reality:
        "It was a formalized geometric model of particle physics. Kaṇāda demonstrated that dimensionless point-particles (Paramāṇu) must group systematically into diads (Dvyaṇuka) and triads (Tryaṇuka) to manifest macroscopic rest mass, metrics, and observable space definitions.",
      canonicalEvidence:
        "Book 4 maps out the structural breakdown of compound elements down to their terminal, indivisible units.",
    },
    {
      id: "world-as-illusion-vs-realism",
      myth: "All classical Eastern philosophies claim that the physical material world is an illusion or a subjective dream state (Māyā).",
      reality:
        "Vaiśeṣika is a system of radical pluralistic realism. It asserts that matter, qualities, and kinetic movements are 100% real, objectively knowable, and exist entirely independent of human awareness or mental construction.",
      canonicalEvidence:
        "Book 1 establishes the independent reality of Substance, Quality, and Action as objective primitives of nature.",
    },
    {
      id: "void-vs-negative-fact",
      myth: "Nothingness or empty space is just an abstract void with zero structural meaning or scientific relevance.",
      reality:
        "Non-existence (Abhāva) is mapped as a real, measurable data parameter. Kaṇāda structures absence as a localized negative fact. Knowing that a specific substance is missing from an exact coordinate space is vital information used to map timelines and causal boundaries.",
      canonicalEvidence:
        "Book 9 explicitly categorizes the four distinct types of Non-existence as verifiable perceptual realities.",
    },
    {
      id: "ethics-vs-system-alignment",
      myth: "Moral ethics and physical sciences belong in completely separate spheres, carrying zero crossover in technical engineering.",
      reality:
        "Ethical behavior and physical laws are systemically linked via energy fields. Destructive actions create turbulent kinetic noise in your internal organ, whereas constructive choices (Dharma) remove internal friction and stabilize processing hardware, bringing the system into alignment with cosmic constants.",
      canonicalEvidence:
        "Book 10 synthesizes how practicing orderly, structured habits brings individual systems into harmony with universal law.",
    },
  ],
};
