#with model_latest.onnx
import onnxruntime

# Load the ONNX model
onnx_model_path = 'onnx_model.onnx'
session = onnxruntime.InferenceSession(onnx_model_path)

# Get input and output names
input_name = session.get_inputs()[0].name
output_name = session.get_outputs()[0].name

# Prepare input data (replace this with your actual input data)
import numpy as np
input_data = np.random.rand(1, 100, 3, 112, 112).astype(np.float32)  # Example input data

# Run inference
output = session.run([output_name], {input_name: input_data})

# Print the output
print(output)
