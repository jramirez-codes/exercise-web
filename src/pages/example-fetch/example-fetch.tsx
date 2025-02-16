import { exampleFetch } from "@/util/fetch-data/example-fetch"
import { useQuery } from "@tanstack/react-query"

export function ExampleFetch() {
  const exampleData = useQuery({
    queryKey: ['example-fetch'],
    queryFn: exampleFetch
  })

  return (
    <>
      <div className="w-full">
        <h1 className="text-lg text-center">
          Example Fetch
        </h1>
        <h1 className="text-lg text-center">
          {exampleData?.data ? exampleData.data : "Nothing fetched yet"}
        </h1>
      </div>
    </>
  )
}