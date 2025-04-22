// Show image for current mood

import React from "react";

function MoodImage({ imageUrl }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <img 
        src={imageUrl} 
        alt="Mood" 
        style={{ width: "300px", borderRadius: "10px" }} 
      />
    </div>
  );
}

export default MoodImage;