export type WarhammerUnit = {
  name: string;
  category: "Characters" | "Battleline" | "Infantry" | "Vehicles";
  points?: number;
  count: string;
  assemblyStatus: string;
  paintingStatus: string;
  notes?: string;
  wargear?: string[];
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
    {
      name: "Apothecary Biologis",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Absolvor bolt pistol", "Close combat weapon"]
    },
    {
      name: "Bladeguard Ancient",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Close combat weapon", "Heavy bolt pistol"]
    },
    {
      name: "Captain",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Bolt pistol", "Master-crafted bolter", "Close combat weapon"]
    },
    {
      name: "Castellan",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Master-crafted power weapon", "Combi-weapon"]
    },
    {
      name: "Chaplain",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Absolvor bolt pistol", "Crozius arcanum"]
    },
    {
      name: "Crusade Ancient",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Bolt pistol", "Master-crafted power weapon"]
    },
    {
      name: "Emperor's Champion",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      notes: "Warlord",
      wargear: ["Black Sword", "Bolt pistol"]
    },
    {
      name: "Execrator",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Crozius arcanum", "Absolvor bolt pistol"]
    },
    {
      name: "Judiciar",
      category: "Characters",
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Absolvor bolt pistol", "Executioner relic blade"]
    },
    {
      name: "Crusader Squad",
      category: "Battleline",
      points: 150,
      count: "10x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: [
        "Sword Brother with master-crafted power weapon and heavy bolt pistol",
        "5 Initiates with bolt pistol, bolt rifle, close combat weapon",
        "4 Neophytes with Astartes chainsword and bolt pistol"
      ]
    },
    {
      name: "Intercessor Squad",
      category: "Battleline",
      points: 80,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      notes: "Includes grenade launcher option.",
      wargear: ["Bolt pistols", "Bolt rifles", "Close combat weapons", "Astartes grenade launcher"]
    },
    {
      name: "Intercessor Squad",
      category: "Battleline",
      points: 80,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Intercessor Sergeant", "4 Intercessors", "Bolt pistols", "Bolt rifles", "Close combat weapons"]
    },
    {
      name: "Bladeguard Veteran Squad",
      category: "Infantry",
      points: 80,
      count: "3x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Heavy bolt pistols", "Master-crafted power weapons"]
    },
    {
      name: "Bladeguard Veteran Squad",
      category: "Infantry",
      points: 80,
      count: "3x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Heavy bolt pistols", "Master-crafted power weapons"]
    },
    {
      name: "Company Heroes",
      category: "Infantry",
      points: 105,
      count: "4x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Company Veterans", "Ancient", "Company Champion", "Master-crafted heavy bolter"]
    },
    {
      name: "Eliminator Squad",
      category: "Infantry",
      points: 85,
      count: "3x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Bolt sniper rifles", "Bolt pistols", "Close combat weapons"]
    },
    {
      name: "Eradicator Squad",
      category: "Infantry",
      points: 90,
      count: "3x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Melta rifles", "Multi-melta", "Bolt pistols", "Close combat weapons"]
    },
    {
      name: "Hellblaster Squad",
      category: "Infantry",
      points: 110,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Plasma incinerators", "Bolt pistols", "Close combat weapons"]
    },
    {
      name: "Infernus Squad",
      category: "Infantry",
      points: 90,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Pyreblasters", "Bolt pistols", "Close combat weapons"]
    },
    {
      name: "Scout Squad",
      category: "Infantry",
      points: 140,
      count: "10x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Missile launcher", "Heavy bolter", "Scout sniper rifle", "Shotguns", "Boltguns", "Combat knives"]
    },
    {
      name: "Sternguard Veteran Squad",
      category: "Infantry",
      points: 85,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Sternguard bolt pistols", "Sternguard bolt rifles", "Combi-weapon"]
    },
    {
      name: "Sword Brethren Squad",
      category: "Infantry",
      points: 130,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Astartes chainswords", "Heavy bolt pistols", "Master-crafted power weapon", "Twin lightning claws"]
    },
    {
      name: "Terminator Squad",
      category: "Infantry",
      points: 175,
      count: "5x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Assault cannon", "Storm bolters", "Power fists"]
    },
    {
      name: "Ballistus Dreadnought",
      category: "Vehicles",
      points: 150,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Armoured feet", "Ballistus lascannon", "Ballistus missile launcher", "Twin storm bolter"]
    },
    {
      name: "Brutalis Dreadnought",
      category: "Vehicles",
      points: 160,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Twin Icarus ironhail heavy stubber", "Brutalis talons", "Twin heavy bolter"]
    },
    {
      name: "Land Raider",
      category: "Vehicles",
      points: 220,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Armoured tracks", "2x Godhammer lascannon", "Twin heavy bolter"]
    },
    {
      name: "Razorback",
      category: "Vehicles",
      points: 95,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Armoured tracks", "Twin heavy bolter"]
    },
    {
      name: "Redemptor Dreadnought",
      category: "Vehicles",
      points: 205,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Redemptor fist", "Heavy onslaught gatling cannon", "Heavy flamer", "Twin fragstorm grenade launcher"]
    },
    {
      name: "Vindicator",
      category: "Vehicles",
      points: 185,
      count: "1x",
      assemblyStatus: "Owned",
      paintingStatus: "TBD",
      wargear: ["Armoured tracks", "Demolisher cannon"]
    }
  ] satisfies WarhammerUnit[],
  wantedItems: [
    { name: "High Marshal Helbrecht", priority: "High", notes: "Centerpiece commander for the crusade." },
    { name: "Chaplain Grimaldus and Retinue", priority: "High", notes: "Narrative-heavy Black Templars icon." },
    { name: "Repulsor Executioner", priority: "Medium", notes: "Big armor, big guns, big shelf presence." },
    { name: "More Crusader Squads", priority: "Medium", notes: "The correct answer is apparently always more crusaders." }
  ] satisfies WantedWarhammerItem[]
};
