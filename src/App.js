import "./App.css";
import Mainpage from "./Mainpage";
import "./heidelberg.jpg";
import AvailableEvents from "./Pages/AvailableEvents";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUpEvent from "./Pages/SignUpEvent";
import ErrorPage from "./Pages/ErrorPage";
import EventForm from "./Pages/EventForm";
import Confirmation from "./Pages/Confirmation";
import ConfirmationSignUp from "./Pages/ConfirmationSignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/availableEvents">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/createEvent">
                    Create Event
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/availableEvents" element={<AvailableEvents />} />
          <Route path="/signUp" element={<SignUpEvent />} />
          <Route path="createEvent" element={<EventForm />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/ConfirmationSignUp/" element={<ConfirmationSignUp />} />
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
