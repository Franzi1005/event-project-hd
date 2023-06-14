import "./App.css";
import Mainpage from "./Mainpage";
import "./heidelberg.jpg";
import AvailableEvents from "./Pages/AvailableEvents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpEvent from "./Pages/SignUpEvent";
import ErrorPage from "./Pages/ErrorPage";
import EventForm from "./Pages/EventForm";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/availableEvents" element={<AvailableEvents />} />
          <Route path="/signUp" element={<SignUpEvent />} />
          <Route path="createEvent" element={<EventForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <footer>
          This app was coded by{" "}
          <a
            href="https://github.com/ChristophBleyer"
            target="_blank"
            rel="noreferrer"
          >
            Christoph
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Franzi1005"
            target="_blank"
            rel="noreferrer"
          >
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
      </Router>
    </div>
  );
}

export default App;
