export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">
          <h3 className="text-lg font-semibold opacity-80">Welcome Back</h3>
          <p className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
            Admin
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">
          <h3 className="text-lg font-semibold opacity-80">System Status</h3>
          <p className="mt-2 text-green-400 font-bold">● Online</p>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/20">
        <h2 className="text-xl font-bold mb-4">Getting Started</h2>
        <p className="opacity-70">
          Select a category from the sidebar to manage your portfolio content.
          All changes reflect immediately on your main website.
        </p>
      </div>
    </div>
  );
}
