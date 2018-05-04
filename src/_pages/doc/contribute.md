---
title: Contribute
permalink: /doc/contribute/
sidebar: doc
---
{% include vars.html %}

# Requirements

## Java SE Development Kit

The JDK includes tools useful for developing and testing programs written in the Java programming language and running on the Java platform.<br />
You need at least the JDK 1.7.0_25 (7u25).<br />
You can download the Java SE Development Kit on the [Oracle website](https://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html){:target="_blank"}.<br />
Add the path to `java.exe` (eg. `C:\Program Files\Java\jdk1.7.0\bin`) to your environment variable PATH.<br />
To check if you have Java in your path, open a command prompt and type `java -version` :

```text
java version "1.7.0_79"
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) Client VM (build 24.79-b02, mixed mode, sharing)
```

## Apache Ant

[Apache Ant](https://ant.apache.org/){:target="_blank"} is a Java library and command-line tool that help building software.<br />
You need at least Apache Ant 1.8.0.<br />
You can download the binary zip archive of Apache Ant on the [Apache website](https://ant.apache.org/bindownload.cgi){:target="_blank"}.<br />
Extract the archive on your computer (eg. `C:\apache-ant`) and add the path to `ant.bat` (eg. `C:\apache-ant\bin`) to your environment variable PATH.<br />
To check if you have Apache Ant in your path, open a command prompt and type `ant -version` :

```text
Apache Ant(TM) version 1.8.4 compiled on May 22 2012
```

# Configuration

* Fork and clone the module of your choice.
* Clone [dev](https://github.com/neard/dev) in the parent folder of the module.
* Create a new pull request with your work.

For example :

```text
cd C:\work\
git clone --recursive https://github.com/neard/module-adminer.git
git clone --recursive https://github.com/neard/dev.git
cd module-adminer\
```

Directory structure example :

```text
[-] dev
 | [-] build
 |  |  | build-commons.xml 
[-] neard-{bin|app|tool}-{name}
 |  | build.xml
```

If you are not familiar with pull request, you can create a new module like this :

* Increment the `build.release` in the `build.properties` file.
* If you want you can change the `build.path` (default `C:\neard-build`).
* Open a command prompt in your module folder and call the Ant target `release` : `ant release`.
* Upload your release on a file hosting system like [Sendspace](https://www.sendspace.com/).
* Create an [issue on Neard repository]({{ var_repo_url }}/issues) to integrate your release.