// Creates dropdown to pick mood

import React from "react";

function MoodSelector({ mood, onMoodChange }) {
  return (
    <div>
      {/* Label for the dropdown */}
      <label htmlFor="mood">Mood: </label>

      {/* Dropdown menu */}
      <select 
        id="mood" 
        value={mood} // current selected mood
        onChange={(e) => onMoodChange(e.target.value)} 
        // update mood on change
      >
        {/* Mood options */}
        <option value="Sad">Sad</option>
        <option value="Stressed">Stressed</option>
        <option value="Bored">Bored</option>
        <option value="Tired">Tired</option>
      </select>
    </div>
  );
}

export default MoodSelector;
