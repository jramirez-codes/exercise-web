import { Button } from "@/components/ui/button"
import { exampleFetch } from "@/util/fetch-data/example-fetch"
import { useQueryClient } from "@tanstack/react-query"
import React from "react"

export function Home() {
  const queryClient = useQueryClient()
  const [isFetchingData, setIsFetchingData] = React.useState(false)

  return (
    <div className="w-full">
      <h1 className="text-lg text-center">
        hello world
      </h1>
      <Button onClick={() => {
        const asyncFunc = async () => {
          if (isFetchingData) {
            return
          }

          // Fetch data example
          setIsFetchingData(_ => true)
          await queryClient.prefetchQuery({
            queryKey: ['example-fetch'],
            queryFn: exampleFetch
          })
          setIsFetchingData(_ => false)
        }
        asyncFunc()
      }}>
        {isFetchingData ? "Pulling Data" : "Click me"}
      </Button>
    </div>
  )
}
