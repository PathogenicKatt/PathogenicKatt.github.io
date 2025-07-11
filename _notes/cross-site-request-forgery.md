---
layout: note
title: "Cross Site Request Forgery(XSS)"
description: "A web exploitation that utilizes cookies of target website to forge requests."
tags: [web, csrf, iframe, cookies, requests]
date: 2025-07-04
---

## CSRF(Cross Site Request Forgery) 
- **In Formal**:
    - Cross-site request forgery, also known as one-click attack or session riding and abbreviated as CSRF or XSRF, is a type of malicious exploit of a website or web application where unauthorized commands are submitted from a user that the web application trusts. 
    - a type of cyber attack that tricks a user into unknowingly submitting a malicious request to a web application where they are authenticated, potentially leading to unauthorized actions like transferring funds or changing account details. It exploits the trust that a website has in a user's browser, making it difficult to distinguish between legitimate and forged requests.
- **In my words**:
    - Here is a scenario
        - There are two websites, an attaker's website which we can name `wallpapers.com` and a legitimate website or a vulnerable website that a user is logged into `vulnerable.com`.
        - Right, so the attacker may be logged in as well, and let's say the `vulnerable.com` allows its users to make comments. So an attacker can leave a message like:
        ```text
        Joe - "Guys checkout this website if you want hd wallpapers for your desktops or phones wallpapers.com"
        ```
        - And yes you might see, all the wallpapers available from that website `wallpapers.com` but in the background, the code is executed to delete your your account.
        - Yeah and right after you refresh the password you logged into, your account would have been deleted. Just like that, you lost your account.
        - But an attacker is not limited only to just deleting your account. He may be able to transfer money to his account using the bank website you both logged into. 
        - All this is done because you, as a user, you are aunthicated to the bank website, so the when you click the malicious link, the web application will assume that it's you, again through the sessionID(cookie) or the validation token in this case:
        ![csrf example](/assets/img/csrf-example.jpg){: .writeup-image }
        - More details, regarding the whole process is below.

## What is a cookie or a session id?
- A web application uses cookies, to help identify if it is really you. 
- For every request, the cookie is established automatically, and it is this process that hackers take an advantage of. 
- But here is a typical cookie: <br>
![csrf example](/assets/img/cookie-example.png){: .writeup-image }
- So formally, A cookie is a small piece of data that a web server sends to a user's web browser, which is then stored on the user's device. Cookies are used to remember information about the user, such as login credentials, preferences, and browsing history. They help enhance the user experience by allowing websites to recognize returning visitors and provide personalized content.
- Another basic thing to know is **Cross Domain Access Controls** and **SOP(Same Origin Policy)** which are security measures, but still the CSRF attack is still possible.

## Cross Domain Access Controls and SOP
- **Cross Domain Access Control**:
    - Cross-Domain Access Controls refer to mechanisms that allow or restrict access to resources across different origins. This can include techniques like *Cross-Origin Resource Sharing (CORS)*, which enables servers to specify who can access their resources from different origins.
    - And so, These controls are necessary when legitimate cross-origin requests are needed, such as when a web application needs to fetch data from an API hosted on a different domain. *CORS* allows servers to define which origins are permitted to access their resources.
    - In essence, when the attacker emebed they're website on the `Vulnerable.com`, they do not violate these controls, because what happens is that, they make use of the Cookies vulnerability.
- **SOP(Same Origin Policy)**:
    - The Same Origin Policy is a security measure implemented in web browsers that restricts how documents or scripts loaded from one origin can interact with resources from another origin. An "origin" is defined by the combination of the protocol (http or https), domain (example.com), and port (if specified).
        - This means that, SOP, is designed to check the following(**scheme**, **host** and **port**):
        ![csrf example](/assets/img/same-origin-policy.jpg){: .writeup-image }
        - All three requirements must be the same. 
        - SOP helps prevent malicious scripts on one site from accessing sensitive data on another site. For example, a script from `attacker.com` cannot access data from `Vulnerable.com` due to SOP restrictions.
    - Why this matters in thi context?
        - An attacker is not trying to access any sensetive data of the user, so regardless of these security measures, an attacker may still carry on, with an attack.
