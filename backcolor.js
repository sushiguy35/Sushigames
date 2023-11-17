const redSlider = document.getElementById("red");
const blueSlider = document.getElementById("blue");
const greenSlider = document.getElementById("green");

// Function to update the background color and store slider values in localStorage
function updateBackgroundColor() {
  const red = redSlider.value;
  const blue = blueSlider.value;
  const green = greenSlider.value;
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
  // Set the background color
  document.body.style.backgroundColor = backgroundColor;
  
  // Store the slider values in localStorage
  localStorage.setItem('redSliderValue', red);
  localStorage.setItem('blueSliderValue', blue);
  localStorage.setItem('greenSliderValue', green);
}

// Function to retrieve stored slider values from localStorage
function retrieveSliderValues() {
  const red = localStorage.getItem('redSliderValue') || 70;
  const blue = localStorage.getItem('blueSliderValue') || 160;
  const green = localStorage.getItem('greenSliderValue') || 100;
  
  // Set the slider values based on stored values
  redSlider.value = red;
  blueSlider.value = blue;
  greenSlider.value = green;
  
  // Update the background color
  updateBackgroundColor();
}

// Add event listeners
redSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);

// Retrieve and set stored slider values when the page loads
retrieveSliderValues();

