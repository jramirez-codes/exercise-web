import SavedExercises from "./ui-blocks/saved-exercises";

export function Home() {
  return (
    <div className="min-h-screen pl-2 pr-2">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Exercise Hub</h1>
      <SavedExercises />
    </div>
  )
}
