import { Outlet } from "react-router";
import { ThemeProvider } from "./theme-provider";
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createIDBPersister } from "@/util/indexdb-persistor";
import Navigation from "./navigation/navigation";

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
        <Navigation />
        <main className="pl-2 pr-2 pt-2">
          <Outlet />
        </main>
      </ThemeProvider>
    </PersistQueryClientProvider>
  )
}