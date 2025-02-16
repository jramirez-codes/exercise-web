import { Outlet } from "react-router";
import { ThemeProvider } from "./theme-provider";
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createIDBPersister } from "@/util/indexdb-persistor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  }
})
const storage = createIDBPersister()

export function Layout() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: storage }}
    >
      <ThemeProvider defaultTheme={"system"} storageKey={"ui-theme"}>
        <Outlet />
      </ThemeProvider>
    </PersistQueryClientProvider>
  )
}