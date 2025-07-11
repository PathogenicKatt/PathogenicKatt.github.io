---
layout: note
title: "Image Encryption"
description: "Locking an image is just fascinating"
tags: [pixels, encryption, image, cryptography, decryption]
date: 2025-06-27
---

# Image Encryption 
- Image encryption is the most fascinating area in cryptography, simply because i never thought images could be manipulated like this. Same with, Image steganography, like the fact that you hide contents in an image without people realizing is really fascinating. This is achieved through pixel manipulation. Let's deep dive and see what Image encryption has for us.
- **What exactly are pixels?**
    - They are known as *picture elements*, they basically make up the whole picture.
    - But in formal: A pixel is the smallest unit of digital image, a tiny square or dot that represent as single point of color.
    - Each pixel comprises a subpixel that emits a red, green and blue (RGB) color.
    - **Resolution**:
        - Have you ever noticed when you at the meta-data of an image, that there is something like this: "1920 x 1080".
        - That refers to the number of pixels.
        - generally the more pixels, the clearer and sharper the image.
        - Another example is when you watch a youtube video, and where you select the quality of the video like, **480p**, **720p** HD, **1440p** etc

## XOR Operations
- *"The task talks about either applying the operation of swapping pixel values or applying mathematical operations"*
- **Maths simplifies a lot of problems**:
    - Hence,i have chosen to use mathematical operations like XOR.
    - The approach is to apply XOR with a key to pixel values.
    - This will help us encrypt and decrypt the image.
    - But first, allow me to introduce the basics of XOR(Exclusive OR)
- **XOR Basics**:
    - `0 XOR 0 = 0`
    - `0 XOR 1 = 1`
    - `1 XOR 0 = 1`
    - `1 XOR 1 = 0`
    - Hence the property is: if `A XOR B = C` then `C XOR B = A`. As you can see that the fact that it is reversible, it makes it easy for us to use for both encryption and decryption.
- Because each pixel has RGB values (0-255), we can XOR these values with a specific key.
- For example:
    ```text
    pixel: R = 120 , G = 45 , B = 210
    key:   R = 83  , G = 197, B = 54

    Encrypted:
    R_enc = 120 XOR 83 = 43
    G_enc = 45  XOR 197= 232
    B_enc = 210 XOR 54 = 228

    Decrypted:
    R_dec = 43 XOR 83 = 120
    G_dec =232 XOR 197= 45
    B_dec =210 XOR 54 = 210
    ```
## Basic python script
- Before we start we have to install the library called, **Pillow**.
    ```bash
    pip install Pillow
    ```
- **Pillow** is a **Python Imaging Library(PIL)** fork that adds image processing capabilities to the Python interpreter.
    - Basically, it is useful for manipulating an image.
```python
from PIL import Image
if __name__=="__main__":
    img = Image.open(r"C:\Users\CCM DELL LAPTOP\Desktop\MyWebsite\PathogenicKatt.github.io\assets\img\baobab_tree.jpg")
    pixels = img.load() # creates a pixel access object
    key = 33
    for k in range(img.width):
        for j in range(img.height):
            r,g,b = pixels[k, j][:3] # This helps work with RGB only
            pixels[k, j] = (r^key, g^key, b^key)
    img.save(r"C:\Users\CCM DELL LAPTOP\Desktop\MyWebsite\PathogenicKatt.github.io\assets\img\baobab_tree.jpg")
```


## Full python code:

```python
from PIL import Image
#--
def show_menu():
    print("\nImage Encryption Tool")
    print("1. Encrypt using XOR")
    print("2. Decrypt using XOR")
    print("3. Exit")
    return input("Enter your choice (1-3): ")
#--
def xor_operation(image_path, key, output_path):
    """Perform XOR encryption/decryption"""
    img = Image.open(image_path)
    pixels = img.load() # creates a pixel access object
    for k in range(img.width):
        for j in range(img.height):
            r,g,b = pixels[k, j][:3] # This helps work with RGB only
            pixels[k, j] = (r^key, g^key, b^key)
    img.save(output_path)
    print(f"Operation completed. Result saved to {output_path}")
    #--
def main():
    while True:
        choice = show_menu()
        #--
        if choice == '1':  # XOR Encrypt
            image_path = input("Enter image path to encrypt: ")
            key = int(input("Enter XOR key (0-255): "))
            output_path = input("Enter output file path: ")
            xor_operation(image_path, key, output_path)
        #--
        elif choice == '2':  # XOR Decrypt
            image_path = input("Enter image path to decrypt: ")
            key = int(input("Enter XOR key (0-255): "))
            output_path = input("Enter output file path: ")
            xor_operation(image_path, key, output_path)
        #--   
        elif choice == '3':
            print("Exiting program...")
            break
        #--   
        else:
            print("Invalid choice. Please try again.")
#--
if __name__ == "__main__":
    main()
```


