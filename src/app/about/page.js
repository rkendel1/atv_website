import SimplePage from "@/components/simple-page";

export default function AboutPage() {
  return (
    <SimplePage
      title="About"
      subtitle="Agent Trust Vault is building the trust layer for AI collaboration."
      sections={[
        {
          title: "Brand",
          items: ["Logo: ATV", "Palette: Black, White, Emerald, Slate, Electric Blue"],
        },
        {
          title: "Design Principles",
          items: ["Enterprise", "Developer-first", "Minimal", "High Trust"],
        },
      ]}
    />
  );
}
