import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to MAC Partners | Insurance Agent Partner Program",
  description:
    "Apply to join MAC Partners and get direct access to proven tools, mentorship, and systems to grow your insurance business. No cost to join.",
  openGraph: {
    title: "Apply to MAC Partners",
    description:
      "Get direct access to proven tools, mentorship, and systems to grow your insurance business.",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
