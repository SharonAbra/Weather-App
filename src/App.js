import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./components/style.css";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
