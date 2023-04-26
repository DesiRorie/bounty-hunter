import React, { useState } from "react";

const Start = (props) => {
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart(true);
    props.onStart(true);
  };
  return (
    <div className="startDiv animate-text">
      <h2 onClick={handleClick}>Click To Play</h2>
    </div>
  );
};

export default Start;
