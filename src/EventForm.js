import React from "react";

export default function EventForm() {
  return (
    <div className="EventForm">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Event Name
          </label>
          <input type="text" class="form-control" />
          <div id="emailHelp" class="form-text">
            e.g. Meet for drinks, Beach Volleyball, daytrip to the outdoors
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Event Location</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Where and when?</label>
          <input type="date" class="form-control" />
          <input type="time" class="form-control" />
        </div>
        <div class="mb-3 form-check"></div>
        <button type="submit" class="btn btn-primary">
          Create Event
        </button>
      </form>
    </div>
  );
}
