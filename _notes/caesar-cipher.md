---
layout: note
title: "Cryptography: Caesar Cipher 🔑"
description: "One of the simplest and most widely known encryption technique."
tags: [crypto, encryption, encoding, decoding, decryption, shift cipher]
date: 2025-06-26
---

# Caesar Cipher ✨
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

- Take for example(encryption -> Using three shifts to the left ):
![stepic command](/assets/img/Caesar-Cipher(1).PNG){: .writeup-image }
