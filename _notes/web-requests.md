---
layout: note
title: "Web Requests"
description: "A directory service for Windows network environments."
tags: [web, http, internet, https]
date: 2025-08-20
---

# Web Requests
- **HyperText Transfer Protocol (HTTP)**
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
