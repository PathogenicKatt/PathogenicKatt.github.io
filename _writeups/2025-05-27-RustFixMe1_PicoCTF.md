---
layout: writeup
title: "CTF Challenge: RustFixMe1"
description: "Have you heard of Rust? Fix the syntax errors in this Rust file to print the flag!"
difficulty: easy
event: "PicoCTF"
tags: [programming, misc]
date: 2025-05-24
---

<br>
<br>

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/rustFixMe1(1).PNG){: .writeup-image }


## Aproach:

![Challenge screenshot](/assets/img/rustFixMe1(2).PNG){: .writeup-image }


1. **importing the file**: After using the `wget` command, you should be able to see the *fixme1.tar.gz*. 
2. **Extracting the contents**: The following command should allow you to extract all the files from the folder.
    ```bash
    tar -xzf fixme1.tar.gz
    ```
    - The `tar` command is used to compress files in linux.
    - -x: I like to think of it as "extract".
    - -z: to be able unzip the file, since it ends with gz.
    - -f: reprsents a file, which in this case is  *fixme1.tar.gz*, it could be any file.


3. **Code Editor(Preference)**: As you can see below, that i have used sublime as my choice of a code editor, pick yours or join the train and use sublimetext as well. 
    ![Challenge screenshot](/assets/img/rustFixMe1(3).PNG){: .writeup-image }
    - Sublime-text installation:
    ```bash
    sudo apt install sublime-text
    ```
    - Then when you want to look at the contents of the file, which in this case is main.rs:
    ```bash
    subl main.rs
    ```

4. **Code Analysis**: I want to say, that i knew nothing about Rust-programming language. I had to do my research to be able to solve the challenge, one good resource is [w3schools](https://www.w3schools.com/rust/index.php). Looking at the source code, we see that, they required us to just manipulate the source code such that it works right, meaning that we apply the correct syntax. Bsically the objective of this challenge was to, i guess introduce the Rust Porogramming language to us. It was fun, playing around with it to find to the correct syntax. But, honestly i struggled.
    - Notice the difference:
        ![Challenge screenshot](/assets/img/rustFixMe1(5).PNG){: .writeup-image }


5. **Execution of the code**: After i have fixed the code, i struggled to execute the code, so i had to go to the rabbit hole again and do my research.
    ![Challenge screenshot](/assets/img/rustFixMe1(4).PNG){: .writeup-image }
    - Installation of Rust:
    ```bash
    curl --proto \'=https\' --tlsv1.2 https://sh.rustup.rs -sSf | sh
    ```
    - Copy the way it is, and allow for installation to do its thing and lastly run the following command:
    ```bash
    sudo apt update rustc
    ```
    - If you are a programmer, i am sure you were also gonna first try to run the file like so:
    ```bash
    rustc main.rs
    ```
    - As you can see(initially i though the problem was in the source code), read where it says `help: you might be...`:
        ![Challenge screenshot](/assets/img/rustFixMe1(6).PNG){: .writeup-image }

    - Yeah unfortunately this is wrong!, after thorough research i learnt that, you have to run the file, as a project(folder). But, in this case the necessary files(including the crate xor_cryptor) were already in the folder when we unzipped it. So you have to go back to the root of the folder(directory) "fixme1".
    - It is clearly explained below:
        ![Challenge screenshot](/assets/img/rustFixMe1(7).PNG){: .writeup-image }


6. **The Flag:**Thus, we should get our flag!.
    - In simple, this is how you compile:
    ```bash
    cargo build
    ```
    - Then it will a generate the `run` file. Execute it! Then we get our flag😆.
        ![Challenge screenshot](/assets/img/rustFixMe1(8).PNG){: .writeup-image }




    




