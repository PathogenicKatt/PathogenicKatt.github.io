---
layout: note
title: "Forensics: Disk Imaging 🔍"
description: "a bit-for-bit copy of a storage device"
tags: [disk imaging, forensics, autopsy, memory, foremost]
date: 2025-06-14
---

## Disk imaging: Core Theory
So **disk imaging**, takes a copy of permanent storage devices like (USBs, SSDs, HDDs, SD cards). Formally, it is an electronic copy(bit-for-bit) of a drive, including **all files**(even deleted/hidden files), **file system structures**(FAT, NTFS, EXT4) and **unallocated space**(where deleted files linger).

### Why this matters?
**Disk imaging** matters because it helps *preserve evidence*(the original remains untouched), basically we do not want to temper with the original system. You get to *analyse safely* meaning you can modify the data with no risks, play around with the copy without messing up the original data evidence. and the most important part is that it helps *recover deleted files* from **anallocated space**.

### Basic Tools:
1. Autopsy - GUI-based, beginner friendly.
2. Binwalk - extract embedded files.
3. Foremost/Scapel - recovers deleted files.
4. Volatility - for memory dumps, not disk images

## Autopsy
- Here is a typical example of autopsy(gui):
    ![ autopsy](/assets/img/autopsy(1).png){: .writeup-image }
- It has useful features
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>What it does</th>
      <th>Use case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File Browser</td>
      <td>Shows literally all files</td>
      <td>Helps find suspicious files</td>
    </tr>
    <tr>
      <td>Hex Viewer</td>
      <td>Allows you to inspect raw bytes(header analysis)</td>
      <td>You can check the <strong>magic bytes</strong></td>

    </tr>
    <tr>
      <td>Keyword Search</td>
      <td>Scans for strings(e.g CTF{.*})</td>
      <td>Find hidden flags in slack space</td>
    </tr>
    <tr>
      <td>Timeline Analysis</td>
      <td>Shows file activity timelines(who edited what and when)</td>
      <td>Track attacker actions</td>
    </tr>
    <tr>
        <td>Hash Filtering</td>
        <td>Identifies known files(e.g Malware hashes)</td>
        <td>Spot modified files</td>
    </tr>
  </tbody>
</table>

