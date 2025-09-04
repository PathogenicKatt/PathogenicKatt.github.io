---
layout: note
title: "Security Operations Center (SOC)"
description: "investigate, monitor, prevent, and respond to threats in the cyber realm 24/7 or around the clock"
tags: [siem, logs, threat-hunter, threat-intelligence, reporting, ticketing]
date: 2025-09-03
---

## Intro to SOC
- Before we go further we need to understand that, there are levels in this field. It is mostly broken down into 3 tiers.
- **Tier 1: Junior Security Analyst (Triage)**
    - Monitors the Network traffic network logs and events.
    - Works on the tickets and closes alerts.
    - Performs basic investigations and mitigations.
- **Tier 2: Security Operations Analyst (Incident Report)**
    - Focuses on deeper investigations, analysis and remediation.
    - Proactively hunts for adversaries.
    - Monitors and resolves more complex alerts.
- **Tier 3: Security Operations Analyst (Threat Hunter)**
    - Works on more advanced investigations.
    - Performs advanced threat hunting and adversary research (Looking for who is behind the hack).
    - Malware reversing. 

<br>
_The core function of a SOC (Security Operations Center) is to investigate, monitor, prevent, and respond to threats in the cyber realm 24/7 or around the clock._
- What is included in the responsibilities of the SOC?
    ![SOC responsibilites](/assets/img/android-htb(7).PNG){: .writeup-image}
    - **Preparation and Prevention**<br>
    -> As a Junior Security Analyst, you should stay informed of the current cyber security threats. <br>
    -> Prevention methods include gathering intelligence data on the latest threats, threat actors, and their TTPs (Tactics, Techniques, and Procedures).
        - **TTPs**<br>
        -> Tactics, techniques and procedures (TTPs) are the “patterns of activities or methods associated with a specific threat actor or group of threat actors.” <br>
        -> Analysis of TTPs aids in counterintelligence and security operations by describing how threat actors perform attacks.<br>
        _TTPs describe how threat actors (the bad guys) orchestrate, execute and manage their operations attacks. (“Tactics” is also sometimes called “tools” in the acronym.) Specifically, TTPs are defined as the “patterns of activities or methods associated with a specific threat actor or group of threat actors,” according to the Definitive Guide to Cyber Threat Intelligence._
    - **Monitoring and Investigation**<br>
    -> A SOC team proactively uses *SIEM (Security information and event management)* and *EDR (Endpoint Detection and Response)* tools to monitor suspicious and malicious network activities. <br>
    ->  Imagine being a firefighter and having a multi-alarm fire - one-alarm fires, two-alarm fires, three-alarm fires; the categories classify the seriousness of the fire, which is a threat in our case. <br>
    -> Junior Security Analysts play a crucial role in the investigation procedure, they perform triaging on the ongoing alerts by exploring and understanding how a certain attack works and preventing bad things from happening if they can.
    - **Response** <br>
    -> After the investigation, the SOC team coordinates and takes action on the compromised hosts, which involves isolating the hosts from the network, terminating the malicious processes, deleting files, and more. 


