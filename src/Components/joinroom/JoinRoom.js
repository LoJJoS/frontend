import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

function JoinRoom() {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Room # </InputGroup.Text>
        <FormControl placeholder="Username" />
      </InputGroup>
    </div>
  );
}

export default JoinRoom;
