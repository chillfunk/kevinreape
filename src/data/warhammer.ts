export type HobbyStatus = "Painted" | "Built" | "Unassembled";

export type WarhammerUnit = {
  name: string;
  count: number;
  category: "Characters" | "Infantry" | "Vehicles";
  status?: HobbyStatus;
  onDesk?: boolean;
  source?: string;
  note?: string;
};

export type WarhammerArmy = {
  id: "black-templars" | "ultramarines" | "orks";
  name: string;
  shortName: string;
  role: string;
  theme: string;
  scheme: string;
  priority: string;
  accent: string;
  units: WarhammerUnit[];
  wanted: string[];
};

export const armies: WarhammerArmy[] = [
  {
    id: "black-templars",
    name: "Black Templars",
    shortName: "BT",
    role: "Primary playable force",
    theme: "Crusading melee, vows, tabards, chains, relics, and a Land Raider assault force.",
    scheme: "Black Templars",
    priority: "Main army · hobby priority one",
    accent: "#e7e2d5",
    units: [
      { name: "High Marshal Helbrecht", count: 1, category: "Characters" },
      { name: "Emperor’s Champion", count: 1, category: "Characters", status: "Built", onDesk: true },
      { name: "Judiciar", count: 1, category: "Characters", source: "Dawn of War", status: "Built" },
      { name: "Chaplain", count: 1, category: "Characters", source: "Dawn of War", status: "Built" },
      { name: "Chaplain", count: 1, category: "Characters", source: "3D printed", status: "Built" },
      { name: "Bladeguard Ancient", count: 1, category: "Characters", source: "Dawn of War", status: "Built" },
      { name: "Primaris Crusader Squad", count: 10, category: "Infantry", status: "Painted", note: "1 Sword Brother · 5 Initiates · 4 Neophytes" },
      { name: "Intercessors", count: 10, category: "Infantry", status: "Painted" },
      { name: "Primaris Sword Brethren", count: 5, category: "Infantry" },
      { name: "Bladeguard Veterans", count: 3, category: "Infantry", source: "Combat Patrol" },
      { name: "Bladeguard Veterans", count: 3, category: "Infantry", source: "Dawn of War", status: "Built" },
      { name: "Vanguard Veterans with Jump Packs", count: 5, category: "Infantry", source: "Armageddon" },
      { name: "Terminators", count: 5, category: "Infantry", source: "3D printed", status: "Built" },
      { name: "Infernus Marines", count: 5, category: "Infantry", source: "3D printed", status: "Built" },
      { name: "Scouts", count: 10, category: "Infantry", source: "3D printed", status: "Built" },
      { name: "Land Raider", count: 1, category: "Vehicles", source: "3D printed", status: "Built" },
      { name: "Vindicator", count: 1, category: "Vehicles", source: "3D printed", status: "Built" },
      { name: "Impulsor", count: 1, category: "Vehicles", source: "3D printed", status: "Built" },
      { name: "Razorback", count: 1, category: "Vehicles", source: "3D printed", status: "Built" },
      { name: "Brutalis Dreadnought", count: 1, category: "Vehicles", status: "Built" },
      { name: "Repulsor Executioner", count: 1, category: "Vehicles", source: "3D printed", note: "BT / flex assignment", status: "Built" }
    ],
    wanted: ["Chaplain Grimaldus", "Primaris Crusader Squad", "5 Sword Brethren", "Infiltrators / Incursors", "Techmarine"]
  },
  {
    id: "ultramarines",
    name: "Ultramarines",
    shortName: "UM",
    role: "Combined-arms shooting army",
    theme: "Disciplined command, veterans, plasma, Gravis armor, dreadnoughts, and ranged pressure.",
    scheme: "Ultramarines",
    priority: "Second army · distinct ranged identity",
    accent: "#4e8cff",
    units: [
      { name: "Captain", count: 1, category: "Characters", source: "Iron Halo Strike Force", note: "Company Heroes" },
      { name: "Captain with Relic Shield", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Primaris Lieutenant", count: 1, category: "Characters", source: "Iron Halo Strike Force" },
      { name: "Librarian", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Ancient", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Intercessors", count: 10, category: "Infantry", source: "Armageddon" },
      { name: "Company Heroes bodyguard", count: 4, category: "Infantry", source: "Iron Halo Strike Force" },
      { name: "Sternguard Veterans", count: 5, category: "Infantry", source: "Iron Halo Strike Force" },
      { name: "Hellblasters", count: 5, category: "Infantry", source: "Iron Halo Strike Force" },
      { name: "Eradicators", count: 3, category: "Infantry", source: "Armageddon" },
      { name: "Eradicators", count: 3, category: "Infantry", source: "Dawn of War", note: "Flexible · likely Ultramarines", status: "Built" },
      { name: "Aggressors", count: 6, category: "Infantry", source: "3D printed", status: "Built" },
      { name: "Vanguard Veterans with Jump Packs", count: 5, category: "Infantry", source: "3D printed", status: "Built" },
      { name: "Redemptor Dreadnought", count: 1, category: "Vehicles", source: "Iron Halo Strike Force" },
      { name: "Ballistus Dreadnought", count: 1, category: "Vehicles", source: "Iron Halo Strike Force" },
      { name: "Land Speeder", count: 1, category: "Vehicles", source: "Armageddon" }
    ],
    wanted: ["Marneus Calgar + Victrix Guard", "5 Infiltrators", "3 Inceptors", "Gladiator Lancer", "Ultramarines Upgrade Kit"]
  },
  {
    id: "orks",
    name: "Orks",
    shortName: "ORK",
    role: "Side project and palette cleanser",
    theme: "Waaagh energy, junk vehicles, green skin, rust, checks, glyphs, and glorious chaos.",
    scheme: "TBD · Goff or Armageddon",
    priority: "Contrast army · keep Armageddon side together",
    accent: "#99c93d",
    units: [
      { name: "Warboss", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Bigboss", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Bannernob", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Painboy with Grot Orderly", count: 2, category: "Characters", source: "Armageddon", note: "Painboy + companion" },
      { name: "Weirdboy", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Big Mek Dakkarig", count: 1, category: "Characters", source: "Armageddon" },
      { name: "Boyz", count: 20, category: "Infantry", source: "Armageddon" },
      { name: "Gretchin", count: 10, category: "Infantry", source: "Armageddon" },
      { name: "Wartrakk", count: 1, category: "Vehicles", source: "Armageddon" }
    ],
    wanted: ["Trukk", "Nobz", "Meganobz", "Ork Combat Patrol", "More Boyz / Beast Snagga Boyz"]
  }
];
