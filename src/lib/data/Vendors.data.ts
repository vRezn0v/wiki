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
  tags: VendorTag[];
  iconPath?: string;
  imgPath?: string;
  region?: string;
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
    imgPath: require("../../assets/branding/neomacro/neomacro-white-bg.png")
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
    discord: "https://discord.gg/kjmNeWCXZV"
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
    imgPath: require("../../assets/branding/keebsmods/keebsmods-color-bg.png")
  },
  {
    name: "CuriosityCaps",
    url: "https://curiositycaps.in",
    tags: [VendorTag.Keycaps, VendorTag.Deskmats],
    imgPath: require("../../assets/branding/curiositycaps/curiosity-caps-white-bg.png")
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
    imgPath: require("../../assets/branding/ctrlshiftstore/ctrl-shift-store-logo.png")
  },
  {
    name: "AceKBD",
    url: "https://acekbd.com",
    tags: [
      VendorTag.Keyboards,
      VendorTag.Deskmats,
    ],
    imgPath: require("../../assets/branding/acekbd/acekbd-white-bg.png")
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
    imgPath: require("../../assets/branding/genesispc/genesis-pc-logo.png")
  },

];

export const INTL_VENDOR_LIST: Vendor[] = [];