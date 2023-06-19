import React, { useState } from "react";
import "./EventForm.css";
import Confirmation from "./Confirmation";

export default function EventForm() {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventLocation: "",
    eventDate: "",
    evenTime: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setEventData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setConfirmed(true);
    console.log(eventData);
  }
  if (confirmed === false) {
    return (
      <div className="EventForm">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              class="form-control"
              name="eventName"
              onChange={handleChange}
            />
            <div id="emailHelp" class="form-text">
              e.g. Meet for drinks, Beach Volleyball, daytrip to the outdoors
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Event Location</label>
            <input
              type="text"
              className="form-control"
              name="eventLocation"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Where and when?</label>
            <input
              type="date"
              class="form-control"
              name="eventDate"
              onChange={handleChange}
            />
            <input
              type="time"
              class="form-control"
              name="eventTime"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3 form-check"></div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Create Event
          </button>
        </form>
      </div>
    );
  } else {
    return <Confirmation data={eventData} />;
  }
}
