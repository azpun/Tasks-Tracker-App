import { useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input";

interface TopBarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export const TopBar = ({ onMenuClick, onSearchClick }: TopBarProps) => {
  const location = useLocation();
  return (
    <header className="md:sticky md:top-0 md:z-10">
      <div className="flex justify-between items-center bg-white p-3 ">
        {/* Burger Button Mobile */}
        <Button className="w-8 h-8 md:hidden" onClick={onMenuClick}>
          <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
        </Button>

        {/* Title Dynamic */}
        <div className="text-2xl text-black font-bold">
          <h1 className="hidden md:block ">Dashboard</h1>
          <h1 className="block md:hidden">Tasks Tracker</h1>
        </div>

        {/* Search and User */}
        <div className="flex items-center gap-3">
          {location.pathname === "/tasks" && (
            <>
              {/* Search Input Desktop */}
              <Input
                type="search"
                placeholder="Search"
                name="search"
                required
                iconSource="/ui/search.svg"
              />
              {/* Search Button Mobile */}
              <div className="block md:hidden">
                <Button className="w-8 h-8">
                  <img
                    src="/ui/search.svg"
                    alt="search"
                    onClick={onSearchClick}
                  />
                </Button>
              </div>
            </>
          )}

          {/* Search Mobile */}

          <div className="w-12 h-12">
            <a href="#">
              <img src="/ui/user.svg" alt="user" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
