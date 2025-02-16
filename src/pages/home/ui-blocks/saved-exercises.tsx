import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Zap } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { fetchSavedExercises } from "@/util/fetch-data/fetch-saved-exercises"
import { Skeleton } from "@/components/ui/skeleton"
import { Glow, GlowArea } from "@/components/ui-blocks/glow-card"

export default function SavedExercises() {
  const savedExercises = useQuery({ queryKey: ['saved-exercises'], queryFn: fetchSavedExercises })
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quick Access: Saved Exercises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Card */}
        {savedExercises.data?.map((exercise) => (
          <GlowArea size={500} key={exercise.id}>
            <Glow color={"hsl(var(--accent))"} className="rounded-lg">
              <Card >
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

            </Glow>
          </GlowArea>
        ))}
        {/* Loading Card */}
        {!savedExercises.data && (
          <GlowArea size={500} >
            <Glow color={"hsl(var(--accent))"} className="rounded-lg">
              <Card >
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="w-[50%] h-5">
                    </Skeleton>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <Skeleton className="h-5 w-10" />
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Loading
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Glow>

          </GlowArea>
        )}
      </div>
    </div>
  )
}

