export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="fixed left-0 top-14  h-screen w-60 bg-gray-700">
        <div className="m-6 flex flex-col gap-4">
          <h1 className="text-lg font-bold">About Layout</h1>
          <ul>
            <li>
              <a href="/about/profile">Profile</a>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </>
  );
}
