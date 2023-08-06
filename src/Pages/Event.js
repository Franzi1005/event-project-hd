import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

export default function Event(props) {
  let navigate = useNavigate();
  return (
    <div className="Event">
      <h1>{props.eventData.eventName}</h1>
      <p>{props.eventData.eventDescription}</p>
      <h5>Date: {props.eventData.eventDate}</h5>
      <h5>Time: {props.eventData.eventTime}</h5>
      <h5>Location: {props.eventData.eventLocation}</h5>
      <button className="btn btn-primary" onClick={() => navigate("/signUp")}>
        Attend
      </button>
    </div>
  );
}
