---
title: Binaries
permalink: /bins/
sidebar: modules
---
{% include vars.html %}

**Binaries** are the main factor of Neard. Some require to be run as a service like Apache and others are used on demand like Node.js.

{% for module in site.data.module %}{% if module[1].type == 'bins' %}
* [{{ module[1].label }}](/bins/{{ module[1].name }}/) : {{ module[1].desc }}{% endif %}{% endfor %}

## Typical installation

To install a new version of a binary you have to :

* Download and install [Neard](/doc/get-started).
* If you already have started Neard, stop it.
* Download a bundle of the binary of your choice (download links in the binary page of your choice like [Apache](/bins/apache/)).
* Use a file archiver that supports [7z format](http://www.7-zip.org/7z.html) like [7zip](http://www.7-zip.org/) and extract the archive in `neard\bin\{name}\` :

```text
[-] neard
 | [-] bin
 |  | [-] {name}
 |  |  | [-] {name}{version}
 |  |     | neard.conf
 |  |  | [-] {name}{version}
 |  |     | neard.conf
```

* Start Neard.
* Switch your binary to the downloaded version (Left click > {name} > Versions)