import { Link } from "react-router-dom";

interface NavItemProps {
  iconSource: string;
  href: string;
  children: React.ReactNode;
  alt?: string;
  isActive?: boolean;
}

export const NavItem = ({ iconSource, href, children, alt, isActive = false }: NavItemProps) => {
  return (
    <li>
      <Link
        to={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
          isActive
            ? "bg-white/15 text-white font-semibold border-l-4 border-blue-400"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        <img src={iconSource} alt={alt} className="w-6 h-6" />
        <span>{children}</span>
      </Link>
    </li>
  );
};
