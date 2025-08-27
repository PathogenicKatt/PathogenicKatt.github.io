---
layout: note
title: "Password Complexity Checker "
description: "Locking an image is just fascinating"
tags: [python, encryption, programming, crypto, decryption]
date: 2025-07-03
---

# Password Complexity 
- For us to be able to understand what a complex password looks like, we have to cover the basic building blocks of the password.
- **Character Variety**
    - lowercase letters(`a-z`)
    - Uppercase letters(`A-Z`)
    - Digits(`0-9`)
    - Special Characters like the punctuations and symbols.
- **Lenghth**
    - Because we know that longer password increase the amount of time that a hacker may attempt to crack the password. In this case, minimun of characters that we may allow is 8 characters.
- **Common Passwords Prevention**
    - Wordlists like the `rockyou.txt` contains all the common passwords from the whole world. It is mostly used in ctf challenges where we would have crackk the password of an image that has hidden information(called image steganography), and to see that information you would have to crack the password.
    - Hence, again checking if a password appears in such a list helps prevent weak, and common choices.
- **Feedback**
    - Lastly, giving feedback to the users.

## Python code
- This is the python code without **Common Passwords Prevention**.
- I spent too much time, trying to figure how to implement it and i kept getting errors, But please do check back, if i have updated the code.
```python
import string
#--
def check_passwd(passwd):
    feedback = []
    score = 0
    # Length check
    if len(passwd) < 8:
        feedback.append("Password should be at least 8 characters long.")
    else:
        score += 1
    # Lowercase check
    if not any(k in string.ascii_lowercase for k in passwd):
        feedback.append("Add at least one lowercase letter.")
    else:
        score += 1
    # Uppercase check
    if not any(k in string.ascii_uppercase for k in passwd):
        feedback.append("Add at least one uppercase letter.")
    else:
        score += 1
    # Digit check
    if not any(k in string.digits for k in passwd):
        feedback.append("Add at least one digit.")
    else:
        score += 1
    # Special character check
    if not any(k in string.punctuation for k in passwd):
        feedback.append("Add at least one special character.")
    else:
        score += 1
    # Strength rating
    if score == 5:
        strength = "Strong"
    elif score >= 3:
        strength = "Medium"
    else:
        strength = "Weak"
    #--
    return strength, feedback
#--
if __name__ == "__main__":
    pwd = input("Enter a password to check: ")
    strength, feedback = check_passwd(pwd)
    print(f"Strength: {strength}")
    if feedback:
        print("Feedback:")
        for f in feedback:
            print("-", f)
```