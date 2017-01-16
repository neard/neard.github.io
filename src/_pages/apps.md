---
title: Applications
permalink: /apps/
sidebar: modules
---
{% include vars.html %}

**Applications** are third-party utilities used by some binaries like phpMyAdmin used by PHP and MySQL / MariaDB. Each application has is own Apache alias (see `neard\alias` folder).

{% for module in site.data.module %}{% if module[1].type == 'apps' %}
* [{{ module[1].label }}](/apps/{{ module[1].name }}/) : {{ module[1].desc }}{% endif %}{% endfor %}

## Typical installation

To install a new version of an application you have to :

* Download and install [Neard](/doc/get-started).
* If you already have started Neard, stop it.
* Download a bundle of the application of your choice (download links in the application page of your choice like [Adminer](/apps/adminer/)).
* Use a file archiver that supports [7z format](http://www.7-zip.org/7z.html) like [7zip](http://www.7-zip.org/) and extract the archive in `neard\apps\{name}\` :

```text
[-] neard
 | [-] apps
 |  | [-] {name}
 |  |  | [-] {name}{version}
 |  |     | neard.conf
 |  |  | [-] {name}{version}
 |  |     | neard.conf
```

* Edit the `neard.conf` file and replace the key `{name}Version` with the correct version.
* Start Neard.