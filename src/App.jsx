import "./App.css";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { MainWithFormik } from "./components/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Aside />
        <MainWithFormik />
      </div>
    </div>
  );
}

export default App;
