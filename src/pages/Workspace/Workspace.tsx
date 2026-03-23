import { useState } from "react";
// import styles from "./workspace.module.css";
// import BurgerNav from "../../components/common/BurgerNav/BurgerButton";
import Button from "../../components/ui/Button/Button";

const Workspace = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <header className="">
        <div className="flex justify-between items-center bg-slate-200 p-3">
          <Button
            type="button"
            className="w-8 h-8 md:hidden"
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            <img src="/ui/dark/menu-dark.svg" alt="menu-hamburger" />
          </Button>
          <div
            className={`fixed top-0 left-0 w-1/2 bg-white shadow transform transtition-transform duration-300 
            ${isBurgerOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Button
              type="button"
              className="p-4 ml-2 my-1 text-2xl"
              onClick={() => {
                setIsBurgerOpen(false);
              }}
            >
              X
            </Button>
            <div className="flex flex-col gap-2 justify-between ">
              <nav className="ml-8 my-2">
                <ul className="flex flex-col gap-2">
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
              </nav>
              <div className=" flex items-center m-2 gap-2">
                <div className="w-12 h-12">
                  <img src="/ui/user.svg" alt="user" />
                </div>
                <div>User</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-black">Tasks Tracker</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <div className="w-12 h-12">
              <a href="#">
                <img src="/ui/user.svg" alt="user" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-slate-200 m-2 py-2 rounded-xl">
          <div className="mx-4 my-4">
            <h2 className="text-4xl font-bold">Hello, User.</h2>
            <h3 className="text-xl text-slate-500">You have n tasks today</h3>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-4 mx-4 my-2 border rounded-2xl">
              <span>Total: 0</span>
            </div>
            <div className="p-4 mx-4 my-2 border rounded-2xl">
              <span>Pending: 0</span>
            </div>
            <div className="p-4 mx-4 my-2 border rounded-2xl">
              <span>Completed: 0</span>
            </div>
            <div className="p-4 mx-4 my-2 border rounded-2xl">
              <span>Overdue: 0</span>
            </div>
          </div>
        </div>
        <div className="m-2 flex flex-col">
          <div className="mx-4 my-4">
            <h2 className="text-2xl font-bold">Today's Tasks</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
              <h3 className="text-xl">Task 1</h3>
              <div>
                <div className="my-4 flex gap-3 items-center">
                  <span className="p-2 bg-blue-300 rounded-full">
                    In Progress
                  </span>
                  <span>Low</span>
                </div>
              </div>
            </div>
            <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
              <h3 className="text-xl">Task 2</h3>
              <div>
                <div className="my-4 flex gap-3 items-center">
                  <span className="p-2 bg-orange-300 rounded-full">To Do</span>
                  <span>Medium</span>
                </div>
              </div>
            </div>
            <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
              <h3 className="text-xl">Task 3</h3>
              <div>
                <div className="my-4 flex gap-3 items-center">
                  <span className="p-2 bg-green-500 text-white rounded-full">
                    In Progress
                  </span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
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
