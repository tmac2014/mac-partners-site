"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "@/lib/analytics";

type Step = "questions" | "qualified" | "not-qualified";

const BOOKING_URL =
  "https://link.macinsurance.org/widget/booking/s4Z67SgUiYKhJhkxZF3e";

interface Answers {
  licensed: string;
  experience: string;
  fmo: string;
  invest: string;
  coachable: string;
}

const INITIAL: Answers = {
  licensed: "",
  experience: "",
  fmo: "",
  invest: "",
  coachable: "",
};

// Qualified if: licensed (yes or in-progress), willing to invest, and coachable
function isQualified(a: Answers): boolean {
  if (a.licensed === "no") return false;
  if (a.invest === "no") return false;
  if (a.coachable === "no") return false;
  return true;
}

const questions: {
  key: keyof Answers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "licensed",
    question: "Are you currently licensed to sell insurance?",
    options: [
      { value: "yes", label: "Yes, I'm licensed" },
      { value: "in-progress", label: "In progress / studying for exam" },
      { value: "no", label: "No, and I don't plan to get licensed" },
    ],
  },
  {
    key: "experience",
    question: "How long have you been selling insurance?",
    options: [
      { value: "new", label: "Brand new — haven't started yet" },
      { value: "1-2", label: "1–2 years" },
      { value: "3-5", label: "3–5 years" },
      { value: "5+", label: "5+ years" },
    ],
  },
  {
    key: "fmo",
    question: "Are you currently contracted with an FMO or IMO?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "not-sure", label: "Not sure" },
    ],
  },
  {
    key: "invest",
    question:
      "Are you willing to invest at least $1,000/month to grow your business?",
    options: [
      { value: "yes", label: "Yes, I'm ready to invest in growth" },
      { value: "working-toward", label: "Not yet, but working toward it" },
      { value: "no", label: "No, I'm not willing to invest" },
    ],
  },
  {
    key: "coachable",
    question:
      "Are you coachable and willing to follow a proven system?",
    options: [
      { value: "yes", label: "Absolutely — that's why I'm here" },
      { value: "maybe", label: "Open to it, but I like doing things my way" },
      { value: "no", label: "No, I prefer to figure things out on my own" },
    ],
  },
];

export default function ApplyPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL);
  const [step, setStep] = useState<Step>("questions");

  function handleSelect(value: string) {
    const key = questions[currentQ].key;
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // All questions answered
      const result = isQualified(updated) ? "qualified" : "not-qualified";
      events.quizComplete(result);
      setStep(result);
    }
  }

  const progress = ((currentQ + (step !== "questions" ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <a href="/" className="mb-12">
        <Image src="/LogoWhite.png" alt="MAC Partners" width={160} height={107} className="h-16 w-auto" priority />
      </a>

      <div className="w-full max-w-xl">
        {step === "questions" && (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-text-muted mb-2">
                <span>
                  Question {currentQ + 1} of {questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-bg-card overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h1 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-text-heading mb-8">
              {questions[currentQ].question}
            </h1>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className="w-full text-left rounded-xl border border-border bg-bg-card px-6 py-4 text-text hover:border-primary/50 hover:bg-bg-card-hover transition-all cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Back button */}
            {currentQ > 0 && (
              <button
                onClick={() => setCurrentQ(currentQ - 1)}
                className="mt-6 text-sm text-text-muted hover:text-primary transition-colors cursor-pointer"
              >
                &larr; Back
              </button>
            )}
          </>
        )}

        {step === "qualified" && (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              You&apos;re a Great Fit
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
              Based on your answers, MAC Partners could be exactly what you need.
              Book a call with Tyler or Jessica to get started.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => events.clickBookCall()}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(46,196,165,0.4)] hover:-translate-y-0.5"
            >
              Book Your Call
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}

        {step === "not-qualified" && (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              Not the Right Fit — Yet
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
              Based on your answers, MAC Partners may not be the best fit right
              now. If your situation changes, we&apos;d love to hear from you.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              &larr; Back to MAC Partners
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
