import React from "react";
import Event from "./Event";
import "./AvailableEvents.css";

export default function AvailableEvents() {
  return (
    <div className="AvailableEvents">
      <h1>Check out what's already on!</h1>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
}
