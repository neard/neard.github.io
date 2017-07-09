{% include vars.html %}

<div class="markdown-body">{% markdown %}

* [Links](#links)
* [About](#about)
* [Installation](#installation)
* [Releases](#releases)

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
{% endmarkdown %}<span></span></div>

<pre class="highlight"><code>[-] neard
  | [-] {{ include.module.type }}
  |  | [-] {{ include.module.name }}{% for version in include.module.versions %}{% if forloop.index <= 1 %}
  |  |  | [-] {{ include.module.name }}{{ version[0] }}
  |  |     | neard.conf{% endif %}{% endfor %}
</code></pre>

<div class="markdown-body">{% markdown %}
{% include module/{{ include.module.type }}/{{ include.module.name }}.md %}

## Releases

{% include fontawesome.html icon="star" options="fa-lg" color="#f1c40f" %} : Default version.

{% if page.module.haspack %}
  {% include module/releases-pack-latest.md module=page.module latest=page.latest %}
{% else %}
  {% include module/releases-standard-latest.md module=page.module latest=page.latest %}
{% endif %}
{% endmarkdown %}<span></span></div>

<p>
  <a target="_blank" href="{{ site.github.baseurl }}/{{ page.module.repo }}/releases" class="btn btn-default">
    View all releases
  </a>
</p>
