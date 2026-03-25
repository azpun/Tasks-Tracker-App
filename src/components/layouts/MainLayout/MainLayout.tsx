import { useState } from "react";
import Sidebar from "../../common/Sidebar";
import TopBar from "../../common/TopBar";
import SearchMobile from "../../common/SearchMobile";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="flex bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />

      <div className="flex flex-1 flex-col">
        {/* Top Bar */}
        <TopBar
          onMenuClick={() => setIsBurgerOpen(!isBurgerOpen)}
          onSearchClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <SearchMobile isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

        <main className="flex flex-col">
          {/* Main Content */}
          {children}
        </main>
        {/* Footer */}
        <footer></footer>
      </div>
    </div>
  );
};
