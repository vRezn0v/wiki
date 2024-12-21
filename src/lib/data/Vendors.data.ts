export enum VendorTag {
  "Keyboards",
  "Mice",
  "Keycaps",
  "Deskmats",
  "Switches",
}

export interface Vendor {
  name: string;
  description?: string;
  url: string;
  discord?: string;
  tags?: VendorTag[];
  iconPath?: string;
  imgPath?: string;
  region?: string;
  rating?: number;
}

export const LOCAL_VENDOR_LIST: Vendor[] = [
  {
    name: "NeoMacro",
    url: "https://neomacro.in",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Keycaps,
      VendorTag.Switches,
      VendorTag.Mice,
      VendorTag.Deskmats,
    ],
    discord: "https://discord.gg/W4ZzfmC8Me",
    imgPath: require("../../assets/branding/neomacro/neomacro-white-bg.png"),
  },
  {
    name: "StacksKB",
    url: "https://stackskb.com",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Keycaps,
      VendorTag.Switches,
      VendorTag.Mice,
      VendorTag.Deskmats,
    ],
    imgPath: require("../../assets/branding/stackskb/stacks-logo-black.png"),
    discord: "https://discord.gg/kjmNeWCXZV",
  },
  {
    name: "Keebsmods",
    url: "https://keebsmod.com",
    discord: "https://discord.gg/dguuQsEQKw",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Keycaps,
      VendorTag.Switches,
      VendorTag.Mice,
    ],
    imgPath: require("../../assets/branding/keebsmods/keebsmods-color-bg.png"),
  },
  {
    name: "CuriosityCaps",
    url: "https://curiositycaps.in",
    tags: [VendorTag.Keycaps, VendorTag.Deskmats],
    imgPath: require("../../assets/branding/curiositycaps/curiosity-caps-white-bg.png"),
  },
  {
    name: "CtrlShiftStore",
    url: "https://ctrlshiftstore.com",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Keycaps,
      VendorTag.Switches,
      VendorTag.Mice,
      VendorTag.Deskmats,
    ],
    imgPath: require("../../assets/branding/ctrlshiftstore/ctrl-shift-store-logo.png"),
  },
  {
    name: "AceKBD",
    url: "https://acekbd.com",
    tags: [VendorTag.Keyboards, VendorTag.Deskmats],
    imgPath: require("../../assets/branding/acekbd/acekbd-white-bg.png"),
  },
  {
    name: "GenesisPC",
    url: "https://genesispc.in",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Keycaps,
      VendorTag.Switches,
      VendorTag.Mice,
      VendorTag.Deskmats,
    ],
    imgPath: require("../../assets/branding/genesispc/genesis-pc-logo.png"),
  },
];

export const INTL_VENDOR_LIST: Vendor[] = [
  {
    name: "Oblotzky",
    url: "https://oblotzky.industries",
    discord: "https://discord.gg/swhZn24h",
    rating: 1,
    region: "Germany",
  },
  {
    name: "Ilumkb",
    url: "https://ilumkb.com",
    region: "Singapore",
    rating: 1,
  },
  {
    name: "Prototypist",
    url: "https://prototypist.net",
    region: "UK",
    rating: 1,
  },
  {
    name: "Omnitype",
    url: "omnitype.com",
    discord: "https://discord.com/invite/omnitype",
    region: "USA",
    rating: 1,
  },
  {
    name: "NovelKeys",
    url: "https://novelkeys.com",
    discord: "https://discord.com/invite/novelkeys",
    rating: 2,
    region: "USA",
  },
  {
    name: "Cannonkeys",
    url: "https://cannonkeys.com",
    discord: "https://discord.com/invite/DKpykqYKAe",
    rating: 2,
    region: "USA",
  },
  {
    name: "DROP",
    url: "https://drop.com",
    rating: 2,
    region: "USA",
  },
  {
    name: "Deskhero",
    url: "https://deskhero.ca",
    discord: "https://discord.com/invite/2utk39S",
    region: "Canada",
    rating: 2,
  },
  {
    name: "Zfrontier",
    url: "https://en.zfrontier.com",
    region: "China",
    rating: 2,
  },
  {
    name: "KBDFans",
    url: "https://kbdfans.com",
    region: "China",
    rating: 2,
  },
  {
    name: "Unikeys",
    url: "https://unikeyboards.com",
    region: "China",
    rating: 2,
  },
  {
    name: "Click Clack",
    url: "https://clickclack.io",
    region: "China",
    rating: 2,
  },
  {
    name: "Ktech",
    url: "https://ktechs.store",
    discord: "https://discord.gg/ktech",
    region: "Singapore",
    rating: 2,
  },
  {
    name: "Cafege",
    url: "https://cafege.com.au",
    region: "Australia",
    rating: 2,
  },
  {
    name: "Hypekeyboards",
    url: "https://hypekeyboards.ca",
    region: "Canada",
    rating: 2,
  },
  {
    name: "Eloquent Clicks",
    url: "https://eloquentclicks.com",
    region: "Spain",
    rating: 2,
  },
  {
    name: "Ashkeebs",
    url: "https://ashkeebs.com",
    region: "Canada",
    rating: 2,
  },
  {
    name: "CandyKeys",
    url: "https://candykeys.com",
    region: "Germany",
    rating: 3,
  },
  {
    name: "Switchkeys",
    url: "https://switchkeys.com.au",
    region: "Australia",
    rating: 3,
  },
];

const CAUTION_LIST = [
  { name: "Vala Supply" },
  { name: "LoobedSwitches" },
  { name: "Daily Clack" },
  { name: "Thockkeys" },
];

/**

D tier
Vala Supply
LoobedSwitches
Daily CLACK Aus 
Thockeys USA
---

F Tier (you're not getting your order)
Kono store
Space cables
Switch mod


? Tier
Taiwan - Inpad 

 */
