export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-60 bg-gray-300 p-4">
        <nav className="flex flex-col gap-4">
          <a href="/dashboard/settings">Settings</a>
          <a href="/dashboard/profile">Profile</a>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <div>{children}</div>
      </main>
    </div>
  );
}
