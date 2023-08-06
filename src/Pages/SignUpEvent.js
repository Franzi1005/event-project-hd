import React, { useState } from "react";
import "./SignUpForm.css";
import { useNavigate, Link } from "react-router-dom";

export default function SignUpEvent() {
  let navigate = useNavigate;
  const [participantData, setPartcipantData] = useState({
    participant: "",
    email: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPartcipantData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function alertMessage() {
    alert(
      `Thanks, ${participantData.participant} we look forward to seeing you there. We have sent a confirmation e-mail to ${participantData.email}`
    );
  }

  return (
    <div className="SignUpEvent">
      <form>
        <div class="mb-3">
          <label className="form-label">What is your Name?</label>
          <input
            type="text"
            class="form-control"
            name="participant"
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            What is your e-mail address?
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={handleChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={alertMessage}
        >
          Sign-Up
        </button>
      </form>
    </div>
  );
}
