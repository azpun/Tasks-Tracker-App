import Link from "next/link";

export default function TasksPage() {
  const exampleTask = [
    { id: 1, title: "Sikat Gigi" },
    { id: 2, title: "Mandi" },
    { id: 3, title: "Makan" },
  ];
  return (
    <div className="flex flex-col gap-6 m-12">
      <h1 className="text-2xl font-bold">Tasks Page</h1>
      <ul>
        {exampleTask.map(task => (
          <li key={task.id} className="mb-4">
            {task.title}
            <Link href={`/tasks/${task.id}`}>
              <button className="ml-4 border p-2 rounded-xl">Detail</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
