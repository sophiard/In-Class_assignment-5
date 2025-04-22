// Button to change image

import React from "react";

function RefreshButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ marginTop: "10px", padding: "10px" }}>
      Show Me Another 
    </button>
  );
}

export default RefreshButton;