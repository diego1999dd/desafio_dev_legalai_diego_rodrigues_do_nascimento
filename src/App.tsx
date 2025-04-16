import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchForm from "./components/FormMatch";
import MatchResults from "./components/MatchResultados";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<MatchForm />} />
            <Route path="/resultados" element={<MatchResults />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
