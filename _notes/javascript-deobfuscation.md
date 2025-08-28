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
    ![htb-code obfuscation](/assets/img/js-src-code(8).PNG){: .writeup-image }
    - after obfuscation:
    ![htb-code obfuscation](/assets/img/js-src-code(9).PNG){: .writeup-image }
    - We see that our code became much more obfuscated and difficult to read. We can copy this code into <a href="https://jsconsole.com" target=_blank>jsconsole</a>, to verify that it still does its main function:
    ![htb-code obfuscation](/assets/img/js-src-code(10).PNG){: .writeup-image }
    - We see that we get the same output.
    - A **packer obfuscation** tool usually attempts to convert all words and symbols of the code into a list or a dictionary and then refer to them using the (p,a,c,k,e,d) function to re-build the original code during execution. The (p,a,c,k,e,d) can be different from one packer to another.
    - However, it usually contains a certain order in which the words and symbols of the original code were packed to know how to order them during execution.
    - While a packer does a great job reducing the code's readability, we can still see its main strings written in cleartext, which may reveal some of its functionality. This is why we may want to look for better ways to obfuscate our code.
<br>
_Note: The above type of obfuscation is known as "packing", which is usually recognizable from the six function arguments used in the initial function "function(p,a,c,k,e,d)"._

## Advanced Obfuscation
- So far, we have been able to make our code obfuscated and more difficult to read.
- However, the code still contains strings in cleartext, which may reveal its original functionality.
- In this section, we will try a couple of tools that should completely obfuscate the code and hide any remnants of its original functionality.
- **Obfuscator**:
    - Let's visit <a href="https://obfuscator.io" target=_blank>obfuscator</a>. Before we click obfuscate, we will change String Array Encoding to Base64, as seen below:
    ![htb-code obfuscation](/assets/img/js-src-code(11).PNG){: .writeup-image }
    - Now, we can paste our code and click obfuscate: 
    ![htb-code obfuscation](/assets/img/js-src-code(12).PNG){: .writeup-image }
    - We see a huge difference.
    ![htb-code obfuscation](/assets/img/js-src-code(13).PNG){: .writeup-image }
    - This code is obviously more obfuscated, and we can't see any remnants of our original code.
    - We can now try running it in <a href="https://jsconsole.com" target=_blank>jsconsole</a> to verify that it still performs its original function.
    ![htb-code obfuscation](/assets/img/js-src-code(14).PNG){: .writeup-image }
    - We see that, indeed, the code gave us the same output.
## Deobfuscation






