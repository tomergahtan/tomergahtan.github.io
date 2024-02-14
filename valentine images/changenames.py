import os

# Get a list of image files in the current directory
image_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]
print(image_files)

'''import qrcode
from PIL import Image

# Data to be encoded
data = 'tomergahtan.github.io/menu/menu'

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=40,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR Code instance
img = qr.make_image(fill_color="black", back_color="pink")

# Save it somewhere, change the path as needed


# Display the image
img.show()'''

