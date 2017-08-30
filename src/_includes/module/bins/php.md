* Start Neard.
* Switch to the {{ page.module.label }} version you have extracted on Neard :

![](/img/bins/{{ page.module.name }}/switch-version.png)

{% include callout.html type="primary" text="If you have the [warning icon](/doc/faq/#warning-icon-in-apache--php-versions-menu-) on your PHP version, **you will have to switch the Apache version first**." %}

## OpenSSL

| PHP version            | OpenSSL version |
| ---------------------- | --------------- |
| **5.2.17**             | 0.9.8           |
| **5.3.x**              | 0.9.8           |
| **5.4.x**              | 0.9.8           |
| **5.5.x**              | 1.0.1           |
| **5.6.0** > **5.6.26** | 1.0.1           |
| **5.6.28** > **5.6.x** | 1.0.2           |
| **7.0.x**              | 1.0.2           |
| **7.1.x**              | 1.0.2           |
| **7.2.x**              | 1.1.0           |

## Additionnal extensions

|                  | PHP 5.2.x                   | PHP 5.3.x                   | PHP 5.4.x                   | PHP 5.5.x                   | PHP 5.6.x                   | PHP 7.0.x                   | PHP 7.1.x                   | PHP 7.2.x                   |
| ---------------- |:---------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|:---------------------------:|
| **php_apc**      | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} |
| **php_imagick**  | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **php_memcache** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **php_mongo**    | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} |
| **php_mongodb**  | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **php_ssh2**     | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **php_vld**      | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |

## PEAR

PEAR is integrated in each PHP module through the `install-pear-nozlib.phar` standalone installer.

| PEAR version | PHP 5.2.x                   | PHP 5.3.x                   | PHP 5.4+                    |
| ------------ |:---------------------------:|:---------------------------:|:---------------------------:|
| **1.7.2**    | {% include icon-ok.html %}  | {% include icon-nok.html %} | {% include icon-nok.html %} |
| **1.9.5**    | {% include icon-nok.html %} | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **1.10.1**   | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-ok.html %}  |

## Apache compatibility table

|               | Apache 2.2.x                | Apache 2.4.x                |
| ------------- |:---------------------------:|:---------------------------:|
| **PHP 5.2.x** | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **PHP 5.3.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 5.4.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 5.5.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 5.6.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.0.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |
| **PHP 7.1.x** | {% include icon-nok.html %} | {% include icon-ok.html %}  |

## MongoDB compatibility table

PHP 5.3 and 5.4 includes the old [php_mongo](https://pecl.php.net/package/mongo) extension that is not compatible with MongoDB 3.2+.<br />
More infos : [https://docs.mongodb.com/ecosystem/drivers/php](https://docs.mongodb.com/ecosystem/drivers/php)

|               | MongoDB 2.6                 | MongoDB 3.0                 | MongoDB 3.2+                |
| ------------- |:---------------------------:|:---------------------------:|:---------------------------:|
| **PHP 5.2.x** | {% include icon-nok.html %} | {% include icon-nok.html %} | {% include icon-nok.html %} |
| **PHP 5.3.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **PHP 5.4.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-nok.html %} |
| **PHP 5.5.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 5.6.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 7.0.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |
| **PHP 7.1.x** | {% include icon-ok.html %}  | {% include icon-ok.html %}  | {% include icon-ok.html %}  |