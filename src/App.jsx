import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<h1>Home</h1>} path="/" />
        <Route element={<h1>About</h1>} path="/about" />
        <Route element={<h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
