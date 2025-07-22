---
layout: note
title: "Server Side Template Injection(SSTI)"
description: "user input is improperly embedded in a server-side template"
tags: [input, web, template, tplmap]
date: 2025-07-22
---

# Server Side Template Injection(SSTI)
- Server-side template injection is when an attacker is able to use native template syntax to inject a malicious payload into a template, which is then executed server-side. 
- **In simple**: SSTI occurs when user input is improperly handled in server-rendered templates, allowing attackers to execute arbitrary code on the server.
- *At the severe end of the scale, an attacker can potentially achieve remote code execution, taking full control of the back-end server and using it to perform other attacks on internal infrastructure.* 
- **Why It’s Dangerous:**
    - Access to files
    - Execution of OS commands
    - Data exfiltration

## Popular Template Engines
- **Jinja2** (Python/Flask): Uses `{{ }}` syntax.
- **Twig** (PHP) Inspired by Jinja, used in Symfony and Drupal.
- **Thymeleaf** (Java) Used with Spring, integrates well with HTML5: uses `${ }` syntax.
- **Handlebars** (JavaScript): Focuses on logic-less templates.
- (ERB/Ruby) `<%= 7*7 %>`

## How SSTI Happens: The Vulnerable Code
- Developers often try to create dynamic content by directly adding user input into templates:
```text
template = "Hello " + user_input + "!"
render_template(template)
If user_input = “{{ 7*7 }}”, this may get evaluated to 49 on the server.
```

## Tool
- There is a tool that 
- **Tplmap** is an automated cyber security tool that can perform checking and exploitation of SSTI (Server-side template injection) vulnerability.
- **Tplmap** tool supports lots of template engines like PHP, Ruby, Python, Jinja2, and Tornado.
- **Installation & Setup**:
    - Step 1
    ```bash
    git clone https://github.com/epinna/tplmap.git
    ```
    - Step 2
    ```bash
    cd tplmap
    ```
    - Step 3
    ```bash
    sudo pip3 install -r requirements.txt
    ```
    - Step 4(**Exploiting the vulnerability**)
    ```bash
    python3 tplmap.py --os-shell -u 'http://www.target.com/page.php?id=1*'
    ```


# A quick approach
![ssti approach](/assets/img/ssit-approach.PNG)