type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export const events = {
  clickApply: (location: string) =>
    trackEvent({
      action: "click_apply",
      category: "conversion",
      label: location,
    }),
  quizComplete: (result: "qualified" | "not-qualified") =>
    trackEvent({
      action: "quiz_complete",
      category: "conversion",
      label: result,
    }),
  clickBookCall: () =>
    trackEvent({
      action: "click_book_call",
      category: "conversion",
    }),
};
