---
layout: note
title: "Javascript Deobfuscation"
description: "Code deobfuscation is an important skill to learn if we want to be skilled in code analysis and reverse engineering."
tags: [code-analysis, decoding, rev, javascript]
date: 2025-08-28
---

# Introduction
- we often come across obfuscated code that wants to hide certain functionalities, like malware that utilizes obfuscated JavaScript code to retrieve its main payload. 
-  Without understanding what this code is doing, we may not know what exactly the code is doing, and hence may not be able to complete the red/blue team exercise.

## Source Code
- Most websites nowadays utilize JavaScript to perform their functions. 
- **HTML**:
    - Looking at the following website:
    ![htb-website](/assets/img/js-src-code.PNG){: .writeup-image }
    - pressing `[ctr+u]` from that website we get the following source code.
    ![htb-website](/assets/img/js-src-code(1).PNG){: .writeup-image }
    - Already we see a flag! and some `CSS`(which is just for style)
    - But what is important is the `secret.js` embeeded javascript file.
- **Javascript**: secret.js
    ![htb-website](/assets/img/js-src-code(2).PNG){: .writeup-image }
    - Hence, using a tool to *deobfuscate*:
    ![htb-website](/assets/img/js-src-code(3).PNG){: .writeup-image }
    - From hear again, i see a flag!
    - But , the reason behind this code obfuscation. What is it? How is it done? Where is it used?
- **Code Obfuscation**:
    - Before we start learning about deobfuscation, we must first learn about code obfuscation.
    - Without understanding how code is obfuscated, we may not be able to successfully deobfuscate the code, especially if it was obfuscated using a custom obfuscator.
    - **What is obfuscation?** <br>
    -> Obfuscation is a technique used to make a script more difficult to read by humans but allows it to function the same from a technical point of view, though performance may be slower.<br>
    -> For example, code obfuscators often turn the code into a dictionary of all of the words and symbols used within the code and then attempt to rebuild the original code during execution by referring to each word and symbol from the dictionary. 
    - The following is an example of a simple JavaScript code being obfuscated(input):
    ![htb-code obfuscation](/assets/img/js-src-code(4).PNG){: .writeup-image }
    - Output:
    ![htb-code obfuscation](/assets/img/js-src-code(5).PNG){: .writeup-image }
- **Use Cases**
    - The most common usage of obfuscation, however, is for malicious actions.
    - It is common for attackers and malicious actors to obfuscate their malicious scripts to prevent Intrusion Detection and Prevention systems from detecting their scripts. 
_It must be noted that doing authentication or encryption on the client-side is not recommended, as code is more prone to attacks this way._

## Basic Obfuscation
- Code obfuscation is usually not done manually, as there are many tools for various languages that do automated code obfuscation. 
- Many online tools can be found to do so, though many malicious actors and professional developers develop their own obfuscation tools to make it more difficult to deobfuscate.
- **Running JavaScript code**:
    - Let us take the following line of code as an example and attempt to obfuscate it:
    ```javascript
    console.log("Code Obfuscation");
    ```
    - First, let us test running this code in cleartext, to see it work in action. We can go to <a href="https://jsconsole.com/" target="_blank">JSConsole</a>, paste the code and hit enter, and see its output:
    ![htb-code obfuscation](/assets/img/js-src-code(6).PNG){: .writeup-image }
- **Minifying JavaScript code**
    - A common way of reducing the readability of a snippet of JavaScript code while keeping it fully functional is JavaScript minification.
    - Code minification means having the entire code in a single (often very long) line.
    - Code minification is more useful for longer code, as if our code only consisted of a single line, it would not look much different when minified.
    - Many tools can help us minify JavaScript code, like <a href="https://www.toptal.com/developers/javascript-minifier" target="_blank">javascript-minifier</a>. We simply copy our code, and click Minify, and we get the minified output on the right:
    ![htb-code minification](/assets/img/js-src-code(7).PNG){: .writeup-image }
    - Once again, we can copy the minified code to JSConsole, and run it, and we see that it runs as expected.
    -  Usually, minified JavaScript code is saved with the extension `.min.js`.
- **Packing JavaScript code**:
    - Now, let us obfuscate our line of code to make it more obscure and difficult to read.
    - First, we will try <a href="https://beautifytools.com/javascript-obfuscator.php" target="_blank">BeautifyTools</a> to obfuscate our code:
    ![htb-code minification](/assets/img/js-src-code(8).PNG){: .writeup-image }





