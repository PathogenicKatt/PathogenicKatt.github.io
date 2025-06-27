from PIL import Image

if __name__ ==" __main__":
    img = Image.open("assets/img/img_encryption/baobab_tree.jpg")
    pixels = img.load() # creates a pixel access object
    key = 33
    for k in range(img.width):
        for j in range(img.height):
            r,g,b = pixels[k, j][:3] # This helps work with RGB only
            pixels[k, j] = (r^key, g^key, b^key)
    img.save("assets/img/img_encryption/enc_baobab_tree.jpg")