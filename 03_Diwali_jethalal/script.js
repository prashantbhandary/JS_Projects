// Reference to the buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Create a new Audio object with your audio file
const audio = new Audio('jethalal.mp3'); // Replace with the path to your MP3 file

let intervalId; // To hold the interval ID for changing colors

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Start button event listener
startButton.addEventListener('click', () => {
    // Play the audio
    audio.play();
    // Change the background color every 500ms
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 100);
});

// Stop button event listener
stopButton.addEventListener('click', () => {
    // Pause the audio
    audio.pause();
    audio.currentTime = 0; // Reset audio to the start
    // Stop changing colors

    clearInterval(intervalId);
    // Reset background color to white
    
});
