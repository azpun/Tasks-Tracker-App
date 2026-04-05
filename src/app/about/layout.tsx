export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <aside className="fixed left-0 top-14 h-screen w-sm bg-gray-700 text-white">
          <div className="m-6 flex flex-col gap-4">
            <h1 className="text-lg font-bold">About Layout</h1>
            <ul>
              <li>
                <a href="/about/profile">Profile</a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="ml-100 mt-6.5">{children}</div>
      </div>
    </>
  );
}
