import Button from "../../ui/Button/Button";
import Input from "../../ui/Input";

export const TopBar = ({ onMenuClick }: { onMenuClick: () => void }) => {
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
          <Input
            type="search"
            placeholder="Search"
            name="search"
            required
            iconSource="/ui/search.svg"
          />
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
