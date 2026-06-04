export type WarhammerUnit = {
  name: string;
  category: string;
  points: number;
  assemblyStatus: "Unbuilt" | "Built" | "Primed" | "Based";
  paintingStatus: "Unpainted" | "In Progress" | "Battle Ready" | "Finished";
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
    "A crusading Black Templars force tracked like a small campaign ledger: what is owned, what is wanted, and what still needs paint.",
  // Add owned unit photos to public/warhammer and reference them with /warhammer/file-name.jpg.
  ownedUnits: [
    {
      name: "Primaris Crusader Squad",
      category: "Battleline",
      points: 140,
      assemblyStatus: "Built",
      paintingStatus: "In Progress",
      notes: "Core infantry block for the crusade.",
      images: [{ src: "/warhammer/crusader-squad.svg", alt: "Primaris Crusader Squad placeholder" }]
    },
    {
      name: "Redemptor Dreadnought",
      category: "Vehicle",
      points: 210,
      assemblyStatus: "Built",
      paintingStatus: "Unpainted",
      notes: "Ready for primer and decals."
    },
    {
      name: "Sword Brethren",
      category: "Elite",
      points: 150,
      assemblyStatus: "Based",
      paintingStatus: "Battle Ready",
      notes: "Test scheme complete."
    }
  ] satisfies WarhammerUnit[],
  wantedItems: [
    { name: "High Marshal Helbrecht", priority: "High", notes: "Future centerpiece model." },
    { name: "Land Raider Crusader", priority: "Medium", notes: "Classic delivery system for sword brethren." },
    { name: "Chaplain Grimaldus", priority: "Medium", notes: "Narrative-heavy character choice." }
  ] satisfies WantedWarhammerItem[],
  notes: [
    "Keep the scheme high contrast: black armor, warm parchment, restrained red accents.",
    "Track new purchases here before they disappear into the pile of opportunity.",
    "Add crusade lore notes once the army has a name."
  ]
};
