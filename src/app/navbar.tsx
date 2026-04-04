import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center ">
      <Link href="/">
        <h1 className="p-4">Navbar</h1>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link href="/">
            <div className="p-4 hover:bg-gray-500">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="p-4 hover:bg-gray-500">About</div>
          </Link>
        </li>
        <li>
          <Link href="/about/profile">
            <div className="p-4 hover:bg-gray-500">Profile</div>
          </Link>
        </li>
        <li>
          <Link href="/tasks">
            <div className="p-4 hover:bg-gray-500">Tasks</div>
          </Link>
        </li>
      </ul>
      <Link href="/login">
        <h1 className="p-4 hover:bg-gray-500">Login</h1>
      </Link>
    </nav>
  );
}
