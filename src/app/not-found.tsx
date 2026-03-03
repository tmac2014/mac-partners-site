import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-[family-name:var(--font-outfit)] text-6xl font-bold text-primary mb-4">
        404
      </h1>
      <p className="text-xl text-text-muted mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(46,196,165,0.3)]"
      >
        &larr; Back to MAC Partners
      </Link>
    </div>
  );
}
