---
layout: note
title: "Stepic "
description: "Isolated information, regarding image steganography"
tags: [stepic, forensics, steganography, png, image]
date: 2025-05-30
---

## Forensics: Image Steganography
This is another part of image steganography, even with my little exprience, i have always wondered how come there is no image steganography for PNG's. To be more precise, image steganography mostly "*involves hidding of information in JPEG's*", and also most tools work only on jpg's such as `steghide -extract -sf image.jpg`, literally the `steghide` command has a preference, or is configured to work only on jpg's.

## Deep dive
Turns out after years of my cybersecurity journey, i finally found about image steganography for PNG's. Now, there is this, specific tool that actually allows for that implemention, and that is `stepic`. Stepic, is a tool used for steganography.
<br>

The stepic tool, uses a different approach to `steghide`. Stepic hides data inside an image, by slightly modifying the colours of the pixels. These modification are generaaly imperceptible to humans, but are machine detectable. For the highlight, Stepic does not work for JPEG images.
<br>

## Usage
- There is a module avalaible, in python3 for stepic. Meaning you can use it in python:
    ```python
    import stepic

    # Encode data into an image
    encoded_image = stepic.encode(image_path, data)

    # Decode data from an image
    decoded_data = stepic.decode(encoded_image_path)
    ```
- Or my preference, use it on the command line:
    - To decode the image(png):
    ```bash
    stepic -d -i image.png
    ```
    -  -d: decode
    -  -i: file
    - but, for simplicity, you can always just type the name `stepic`, and hit that enter!<br>
    ![stepic command](/assets/img/stepic-command.PNG){: .writeup-image }


## Installation
- To install stepic is easy:
    ```bash
    pip install stepic
    ```
