---
layout: writeup
title: "PicoCTF Challenge: EvenRsaCanBeBroken"
description: "This service provides you an encrypted flag. Can you decrypt it with just N & e?"
difficulty: easy
event: "PicoCTF"
tags: [crypto, asymmetric, rsa]
date: 2025-08-02
---

## Challenge Overview:
- The following was the description for the challenge:
    ![stepic challenge](/assets/img/evenrsacanbebroken.PNG){: .writeup-image }
## Intro
- RSA, which is a public-key cryptography, is an asymmetric encryption that relies on the difficulty of factorizing the modulus N.
- Modulus N is the product of two large prime numbers, p and q.
- so because of limited computing power in the old days, computers were slow, making factoring large numbers (n = p * q) computationally infeasible.
    - Hence, it made sense for it be regarded as a strong encryption.
- But, the modern technology and considering "quantum computing" in the future makes these encryption methods easy to break.

## Approach
- **First We Have To Understand How RSA works:**
1. The plaintext(**m**) is converted into an **integer**
2. Encryption is performed using the public exponent(**e**)-regarded as public key, and Modulus **N**: **Ciphertext(C) = m^e * mod N)**
3. The ciphertext **C** that is generated is sent to the receiver.
4. Decryption uses a private key (**d**) and Modulus(**N**): **Plaintext = C^d * mod N**
