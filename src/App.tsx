import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import { GeneralPages } from "./utils/pageLinks"

function App() {
  return (
    <Routes>
      <Route>
        {GeneralPages.map((item, index) => (
          <Route key={index} path={item.path} element={<item.component />} />
        ))}
      </Route>
    </Routes>
  )
}

export default App