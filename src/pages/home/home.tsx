import SavedExercises from "./ui-blocks/saved-exercises";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Exercise Hub</h1>
        <SavedExercises />
      </main>
    </div>
  )
}
