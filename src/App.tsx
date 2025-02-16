import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./components/ui-blocks/layout"
import { Home } from "./pages/home/home"
import { Settings } from "./pages/settings/settings"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
