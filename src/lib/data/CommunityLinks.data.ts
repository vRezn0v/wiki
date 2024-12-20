export interface LinkProperties {
  title: string;
  content: string;
  link?: string;
  linkText?: string;
  bottomText?: string;
  openInSameTab?: boolean;
}

export const COMMUNITY_LINKS: LinkProperties[] = [
  {
    title: "💬 Join Our Discord Community!",
    content: `Have questions, need advice, or want to share your latest build?
                  Our vibrant Discord community is the place to be! Connect with
                  fellow enthusiasts, exchange tips, and stay updated on all things
                  mechanical keyboards.`,
    link: "https://discord.gg/mkin",
    linkText: "Join Discord",
  },
  {
    title: "🛠️ Explore the Aggregator Tool!",
    content: `Looking for the latest mechanical keyboard products from trusted
                  local vendors? One of our community members has created an amazing
                  tool to help you track availability on keyboards, keycaps and all
                  things keebs and find the best deals.`,
    link: "https://agg.regator.site",
    linkText: "Aggregator by Sauce",
  },
  {
    title: "🛒 Explore the Vendor Index!",
    content: `Looking for the latest mechanical keyboard products from trusted
                  local vendors? One of our community members has created an amazing
                  tool to help you track availability on keyboards, keycaps and all
                  things keebs and find the best deals.`,
    link: "/vendors",
    linkText: "Vendors",
    openInSameTab: true
  },
  {
    title: "📚 Mechanical Keyboard Wiki - Coming Soon!",
    content: `Our community wiki is a work in progress! 🚧 We're busy assembling
                  the ultimate resource for all things mechanical keyboards, from
                  beginner tips to advanced builds. Stay tuned for the launch, where
                  you'll find guides, reviews, and everything you need to dive deep
                  into the world of mechanical keyboards.`,
    bottomText: "✨ Releasing soon—watch this space! ✨",
  },
];