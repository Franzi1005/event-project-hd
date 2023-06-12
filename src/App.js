import "./App.css";
import Mainpage from "./Mainpage";
import "./heidelberg.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Mainpage />

      <footer>
        This app was coded by{" "}
        <a href="https://github.com/ChristophBleyer" target="_blank">
          Christoph
        </a>{" "}
        and{" "}
        <a href="https://github.com/Franzi1005" target="_blank">
          Franzi{" "}
        </a>
        an is{" "}
        <a
          href="https://github.com/Franzi1005/event-project-hd"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
