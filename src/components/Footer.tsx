export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} MAC Partners. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-text-muted">
          <p>
            A division of{" "}
            <a
              href="https://macinsurance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MAC Insurance
            </a>
          </p>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://macinsurance.org/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
