---
layout: note
title: "Web Requests"
description: "A directory service for Windows network environments."
tags: [web, http, internet, https]
date: 2025-08-20
---

# Web Requests
## HyperText Transfer Protocol (HTTP)
- Most internet communications are made with web requests through the HTTP protocol.
- HTTP is an *application-level protocol* used to access the *World Wide Web* resources.
- The default port for HTTP communication is **port 80**.
- It is considered insecure.
- **Uniform Resource Locator (URL)**
  - Resources over HTTP are accessed via a URL:
    ![stepic command](/assets/img/url.PNG){: .writeup-image }

<table>
<thead>
    <tr>
      <th>Component</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Scheme</td>
      <td>http:// https://</td>
      <td>This is used to identify the protocol being accessed by the client, and ends with a colon and a double slash (://)</td>
    </tr>
    <tr>
      <td>User Info</td>
      <td>admin:password@</td>
      <td>This is an optional component that contains the credentials (separated by a colon :) used to authenticate to the host, and is separated from the host with an at sign (@)</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>inlanefreight.com</td>
      <td>The host signifies the resource location. This can be a hostname or an IP address</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>:80</td>
      <td>The Port is separated from the Host by a colon (:). If no port is specified, http schemes default to port 80 and https default to port 443</td>
    </tr>
    <tr>
      <td>Path</td>
      <td>/dashboard.php</td>
      <td>This points to the resource being accessed, which can be a file or a folder. If there is no path specified, the server returns the default index (e.g. index.html).</td>
    </tr>
    <tr>
      <td>Query String</td>
      <td>?login=true</td>
      <td>The query string starts with a question mark (?), and consists of a parameter (e.g. login) and a value (e.g. true). Multiple parameters can be separated by an ampersand (&).</td>
    </tr>
    <tr>
      <td>Fragments</td>
      <td>#status</td>
      <td>Fragments are processed by the browsers on the client-side to locate sections within the primary resource (e.g. a header or section on the page).</td>
    </tr>
  </tbody>
</table>

_Not all components are required to access a resource. The main mandatory fields are the scheme and the host, without which the request would have no resource to request._

- **HTTP Flow**
    - The first time a user enters the URL **(inlanefreight.com)** into the browser, it sends a request to a *DNS (Domain Name System) server* to resolve the domain and get its IP.
    - DNS is nothing but a translator, changes the domain to it's simplest form, which is an IP address. computers uses ip's to communicate.
    - The DNS server looks up the IP address for inlanefreight.com and returns it.
    - Once the browser gets the IP address linked to the requested domain, it sends a GET request to the default HTTP port (e.g. 80), asking for the root / path.
    - Then, the web server receives the request and processes it.
    - In this case, the contents of index.html are read and returned by the web server as an HTTP response. 
    - The response also contains the status code (e.g. 200 OK), which indicates that the request was successfully processed.
    - The diagram below presents the anatomy of an HTTP request at a very high level:
    ![stepic command](/assets/img/httpFlow.PNG){: .writeup-image }

_Note: Our browsers usually first look up records in the local **'/etc/hosts'** file, and if the requested domain does not exist within it, then they would contact other DNS servers. We can use the '/etc/hosts' to manually add records to for DNS resolution, by adding the IP followed by the domain name._

- **cURL**
    - One of the most important tool, in *web exploitation*.
    - cURL (client URL) is a command-line tool and library that primarily supports HTTP along with many other protocols.
    - We can send a basic HTTP request to any URL by using it as an argument for cURL, as follows:
    ```bash
    katt02@kali$ curl inlanefreight.com
        <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html><head>
    ```
    - cURL does not render the HTML/JavaScript/CSS code, unlike a web browser, but prints it in its raw format.
    - We may also use cURL to download a page or a file and output the content into a file using the -O flag as follows:
    ```bash
    katt02@kali$ curl -O inlanefreight.com
    katt02@kali$ ls 
    index.html
    ```
      - `-O`: specifies the remote server, which in this case is inlanefreight.com
  
## Hypertext Transfer Protocol Secure (HTTPS)
- From above, we touched on HTTP. However, one of the significant drawbacks of HTTP is that all data is transferred in clear-text. It is not encrypted. Making it vulnerable to the threat-actors!. This could be done by performing a *Man-in-the-middle (MiTM)* attack to view the transferred data.
- To avoid this issue, the **HTTPS (HTTP Secure) protocol** was created, in which all communications are transferred in an *encrypted format*, so even if a third party does intercept the request, they would not be able to extract the data out of it. 
- **HTTP & HTTPS Overview**:
![http-overwiew](/assets/img/http-overview.PNG){: .writeup-image }
    - I have highlighted what using the http protocol expose.
    - In contrast to this, meaning; using **HTTPS Protocol**:
![https-overwiew](/assets/img/https-overview.PNG){: .writeup-image }
  - As we can that the same data is now *encrypted*.

- **HTTPS Flow**
![http-flow](/assets/img/https-flow.PNG){: .writeup-image }
- The part that is highlighted by yellow, is a request of **http**, and we see that we get **302 status-code**, implying that website has been permanently moved. 
- This is because we have encrypted the website now. We see that in the blue highlighted part.
- Next, the client (web browser) sends a "client hello" packet, giving information about itself. After this, the server replies with "server hello", followed by a key exchange to exchange SSL certificates. The client verifies the key/certificate and sends one of its own. After this, an encrypted handshake is initiated to confirm whether the encryption and transfer are working correctly.
- Notice that:
  - `port 80` indicates that the site is using **http**.
  - `port 443` indicates that the site is using **https**.

- **cURL for HTTPS**
  - cURL automatically handle all HTTPS communication standards and perform a secure handshake and then encrypt and decrypt data automatically.
  ```bash
  Katt02@kali$ curl https://inlanefreight.com
  curl: (60) SSL certificate problem: Invalid certificate chain
  More details here: https://curl.haxx.se/docs/sslcerts.html
  ...SNIP...
  ```
  - We may face such an issue when testing a local web application or with a web application hosted for practice purposes, as such web applications may not yet have implemented a valid SSL certificate.
  - To skip the certificate check with cURL, we can use the -k flag:

```bash
Katt02@kali$ curl -k https://inlanefreight.com
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
...SNIP...
```
- As we can see, the request went through this time, and we received the response data.

 _Note: Although the data transferred through the HTTPS protocol may be encrypted, the request may still reveal the visited URL if it contacted a clear-text DNS server. For this reason, it is recommended to utilize encrypted DNS servers (e.g. 8.8.8.8 or 1.1.1.1), or utilize a VPN service to ensure all traffic is properly encrypted._

## HTTP Requests and Responses
- HTTP communications mainly consist of an **HTTP request** and an **HTTP response**.
- An HTTP request is made by the client (e.g. cURL/browser), and is processed by the server (e.g. web server).
- Once the server receives the **HTTP request**, it processes it and responds by sending the **HTTP response**, which contains the response code
- **HTTP Request**:
  - The image below shows an HTTP GET request to the URL:
  ![http-request](/assets/img/http-request.PNG){: .writeup-image }
- The first line of any HTTP request contains three main fields 'separated by spaces':
<table>
<thead>
    <tr>
      <th>Field</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Method</td>
      <td>GET</td>
      <td>The HTTP method or verb, which specifies the type of action to perform.</td>
    </tr>
    <tr>
      <td>Path</td>
      <td>/users/login.html</td>
      <td>The path to the resource being accessed.</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>HTTP/1.1</td>
      <td>The third and final field is used to denote the HTTP version.</td>
    </tr>
  </tbody>
</table>

- **HTTP Response**:
  - Once the server processes our request, it sends its response. The following is an example HTTP response:
  ![http-response](/assets/img/http-response.PNG){: .writeup-image }
  - The first line of an HTTP response contains two fields separated by spaces. The first being the **HTTP version** (e.g. HTTP/1.1), and the second denotes the **HTTP response code** (e.g. 200 OK).

- **cURL**
  - cURL also allows us to preview the full HTTP request and the full HTTP response.
  - which is very handy when performing web penetration tests or writing exploits. 
  - To view the full HTTP request and response, we can simply add the `-v` verbose flag to our earlier commands, and it should print both the request and response:

```bash
Katt02@kali$ curl inlanefreight.com -v
*   Trying SERVER_IP:80...
* TCP_NODELAY set
* Connected to inlanefreight.com (SERVER_IP) port 80 (#0)
> GET / HTTP/1.1
> Host: inlanefreight.com
> User-Agent: curl/7.65.3
> Accept: */*
> Connection: close
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 401 Unauthorized
< Date: Tue, 21 Jul 2020 05:20:15 GMT
< Server: Apache/X.Y.ZZ (Ubuntu)
< WWW-Authenticate: Basic realm="Restricted Content"
< Content-Length: 464
< Content-Type: text/html; charset=iso-8859-1
< 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
...SNIP...
```
  - As we can see, this time, we get the full HTTP request and response.
  - The request simply sent `GET` `/ HTTP/1.1` along with the `Host`, `User-Agent` and `Accept` headers.
  - In return, the HTTP response contained the **HTTP/1.1 401 Unauthorized**, which indicates that we do not have access over the requested resource.
  - Similar to the request, the response also contained several headers sent by the server, including `Date`, `Content-Length`, and `Content-Type`.
  - Finally, the response contained the response body in HTML, which is the same one we received earlier when using cURL without the `-v` flag.
  - The `-vvv` flag shows an even more verbose output.

- **Browser DevTools**:
  - Most modern web browsers come with built-in developer tools (DevTools), which are mainly intended for developers to test their web applications.
  - However, as web penetration testers, these tools can be a vital asset in any web assessment we perform, as a browser (and its DevTools) are among the assets we are most likely to have in every web assessment exercise.
  - To open the browser devtools in either Chrome or Firefox, we can click `[CTRL+SHIFT+I]` or simply click `[F12]`.
  - If we click on the **Network tab** and refresh the page, we should be able to see the list of requests sent by the page: 
  ![devtools](/assets/img/devTools.PNG){: .writeup-image }
  - As we can see, the devtools show us at a glance the response status (i.e. response code), the request method used (GET), the requested resource (i.e. URL/domain), along with the requested path. Furthermore, we can use Filter URLs to search for a specific request, in case the website loads too many to go through.


_Note: HTTP version 1.X sends requests as clear-text, and uses a new-line character to separate different fields and different requests. HTTP version 2.X, on the other hand, sends requests as binary data in a dictionary form_