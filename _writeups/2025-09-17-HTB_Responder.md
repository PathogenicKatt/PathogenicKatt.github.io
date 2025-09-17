---
layout: writeup
title: "HackTheBox Lab: Responder"
description: "Remote File Inclusion and how to use Web/Reverse Shells."
difficulty: easy
event: "HackTheBox"
tags: [responder, web, RFI, SSRF]
date: 2025-09-17
---

## Challenge Overview:
- The following was the description for the challenge:
    ![responder](/assets/img/htb-responder.PNG)

## Approach
_When visiting the web service using the IP address, what is the domain that we are being redirected to?_<br>
![responder](/assets/img/htb-responder(1).PNG)<br>
_Which scripting language is being used on the server to generate webpages?_
![responder](/assets/img/htb-responder(2).PNG)<br>
_What is the name of the URL parameter which is used to load different language versions of the webpage?_<br>
- So ofcourse, to answer to this question we need to visit the website, but see the following error.
    ![responder](/assets/img/htb-responder(3).PNG)<br>
    -> As you paste the ip address, from the search bar, you will notice something, and that is, the url loads for a while meaning just as we have seen from the terminal that we got the status code of 200. but then after a while, we get an error.<br>
    -> So this is where **Domain Name Server (DNS)**, comes in. DNS, first check if the redirection url has an ip-address, and we see that, it leads to nothing, even when we write directly that url on the search bar.<br>
    -> So an easier way, or to make this work is by including it to our local hosts.<br>
    -> But again, we should of course not expect anything from just the IP-address `10.129.6.127`, because we see that, it's source code, only has html tags thatjust tells the browser to redirect to "htb" after 0 seconds.<br>
    -> Hence, when we resolve this IP `10.129.6.127` to `unika.htb` from /etc/hosts:
    ![responder](/assets/img/htb-responder(4).PNG)
    - So after doing so, we see some good news!!
    ![responder](/assets/img/htb-responder(5).PNG)<br>
    -> But answering the question, we navigate to the language button (check below where i have highlighted), and i have also highlighted the answer, which is the `page` parameter.<br>
    ![responder](/assets/img/htb-responder(6).PNG)
    - And we also see that the language is in french now. And, that's what we have to exploit.<br>

_Which of the following values for the `page` parameter would be an example of exploiting a **Local File Include (LFI) vulnerability**: "french.html", "//10.10.14.6/somefile", "../../../../../../../../windows/system32/drivers/etc/hosts", "minikatz.exe"?_<br>
    ![responder](/assets/img/htb-responder(7).PNG)<br>
    -> But to answer the question, the answer is `../../../../../../../../windows/system32/drivers/etc/hosts`<br>

_Which of the following values for the `page` parameter would be an example of exploiting a **Remote File Include (RFI) vulnerability**: "french.html", "//10.10.14.6/somefile", "../../../../../../../../windows/system32/drivers/etc/hosts", "minikatz.exe"?_<br>
    -> The answer to this one is `//10.10.14.6/somefile`.<br>
<br>

_What does **NTLM** stand for?_<br>
    -> New Technology LAN Manager.<br>
    -> `NT`: Refers to the "NT" line of Microsoft Windows operating systems (e.g., Windows NT, 2000, XP, Vista, 7, 10, 11).<br>
    -> `LAN`: Stands for Local Area Network. This highlights its original purpose for authentication within a local network.<br>
    -> `Manager`: Refers to the suite of protocols that manage the authentication process.<br>
    ![responder](/assets/img/htb-responder(8).PNG)<br>
    -> We will see later, on how we can do this (brute-forcing).
<br>

_Which flag do we use in the Responder utility to specify the network interface?_
- `-I`: interfaces like eth0, tun0.
<br>

_There are several tools that take a NetNTLMv2 challenge/response and try millions of passwords to see if any of them generate the same response. One such tool is often referred to as `john`, but the full name is what?._
- `John the ripper`
![responder](/assets/img/htb-responder(9).PNG)<br>
<br>

_What is the password for the administrator user?_
- This is where, we use the power of `Responder`
- Responder is a powerful **Post-Exploitation** and **Network Penetration Testing** tool. Its primary purpose is to **poison** or **abuse network protocols** to capture authentication credentials from other computers on the **same local network**.
- But in simple **Responder** tricks computers into handing over their password hashes by pretending to be *trusted network resources*.
- Note that it says it's post-exploitation tool, meaning there are some things we have to do before using.
- In this case, here is what we have to do first; using the following command `ip a`, to get our *network interface*; Normally you would use, `eth0` but because i am using a vpn, i have to go for `tun0`.
![responder](/assets/img/htb-responder(10).PNG)<br>
    -> From here we take the following address (responder address):
    ![responder](/assets/img/htb-responder(11).PNG)<br>
    -> And this is how we implement the `Remote File Inclusion (RFI)`:
    ![responder](/assets/img/htb-responder(12).PNG)<br>
    -> And when we go back to the terminal, we some interesting info:
    ![responder](/assets/img/htb-responder(13).PNG)<br>
    -> So we see that we get some credentials, and the password that is hashed. So now we have to crack the hashed password. You can either use the `hashcat tool` or `john the ripper`, but in this case i will be using `john`:
    ![responder](/assets/img/htb-responder(14).PNG)<br>
    -> Now that we have all the information:
    ![responder](/assets/img/htb-responder(15).PNG)<br>
    -> we see that the password is cracked `badminton`, and hence that is our answer.
<br>

_We'll use a Windows service (i.e. running on the box) to remotely access the Responder machine using the password we recovered. What port TCP does it listen on?_<br>
![responder](/assets/img/htb-responder(15).PNG)<br>


    


    















   