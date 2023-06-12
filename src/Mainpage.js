import React from "react";
import "./Mainpage.css";
import Buttons from "./Buttons";
import EventForm from "./EventForm";
import AvailableEvents from "./AvailableEvents";

export default function Mainpage() {
  return (
    <div className="Mainpage">
      <div className="content-mainpage">
        <h1>What up Heidelberg?</h1>
        <p>
          Christoph long had the idea to start a community where people simply
          can meet up...Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Buttons />
        <EventForm />
        <AvailableEvents />
      </div>
    </div>
  );
}
