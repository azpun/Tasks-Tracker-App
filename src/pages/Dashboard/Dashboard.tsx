import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import StatsCard from "../../components/common/StatsCard";
import Sidebar from "../../components/common/Sidebar";
import TopBar from "../../components/common/TopBar";
import TaskCard from "../../components/common/TaskCard";

const Dashboard = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const StatsCardData = [
    { title: "Total", iconSource: "/ui/todo.svg", color: "blue" },
    {
      title: "Progress",
      iconSource: "/ui/progress.svg",
      color: "orange",
      bgColorIcon: "yellow",
    },
    { title: "Done", iconSource: "/ui/done.svg", color: "green" },
    { title: "Overdue", iconSource: "/ui/overdue.svg", color: "red" },
  ];

  return (
    <>
      <div className="flex bg-[#F8FAFC]">
        <Sidebar isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />

        <div className="flex flex-1 flex-col">
          <TopBar onMenuClick={() => setIsBurgerOpen(!isBurgerOpen)} />

          <main className="flex flex-col">
            <div className="bg-[#F8FAFC] m-2 rounded-xl">
              <div className="mx-4 my-4">
                <h2 className="text-4xl font-bold">Hello, User.</h2>
                <h3 className="text-xl text-slate-500">
                  You have n tasks today
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {StatsCardData.map((item) => (
                  <StatsCard
                    title={item.title}
                    iconSource={item.iconSource}
                    color={item.color}
                    bgColorIcon={item.bgColorIcon}
                  />
                ))}
              </div>
            </div>
            <div className="m-2 flex flex-col">
              <div className="mx-4 my-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Today's Tasks</h2>
                <Button className="py-2 px-6 bg-blue-500 text-white rounded-xl cursor-pointer">
                  Add Task
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <TaskCard title="Task 1" status="in progress" priority="low" />
                <TaskCard title="Task 2" status="to do" priority="medium" />
                <TaskCard title="Task 3" status="done" priority="high" />
              </div>
            </div>
            <div className="m-2 flex flex-col">
              <div className="mx-4 my-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Upcoming Tasks</h2>
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
              </div>
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
