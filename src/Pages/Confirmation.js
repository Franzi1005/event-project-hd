import React from "react";

export default function Confirmation(props) {
  return `Great, you're event ${props.data.eventName} at ${props.data.eventLocation} has been created. Date: ${props.data.eventDate}, Time: ${props.data.eventTime}`;
}
