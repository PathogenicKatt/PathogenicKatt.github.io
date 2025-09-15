---
layout: note
title: "Redis"
description: "Redis is a key-value database."
tags: [redis-cli, database]
date: 2025-08-15
---

# Redis 
- Redis (Remote Dictionary Server) is an open-source, in-memory data structure store.
- Because it stores the data in RAM memory, it is very fast!
- **Common Uses**: 
    - Caching, 
    - message brokering, 
    - real-time analytics, 
    - session storage, 
    - leaderboards.
- **Default Port**: 6379 (TCP), also note that this port is not included in Nmap's default top 1000 port scan.

## Connecting to Redis
_The following is a HackTheBox Lab:_
- **Enumeration & Discovery**<br>
![redis](/assets/img/htb-redis.PNG){: .writeup-image}
    - As we know that, the default port of redis is **6379**.
    - `-p`: specifies the port.
    - But notice the difference with the below enumeration:<br>
![redis](/assets/img/htb-redis(1).PNG){: .writeup-image}
    - `sC`: Default Script (checks vulnerabilities)
    - `sV`: service version<br>
![redis](/assets/img/htb-redis(2).PNG){: .writeup-image}
    - We are in!
    - `-h`: specifies the host
    - Now we have throw in, the command used within redis.
    - Hence, our first command `info`:<br>
![redis](/assets/img/htb-redis(3).PNG){: .writeup-image}
    - Note i have highlighted, only the crucial info.
    - For instance, we can look for exploits avalaible for that version:<br>
![redis](/assets/img/htb-redis(7).PNG){: .writeup-image}
    - We see that we get nothing, but for older version; i'm sure we can get some exploits.
    - But here is more, regarding the server:<br>
![redis](/assets/img/htb-redis(5).PNG){: .writeup-image}
    - Now, our next command is `keys *`, it displays the available keys:
![redis](/assets/img/htb-redis(4).PNG){: .writeup-image}
    - From there we see our flag!
    - And using `get flag`, we get our flag.
![redis](/assets/img/htb-redis(6).PNG){: .writeup-image}

<br>
_Here are a couple more commands used in `redis-cli`_
<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>SELECT index</code></td>
            <td>Switches to a different database. Redis supports multiple databases (0-15 by default).</td>
        </tr>
        <tr>
            <td><code>TYPE key</code></td>
            <td>Returns the data type of a key (string, list, set, hash, etc.)</td>
        </tr>
        <tr>
            <td><code>CONFIG GET *</code></td>
            <td>Dangerous. Attempts to get all configuration parameters.</td>
        </tr>
    </tbody>
</table>

## Why Redis is a Target
- **Exposed to the Network**:
    - By default, Redis binds to `127.0.0.1` (localhost only)
    - If misconfigured to bind to `0.0.0.0`, it becomes accessible from any network.
 - **Arbitrary File Write**:
    - A Threat-Actor can manipulate Redis to write a file to any location the Redis server process has write permissions to.
   



