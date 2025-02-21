import { BrowserRouter, Route, Routes } from "react-router-dom"
import LazyLoaderWrapper from "./routes/LazyLoaderWrapper"
import PageNotFound from "./components/PagenotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LazyLoaderWrapper importFunc={() => import("./pages/AppPage")}/>}/>
        <Route path="/loader" element={<LazyLoaderWrapper importFunc={() => import("./routes/Loader")}/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App