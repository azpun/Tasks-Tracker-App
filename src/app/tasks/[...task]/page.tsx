import Link from "next/link";

type DetailsTaskProps = { params: Promise<{ task: string[] }> };

async function getDataById(id: string) {
  const exampleTask = [
    { id: 1, title: "Sikat Gigi", description: "Sikat gigi pagi dan malam" },
    { id: 2, title: "Mandi", description: "Gunakan sabun dan air bersih" },
    { id: 3, title: "Makan", description: "Makan makanan bergizi" },
  ];
  return exampleTask.find(task => task.id === parseInt(id));

  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  // console.log(res.json());
  // return res.json();
}

export default async function TaskDetailsPage(props: DetailsTaskProps) {
  const { task: id } = await props.params;
  // const task = await getDataById(id);

  console.log(id);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Task Details Page</h1>
      <div className="ml-4">
        <h2 className="text-lg">Task: {id[1]}</h2>
        <h3>Category: {id[0]}</h3>
        <p>Judul: {id[2]}</p>
      </div>
      {/* {task ? (
        <div className="ml-4">
          <h2 className="text-lg">Task: {task.title}</h2>
          <p>Deskripsi: {task.description}</p>
        </div>
      ) : (
        <h2 className="ml-4 text-lg">Task not found</h2>
      )} */}
      <Link href="/tasks">
        <button className="ml-4 border p-2 rounded-xl">
          Back to Tasks Page
        </button>
      </Link>
    </div>
  );
}
