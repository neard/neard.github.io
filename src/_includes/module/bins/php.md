* Start Neard.
* Switch to the {{ page.module.label }} version you have extracted on Neard :

![](/img/bins/{{ page.module.name }}/switch-version.png)

{% include callout.html type="primary" text="If you have the [warning icon](/doc/faq/#warning-icon-in-apache--php-versions-menu-) on your PHP version, **you will have to switch the Apache version first**." %}

## Compatibility table

|               | Apache 2.2.x                | Apache 2.4.x                |
| ------------- |:---------------------------:|:---------------------------:|
| **PHP 5.2.x** | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **PHP 5.3.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 5.4.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 5.5.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 5.6.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.0.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.1.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |

## Additionnal extensions

|                  | PHP 5.2.x                   | PHP 5.3.x                  | PHP 5.4.x                  | PHP 5.5.x                   | PHP 5.6.x                   | PHP 7.x.x                   |
| ---------------- |:---------------------------:|:--------------------------:|:--------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|
| **php_apc**      | {% include icon-nok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} |
| **php_imagick**  | {% include icon-nok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **php_memcache** | {% include icon-ok.html %}  | {% include icon-ok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **php_ssh2**     | {% include icon-nok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **php_vld**      | {% include icon-nok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |