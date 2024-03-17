NOTE: Google Colab is used for running the codes.

DATASET
Datasets used : https://www.kaggle.com/c/deepfake-detection-challenge/data

PREPROCESSING
Loading dataset -> Extracting frames from videos -> Cropping faces from each frame -> saving cropped face videos in another directory

MODEL
Loading pre-processed videos -> loading labels from csv file -> Creating pytorch model using transfer learning with RestNext50 and LSTM -> 
Splitting data into train and test -> Training and Testing the model

NOTE: ResNet50 is used as it is effective at capturing spatial features for analyzing the content of images, such as object detection.
NOTE: LSTM is a type of recurrent neural network (RNN) that is used here for modeling sequential data.

PREDICTION
Loading the saved model -> Initializing the model with trained wights -> Predicting output
