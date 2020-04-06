---
title: Get started
permalink: /doc/get-started/
sidebar: doc
markdown_body: ""
---

<div class="markdown-body">{% markdown %}
# Requirements

* Windows 7 or later.
* [WSH (Windows Script Host)](https://support.microsoft.com/en-us/kb/232211) : Open a command prompt and type `wscript` to check.
* [SETX](http://technet.microsoft.com/en-us/library/cc755104.aspx) : Open a command prompt and type `setx /?` to check.
* Be [Admin user](https://support.microsoft.com/en-us/help/14028/windows-7-how-log-on-as-an-administrator).
* Download and install the latest [Neard Prerequisites Package]({{ site.github.baseurl }}/neard/prerequisites/releases/latest).

# Download

{% endmarkdown %}<span></span></div>

<p>
  <a href="{{ site.baseurl }}/release/latest/" class="btn btn-success btn-lg">
    <span class="fa fa-download"></span>&nbsp;&nbsp;Download the latest release
  </a>
</p>
<p>
  <a href="{{ site.baseurl }}/releases/" class="btn btn-default">
    View all Neard releases
  </a>
</p>
<div class="markdown-body">
  <h2 id="modules">Modules</h2>
  <p>Neard offers several versions of the various binaries, applications and tools for download :</p>
  <span></span>
</div>
<p>
  <a href="{{ site.baseurl }}/modules/" class="btn btn-primary" style="text-align: left">
    <span class="fa fa-download"></span>&nbsp;&nbsp;Download modules<br /><small>Apache, PHP, MySQL, Node.js, Git, Adminer, Perl, Python, etc.</small>
  </a>
</p>

<div class="markdown-body">{% markdown %}
# Installation

Use a file archiver that supports [7z format](https://www.7-zip.org/7z.html) like [7zip](https://www.7-zip.org/) and extract the archive where you want.

{% include callout.html type="warning" text="It is highly recommended that the path to Neard <strong>does not contains any whitespaces</strong>. This can cause problem on some modules." %}

# Configuration

Before starting Neard, edit the configuration file `neard.conf` :

* **lang** - Language (see `neard\core\langs` folder for a complete list). Default : `english`
* **timezone** - The default timezone used by all date/time functions. Default : `"Europe/Paris"`
* **notepad** - The editor while opening files. Default : `"notepad.exe"`
* **logsVerbose** - Control the log output verbose (0=simple, 1=report, 2=debug, 3=trace). Default : `0`
* **scriptsTimeout** - The default timeout when VBS/Batch are executed. May vary depending on your system. Default : `120`

# Usage

Launch `neard.exe`.

# Upgrade

All instructions to upgrade from a previous release are added in the [Upgrade notes](/doc/upgrade-notes/) page.
{% endmarkdown %}</div>