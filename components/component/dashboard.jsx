import Cards from "../Card";

export function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1 bg-gray-100 dark:bg-gray-950 p-6">
          <Cards />
      </main>
    </div>
  );
}