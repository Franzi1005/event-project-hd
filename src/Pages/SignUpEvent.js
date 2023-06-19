import React from "react";
import "./SignUpForm.css";

export default function SignUpEvent() {
  return (
    <div className="SignUpEvent">
      <form>
        <div class="mb-3">
          <label className="form-label">What is your Name?</label>
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            What is your e-mail address?
          </label>
          <input type="email" class="form-control" />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign-Up
        </button>
      </form>
    </div>
  );
}
