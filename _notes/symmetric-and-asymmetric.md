---
layout: note
title: "Symmetric & Asymmetric Encryption"
description: "Understanding symmetric and asymmetric is crucial for cryptography challenges and real world security"
tags: [rsa, aes, crypto, des, encryption]
date: 2025-07-30
---

# Symmetric & Asymmetric Encryption
## Symmetric Encryption (Private-Key Cryptography)
- Also known as an **conventional encryption** and a **single-key encryption**.
- Is a form of **cryptosystem** in which **encryption** and **decryption** are performed using the **same key** or also as **private-key encryption**.
- Sender and receiver must have obtained copies of the secret key in a secure fashion and must keep the key secure, hence this justifies the name **private key encryption**.
- With the use of symmetric encryption, the **principal security problem** is maintaining the secrecy of the key.
- **Some Terms**:
    - **Plain-Text** -> **Original Message**
    - **Cipher-Text** -> **Coded message**
    - The **process** of converting the **plain-text** to **cipher-text** -> **Encryption**/**Enciphering**.
    - **Restoring** the **plain-text** from the **cipher-text** -> **Decrption**/**Deciphering**.

### How does Symmetric Encryption Work?
1. **Key Generation**
- So the first step is to generate the **the private-key**, this is generated through two methods; that is the *Password-based key Derivation(PBKD)* and *hardware random number generators*
2. **Encryption**
- The plain-text is transformed to cipher-text through encryption-algorithm.
3. **Transfer of Cipher Text**
- Here the coded-message, is transfered through the internet, and even if it is intercepted, the message will be un-readable.
4. **Decryption**
- In the final step, the recipient uses the same secret key and a reverse encryption algorithm to convert the cipher text back into the original message (plain text).

### Types of Symmetric Encryption Algorithms
-
<table>
  <thead>
    <tr>
      <th>Algorithm</th>
      <th>Key Size</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AES(Advanced Encryption Standard)</td>
      <td>128-bits, 192-bits and 256-bits</td>
      <td>Most widely used in CTF: ECB and CBC</td>
    </tr>
    <tr>
      <td>DES(Data Encryption Standard)</td>
      <td>56-bits</td>
      <td>Broken, and still appears in legacy challenges</td>
    </tr>
    <tr>
      <td>Triple DES(3DES)</td>
      <td>168-bits</td>
      <td>DES applied 3 times, but still slow and less efficient</td>
    </tr>
    <tr>
      <td>Blowfish</td>
      <td>variable(34-448 bits)</td>
      <td>Older but still seen in some ctf</td>
    </tr>
    <tr>
      <td>Twofish</td>
      <td>128-bit block size. Key sizes up to 256-bits</td>
      <td></td>
    </tr>
    <tr>
      <td>RC4</td>
      <td>variable</td>
      <td>stream cipher, often broken in ctf challenges</td>
    </tr>
  </tbody>
</table>

### Modes of Operation
- **ECB(Electronic Codebook)** -> Insecure, reveals patterns (identical plaintext -> identical ciphertext), identical plaintext blocks produce identical ciphertext blocks, making it easier for attackers to infer information..
```bash
echo "katleho" | openssl enc -aes-128-ecb -nosalt -k passwd 2>/null/dev
```
    - `"katleho"` is our input
    - `-k`: stands for key; hence our key is passwd
    - `2>/null/dev` silences the errors.
<br>

![aes ecb](/assets/img/aes_ecb.png)

- **CBC(Cipher Block Chaining)** -> Uses an IV(Initialization Vector), vulnerable to **padding oracle attacks**.
```python
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
key = b'16_or_32_byte_key...'  # Must be 16, 24, or 32 bytes
data = b"secret message"
# Encrypt
cipher = AES.new(key, AES.MODE_CBC)
ct = cipher.encrypt(pad(data, AES.block_size))
iv = cipher.iv  # Needed for decryption
# Decrypt
cipher = AES.new(key, AES.MODE_CBC, iv)
pt = unpad(cipher.decrypt(ct), AES.block_size)
print(pt)  # b'secret message'
```
- **CTR(Counter Mode)** -> Turns block cipher into stream cipher, no padding needed.
- **GCM(Galois/Counter Mode)** -> Secure, provides authentication.

## Asymmetric Encryption (Public-Key Cryptography)
- Uses different keys, **public key** for **encryption** and **private-key** to **decryption**.

### Types of Symmetric Encryption Algorithms
<table>
  <thead>
    <tr>
      <th>Algorithm</th>
      <th>Based On</th>
      <th>CTF relevance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RSA(Rivest–Shamir–Adleman)</td>
      <td>Integer Factorization</td>
      <td>Most Common in CTF(small primes and faulty keys)</td>
    </tr>
    <tr>
      <td>Diffie-Hellman(DH)</td>
      <td>Discrete Algorithm</td>
      <td>Key Exchange Challenges</td>
    </tr>
    <tr>
      <td>Elleptic Curve Cryptography(ECC)</td>
      <td>Elleptic Curves</td>
      <td>Less common but growing</td>
    </tr>
  </tbody>
</table>

### How RSA Works
1. **Choose two large prime numbers p and q**
2. **Compute modulus(n) which is (p * q)**
3. **Compute phi(n) = (p-1)*(q-1)**
4. **Choose e (public exponent, often 65537)**
5. **Compute d(private exponent) = (e^-1) * mod(phi(n))**
6. **Encrypt:** `ciphertext = plaintext^e * mod(n)`
7. **Decrypt:** `plaintext = ciphertext^d * mod(n)`

## Key Differences
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Symmetric</th>
      <th>Asymmetric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Key Used</td>
      <td>Same Key for encryption/decryption</td>
      <td>Public + Private Key pair</td>
    </tr>
    <tr>
      <td>Speed</td>
      <td>Fast(good for large data)</td>
      <td>slow (used for key exchange)</td>
    </tr>
    <tr>
      <td>Key Exchange</td>
      <td>Must be shared secured</td>
      <td>No need to share private key</td>
    </tr>
    <tr>
      <td>CTF Usage</td>
      <td>ECB/CBC attacks, brute-force</td>
      <td>RSA factorization</td>
    </tr>
  </tbody>
</table>