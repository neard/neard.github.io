{% include vars.html %}

* TOC
{:toc}

## Links

{% include module/sources-links.html repository=include.module.repo %}

## About

**{{ include.module.label }}** : {{ include.module.desc }}

{% for sources in include.module.sources %}* <{{ sources }}>{:target="_blank"}
{% endfor %}

## Installation

* Download and install [Neard](/doc/get-started).
* If you already have installed Neard, stop it.
* Download [one {{ include.module.label }} bundle](#releases).
* Extract archive in `neard\{{ include.module.type }}\{{ include.module.name }}\`. Directory structure example :

```text
[-] neard
 | [-] {{ include.module.type }}
 |  | [-] {{ include.module.name }}{% for version in include.module.versions %}{% if forloop.index <= 1 %}
 |  |  | [-] {{ include.module.name }}{{ version[0] }}
 |  |     | neard.conf{% endif %}{% endfor %}
```

{% include module/{{ include.module.type }}/{{ include.module.name }}.md %}

## Releases

{% include fontawesome.html icon="star" options="fa-lg" color="#f1c40f" %} : Default bundle on Neard.

{% for release in page.module.releases %}
### {{ release.name }}
{:.no_toc}

[![Release link](https://img.shields.io/badge/release-link-green.svg?style=flat&maxAge=3600)]({{ site.github.baseurl }}/{{ page.module.repo }}/releases/tag/{{ release.name }})
[![Release date](https://img.shields.io/badge/date-{{ release.date }}-orange.svg?style=flat&maxAge=3600)](#)
[![Release changelog](https://img.shields.io/badge/infos-changelog-blue.svg?style=flat&maxAge=3600)]({{ site.github.baseurl }}/{{ page.module.repo }}/blob/master/CHANGELOG.md#{{ release.name }}-{{ release.date | replace: '/', '' }})

{% if page.module.haspack %}
  {% include module/releases-pack.md module=page.module release=release %}
{% else %}
  {% include module/releases-standard.md module=page.module release=release %}
{% endif %}

{% endfor %}