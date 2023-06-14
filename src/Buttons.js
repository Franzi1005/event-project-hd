import React from "react";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <a>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/createEvent")}
          >
            Create an event
          </button>
        </a>
      </div>
      <div>
        <a>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/availableEvents")}
          >
            Check out what's on
          </button>
        </a>
      </div>
      <div>
        <a
          href="https://www.buymeacoffee.com/chrisandfranzi"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-primary">
            Buy us coffee!
          </button>
        </a>
      </div>
    </div>
  );
}
