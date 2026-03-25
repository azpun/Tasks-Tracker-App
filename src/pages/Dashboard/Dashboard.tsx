import Button from "../../components/ui/Button/Button";
import StatsCard from "../../components/common/StatsCard";
import TaskCard from "../../components/common/TaskCard";
import MainLayout from "../../components/layouts/MainLayout";

const Dashboard = () => {
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
    <MainLayout>
      {/* Stats Card */}
      <div className="bg-[#F8FAFC] m-2 rounded-xl">
        <div className="mx-4 my-4">
          <h2 className="text-4xl font-bold">Hello, User.</h2>
          <h3 className="text-xl text-slate-500">You have n tasks today</h3>
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

      {/* Today's Tasks */}
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

      {/* Upcoming Tasks */}
      <div className="m-2 flex flex-col">
        <div className="mx-4 my-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Upcoming Tasks</h2>
        </div>
        <div className="flex flex-col gap-2">
          <TaskCard title="Task 1" status="to do" priority="low" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
