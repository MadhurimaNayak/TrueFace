import torch

from model import Model

def main():
    pytorch_model=Model(num_classes=2)
    pytorch_model.load_state_dict(torch.load('weights.pt', map_location=torch.device('cpu')))
    pytorch_model.eval()
    batch_size = 1 
    seq_length = 100 
    im_size = 112  
    dummy_input = torch.zeros(batch_size, seq_length, 3, im_size, im_size)
    torch.onnx.export(pytorch_model, dummy_input, 'onnx_model.onnx', opset_version=17)


if __name__ == '__main__':
  main()
