// Color Mapping
export const colorMap: { [key: string]: string } = {
  blue: "border-l-blue-500",
  orange: "border-l-orange-500",
  green: "border-l-green-500",
  red: "border-l-red-500",
};

// Background Color Mapping
export const bgColorMap: { [key: string]: string } = {
  blue: "bg-blue-200",
  yellow: "bg-amber-200",
  green: "bg-green-200",
  red: "bg-red-200",
};

export const bgStatusColor: { [key: string]: string } = {
  "to do": "bg-blue-200",
  "in progress": "bg-amber-200",
  done: "bg-green-200",
  overdue: "bg-red-200",
};

export const bgPriorityColor: { [key: string]: string } = {
  low: "bg-slate-200",
  medium: "bg-amber-200",
  high: "bg-red-200",
};

export const borderStatusColor: { [key: string]: string } = {
  "to do": "border-l-blue-500",
  "in progress": "border-l-amber-500",
  done: "border-l-green-500",
  overdue: "border-l-red-500",
};

export const dotPriorityColor: { [key: string]: string } = {
  low: "bg-green-500",
  medium: "bg-amber-500",
  high: "bg-red-500",
};
