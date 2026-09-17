---
layout: note
title: "API & API Keys"
description: "A breakdown of what APIs are, how they work, and how API keys and tokens fit into authentication and security."
tags: [api, api-key, authentication, security]
date: 2026-09-17
---

# API & API Keys

This is my current understanding of the topic as I continue learning about APIs and API security.

An API, or Application Programming Interface, is a way for two software systems to talk to each other.

In simple this is how i understood the whole concept. Consider a waiter in a restaurant. You tell the waiter what you want, the waiter takes the request to the kitchen, and the kitchen sends back the food. In the software world, the client sends a request, the API forwards it to the backend service, and the backend returns the response.

This is how websites, mobile apps, and services communicate with each other. From what I have learned so far, APIs are basically the middle layer that helps different systems work together in a structured way.


## Why APIs matter

APIs are everywhere:
- websites fetching data from a backend
- mobile apps talking to servers
- payment systems
- social media integrations
- cloud platforms
- internal services within a company

Without APIs, most modern apps would not work the way they do today.

## A simple real-world example

Imagine a mobile app that shows your latest messages.

1. The app opens and sends a request to an API.
2. The API checks whether you are authenticated.
3. If you are allowed, it fetches the data from a database.
4. The API sends back the data in JSON.
5. The app displays it to the user.

Here is the core idea: the client does not talk directly to the database; it talks to an API, and the API controls access.

## Basic API flow

A very simple request/response flow looks like this:

- Client sends a request
- API receives the request
- API validates authentication and inputs
- API accesses the needed service or database
- API prepares a response
- Client receives the response

In a diagram, it looks like this:

![client to api diagram](/assets/img/client-api-diagram.png)


## Common HTTP methods

APIs typically use standard HTTP methods.

- GET: retrieve data
- POST: create new data
- PUT: replace data
- PATCH: update part of data
- DELETE: remove data

Examples:

- GET /users -> get all users
- GET /users/42 -> get one user
- POST /users -> create a new user
- DELETE /users/42 -> delete a user

## How an API request looks

A request usually includes:
- method
- URL or endpoint
- headers
- body (sometimes)
- query parameters (sometimes)

Example:

```http
GET /users/42 HTTP/1.1
Host: api.example.com
Authorization: Bearer abc123
Accept: application/json
```

