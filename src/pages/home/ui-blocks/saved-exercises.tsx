import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Zap } from "lucide-react"

const savedExercises = [
  { id: 1, name: "Full Body Workout", duration: "45 min", difficulty: "Intermediate" },
  { id: 2, name: "HIIT Cardio", duration: "30 min", difficulty: "Advanced" },
  { id: 3, name: "Yoga Flow", duration: "60 min", difficulty: "Beginner" },
  { id: 4, name: "Strength Training", duration: "50 min", difficulty: "Intermediate" },
]

export default function SavedExercises() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quick Access: Saved Exercises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedExercises.map((exercise) => (
          <Card key={exercise.id}>
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{exercise.duration}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>{exercise.difficulty}</span>
                </div>
                <Button variant="outline" size="sm">
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

