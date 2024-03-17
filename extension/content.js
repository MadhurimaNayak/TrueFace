const onnx = require('./onnx.min.js');
const modelFile = './model_latest.onnx';
let session;


onnx.loadModel(modelFile).then((loadedSession) => {
  session = loadedSession;
});

// Function to process the captured frames for deepfake detection using the ONNX model
const detectDeepfake = (frames) => {
  // Process each frame using the ONNX model
  frames.forEach((frame) => {
    // Perform deepfake detection using the ONNX model
    const inputTensor = new onnx.Tensor(frame.data, 'float32', [1, frame.height, frame.width, 3]);
    const outputMap = session.run([inputTensor]);
    const outputData = outputMap.get('output').data;
    
    // Add your logic to interpret the outputData for deepfake detection
    // For example, check if the output indicates a deepfake or authentic video
    // Assuming outputData is an array of probabilities where higher values indicate a higher likelihood of a deepfake

const threshold = 0.5; // Adjust this threshold based on your model and requirements

const isDeepfake = outputData.some(probability => probability > threshold);

if (isDeepfake) {
    console.log('This video frame is classified as a deepfake.');
    // Perform actions for deepfake detection
} else {
    console.log('This video frame is classified as authentic.');
    // Perform actions for authentic video
}

  });
};

// Update processVideoForDeepfake function to use detectDeepfake
const processVideoForDeepfake = (videoUrl) => {
  const videoElement = document.createElement('video');
  videoElement.src = videoUrl;
  videoElement.onloadedmetadata = () => {
    // Capture frames from the recorded video
    const frames = captureFrames(videoElement);
    // Process the captured frames for deepfake detection using the ONNX model
    detectDeepfake(frames);
    // Display the result to the user
    displayResult