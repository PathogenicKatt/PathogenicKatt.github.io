---
layout: note
title: "Python 3"
description: "A high-level programming language; used for scripting and automating stuff."
tags: [programming, coding, python, scripting]
date: 2025-10-20
---

# Python 3
_Python is an interpreted language, which means the code itself is not compiled into machine code like C code. Instead, it is interpreted by the Python program, and the instructions in the script(s) are executed. Python is a high-level language meaning the scripts we produce are simplified for our convenience so that we do not need to worry about memory management, system calls, and so forth._
- So why learn it?<br>
    -> It is a popular choice for automation of everyday tasks or the development of tools.<br>
    -> In the InfoSec world, plenty of so-called PoCs (Proof of Concepts) are written in Python, as are many popular tools for penetration testing.

## IDLE
- We can utilize IDLE, Python's own integrated development environment, directly in our terminal for quicker prototyping. 
- To exit the IDLE again, we type exit(0). The number 0 is the return code of the Python process, where 0 means all is OK and a number different from 0 indicates an error.<br>
![Python idle](/assets/img/htb-python3.PNG){: .writeup-image}<br>
- **Printing Multiple Variables**:<br>
    ![Python idle](/assets/img/htb-python3(1).PNG){: .writeup-image}<br>

## Shebang!
- Another method is based on adding the shebang **(#!/usr/bin/env python3)** in the first line of a Python script. 
- On Unix-based operating systems, marking this with a pound sign and an exclamation mark causes the following command to be executed along with all of the specified arguments when the program is called.
- We can give the Python script execution rights and execute it directly without entering python at the beginning on the command line. The file name is then passed as an argument.<br>
![Python idle](/assets/img/htb-python3(2).PNG){: .writeup-image}<br>

## Introduction to Variables
_In Python, a variable is our way of storing a value of some sort in memory. For example, a number, some text, or the bytes of an image. Like in math, variables have a name that we make up, but the names should be descriptive in Python._
- Below are some examples:
```bash
advice = "Don't panic"
ultimate_answer = 42
potential_question = 6 * 7
confident = True
something_false = False
problems = None
# Oh, and by the way, this is a comment. We can tell by the leading # sign.
```
- **strings**: The first variable, advice, is a string. Strings in Python can be specified using both "double quotes" and 'single quotes'. When typing out strings that contain either symbol as a natural part of the string itself, e.g., don't lie, it is a good idea to use the other kind of quotes. Writing "don't lie" works just fine. However, using single quotes would throw an error.
- **Integers**: Following the advice variable comes two numbers, or integers, the first of which is a number. The second variable, potential_question, is also a number but not until runtime. During runtime, the equation 6 * 7 is evaluated to 42, which is then stored as the variable.
- **Booleans**: Following the number variables come two boolean variables, confident and something_false. A boolean value is a truth value and can be either True or False. Right after comes the variable problems, which is set to **None**. **None** is a special "nothingness" of a value similar to **null** in other languages.

## Combining Variables
- **Basic Math Operations**
```python
>>> 10 + 10     # Addition
20
>>> 20 - 10     # Subtraction
10
>>> 5 * 5       # Multiplication
25
>>> 10 / 5      # Division
2
```
<br>
For all of these values we can define variables to store them.
- **Saving Values to Variables**
```python
>>> add = 10 + 10
>>> sub = 20 - 10
>>> multi = 5 * 5
>>> div = 10 / 5
>>>
>>> print(add, sub, multi, div)
20 10 25 2
```
<br>
This also allows us to work with the values stored in the individual variables.
- **Working with Variables**
```python
...SNIP...
>>> print(add, sub, multi, div)
20 10 25 2
>>> result = (add * sub) - (multi * div)        # (20 * 10) - (25 * 2)
>>> print('Result: ', result)
Result:  150
```
<br>
Another handy feature of the Python interpreter is that the IDLE assigns the latest expression to the variable **_**. This allows us to continue working with the last value.





