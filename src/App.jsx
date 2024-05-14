import "./App.css";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { MainWithToDo } from "./components/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Aside />
        <MainWithToDo />
      </div>
    </div>
  );
}

export default App;
