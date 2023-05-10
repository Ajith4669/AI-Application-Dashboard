import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDesign from "./Components/card-design";
import FormPage from "./Components/form";
import Table from "./Components/table";
import Box from "./Components/box";
import RawData from "./Components/raw-data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<FormPage />}>
          <Route path="table" element={<Table />} />
          <Route path="box" element={<Box />} />
          <Route path="card-design" element={<CardDesign />} />
          <Route path="raw-data" element={<RawData />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
