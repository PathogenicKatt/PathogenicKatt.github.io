---
layout: note
title: "OWASP Top 10 Vulnerabilities(2021)"
description: "OWASP stands for the Open Web Application Security Project."
tags: [web, owasp, vuln, cwe, 2021]
date: 2025-07-28
---

## OWASP Top 10 Vulnerabilities(2021)
- Every three to four years, OWASP revises and publishes its list of the top 10 web application vulnerabilities, based on the frequency of discovered security defects, the severity of uncovered vulnerabilities, and the potential impact of exploitation.
- The following list will show the top 10 vulnerabilities of 2021,but still relevant in 2025.
    1. **Broken Access Control** *Users accessing contents that they are not supposed to access*
    2. **Cryptographic Failures** *Bad handling of sensitive data (weak encryption)*
    3. **Injection** *insertion of malicious code/commands(sql inejction)*
    4. **Insecure Design** *Security flaws in the initial design, not just implementation*
    5. **Security Misconfiguration** *Default settings, exposed admin panels, or unnecessary features left on*
    6. **Vulnerable Components** *Using outdated libraries/frameworks with known vulnerabilities*
    7. **Aunthentication Failure** *Weak login systems allowing brute force attacks or credential stuffing*
    8. **Software and Data Integrity Failures** *Trusting untrusted sources (like compromised update servers)*
    9. **Security Logging and Monitoring Failures** *Not detecting breaches because of not properly logging events*
    10. **Server-Side Request Forgery** *Tricking a server into making requests to internal systems*

## Broken Access Control
- Broken Access Control occurs when an application fails to properly restrict user actions, allowing attackers or unauthorized users to access, modify, or delete data they shouldn’t.
- **In Formal**: Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits. Common access control vulnerabilities include:
    - **IDOR (Insecure Direct Object Reference)**
        - where the application has exposed direct reference to internal implementation objects.
        - Threat-actors bypass access control checks by modifying the URL (parameter tampering or force browsing), internal application state, or the HTML page, or by using an attack tool modifying API requests.
        - **Example**:
        ```text
        https://example.com/profile?id=123
        ```
        -> Hence, someone can just change the id number to get access to the account of another person, or threat-actors can brute-force it, to gain access to profiles that have privilege access.
        - In simple, Attackers manipulate object references (like IDs in URLs) to access unauthorized data.
    - **Missing Function-Level Access Control**
        - An application doesn’t check if a user has permission before allowing access to a function (like admin pages).
        - **Example** -> A normal user visits `/admin/dashboard` and gets access because the app didn’t verify if they were an admin.
    - **Privilege Escalation**
        - Threat-actors find ways to gain higher privileges.
    - **CORS Misconfigurations (Cross-Origin Resource Sharing)**
        - A poorly configured CORS policy allows malicious websites to steal data from another domain.
        - **Example** -> A bank’s API allows any origin (Access-Control-Allow-Origin: *), so an attacker’s site can steal user data via JavaScript.
<br>

- **Common Weakness Enumerations (CWEs)**
_Notable Common Weakness Enumerations (CWEs) included are **CWE-200**: Exposure of Sensitive Information to an Unauthorized Actor, **CWE-201**: Insertion of Sensitive Information Into Sent Data, and **CWE-352**: Cross-Site Request Forgery._
<br>

- **How to Prevent:**
    - Implement access control mechanisms once and re-use them throughout the application, including minimizing Cross-Origin Resource Sharing (CORS) usage.
    - Avoid exposing internal IDs directly (prevent IDOR).
    - Verify resource ownership before access.
    - Disable web server directory listing and ensure file metadata (e.g., .git) and backup files are not present within web roots.

## Cryptographic Failures
- This occurs when an application mishandles sensitive data due to weak encryption, poor key management, or improper storage, exposing passwords, credit cards, or personal information.

- **Common Vulnerabilities**:
    - Use of unapproved hash functions such as MD5 or SHA1, and these are regarded as weak in this modern era. They are easily breakable, and there are many softwares that assist in breaking such hashes.
    - Use of default crypto keys, weak crypto keys, keys being re-used, improper key management in a system.
    - Using deprecated cryptographic padding methods such as PKCS number 1 v1.5.
    - Data transmission without being encrypted, using protocols like, HTTP, FTP and SMTP.
<br>

- **Common Weakness Enumerations (CWEs)**
_Notable Common Weakness Enumerations (CWEs) included are **CWE-259**: Use of Hard-coded Password, **CWE-327**: Broken or Risky Crypto Algorithm, and **CWE-331** Insufficient Entropy._ 
<br>

- **How to prevent**:
    - Don't store sensitive data unnecessarily. Discard it as soon as possible or use PCI DSS compliant tokenization or even truncation. Data that is not retained cannot be stolen.
    - Rotate cryptographic keys regularly to reduce the risk of exposure.
    - Make sure to encrypt all sensitive data at rest.
    - Use strong, modern encryption algorithms like AES-256 to protect sensitive data.
    - Audit cryptographic systems regularly to detect weaknesses and vulnerabilities.
    - Disable caching for response that contain sensitive data.
    - Avoid deprecated cryptographic functions and padding schemes, such as MD5, SHA1, PKCS number 1 v1.5.
    - Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt or PBKDF2.
<br>

_Most important, never store API keys on the code or github, and also never hard-code passwords or secrets._

