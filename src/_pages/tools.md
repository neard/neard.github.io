---
title: Tools
permalink: /tools/
sidebar: modules
---
{% include vars.html %}

**Tools** are useful utilities to make Neard better. Some tools are required like ImageMagick because PHP binaries included Imagick extension.

{% for module in site.data.module %}{% if module[1].type == 'tools' %}
* [{{ module[1].label }}](/tools/{{ module[1].name }}/) : {{ module[1].desc }}{% endif %}{% endfor %}

## Typical installation

To install a new version of a tool you have to :

* Download and install [Neard](/doc/get-started).
* If you already have started Neard, stop it.
* Download a module of the tool of your choice (download links in the tool page of your choice like [Composer](/tools/composer/)).
* Use a file archiver that supports [7z format](http://www.7-zip.org/7z.html) like [7zip](http://www.7-zip.org/) and extract the archive in `neard\tools\{name}\` :

```text
[-] neard
 | [-] tools
 |  | [-] {name}
 |  |  | [-] {name}{version}
 |  |     | neard.conf
 |  |  | [-] {name}{version}
 |  |     | neard.conf
```

* Edit the `neard.conf` file and replace the key `{name}Version` with the correct version.
* Start Neard.