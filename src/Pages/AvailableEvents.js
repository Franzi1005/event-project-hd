import React from "react";
import Event from "./Event";
import "./AvailableEvents.css";

export default function AvailableEvents() {
  return (
    <div className="AvailableEvents">
      <h1>Check out what's already on!</h1>
      <Event
        eventData={{
          eventName: "Drinks @Friedrich",
          eventLocation: "Friedrich",
          eventDate: "12.06.2023",
          eventTime: "08:00",
          eventDescription: "Join s for some drinks at Friedrich bar",
        }}
      />
      <Event
        eventData={{
          eventName: "Tischtennis",
          eventLocation: "Neckarwiese",
          eventDate: "12.07.2023",
          eventTime: "18:00",
          eventDescription: "Let's play Tischtennis",
        }}
      />
      <Event
        eventData={{
          eventName: "Drinks @Friedrich",
          eventLocation: "Friedrich",
          eventDate: "12.06.2023",
          eventTime: "08:00",
          eventDescription: "Join s for some drinks at Friedrich bar",
        }}
      />
    </div>
  );
}
