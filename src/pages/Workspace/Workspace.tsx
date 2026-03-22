import { useState } from "react";
// import styles from "./workspace.module.css";
// import BurgerNav from "../../components/common/BurgerNav/BurgerButton";
import Button from "../../components/ui/Button/Button";

const Workspace = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <header className={`m-3`}>
        <div className="flex justify-between items-center rounded-lg bg-slate-200 p-3">
          <div className="flex items-center">
            <Button
              type="button"
              className="w-8 h-8 md"
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
              <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
            </Button>
          </div>
          <div>
            <h1 className="text-2xl text-black">Tasks Tracker</h1>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8">
              <a href="#">
                <img src="/ui/user.svg" alt="user" />
              </a>
            </div>
            {/* <nav className="hidden">
              <ul className="flex gap-2 ">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </header>
      <main>
        <div>
          <h2 className="text-center sm:text-left">Tasks</h2>
        </div>
      </main>
      <footer>
        <div>
          <h3>Footer</h3>
        </div>
      </footer>
    </>
  );
};

export default Workspace;
