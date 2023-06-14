import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

export default function Event() {
  let navigate = useNavigate();
  return (
    <div className="Event">
      <h1>Drinks @Friedrich</h1>
      <p>Join us for some drinks at Friedrich bar!</p>

      <h5>Date: 12.06.2023</h5>
      <h5>Time: 08:00 pm</h5>
      <button className="btn btn-primary" onClick={() => navigate("/signUp")}>
        Attend
      </button>
    </div>
  );
}
