export type WarhammerUnit = {
  name: string;
  category: "Character" | "Battleline" | "Infantry" | "Vehicle" | "Dedicated Transport";
  points: number;
  count: string;
  assemblyStatus: string;
  paintingStatus: string;
  notes?: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

export type WantedWarhammerItem = {
  name: string;
  priority: "Low" | "Medium" | "High";
  notes?: string;
  link?: string;
};

export const warhammer = {
  faction: "Black Templars",
  overview:
    "A crusading Black Templars collection tracked like an army manifest: characters, squads, armor, reinforcements, and the next glorious purchases.",
  // Add owned unit photos to public/warhammer and reference them with /warhammer/file-name.jpg.
  ownedUnits: [
    { name: "Apothecary Biologis", category: "Character", points: 70, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Bladeguard Ancient", category: "Character", points: 45, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Captain", category: "Character", points: 80, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Castellan", category: "Character", points: 70, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Chaplain", category: "Character", points: 60, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Crusade Ancient", category: "Character", points: 55, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    {
      name: "Emperor's Champion",
      category: "Character",
      points: 100,
      count: "1x",
      assemblyStatus: "Built",
      paintingStatus: "Painted",
      notes: "Warlord"
    },
    { name: "Execrator", category: "Character", points: 60, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Judiciar", category: "Character", points: 70, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Crusader Squad", category: "Battleline", points: 150, count: "10x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Intercessor Squad", category: "Battleline", points: 80, count: "5x", assemblyStatus: "Built", paintingStatus: "Painted" },
    { name: "Intercessor Squad", category: "Battleline", points: 80, count: "5x", assemblyStatus: "Built", paintingStatus: "Painted" },
    { name: "Bladeguard Veteran Squad", category: "Infantry", points: 80, count: "3x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Bladeguard Veteran Squad", category: "Infantry", points: 80, count: "3x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Company Heroes", category: "Infantry", points: 105, count: "4x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Eliminator Squad", category: "Infantry", points: 85, count: "3x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Eradicator Squad", category: "Infantry", points: 90, count: "3x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Hellblaster Squad", category: "Infantry", points: 110, count: "5x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Infernus Squad", category: "Infantry", points: 90, count: "5x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Scout Squad", category: "Infantry", points: 140, count: "10x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Sternguard Veteran Squad", category: "Infantry", points: 85, count: "5x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Sword Brethren Squad", category: "Infantry", points: 130, count: "5x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Terminator Squad", category: "Infantry", points: 175, count: "5x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Ballistus Dreadnought", category: "Vehicle", points: 150, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Brutalis Dreadnought", category: "Vehicle", points: 160, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Land Raider", category: "Vehicle", points: 220, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Redemptor Dreadnought", category: "Vehicle", points: 205, count: "1x", assemblyStatus: "TBD", paintingStatus: "TBD" },
    { name: "Vindicator", category: "Vehicle", points: 185, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Impulsor", category: "Dedicated Transport", points: 85, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" },
    { name: "Razorback", category: "Dedicated Transport", points: 95, count: "1x", assemblyStatus: "Built", paintingStatus: "TBD" }
  ] satisfies WarhammerUnit[],
  wantedItems: [
    { name: "High Marshal Helbrecht", priority: "High", notes: "Centerpiece commander for the crusade." },
    { name: "Chaplain Grimaldus and Retinue", priority: "High", notes: "Narrative-heavy Black Templars icon." },
    { name: "Repulsor Executioner", priority: "Medium", notes: "Big armor, big guns, big shelf presence." },
    { name: "More Crusader Squads", priority: "Medium", notes: "The correct answer is apparently always more crusaders." }
  ] satisfies WantedWarhammerItem[]
};
