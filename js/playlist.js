// Define the songs array
let songs = [
  {
    name: "Flashing Lights",
    artist: "Kanye West",
    img: "img5",
    audio: "music5"
  },
  {
    name: "Hit Em Up",
    artist: "2Pac",
    img: "img2",
    audio: "music2"
  },
  {
    name: "Fuck Wit Dre Day",
    artist: "Dr Dre",
    img: "img1",
    audio: "music1"
  },
  {
    name: "No More Parties In LA",
    artist: "Kanye West & Kendrick Lamar",
    img: "img3",
    audio: "music3"
  }
];

// Function to store user input
function storeInput() {
  // Get the input elements
  const inputName = document.getElementById("inputName");
  const inputArtist = document.getElementById("inputArtist");

  // Get the values of the input elements
  const valueName = inputName.value;
  const valueArtist = inputArtist.value;

  // Create a new object for the user input
  const newSong = {
    name: valueName,
    artist: valueArtist,
    img: "", // You might want to add logic to get the image and audio URLs
    audio: ""
  };

  // Add the new song object to the songs array
  songs.push(newSong);

  // Print the updated array to the console
  console.log(songs);
}
