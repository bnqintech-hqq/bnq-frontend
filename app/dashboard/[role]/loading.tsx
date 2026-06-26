export default function DashboardLoading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
      <p className="mt-4 text-sm font-bold text-slate-500 animate-pulse">Loading your dashboard...</p>
    </div>
  );
}
