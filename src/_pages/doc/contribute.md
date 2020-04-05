---
title: Contribute
permalink: /doc/contribute/
sidebar: doc
---
{% include vars.html %}

# Requirements

## OpenJDK

You need OpenJDK 11 that you can download [here](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_windows-x64_bin.zip){:target="_blank"}.<br />
Extract the archive on your computer (eg. `C:\jdk`) and add the path to `java.exe` (eg. `C:\jdk\bin`) to your environment variable PATH.<br />
To check if you have Java in your path, open a command prompt and type `java -version` :

```text
openjdk version "11.0.2" 2019-01-15
OpenJDK Runtime Environment 18.9 (build 11.0.2+9)
OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)
```

## Apache Ant

[Apache Ant](https://ant.apache.org/){:target="_blank"} is used with the OpenJDK to build and package the portapp.<br />
You need at least Apache Ant 1.10.5 that you can download on the [Apache website](https://ant.apache.org/bindownload.cgi){:target="_blank"}.<br />
Extract the archive on your computer (eg. `C:\apache-ant`) and add the path to `ant.bat` (eg. `C:\apache-ant\bin`) to your environment variable PATH.<br />
To check if you have Apache Ant in your path, open a command prompt and type `ant -version` :

```text
Apache Ant(TM) version 1.10.5 compiled on July 10 2018
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