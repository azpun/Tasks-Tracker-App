import MainLayout from "../../components/layouts/MainLayout";
import FilterTabs from "../../components/common/FilterTabs";
import TaskCard from "../../components/common/TaskCard";
import FAB from "../../components/common/FAB";

export const Tasks = () => {
  return (
    <MainLayout>
      <div className="flex flex-col flex-1 h-full min-h-[calc(100vh-140px)] relative">
        {/* Horizontal Scrollable Filter Tabs based on mockup */}
        <FilterTabs />

        {/* Stacked Task Cards without checkboxes */}
        <div className="flex-1 overflow-y-auto pb-24 md:pb-8">
          <TaskCard
            title="Finalize project proposal"
            description="Draft the Q3 marketing strategy presentation."
            status="to do"
            priority="high"
            dueDate="Oct 20"
          />

          <TaskCard
            title="Develop mobile UI mockups"
            description="Create wireframes for Tasks and Dashboard pages."
            status="in progress"
            priority="medium"
            dueDate="Oct 22"
          />

          <TaskCard
            title="Team synchronization meeting"
            description="Review progress and discuss next steps."
            status="done"
            priority="low"
            dueDate="Oct 18"
          />

          <TaskCard
            title="Update API Documentation"
            description="Add endpoints for user authentication."
            status="overdue"
            priority="high"
            dueDate="Oct 15"
          />
        </div>

        {/* Floating Action Button (Mobile Only hidden behind md breakpoint) */}
        <FAB onClick={() => console.log("Add new task logic here")} />
      </div>
    </MainLayout>
  );
};
