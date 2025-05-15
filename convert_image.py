from PIL import Image
import pillow_heif

# Convert HEIC to JPG
input_path = r"C:\Users\egold\PycharmProjects\seba\static\seba_bio.heic"
output_path = r"C:\Users\egold\PycharmProjects\seba\static\seba_bio.jpg"

# Convert HEIC to JPG
heif_file = pillow_heif.read_heif(input_path)
image = Image.frombytes(
    heif_file.mode, 
    heif_file.size, 
    heif_file.data,
    "raw",
)
image.save(output_path, "JPEG")
print(f"Image converted and saved to {output_path}") 