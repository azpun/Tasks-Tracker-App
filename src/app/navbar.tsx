"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center ">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="p-4">Navbar</h1>
        </Link>
        <div
          className="shrink-0 bg-divider border border-gray-700 w-divider h-8"
          role="separator"
          data-orientation="vertical"
          aria-orientation="vertical"
        />
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <div
                className={`p-4 hover:bg-gray-500 ${pathname === "/" ? "text-blue-300" : "text-white"}`}
              >
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div
                className={`p-4 hover:bg-gray-500 ${pathname === "/about" ? "text-blue-300" : "text-white"}`}
              >
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about/profile">
              <div
                className={`p-4 hover:bg-gray-500 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}
              >
                Profile
              </div>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <div
                className={`p-4 hover:bg-gray-500 ${pathname === "/tasks" ? "text-blue-300" : "text-white"}`}
              >
                Tasks
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="bg-white text-black rounded-md py-2 px-4 mr-4 cursor-pointer"
        onClick={() => {
          router.push("/login");
        }}
      >
        Login
      </button>
    </nav>
  );
}
