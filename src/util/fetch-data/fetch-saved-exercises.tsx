
const savedExercises = [
  { id: "1", name: "Full Body Workout", duration: "45 min", difficulty: "Intermediate" },
  { id: "2", name: "HIIT Cardio", duration: "30 min", difficulty: "Advanced" },
  { id: "3", name: "Yoga Flow", duration: "60 min", difficulty: "Beginner" },
  { id: "4", name: "Strength Training", duration: "50 min", difficulty: "Intermediate" },
]
export function fetchSavedExercises() {
  return savedExercises  
}