## Injection Attacks
- Injection occurs when an attacker sends malicious data that tricks an application into executing unintended commands. This can lead to data theft, authentication bypass, or full system compromise.
<br>

- **Common Vulnerabilities**
    - **SQL Injection (SQLi)** *Threat-actors inject malicious SQL queries to manipulate databases.*
        - Example 1:
        ```sql
        SELECT * FROM users WHERE username='admin'--` AND password=`jasnkjdsa`
        ```
        -> Note that the `--` comments out the password check, letting threat-actors log in as admin. In most cases this works when the user input, allows sql injection, meaning the developers did not sanitize the input.
        - Example 2:
        ```sql
        UNION SELECT credit_card FROM users -- 
        ```
        -> Hence this goes further, to threat-actors, retreiving sensitive information. Also notice that the `--`, has been used again, for the application or the server to ignoore everything after the comment.
    - **Cross-Site Scripting(XSS)**
        - Example 1 (**Stored XSS**) _malicious script saved on the server_
        ```javascript
        <script>stealCookies()</script>
        ```
        -> This normally occurs in the comment section, when we visit a blog, or some website that allows people to leave comments. In this case, the threat-actor can store a payload. Everytime you as a user reload the page, your cookies are being stolen. Basically the payload is stored in the server by the threat-actor.
        - Example 2 (**Reflected XSS**)
        ```text
        https://example.com/search?q=<script>stealCookies()</script>
        ```
        -> Executed from the `URL`, in this case, when the user clicks the link, the cookie is being stolen.
        - Example 3 (**DOM XSS**) _Client-side JavaScript modifies DOM unsafely._ 
<br>
    - **Command Injection** _Attackers execute OS(Operating System) commands on the server._
        - Example
        ```bash
        127.0.0.1; cat /etc/passwd
        ```
        -> The address `127.0.0.1` is for local host, hence the threat actor can execute this script to retrieve yout passwords stored in the system.
    - **NoSQL Injection** _Attackers exploit NoSQL databases (MongoDB, CouchDB, Cassandra)_
        - Example
        ```javascript
        db.users.find({user: req.body.user, pass: req.body.pass})
        ```
        -> Let's say this is the login query(The above code) <br>
        -> The below script, is a payload(This is what an attacker submit):
        ```javascript
        {
            "username": {"$ne": ""},
            "password": {"$ne": ""}
        }
        ```
        -> Hence the query becomes:
        ```javascript
        db.users.find({
            username: {"$ne": ""},  // "username not equal to empty"
            password: {"$ne": ""}   // "password not equal to empty"
        })
        ```
        -> The database returns the first user where username and password are not empty, leading to Authentication bypass! <br>
        -> Unlike traditional SQL injection, it doesn't rely on SQL syntax but instead manipulates query operators like `$ne`, `$gt`, or JavaScript-like structures.



- **Common Weakness Enumerations (CWEs)**
_Notable Common Weakness Enumerations (CWEs) included are CWE-79: Cross-site Scripting, CWE-89: SQL Injection, and CWE-73: External Control of File Name or Path._

- **How to prevent**:
    - The preferred option is to use a safe API, which avoids using the interpreter entirely, provides a parameterized interface, or migrates to Object Relational Mapping Tools (ORMs).
Note: Even when parameterized, stored procedures can still introduce SQL injection *if PL/SQL or T-SQL concatenates queries and data or executes hostile data with EXECUTE IMMEDIATE or exec()*.
    - Avoid building SQL queries using string concatenation.
    - Apply the principle of least privilege to database users.
    - Deploy a Web Application Firewall (WAF) as an extra layer.

## Insecure Design
- Insecure Design vulnerabilities refers to weaknesses that lie in the designing process of a product.These weaknesses cannot be overcome by secure implementation.
- It refers to fundamental flaws in an application's architecture that create security risks before a single line of code is written.
- These issues stem from poor security planning during the design phase.
- One of the factors that contribute to insecure design is the lack of business risk profiling inherent in the software or system being developed, and thus the failure to determine what level of security design is required.
<br>

_Principles like Secure design, SDLC, Resource management are overlooked or not properly configured during development phase._
<br>

- **Common Vulnerabilities**:
    - **Missing Security Controls in Core Logic**
        - Example: _A banking app allows users to reset passwords without email confirmation_
    - **Overly Trusting Client-Side Checks**
        - _Relying on frontend validation alone _
    - **Insecure Default Configurations**:
        - _Many smart cameras or IoT devices use default credentials like admin:admin_
    - **Lack of Threat Modeling**
        - _Failing to anticipate how attackers might abuse the system._
<br>

- **How to Prevent Insecure Design Vulnerability**
    - Threat modelling for designing authentication, access controls, business logics and key flows.
    - Use Secure development lifecycle during the designing phase of a product.
    - Limit resource consumption by user or service(To avoid bruteforce)
<br>

_Insecure Design is hard to patch later because it’s baked into the system’s core Hence:_
- **Plan security before writing code.**

## Security Misconfiguration
_It’s the #5 risk in OWASP Top 10 because attackers scan for these weaknesses automatically._
- This occurs when systems are set up incorrectly, leaving them vulnerable to attacks.
- As we know that developer's work is to work on the functionality of websites and not on security and this flaw allows hackers to keep track of the configuration of the security and find new possible ways to enter websites.
- 



- **Common Weakness Enumerations (CWEs)**
_Notable CWEs included are CWE-16 Configuration and CWE-611 Improper Restriction of XML External Entity Reference._