The API then responds with something like:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 42,
  "name": "Alice",
  "email": "alice@example.com"
}
```

## What is JSON?

JSON stands for JavaScript Object Notation.

It is the most common format used in APIs to send data back and forth.

Example:

```json
{
  "id": 1,
  "username": "pathogenickatt",
  "is_admin": false,
  "roles": ["user", "editor"]
}
```

JSON is easy for machines to read and easy for developers to work with.

## Endpoint basics

An endpoint is a specific route the API exposes.

Examples:
- /users
- /products
- /login
- /admin/users
- /v1/orders

Think of endpoints as specific doors into an application.

Some endpoints are public. Some require authentication. Some require admin privileges.

## Status codes

HTTP response status codes tell you whether the request worked or failed.

Common ones:
- 200 OK -> success
- 201 Created -> resource created
- 204 No Content -> success but no response body
- 400 Bad Request -> malformed or invalid request
- 401 Unauthorized -> missing or invalid authentication
- 403 Forbidden -> authenticated but not allowed
- 404 Not Found -> endpoint or resource not found
- 429 Too Many Requests -> rate limit reached
- 500 Internal Server Error -> server-side failure

These codes are extremely useful when testing and debugging APIs.

## API authentication vs authorization

This is an important distinction.

### Authentication
Authentication answers: Who are you?

Examples:
- API key
- username/password
- JWT token
- OAuth token

### Authorization
Authorization answers: What are you allowed to do?

For example:
- normal user can view their profile
- admin can delete accounts
- a service can access only one internal endpoint

A user can be authenticated but still not authorized.

## What is an API key?

An API key is a secret value used to identify an application or a user when calling an API.

It may be sent in:
- a header
- a query parameter
- a URL
- a cookie (less common)

Example:

```http
GET /data HTTP/1.1
Host: api.example.com
X-API-Key: 5f9d3c16a5b2e9d1
```

API keys are often used for:
- identifying an app
- tracking API usage
- controlling access
- limiting requests by service or client

However, API keys are not always strong authentication by themselves.

If a key is exposed, pasted into a repository, leaked in logs, or sent in a query string, it can be abused.

## API keys are not always the same as login credentials

This is important to understand.

An API key is often just a secret used to recognize a client. It may not tell you the identity of a human user in a strong way.

That means:
- a key may prove the app is trusted
- it may not prove the exact person using the app
- if used without other controls, it can be dangerous

A system that relies on a single API key for all access is often weak if the key is stolen or shared.

## Tokens and bearer auth

A token is another common form of authentication.

The most common pattern is Bearer Authentication.

Example:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

This tells the API:
- “Here is a token that proves the caller’s identity.”

Tokens can be:
- short-lived
- signed
- scoped to specific permissions
- used with OAuth or JWT

### JWT
JWT stands for JSON Web Token.

A JWT is a compact token that contains encoded information, usually including:
- who the user is
- what roles they have
- when the token expires

Example conceptually:

```text
header.payload.signature
```

JWTs are common in modern web apps, but they are only as secure as the signing and validation process behind them.

## OAuth and delegated access

OAuth is commonly used when one app wants to access resources from another app on behalf of a user.

Example:
- you log into an app with Google
- the app asks Google for permission
- Google issues an access token
- the app uses that token to access limited data

This is more secure than sharing a password directly, but it still requires proper validation and careful permission design.

## Common API security issues

This is one of the most important sections for security-focused notes.

### 1. Exposed API keys
A key ends up in source code, screenshots, logs, browser dev tools, or public repos.

### 2. Weak access control
An API lets users access data they should not see.

### 3. Missing rate limits
Attackers can spam requests or brute force endpoints.

### 4. Broken authentication
APIs accept invalid or tampered tokens.

### 5. IDOR
Insecure Direct Object Reference occurs when a user can change an ID and access another user’s data.

Example:
- /api/users/12
- change it to /api/users/13
- if the check is weak, you may access another account

### 6. Mass assignment issues
An attacker submits extra user fields that the API accepts and stores unexpectedly.

### 7. Verb tampering
Using the wrong HTTP method or abusing allowed routes.

### 8. Information leakage
The API returns stack traces, debug messages, or overly detailed errors.

## API hacking mindset

When learning API security, it helps to think like this:

1. What endpoint is exposed?
2. Does the API require authentication?
3. How is identity verified?
4. Is authorization properly enforced?
5. Can I manipulate IDs, tokens, or parameters?
6. Can I trigger unexpected behavior with edge cases?
7. Does the API leak data or errors?

This is a very practical way to review an API without needing to be an expert immediately.

## A simple API walkthrough

Imagine an endpoint like this:

```http
GET /api/v1/users/42
Authorization: Bearer token123
```

Possible flow:

- request arrives at the API server
- server checks if the token is valid
- server verifies that the caller can access user 42
- server loads the user from the database
- server returns the JSON object

If the system is weak, an attacker may be able to do this:

```http
GET /api/v1/users/43
Authorization: Bearer token123
```

If the server does not enforce proper authorization, the attacker can view another user’s data.

This single pattern is often the basis for many real-world vulnerabilities.

## Rate limiting and abuse

Many APIs have rate limits to prevent:
- brute-force attacks
- spam requests
- bot traffic
- abuse of expensive endpoints

If there is no rate limit, an attacker may be able to spam requests or test credentials repeatedly.

A common status code for this is:

- 429 Too Many Requests

## Headers and request metadata

Headers are one of the most important parts of an API request.

Common headers include:
- Content-Type
- Authorization
- Accept
- User-Agent
- X-API-Key
- Cookie

Headers often contain important metadata for authentication, routing, encoding, and resource negotiation.

If you are testing an API, checking headers is often the first thing you should do.

## Why API keys can be dangerous

A leaked API key can lead to:
- unauthorized access
- account takeover in some systems
- data leakage
- quota abuse
- spam or automated misuse

This is why developers should not:
- hardcode keys into front-end code
- paste them into public repos
- store them in plain text logs
- send them in URL query strings when avoidable

Good security practices usually include:
- rotating keys regularly
- limiting key permissions
- using environment variables
- storing secrets in secure secret managers
- monitoring unusual use

## Practical example: making a request with a public API

A very beginner-friendly way to understand API behavior is to use a public API that does not require a paid account.

Examples:
- https://jsonplaceholder.typicode.com/
- https://reqres.in/
- https://pokeapi.co/
- https://api.github.com
- https://httpbin.org/
- https://open-meteo.com/

These services let you send real requests and inspect the response.

### Example: JSONPlaceholder

Open this in a browser:

https://jsonplaceholder.typicode.com/todos/1

You will get a JSON object like:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

This is a perfect example because it shows what a simple API response looks like.

## Great playgrounds for learning APIs

These are good resources for things you can actually click around and take screenshots from:

- https://jsonplaceholder.typicode.com/
- https://reqres.in/
- https://pokeapi.co/
- https://httpbin.org/
- https://api.github.com
- https://dummyjson.com/
- https://open-meteo.com/
- https://www.thecatapi.com/

These are useful because they are public, free, and easy to understand.

## A beginner-friendly way to demonstrate API behavior

If you want to show how an API works visually, you can create a step-by-step demo using screenshots.

### Option 1: Browser + public API

1. Open a public API endpoint in the browser.
2. Capture the URL.
3. Explain the request method.
4. Show the JSON response.
5. Highlight the headers.
6. Explain what each part means.

This works well for a blog post or a note page.

### Option 2: Postman

Use Postman to send requests and capture screenshots of:
- request URL
- method dropdown
- headers tab
- body tab
- response body
- status code

This is one of the best ways to visually explain an API.

### Option 3: curl in terminal

Example:

```bash
curl https://jsonplaceholder.typicode.com/todos/1
```

This is simple and shows how the request is made from the terminal.

## Good diagrams to include

For diagrams, I would recommend using screenshots or diagrams from these sites:

- https://www.redhat.com/en/topics/api/what-is-a-rest-api
- https://developer.mozilla.org/en-US/docs/Glossary/REST
- https://www.postman.com/what-is-an-api/
- https://www.akamai.com/glossary/what-is-an-api
- https://www.ibm.com/topics/rest-apis

These sites explain:
- client-server communication
- request/response model
- REST architecture
- API flow diagrams
- authentication basics

What you want to capture is not the full article, but the diagram that explains:
- client sends request
- API validates and forwards request
- backend responds
- client receives result

A strong diagram set would include:
- Client-server API communication diagram
- Request/response lifecycle diagram
- API key vs token diagram
- Authentication and authorization difference diagram
- Rate limiting flow diagram

## A fun “API in action” section idea

This would be a great section to add to the notes:

### Demo: How an API works step by step

Use a public API and walk through each stage.

Example with JSONPlaceholder:

1. Open the route: https://jsonplaceholder.typicode.com/todos/1
2. Explain that this is a GET request.
3. Show that the endpoint is a resource path.
4. Explain the HTTP status code.
5. Show the JSON body.
6. Explain headers and metadata.
7. Show how changing the endpoint changes the output.

This turns the abstract idea of an API into a real, visible process.

## Recommended setup for screenshots

If you want to make the notes visually strong, do this:

- screenshot the browser URL and response
- screenshot Postman request and response
- screenshot curl command output
- screenshot one diagram from a reference web page
- add short labels explaining each piece

This makes the content feel much more practical and easier to follow.

## Suggested sections for your notes page

A nice structure for your notes could be:

1. What is an API?
2. How an API works
3. Endpoint and HTTP methods
4. Request and response examples
5. JSON and status codes
6. API keys and tokens
7. Authentication vs authorization
8. Common API vulnerabilities
9. Rate limiting and abuse prevention
10. Public APIs to play with
11. Diagram references and screenshots
12. Final thoughts and future research

This is a very solid learning flow.

## Good reminder points

A few important things to keep in mind:

- APIs are just interfaces for communication.
- An API key is not always the same as a user login.
- Authentication proves identity; authorization decides access.
- Developers often forget to validate permissions on backend endpoints.
- Secrets should never be hardcoded into client-facing code.
- Public API playgrounds are one of the best ways to learn.

## Final note

The best way to understand APIs is to see them in action.

Do not just read definitions. Open a public API, observe the response, inspect the headers, try a different endpoint, and watch how the output changes. That hands-on practice is what makes the concept click.

API security becomes much clearer once you understand the basic request flow and the role of keys, tokens, and permissions.

This is a great topic to keep expanding because the more you interact with real APIs, the more you begin to see where design mistakes and security issues appear.

---

Useful references:
- https://www.postman.com/what-is-an-api/
- https://developer.mozilla.org/en-US/docs/Glossary/REST
- https://www.redhat.com/en/topics/api/what-is-a-rest-api
- https://www.akamai.com/glossary/what-is-an-api
- https://www.ibm.com/topics/rest-apis
- https://jsonplaceholder.typicode.com/
- https://reqres.in/
- https://pokeapi.co/
- https://httpbin.org/
- https://api.github.com

These are the kinds of resources that can support both the notes and the visual screenshots you want to include.

## Sources / references

These are some of the resources I used to build and cross-check my understanding of this topic:

- https://www.postman.com/what-is-an-api/
- https://developer.mozilla.org/en-US/docs/Glossary/REST
- https://www.redhat.com/en/topics/api/what-is-a-rest-api
- https://www.ibm.com/topics/rest-apis
- https://www.akamai.com/glossary/what-is-an-api
- https://jsonplaceholder.typicode.com/
- https://reqres.in/
- https://httpbin.org/
- https://api.github.com

These sources helped me understand the basic concepts behind API communication, HTTP methods, authentication, and common API behaviours.

This is still a learning process for me, and I will keep updating these notes as I continue studying and practicing.


