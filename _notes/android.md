---
layout: note
title: "Android"
description: "Android is a mobile operating system created for touchscreen devices like phones and tablets."
tags: [ARM]
date: 2025-08-30
---

## Android Fundamentals
- Android is a *Linux OS based*. And what that means is that, **Linux commands*** can be executed.

### Android Software Stack
- The android platform consists of 6 components:
![android stack](/assets/img/android-stack.png){: .writeup-image}
    - **System Apps**<br>
    -> System Apps is the top layer core component of the platform architecture. This component, already comes with pre-installed apps like:
        <table>
            <thead>
                <tr><th>Apps</th></tr>
            </thead>
            <tbody>
                <tr><td>Calender.</td></tr>
                <tr><td>Messaging.</td></tr>
                <tr><td>Camera.</td></tr>
                <tr><td>Browser.</td></tr>
                <tr><td>Maps.</td></tr>
                <tr><td>Settings.</td></tr>
            </tbody>
        </table>    
    -> Pre-installed apps can only be modified on rooted devices.
    - **Java API Framework**<br>
    -> This component provides software tools and interfaces for building Android applications. Below are some of the components tha Java API Framework provides:
        <table>
            <thead>
                <tr><th>Components</th></tr>
            </thead>
            <tbody>
                <tr><td>View System.</td></tr>
                <tr><td>Resource Manager.</td></tr>
                <tr><td>Notification Manager.</td></tr>
                <tr><td>Activity Manager.</td></tr>
                <tr><td>Content Providers.</td></tr>
                <tr><td>Location Manager.</td></tr>
                <tr><td>Package Manager.</td></tr>
            </tbody>
        </table>
    - **Native C/C++ Library**<br>
    -> The Native C/C++ Libraries component is a set of libraries written in the C and C++ programming languages, and are included in the Android operating system. The usage of C/C++ allows or enables developers to talk directly to the hardware, or make use of the hardware resources, also hardening the security. ART & HAL, make use of these libraries. That means the libraries need to be included in ART & HAL components. **Applications** can access these libraries through the *Java Native Interface (JNI)*(framework that allows Java code running in a Java Virtual Machine (JVM) to interact with applications and libraries written C and C++ or other languages), while programmers can use the *Android NDK* to access native libraries directly from their native code. 
    - **Android Runtime (ART)**<br>
    -> Android Runtime (ART) is the managed runtime environment used by the Android operating system to execute applications.<br>
    -> ART uses *Ahead-of-Time (AOT)* compilation. With AOT, application code is compiled into *native machine code* at install time, resulting in faster app launch times and improved runtime performance.<br>
    -> ART is capable of running multiple virtual machines concurrently, even on low-memory devices, and it executes applications packaged in the DEX (Dalvik Executable) format. Some of the core features and benefits of Android Runtime include: <br>
        <table>
            <thead>
                <tr><th>ART Features</th></tr>
            </thead>
            <tbody>
                <tr><td>Improved garbage collection.</td></tr>
                <tr><td>Better memory management.</td></tr>
                <tr><td>Better debugging support.</td></tr>
                <tr><td>Optimized compression of the DEX file.</td></tr>
            </tbody>
        </table>
    - **Hardware Abstraction Layer (HAL)**<br>
    -> software layer that provides the Android operating system with a *standardized interface* for interacting with hardware components, such as cameras, Bluetooth, sensors, and input devices.
    - **Linux Kernel**<br>
    -> Linux Kernel is the foundation of the android platform.

**Dalvik VM**<br>
-> The Dalvik Virtual Machine (DVM) was developed by Google and introduced with the first version of Android in 2008. <br>
-> Android applications written in Java or Kotlin are compiled into Java bytecode and then transformed into Dalvik bytecode, packaged in .dex (Dalvik Executable) or .odex (Optimized Dalvik Executable) file formats. <br>
-> Unlike the Java Virtual Machine (JVM), which is stack-based, the Dalvik VM is a register-based virtual machine. <br>
-> This architectural difference allows for more efficient execution on devices with limited CPU and memory resources, which is ideal for mobile environments.<br>
-> ART maintains compatibility by using the same .dex bytecode format as Dalvik, but differs significantly in its execution model. While Dalvik used Just-in-Time (JIT) compilation, ART initially used Ahead-of-Time (AOT) compilation — compiling bytecode into native machine code at install time, resulting in faster startup and improved performance.
-> In later Android versions, ART evolved to include hybrid JIT + AOT and Profile-Guided Optimizations (PGO), further enhancing runtime efficiency and battery performance.
- **Rooting**:
    - Android separates the flash storage into the following two main partitions. <br>
    -> `/system/`: This partition is used by the *operating system*<br>
    -> `/data/`:  This partition  is used for *user data* and *application installations*.
    
    - In Android, users don't have root access to the operating system, and some partitions (like `/system/`) are `read-only`.
    - However, rooting the device can be achieved by exploiting security flaws.