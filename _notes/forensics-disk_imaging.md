---
layout: note
title: "Disk Imaging"
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
      <td><strong>File Browser</strong></td>
      <td>Shows literally all files</td>
      <td>Helps find suspicious files</td>
    </tr>
    <tr>
      <td><strong>Hex Viewer</strong></td>
      <td>Allows you to inspect raw bytes(header analysis)</td>
      <td>You can check the <strong>magic bytes</strong></td>
    </tr>
    <tr>
      <td><strong>Keyword Search</strong></td>
      <td>Scans for strings(e.g CTF{.*})</td>
      <td>Find hidden flags in slack space</td>
    </tr>
    <tr>
      <td><strong>Timeline Analysis</strong></td>
      <td>Shows file activity timelines(who edited what and when)</td>
      <td>Track attacker actions</td>
    </tr>
    <tr>
        <td><strong>Hash Filtering</strong></td>
        <td>Identifies known files(e.g Malware hashes)</td>
        <td>Spot modified files</td>
    </tr>
  </tbody>
</table>

### Alternatively: Command-line approach
1. **The Sleuth Kit (TSK)** - A suite of command-line tools for forensic analysis of disk imaging.
- Installation:
    ```bash
    sudo apt install sleuthkit
    ```
- Essential commands:
<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Purpose</th>
      <th>Example Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>mmls</code></td>
      <td>Lists partitions in the disk image</td>
      <td><code>mmls disk.img</code> finds hidden partitions as well</td>
    </tr>
    <tr>
      <td><code>fls</code></td>
      <td>List files/dirs(including deleted)</td>
      <td><code>fls -r -d disk.img</code> Recursive(<code>-r</code>) + deleted file(<code>-d</code>)</td>
    </tr>
    <tr>
      <td><code>icat</code></td>
      <td>Extracts a specific file by inode</td>
      <td><code>icat disk.img 45 > file.txt</code> Recover file with inode 45.</td>
    </tr>
    <tr>
      <td><code>istat</code></td>
      <td>Show file metadata(timestamps)</td>
      <td><code>istat disk.img 45</code>Checks when the file was modified.</td>
    </tr>
    <tr>
        <td><code>fsstat</code></td>
        <td>File system details(block size, type)</td>
        <td><code>fsstat disk.img</code> just confirms if, it's FAT/NTFS.</td>
    </tr>
  </tbody>
</table>
- A few examples:
    ```bash
    mmls disk.img   # Find partition offset (e.g 2048)
    fls -o 2048 disk.img    # List files in partion
    icat -o 2048 disk.img 123 > secret.txt  # Extract file with inode 123
    ```
- What exactly is **inode**: Inodes are like file ID cards they don’t store the actual data but help investigators understand and recover critical file details during forensic analysis.
![ inode structure](/assets/img/inodeStructure.png){: .writeup-image }


2. **dd + foremost/scapel** - *File Carving*, when you need to recover deleted files or extract embedded data.
3. **bulk_extractor** -  *Faster Data Scanning*, extracts emails, credit cards, URLs, and other patterns from disk images.
4. **photorec** - Recovers files even if the *file system* is corrupted.
5. **Volatility** - This is for memory dumps, not for disk images but necessary to be included. It is a must know CLI tool for *memory forensics*(.raw, .mem files).

