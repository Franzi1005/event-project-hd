import React from "react";

export default function Buttons() {
  return (
    <div>
      <div>
        <a>
          <button type="button" className="btn btn-primary">
            Create an event
          </button>
        </a>
      </div>
      <div>
        <a>
          <button type="button" className="btn btn-primary">
            Sign up for an Event
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
