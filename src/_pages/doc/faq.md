---
title: FAQ
permalink: /doc/faq/
sidebar: doc
---
{% include vars.html %}

* TOC
{:toc}

## Where is the source code of neard.exe ?

`neard.exe` is based on [Aestan Tray Menu 1.6.2](https://github.com/crazy-max/aetraymenu){:target="_blank"}.<br />
Neard uses the exe and the ini file to generate the tray menu.

## How to upgrade from a previous release ?

Neard is a portable application and does not provide a setup at this time.<br />
To upgrade from a previous release, you have to follow the instructions in the [Upgrade notes](/doc/upgrade-notes/) page.

## Why Neard icon in the system tray is yellow or red ?

Neard icon has 3 states :

* ![](/img/faq/neard-icon-green.png) : All enabled services are started
* ![](/img/faq/neard-icon-yellow.png) : One or more enabled services are stopped
* ![](/img/faq/neard-icon-red.png) : All enabled services are stopped

To check from the Services Manager, click Start > Run and type `services.msc` and check the status of Neard* services :

![](/img/faq/windows-services.png)

## Warning icon in Apache / PHP versions menu ?

![](/img/faq/warning-icon-switch-version.png)

![](/img/faq/apache-not-compatible-php.png)

> Apache 2.4.20 does not seem to be compatible with PHP 5.2.17

The error message explains himself why you have a warning icon when you want to switch version.<br />
Please read [Apache compatibility table page](/modules/apache/#compatibility-table).

## What is the default password for root user on MySQL / MariaDB ?

By default, there is no password for root user.

## How to use MySQL and MariaDB simultaneously with PHP ?

By default MySQL is started on port 3306 and MariaDB on port 3307.<br />
Here is an example using PDO to access a database named `wordpress` installed on MySQL and MariaDB :

```php?start_inline=1
$mysql = new PDO('mysql:host=127.0.0.1;port=3306;dbname=wordpress', 'root', '');
$mysqlStmt = $mysql->query("SELECT * FROM wp_comments");
var_dump($mysqlStmt->fetchAll(PDO::FETCH_ASSOC));

$mariadb = new PDO('mysql:host=127.0.0.1;port=3307;dbname=wordpress', 'root', '');
$mariadbStmt = $mariadb->query("SELECT * FROM wp_comments");
var_dump($mariadbStmt->fetchAll(PDO::FETCH_ASSOC));
```

## What is the default user / password on PostgreSQL ?

The user is **postgres** and there is no password for this user.

## PostgreSQL start gives FATAL: role does not exist

When PostgreSQL is started as a service, you can have this error :

```text
LOG:  database system was shut down at 2013-06-13 00:54:33 UTC
LOG:  autovacuum launcher started
LOG:  database system is ready to accept connections
FATAL:  role "John" does not exist
 done
server started
```

This happens when you run pg_ctl start with the -w (wait) option like Neard, because it will try a test connection with a user that does not exist (in your case).<br />
But that's not really a problem (except for the confusing error message), because that proves that the server is up.

## What is the default user / password for FileZilla Server ?

The user is **root** and there is no password for this user.

## What is the default admin port for FileZilla Server ?

14147

## How to disable some services to launch on startup ?

There are two ways to disable some services to launch on startup.

First you can edit the `neard.conf` file and change the value to `0` for keys ending with `enable = "1"` below `BINS`.<br />
Example: `filezillaEnable = "0"`

Or you can go to the Neard menu.<br />
Example: **Neard tray menu > FileZilla > Enable / Disable**

![](/img/faq/bin-enable.png)

## A service will not start and does not display error via the menu

Aestan Tray Menu built in service manager is not handled by Neard in the Service menu :

![](/img/faq/not-start-no-error.png)

You can take look to the Windows Event Log to find out where the error occurred or use the Debug menu of the service (like Apache, MySQL or MariaDB).

## GitList - No repositories

When you go to [GitList](http://localhost/gitlist/){:target="_blank"} you probably get this message :

> Please, edit the config file and provide your repositories directory

By default Neard seek repositories in :
* `www` directory
* `C:\gitRepos`

If you have others folders to scan for repositories, you have to edit the file `tools\git\gitx.x.x\repos.dat` then refresh repositories :

![](/img/faq/git-refresh.png)

## WebSVN - No repositories

When you go to [WebSVN](http://localhost/websvn/){:target="_blank"} you probably get this message :

> Please set up a repository in include/config.php using $config->parentPath or $config->addRepository. See the installation guide for more details.

By default Neard seek repositories in your SVN binary folder.<br />
Example : `C:\neard\bin\svn\svn1.7.19\repos`

## Could not execute menu item (internal error)

![](/img/faq/aestan-could-not-execute.png)

> Could not execute menu item (internal error)<br />
> [EAccessViolation] Access violation at address XXXXXXXX in module 'neard.exe'. Read of address XXXXXXXX

Neard tray icon is based on [Aestan Tray Menu](https://obroekma.home.xs4all.nl/aetraymenu/){:target="_blank"}.<br />

There are several cases to reproduce this error :

* Execute multiple actions at the same time.
* Do not wait for an action ends.
* A procedure error with Neard based on `neard.ini` file.

For the last case you will have to [create an issue]({{ var_repo_url }}/issues/new){:target="_blank"}.

## http.exe missing MSVCR100.dll

![](/img/faq/http-msvcr100-dll.png)

> The program can't start because MSVCR100.dll is missing from your computer. Try reinstalling the program to fix this problem.

This error occurs because you probably have not installed the latest [Neard Prerequisites Package]({{ site.github.baseurl }}/neard/prerequisites/releases/latest){:target="_blank"}.

## Apache error 41d

![](/img/faq/apache-error-41d.png)

> Apache x.x.x (neardapache) service cannot be installed :<br />
> \- Cannot start the service : Error 41d (1053 : )<br />
> \- Conf errors detected :

See [http.exe missing MSVCR100.dll](#httpexe-missing-msvcr100dll)

## Apache status 1

![](/img/faq/apache-status-1.png)

> Apache x.x.x (neardapache) service cannot be installed :<br />
> \- Cannot start the service : Status 1 (1 : The service is not running)<br />

This problem could appear on Windows XP on the first launch of Neard.<br />
In this case, you must restart your computer.

## Unable to load dynamic library php_imagick.dll

![](/img/faq/unable-to-load-php-imagick.png)

> PHP Startup: Unable to load the dynamic library php_imagick.dll

See [http.exe missing MSVCR100.dll](#httpexe-missing-msvcr100dll)

## Neard has encountered a problem

![](/img/faq/neard-has-encountered-a-problem.png)

> Neard has encountered a problem and needs to close. We are sorry for the inconvenience.

This problem could appear on Windows XP.<br />
You have to install the latests [Neard Prerequisites Package]({{ site.github.baseurl }}/neard/prerequisites/releases/latest){:target="_blank"}.

## FileZilla Server.exe is not a valid Win32 application

![](/img/faq/filezilla-server-not-valid-win32.png)

> FileZilla Server.exe is not a valid Win32 application.

This problem could appear on Windows XP.<br />
Filezilla drops Windows XP support since 0.9.43 version.<br />
You have to download the 0.9.42 version. See [Filezilla page](/modules/filezilla/).

## php.exe - Entry point not found

![](/img/faq/php-releasesrwlockexclusive-kernel32.png)

> The procedure entry point ReleaseSRWLockExclusive could not be located in the dynamic link library KERNEL32.dll

Most often reason to happen such error is you trying to set not thread safe extension in your PHP installation.<br />
On Neard **PHP is installed as Thread Safe**.

## Can't change import file size limit in phpMyAdmin

The changes have to be done in the alias configuration in `alias\phpmyadmin.conf` :

```text
<Directory "C:/neard/apps/phpmyadmin/phpmyadmin4p3/4.4.15.6/">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride all
    # START switchOnline tag - Do not replace!
    Order Deny,Allow
    Deny from all
    Allow from 127.0.0.1 ::1
    # END switchOnline tag - Do not replace!
    
    <IfModule php5_module>
        php_admin_value upload_max_filesize 128M
        php_admin_value post_max_size 128M
        php_admin_value max_execution_time 360
        php_admin_value max_input_time 360
    </IfModule>
    <IfModule php7_module>
        php_admin_value upload_max_filesize 128M
        php_admin_value post_max_size 128M
        php_admin_value max_execution_time 360
        php_admin_value max_input_time 360
    </IfModule>
</Directory>
```

## Skype conflict port 80 and 443

To turn off and disable Skype usage of and listening on port 80 and port 443, open the Skype window, then click on the **Tools** menu and select **Options**.
Click on the **Advanced** tab, and go to the **Connection** sub-tab. **Untick** or **uncheck** the checkbox for `Use port 80 and 443 as an alternative for additional incoming connections` option.
Click on the Save button and then restart Skype to make the change effective.

![](/img/faq/skype-conflict-port-80-443.png)

## IIS conflict port 80 and 443

Open a CMD prompt (as Admin) and type `iisreset /stop`

![](/img/faq/iis-stop.png)

Or you can change the port number of IIS by following the [official Microsoft documentation](https://support.microsoft.com/kb/149605){:target="_blank"}.

## PATH env. var is not resolved by Apache service

Services loaded with [NSSM](https://nssm.cc/){:target="_blank"} have the PATH environment variable rewritten.<br />
Impacted services are : **Apache**, **MailHog** and **Memcached**.

For each of these services the item **Update env. PATH** is available in the Neard's tray menu to add new paths to the PATH environment variable (one by line).

![](/img/faq/apache-update-env-path.png)

![](/img/faq/nssm-env-path.png)

As you can see you can add paths relative to the Neard root folder (eg. www).<br />

{% include callout.html type="warning" text="After the modifications have been made, restart Neard for the changes to take effect." %}

In the phpinfo the Apache environment will look like this :

[![](/img/faq/apache-environment-nssm.png){:class="img-responsive"}](/img/faq/apache-environment-nssm.png)

And as you can see some paths are automatically added :

* %SystemRoot%\system32
* %SystemRoot%
* %SystemRoot%\system32\Wbem
* %SystemRoot%\system32\WindowsPowerShell\v1.0
* NEARD_PATH\bin\apache\apache*\bin
* NEARD_PATH\bin\php\php*
* NEARD_PATH\bin\php\php*\pear
* NEARD_PATH\bin\php\php*\imagick
* NEARD_PATH\bin\nodejs\nodejs*
* NEARD_PATH\bin\svn\svn*
* NEARD_PATH\tools\composer\composer*
* NEARD_PATH\tools\drush\drush*
* NEARD_PATH\tools\git\git*\bin
* NEARD_PATH\tools\imagemagick\imagemagick*
* NEARD_PATH\tools\phpmetrics\phpmetrics*
* NEARD_PATH\tools\phpunit\phpunit*
* NEARD_PATH\tools\python\python*\bin
* NEARD_PATH\tools\ruby\ruby*\bin
* NEARD_PATH\tools\wpcli\wpcli*

## Service cannot start on Windows 10 Creators Update

Since the Windows 10 Creators Update Apache, MailHog and Memcached cannot start ([Issue #242]({{ var_repo_url }}/issues/242)) :

![](/img/faq/service-cannot-start-status-7.jpg)

This bug comes from services started with the [Non-Sucking Service Manager](https://nssm.cc) which try to create a console window. The workaround is to configure the service not to open a console window.<br />
You can download the hotfix for Neard 1.0.22 here :

* [neard-1.0.22-hotfix1.7z]({{ var_repo_url }}/releases/download/v1.0.22-hotfix1/neard-1.0.22-hotfix1.7z)
* [neard-1.0.22-hotfix1.zip]({{ var_repo_url }}/releases/download/v1.0.22-hotfix1/neard-1.0.22-hotfix1.zip)

This issue is solved for Neard 1.2 and higher.

## Windows XP limitation

* **Filezilla** drops Windows XP support since 0.9.43 version.
* Starting in version 2.2, **MongoDB** does not support Windows XP. Version 2.6 seems to work but is not supported.
* **Node.js** drops Windows XP and Vista support since 6.0 version.
* **Git** drops Windows XP support since 2.10.0 version.
* **Python** drops Windows XP support since 3.4.3 version.
* **Ruby** is not supported on Windows XP since 2.1 version.

## Invalid argument - ruby_setenv(ALLUSERSPROFILE)

If you've got this kind of error with Ruby :

```text
C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/gems/2.3.0/gems/bundler-1.14.6/lib/bundler.rb:20:in `replace': Invalid argument - ruby_setenv(ALLUSERSPROFILE) (Errno::EINVAL)
  from C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/gems/2.3.0/gems/bundler-1.14.6/lib/bundler.rb:20:in `<module:Bundler>'
  from C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/gems/2.3.0/gems/bundler-1.14.6/lib/bundler.rb:17:in `<top (required)>'
  from C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/site_ruby/2.3.0/rubygems/core_ext/kernel_require.rb:55:in `require'
  from C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/site_ruby/2.3.0/rubygems/core_ext/kernel_require.rb:55:in `require'
  from C:/neard/tools/ruby/ruby2.3.3.p222/lib/ruby/gems/2.3.0/gems/bundler-1.14.6/exe/bundle:12:in `<top (required)>'
  from C:/neard/tools/ruby/ruby2.3.3.p222/bin/bundle:22:in `load'
  from C:/neard/tools/ruby/ruby2.3.3.p222/bin/bundle:22:in `<main>'
```

You will need to restart your computer.<br />
If you've got more information about this error, please [post an issue]({{ var_repo_url }}/issues/new){:target="_blank"}.

## Ruby : MSYS2 could not be found

Since Ruby 2.4, RubyInstaller is [based on MSYS2 toolchain](https://github.com/oneclick/rubyinstaller2#rubyinstaller2). If you want to compile C based ruby gems, you will have to download and install all necessary MSYS2 build tools by typing the command `ridk install` used by the [official installer](https://github.com/oneclick/rubyinstaller2#using-the-installer-on-a-target-system).

## Ghostscript : How to use Windows TrueType fonts for Chinese, Japanese and Korean ?

To update lib/cidfmap with the common CJK fonts provided by Microsoft products, launch the script `update_cidfmap.bat` in the root folder of Ghostscript.

## NET::ERR_CERT_AUTHORITY_INVALID since Chrome 58

![](/img/faq/chrome-ERR_CERT_AUTHORITY_INVALID.jpg)

Since Chrome 58, self-signed certificates generated with Neard are no longer accepted and you will have the error `NET::ERR_CERT_AUTHORITY_INVALID` if you go to `https://localhost`.

Chrome only accepts insecure certificates on localhost by turning the flag `chrome://flags/#allow-insecure-localhost` on Chrome. Or you can add the certificate to the Trusted Root Certification Authorities with the certutil command :

```text
certutil.exe -addstore -user root "C:\neard\ssl\localhost.crt"
```

Then restart Chrome.

## VMWare service uses port 80 and 443

According to [VMWare Knowledge base article](https://kb.vmware.com/s/article/2005585), connection to VMware Workstation Server (the shared virtual machines) is administered by the VMware Host Agent service. The service uses TCP ports 80 and 443. This service is also used by other VMware products, including VMware Server and vSphere, and provides additional capabilities.

This will block the execution of the Apache service on Neard.

You can change the VMware Workstation Server ports when you install Workstation and after Workstation is installed.<br />
To connect from a second instance of Workstation to Workstation Server:

* Go to **File > Connect to Server**.
* Enter the host name or IP address of the host machine running Workstation Server.
* When prompted, login with the username and password of a local administrator on the remote host.

> Note: If the VMware Workstation Server service running on the remote server is not using the default port, you must specify the port number. For example, remotehost:444.

With the Shared VMs Workstation preferences, you can also disable the server. To access the Shared VMs Workstation preferences:

* Go to **Edit > Preferences**.
* Click the Shared VMs tab.