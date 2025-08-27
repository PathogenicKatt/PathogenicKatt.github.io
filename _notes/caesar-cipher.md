---
layout: note
title: "Caesar Cipher"
description: "One of the simplest and most widely known encryption technique."
tags: [cryptoGRAPHY, encryption, encoding, decoding, decryption, shift cipher]
date: 2025-06-26
---

# Caesar Cipher
- To understand this, i need a broader idea. That is, there two classical encryption techniques. namely, **Substitution** and **Transposition**. 
- A **Substitution cipher** is an encryption whereby, the algorithm *replaces each letter in the plaintext with another letter*, that's all!. Below, are one of the examples of Substitution Cipher:
    - **Caesar Cipher**.
    - One-Time Pad.
    - Hill Cipher.
- A **Transposition** is an encryption whereby, the algorithm *Rearranges the letters of the plaintext without changing them(shuffles)*, below are the examples:
    - Rail Fence *"Common in CTF Challenges"*.
    - Row Column Transposition.

## Caesar Cipher in details:
- An encryption technique that is a type of **substitution cipher** in which each letter in the **plaintext** is replaced by a letter some fixed number of posisitions down the **alphabet**, basically *"letters are replaced by other letters"*. You would also, normally find it in CTF challenges, it is very common along with the **ROT13**(literally the same as a *Caesar shift of thirteen*).

## Algorithm:
- The transformation can be represented by aligning two alphabets; and the cipher is when the plain alphabet is rotated left or right by some number of positions. The Caesar Cipher, by default is set by *three shifts to the left for encryption* and *three shifts to the right for decryption*.

- Take for example(encryption -> Using three shifts to the left ) *"reference"*:
![Caesar-Cipher-example](/assets/img/Caesar-Cipher(1).PNG){: .writeup-image }
    - The above example, explains it all.
- Here is another typical example(of encryption) in applicationL"
![Caesar-Cipher-example-2](/assets/img/Caesar-Cipher(2).PNG){: .writeup-image }
    - Using the 1st example as reference, for instance, the letter 'T' from the plain-text is replaced by 'Q' using the "Caesar shift three".
    - Below, is a python script i created to test(Detailed explanation further down): <br>
```python
def enc(plain_position_n, n_of_shifts):
    position = (plain_position_n + n_of_shifts) % 26
    return position
#--
if __name__ == "__main__":
    shift = int(input("Enter the shift value: "))
    pos = enc(19, shift)
    print(f"Position after shifting: {pos}")
```

## Encryption/Decryption Mathematically:
- The above python code, looks much simpler because i used the formula. It is basically transforming the letter to numbers.
- Using the Modular Arithmetic(%).

### Encryption:
- The encryption of the letter `x` through a shift number of `n` can be described mathematically as follows: <br>
![Caesar-Cipher-encryption-formula](/assets/img/Caesar-Cipher(3).PNG){: .writeup-image }
- In python, by the above code:
```python
def enc(x, n):
    enc_position = (x + n) % 26
    return enc_position
```

### Decryption
- Decryption is perfomed similarly: <br>
![Caesar-Cipher-encryption-formula](/assets/img/Caesar-Cipher(4).PNG){: .writeup-image }
- python code:
```python
def dec(x, n):
    dec_position = (x - n) % 26
    return dec_position
```
## Full python code
```python
def caesar_cipher(text, shift, mode='encrypt'):
    result = ""
    for char in text:
        if char.isalpha():  # Only process letters
            # Convert letter to 0-25 (A=0, B=1, etc.)
            x = ord(char.upper()) - ord('A')
            # Apply encryption/decryption formula
            if mode == 'encrypt':
                shifted = (x + shift) % 26
            elif mode == 'decrypt':
                shifted = (x - shift) % 26
            # Convert back to a letter
            new_char = chr(shifted + ord('A'))
            # Preserve original case
            result += new_char.lower() if char.islower() else new_char
        else:
            result += char  # Leave non-letters unchanged
    return result
#---
if __name__ == "__main__":
    text = input("Enter the text: ")
    shift = int(input("Enter the shift value: "))
    result = caesar_cipher(text, shift, mode='encrypt')
    print("Encrypted text:", result)
    #result = caesar_cipher(text, shift, mode='decrypt')
    #print("Decrypted text:", result)
```

