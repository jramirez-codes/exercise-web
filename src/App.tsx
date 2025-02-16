import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./components/ui-blocks/layout"
import { Home } from "./pages/home/home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
