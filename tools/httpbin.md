---
layout: default
title: "httpbin"
data_page: tools
---

<div class="terminal-header">
  <span class="prompt">$</span> <span class="cmd">cat httpbin.md</span>
</div>
# <span style="font-family: 'Fira Mono', monospace;">httpbin</span>

<p>httpbin.org is a simple HTTP Request & Response service that provides various endpoints to test different HTTP scenarios. It's essentially a "sandbox" for HTTP operations.</p>

## Key Features
- **Request Inspection**: Examine HTTP request data like headers, form data, and cookies
- **Response Formats**: Get responses in JSON, XML, HTML and other formats
- **Status Codes**: Test different HTTP status codes (200, 404, 500, etc.)
- **Request Methods**: Supports GET, POST, PUT, DELETE, PATCH and other HTTP methods
- **Authentication**: Test Basic Auth and Bearer Token authentication
- **Dynamic Data**: Generate random data, delayed responses, and streaming data

## Common Use Cases
- API testing and development
- Debugging HTTP clients
- Learning about HTTP protocols
- Network troubleshooting
- Testing proxy configurations

## Example Endpoints
- `/ip` - Returns the client's IP address
- `/user-agent` - Returns the user-agent header
- `/headers` - Returns all request headers
- `/delay/n` - Delays response by n seconds
- `/status/code` - Returns specified HTTP status code

<div class="resource-card">
  <h2>Web tool</h2>
  <ul>
    <li><strong>Official Site:</strong> <a href="https://httpbin.org/" target="_blank">httpbin</a></li>
    <li><strong>Source Code:</strong> <a href="https://github.com/postmanlabs/httpbin" target="_blank">GitHub Repository</a></li>
  </ul>
</div>

<a href="/resources" class="back-link">&#8592; Back to Resources</a>