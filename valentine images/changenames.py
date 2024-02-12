import os

# Get a list of image files in the current directory
image_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

print(image_files)