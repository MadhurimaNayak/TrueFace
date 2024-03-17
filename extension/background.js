/*bb
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "startDetection") {
    // Your code to start the deepfake detection goes here
    console.log("Deepfake detection started");
  }
});*/

/*gemini
// This file handles communication between content script and performs deepfake detection

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeVideo') {
    // Send video data to deepfake detection model (using ONNX)
    const isDeepfake = analyzeVideoData(message.data); // Replace with actual detection logic
    sendResponse({ isDeepfake });
  }
});

function analyzeVideoData(data) {
  // This function utilizes the ONNX model for deepfake detection
  // Replace with your implementation using the ONNX runtime and model
  console.log('Deepfake analysis not implemented yet. Data:', data);
  return false; // Placeholder until actual detection is implemented
}*/

/*In your background script (background.js), you can send a message to the 
popup script after receiving the deepfake analysis result:
function analyzeVideoData(data) {
  // ... Your deepfake detection logic using the ONNX model
  const isDeepfake = // ... analysis result

  chrome.runtime.sendMessage({ action: 'analyzeResult', isDeepfake });
}*/
chrome.runtime.onInstalled.addListener(function() {
  if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
  } else {
      window.open(chrome.runtime.getURL('options/options.html'));
  }
});