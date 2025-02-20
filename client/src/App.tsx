import { BrowserRouter, Route, Routes } from "react-router-dom"
import LazyLoaderWrapper from "./routes/LazyLoaderWrapper"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LazyLoaderWrapper importFunc={() => import("./components/SideBar")}/>}/>
        <Route path="/loader" element={<LazyLoaderWrapper importFunc={() => import("./routes/Loader")}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
