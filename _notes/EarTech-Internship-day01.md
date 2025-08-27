---
layout: note
title: "AI & Cybersecurity(Internship)"
description: "Introduction to azure services and creating labs"
tags: [datacenters, cloud computing, labs, application security, azure]
date: 2025-07-07
---

## Day 01: Data and Application & Intro to Confidential Ledgers(Lab) 
- **What is Azure**?
    - Azure is a cloud computing platform created by microsoft
    - It competes with the likes of **AWS**-Created by Amazon and also **Google cloud** which of course created by Google.
- **What is Azure Security**?
    - Azure Security is the protection framework that ensures confidentiality, integrity, and availability of resources and services hosted on Microsoft Azure.

## Azure Security Services: Data and Application Security
There are a few categories that we are being taught.
- **App Compliance Automation Tool**
    - Essentially, it is a tool used to check apps if they meet the **security** and **compliance** standards.
- **Application security groups**
    - Basically you can create one rule for a group of services or virtual machines to adhere to rather than creating a separate rule for each service.
- **Confidential Ledgers**
    - Azure Confidential Ledger is a secure, tamper-proof database service that stores sensitive data in a way that even Microsoft or cloud administrators cannot alter or delete. It uses **blockchain-like technology** to ensure that once data is written, it cannot be changed or erased without detection.
- **Log Analytics workspace**
    - Leverage unique environments for log data from Azure Monitor and other Azure services,
- **Web Application Firewall policies (WAF)**
    - Create a Web Application Firewall policy to protect your web applications from common exploits and vulnerabilities.

# Confidential Ledgers
- **Key features**:
    - **Immutable** -> Once data is added, it cannot be modified or deleted.
    - **Confidential** -> Data is encrypted and processed in a secure, hardware-backed environment.
    - **Tamper-Proof** -> Any unauthorized changes are detected immediately.
    - **Managed Services** -> No need to set up complex blockchain networks; Azure handles it.
- **But what is block-chain**?
    - *"Blockchain is a digitally distributed, decentralised, public ledger that securely records transactions across a network of computers, making it transparent and resistant to tampering."*
    - The definition sounds the same as the **Confidential Ledger**.