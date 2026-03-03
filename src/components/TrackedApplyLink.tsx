"use client";

import { events } from "@/lib/analytics";

export default function TrackedApplyLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="/apply"
      onClick={() => events.clickApply(location)}
      className={className}
    >
      {children}
    </a>
  );
}
