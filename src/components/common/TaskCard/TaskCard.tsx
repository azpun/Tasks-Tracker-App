import StatusTask from "../../ui/Status";
import {
  borderStatusColor,
  dotPriorityColor,
} from "../../../constants/colorMapping";

interface TaskCardProps {
  title: string;
  description: string;
  status: "to do" | "in progress" | "done" | "overdue";
  priority: "low" | "medium" | "high";
  dueDate?: string;
}

export const TaskCard = ({
  title,
  description,
  status,
  priority,
  dueDate,
}: TaskCardProps) => {
  return (
    <div
      className={`p-4 mx-4 my-2 bg-white border border-slate-200 rounded-2xl shadow-md border-l-4 ${borderStatusColor[status]}`}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-500 mt-1 truncate">{description}</p>

      {/* Priority + Status + Due Date */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          {/* Priority dot + label */}
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ${dotPriorityColor[priority]}`}
            />
            <span className="text-xs text-slate-600 capitalize">
              {priority}
            </span>
          </div>

          {/* Status Badge */}
          <StatusTask status={status} />
        </div>

        {/* Due Date */}
        {dueDate && (
          <span className="text-xs text-slate-400">Due: {dueDate}</span>
        )}
      </div>
    </div>
  );
};
