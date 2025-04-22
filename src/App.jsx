// Import React and components
import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import MoodImage from './components/MoodImage';
import RefreshButton from './components/RefreshButton';
import './App.css';

// The URLS for the Mood images
const moodImages = {
  Sad: [ 
    "https://i.etsystatic.com/11101160/r/il/b84042/1199223676/il_fullxfull.1199223676_shmg.jpg",
    "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t500x500.jpg"
  ],
  Stressed: [
    "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
    "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA="
  ],
  Bored: [
    "https://www.cuteness.com/cuteness/mean-dog-sits-door/1281b8e98bb74f52842633deab608e7b.jpg",
    "https://www.shutterstock.com/image-photo/sleeping-red-panda-ailurus-fulgens-600nw-619884575.jpg"
  ],
  Tired: [
    "https://i.pinimg.com/736x/10/25/11/10251194778277b395e6f0718f2328ea.jpg",
    "https://m.media-amazon.com/images/I/61H0UppLY-L._UF894,1000_QL80_.jpg"
  ]
};

function App() {
  const [mood, setMood] = useState('Sad');
    // this stores the selected mood (automatic)

 
  const [imageIndex, setImageIndex] = useState(0);
   // Track  image 

 
  const handleMoodChange = (newMood) => {
    setMood(newMood);
    setImageIndex(0);
  };  // When someone changes the mood it resets image

  
  const refreshImage = () => {
    const newIndex = Math.floor(Math.random() * moodImages[mood].length);
    setImageIndex(newIndex);
  }; // Pick a new image 

  return (
    <div className="App">
      <h1> Mood Lifter by Sophia</h1>

      {/* Tagline */}
      <p style={{ fontStyle: 'italic', color: '#777' }}>
        Pick a mood and let me cheer you up &lt;3
      </p>

      {/* Dropdown that makes you pick a mood */}
      <MoodSelector mood={mood} onMoodChange={handleMoodChange} />

      {/* Show the image for mood that was selected*/}
      <MoodImage imageUrl={moodImages[mood][imageIndex]} />

      {/* this Button refreshes image */}
      <RefreshButton onClick={refreshImage} />
    </div>
  );
}

export default App;
