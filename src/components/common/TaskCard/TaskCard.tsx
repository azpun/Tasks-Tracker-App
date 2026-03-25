import StatusTask from "../../ui/Status";
import PriorityTask from "../../ui/Priority";

interface TaskCardProps {
  title: string;
  description?: string;
  status: "to do" | "in progress" | "done" | "overdue";
  priority: "low" | "medium" | "high";
}

export const TaskCard = ({ title, status, priority }: TaskCardProps) => {
  return (
    <div className="p-4 mx-4 my-2 border border-slate-200 rounded-2xl shadow-md">
      <h3 className="text-xl">{title}</h3>
      <div>
        <div className="my-4 flex gap-3 items-center">
          <StatusTask status={status} />
          <PriorityTask priority={priority} />
        </div>
      </div>
    </div>
  );
};
