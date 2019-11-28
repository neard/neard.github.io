* Start Neard.
* Switch to the {{ page.module.label }} version you have extracted on Neard :

![](/img/modules/{{ page.module.name }}/switch-version.png)

{% include callout.html type="primary" text="If you have the [warning icon](/doc/faq/#warning-icon-in-apache--php-versions-menu-) on your Apache version, **you will have to switch the PHP version first**." %}

## OpenSSL

| Apache version          | OpenSSL version |
| ----------------------- | --------------- |
| **2.2.22**              | 1.0.0           |
| **2.2.27** > **2.2.29** | 1.0.1           |
| **2.2.31** > **2.2.x**  | 1.0.2           |
| **2.4.4** > **2.4.12**  | 1.0.1           |
| **2.4.17** > **2.4.x**  | 1.0.2           |

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
| **PHP 7.2.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.3.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.4.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
