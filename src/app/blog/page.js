import SimplePage from "@/components/simple-page";

export default function BlogPage() {
  return (
    <SimplePage
      title="Blog"
      subtitle="Product updates, security write-ups, and agent trust engineering notes."
      sections={[
        {
          title: "Topics",
          items: ["Launch updates", "Platform roadmap", "Security explainers", "Integration tutorials"],
        },
      ]}
    />
  );
}
