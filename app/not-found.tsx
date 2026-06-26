import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-7xl font-black text-slate-200">404</h1>
        <h2 className="mb-2 text-xl font-bold text-slate-900">Page not found</h2>
        <p className="mb-8 text-sm text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Go home
          </Link>
          <Link
            href="/company/contact"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