- In essence, CSRF exploits the trust that a web application has in the user's browser. While SOP restricts access to resources from different origins, it does not prevent CSRF attacks because the browser automatically includes cookies and authentication tokens with requests, regardless of the origin.


## How an attack is actually conducted
- Firstly take a look at this:
```php
POST /delete_my_account HTTP/1.1
Host: Vulnerable.com
Content-Type: aplication/x-www-form-urlencoded
cookies: 9b9e8ff2784d832ba823
--
delete=1
```
- This is normally sent to the server.
- And, let's say this request is valid to this website `vulnerable.com`, matter fact, when you delete your account, this is how the request looks like right like normally from the legitimate website which again is `vulnerable.com` right?
- So what if an attacker's website `wallpapers.com` has the same request?
- How will the server know if it comes from a whole different website, because if you check properly, this `host: Vulnerable.com` from the above example. This tells the server that the request is from Vulnerable.com.
- Again, because everytime you make a request, the cookies is automatically assigned to you.

## What about JSON CSRF Attacks?
- This is in relation to the **content-type header**.
- This can happen if the application does not properly validate the origin of the request or if it relies solely on the presence of a CSRF token without checking the Content-Type header.
- So what exactly is a **content-type-header**:
    - The Content-Type header is an HTTP header used to indicate the media type of the resource being sent to the server. For JSON data, the Content-Type is typically set to *application/json*.
    - This header informs the server about the type of data being sent in the request body, allowing it to process the data correctly.
- Why this is important?
    - Because sometimes, an attacker may know that if the server accepts json, then they may craft an exploit that binds to **JSON** in this case.
    - Below is a demonstration on how an exploit for *JSON CSRF*.
- **Using another scenario**
    - Say, an attacker wants to change or update the profile details of another user to his.
    - So that he may have access to your account. Basically using the fact that you are aunthicated through a cookie session.
    - And once he gains access to your account, he may be able to change the password.
    - But to be clear, Imagine a web application that allows users to update their profile information via a JSON API endpoint. The endpoint accepts POST requests with JSON data.
    ```json
    {
    "username": "newUsername",
    "email": "newEmail@example.com"
    }
    ```
    - And let's say here is the endpoint: `https://Vulnerable.com/api/updateProfile`
    - So here is a typical exploit,and let's say its crafted by a hacker:
```javascript
fetch('https://Vulnerable.com/api/updateProfile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "attackerUsername",
        "email": "attackerEmail@example.com"
    })
});
```
    - Again, Since the user is already authenticated with Vulnerable.com, the browser automatically includes the user's cookies with the request, making it appear legitimate.
    - This is still the website of an attacker `Wallpapers.com`, so an exploit is in disguise.

## Mitigations to CSRF
- How do we best protect against this type of an attack.
- I know it is an old attack, but it's out there waiting to be found.
- In my understanding, i think, understanding the role of cookies in CSRF vulnerabilities is crucial for securing web applications. Like, the **automatic inclusion**, and **session hijacking**.
    - Because in essence, attackers perform malicious attacks on behalf of the user.
- **Few mitigations are already in place like**:
    - **CSRF Tokens**
    ![csrf example](/assets/img/csrf-token.jpg){: .writeup-image }
    - **SameSite Cookie Attribute**: Set the `SameSite` attribute on cookies to Strict or Lax. This restricts how cookies are sent with cross-origin requests.
        - With `SameSite=Strict`, cookies are only sent in first-party contexts, while `SameSite=Lax` allows cookies to be sent with top-level navigations but not with embedded content. This helps prevent CSRF attacks.
    - **CORS (Cross-Origin Resource Sharing)**: It adds a layer.
    - **Educating Users**






