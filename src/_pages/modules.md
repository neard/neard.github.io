---
title: Modules
permalink: /modules/
---
{% include vars.html %}

## About

* **Binaries** are the main factor of Neard. Some require to be run as a service like Apache and others are used on demand like Node.js.
* **Applications** are third-party utilities used by some binaries like phpMyAdmin used by PHP and MySQL / MariaDB. Each application has is own Apache alias (see `neard\alias` folder).
* **Tools** are useful utilities to make Neard better. Some tools are required like ImageMagick because PHP binaries included Imagick extension.

## Modules

| Name | Type | Description |
| ---- | ---- | ----------- | ----------- | ----- | -------- | ------------ |{% for module in site.data.module %}
| [{{ module[1].label }}](/modules/{{ module[1].name }}/) | {% if module[1].type == 'bins' %}{% include label.html text="binary" type="primary" %}{% elsif module[1].type == 'apps' %}{% include label.html text="application" type="warning" %}{% elsif module[1].type == 'tools' %}{% include label.html text="tool" type="danger" %}{% endif %} | {{ module[1].desc }} |{% endfor %}

## Typical installation

To install a new version of an application you have to :

* Download and install [Neard](/doc/get-started).
* If you already have started Neard, stop it.
* Download a module of your choice (like [Apache](/modules/apache/#releases)).
* Use a file archiver that supports [7z format](http://www.7-zip.org/7z.html) like [7zip](http://www.7-zip.org/) and extract the archive in `neard\{bin|apps|tools}\{name}\` :

```text
[-] neard
 | [-] {bin|apps|tools}
 |  | [-] {name}
 |  |  | [-] {name}{version}
 |  |     | neard.conf
 |  |  | [-] {name}{version}
 |  |     | neard.conf
```

For **binaries**,

* Start Neard.
* Switch your binary to the downloaded version (Left click > {name} > Versions)

Otherwise,

* Edit the `neard.conf` file and replace the key `{name}Version` with the correct version.
* Start Neard.