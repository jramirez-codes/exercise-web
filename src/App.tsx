import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./components/ui-blocks/layout"
import { Home } from "./pages/home/home"
import { ExampleFetch } from "./pages/example-fetch/example-fetch"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="1" element={<ExampleFetch/>} />
            <Route path="2" element={<ExampleFetch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
