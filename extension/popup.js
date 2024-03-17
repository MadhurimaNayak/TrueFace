/*/ Function to initiate the video recording and deepfake detection
const initiateVideoProcessing = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Execute a content script to access the YouTube video player and perform video recording
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch (error) {
    console.error(error);
  }
};

// Event listener for the button to start the video recording and deepfake detection
document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    initiateVideoProcessing();
  });
});*/

// Function to display error message in the popup
const displayErrorMessage = () => {
  const resultElement = document.getElementById('result');
  resultElement.textContent = 'Please open this extension on YouTube to initiate video processing.';
};

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'notOnYouTube') {
    displayErrorMessage();
  }
});

// Function to initiate the video recording and deepfake detection
const initiateVideoProcessing = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Execute a content script to access the YouTube video player and perform video recording
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch (error) {
    //console.error(error);
    document.getElementById('result').innerHTML=`Please Open this extension on a YouTube page`;
    document.getElementById('result').style.borderStyle="outset";
    document.getElementById('result').style.borderRadius="10px";
    document.getElementById('result').style.margin="0px 10px 10px 10px";
    document.getElementById('result').style.textAlign="center";
    document.getElementById('result').style.justifyContent="center";
  }
};

// Event listener for the button to start the video recording and deepfake detection
document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    initiateVideoProcessing();
  });
});

const deep = document.getElementById('image');
deep.onclick = function() {
  // Create an iframe element
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.fakeimagedetector.com/'; // Set the URL of the website to be displayed
  iframe.style.width = '500px'; // Set the desired width
  iframe.style.height = '550px'; // Set the desired height
  iframe.style.border = 'none'; // Remove the border

  // Clear the existing content in the popup
  document.body.innerHTML = '';

  // Append the iframe to the popup
  document.body.appendChild(iframe);
};

const deeps = document.getElementById('news');
deeps.onclick = function() {
  // Create an iframe element
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.zerogpt.com/'; // Set the URL of the website to be displayed
  iframe.style.width = '500px'; // Set the desired width
  iframe.style.height = '550px'; // Set the desired height
  iframe.style.border = 'none'; // Remove the border

  // Clear the existing content in the popup
  document.body.innerHTML = '';

  // Append the iframe to the popup
  document.body.appendChild(iframe);
};