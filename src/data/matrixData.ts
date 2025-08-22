export type MatrixEntry = {
  species: string;
  concern: string;
  problem: string;
  solution: string;
  knowledge: "little" | "moderate" | "well";
  nrelCanHelp?: boolean; // Add this line
};

export const matrixData: MatrixEntry[] = [
  // Bats
  {
    species: "Bats",
    concern: "Curtailment Effectiveness",
    problem: "Curtailment reduces fatalities but is costly and site-specific.",
    solution: "Smart curtailment using real-time data and improved deterrents.",
    knowledge: "moderate",
    nrelCanHelp: true, // Add this property where appropriate

  },
  {
    species: "Bats",
    concern: "Permitting & Monitoring",
    problem: "Monitoring requires acoustic surveys; detection can be uncertain.",
    solution: "Expand acoustic monitoring networks; integrate with curtailment triggers.",
    knowledge: "moderate",
    nrelCanHelp: true, // Add this property where appropriate
  },
  {
    species: "Bats",
    concern: "Population Impact",
    problem: "Regional population-level effects remain poorly understood.",
    solution: "Before/after control studies and long-term monitoring.",
    knowledge: "little",
    nrelCanHelp: true, // Add this property where appropriate
  },
  {
    species: "Bats",
    concern: "Collision Risk",
    problem: "High fatalities at some sites, especially during migration.",
    solution: "Deploy deterrents (ultrasound, lighting) and curtailment at risk times.",
    knowledge: "moderate",
  },
  {
    species: "Bats",
    concern: "Noise Impact",
    problem: "Unclear how turbine noise affects bat echolocation or behavior.",
    solution: "Research on acoustic masking and experimental field studies.",
    knowledge: "little",
  },

  // Eagles
  {
    species: "Eagles",
    concern: "Curtailment Effectiveness",
    problem: "Curtailment rarely used for large raptors due to economics.",
    solution: "Radar-based shut-down on demand systems.",
    knowledge: "moderate",
  },
  {
    species: "Eagles",
    concern: "Permitting & Monitoring",
    problem: "Permitting is complex; monitoring is expensive and imprecise.",
    solution: "General permits in low-risk areas, drones/AI for monitoring.",
    knowledge: "well",
  },
  {
    species: "Eagles",
    concern: "Population Impact",
    problem: "Local fatalities may impact small eagle populations.",
    solution: "Adaptive management with mitigation banking.",
    knowledge: "moderate",
  },
  {
    species: "Eagles",
    concern: "Collision Risk",
    problem: "High collision risk; carcass detection biases exist.",
    solution: "Use risk maps, turbine micro-siting, and AI detection systems.",
    knowledge: "well",
  },
  {
    species: "Eagles",
    concern: "Noise Impact",
    problem: "Limited evidence on noise sensitivity in raptors.",
    solution: "Targeted behavioral studies during nesting and migration.",
    knowledge: "little",
  },

  // Prairie Chicken
  {
    species: "Prairie Chicken",
    concern: "Curtailment Effectiveness",
    problem: "Curtailment not a relevant mitigation due to avoidance behavior.",
    solution: "Focus on siting and habitat protection.",
    knowledge: "little",
  },
  {
    species: "Prairie Chicken",
    concern: "Permitting & Monitoring",
    problem: "Monitoring prairie chickens is challenging and resource-intensive.",
    solution: "Use lek surveys and GPS telemetry to assess impacts.",
    knowledge: "moderate",
  },
  {
    species: "Prairie Chicken",
    concern: "Population Impact",
    problem: "Indirect effects and lack of strong evidence for impact.",
    solution: "Before/after studies, focus on habitat management.",
    knowledge: "little",
  },
  {
    species: "Prairie Chicken",
    concern: "Collision Risk",
    problem: "Low direct collision risk; displacement is the main concern.",
    solution: "Avoid siting near leks and nesting areas.",
    knowledge: "moderate",
  },
  {
    species: "Prairie Chicken",
    concern: "Noise Impact",
    problem: "Noise may disrupt breeding displays and lekking behavior.",
    solution: "Buffer zones around leks; research noise thresholds.",
    knowledge: "little",
  },

  // Songbirds
  {
    species: "Songbirds",
    concern: "Curtailment Effectiveness",
    problem: "Curtailment less practical for small, diverse species.",
    solution: "Siting to avoid high-density migration corridors.",
    knowledge: "moderate",
  },
  {
    species: "Songbirds",
    concern: "Permitting & Monitoring",
    problem: "Permitting rarely species-specific; monitoring requires broad data.",
    solution: "Use radar and acoustic monitoring during migration.",
    knowledge: "moderate",
  },
  {
    species: "Songbirds",
    concern: "Population Impact",
    problem: "Impacts diffused across many species; cumulative risk uncertain.",
    solution: "Large-scale migration and survival studies.",
    knowledge: "little",
  },
  {
    species: "Songbirds",
    concern: "Collision Risk",
    problem: "Hard to predict risk; regional data gaps.",
    solution: "Better spatial data, blade painting, and eBird integration.",
    knowledge: "moderate",
  },
  {
    species: "Songbirds",
    concern: "Noise Impact",
    problem: "Turbine noise may interfere with communication and nesting.",
    solution: "Study effects on vocalization and breeding success.",
    knowledge: "little",
  },

  // Marine Mammals
  {
    species: "Marine Mammals",
    concern: "Curtailment Effectiveness",
    problem: "Curtailment not applicable for marine mammals.",
    solution: "Focus on construction timing and noise mitigation.",
    knowledge: "little",
  },
  {
    species: "Marine Mammals",
    concern: "Permitting & Monitoring",
    problem: "Permitting requires extensive surveys; monitoring is costly.",
    solution: "Use passive acoustic monitoring and aerial/drone surveys.",
    knowledge: "moderate",
  },
  {
    species: "Marine Mammals",
    concern: "Population Impact",
    problem: "Uncertain effects of noise and habitat exclusion.",
    solution: "Long-term monitoring and modeling of cumulative impacts.",
    knowledge: "little",
  },
  {
    species: "Marine Mammals",
    concern: "Collision Risk",
    problem: "Risk mainly with vessels, not turbines.",
    solution: "Traffic management and exclusion zones.",
    knowledge: "moderate",
  },
  {
    species: "Marine Mammals",
    concern: "Noise Impact",
    problem: "Unknown hearing ranges; few empirical studies.",
    solution: "Research on noise thresholds, bubble curtains during construction.",
    knowledge: "little",
  },
];
