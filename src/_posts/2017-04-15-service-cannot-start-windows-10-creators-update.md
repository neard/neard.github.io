---
layout: post
title: Service cannot start on Windows 10 Creators Update
tags: [neard, core, hotfix]
---
{% include vars.html %}

Since the Windows 10 Creators Update Apache, MailHog and Memcached cannot start ([Issue #242]({{ var_repo_url }}/issues/242)) :

![](/img/faq/service-cannot-start-status-7.jpg)

This bug comes from services started with the [Non-Sucking Service Manager](http://nssm.cc) which try to create a console window. The workaround is to configure the service not to open a console window.<br />
You can download the hotfix for Neard 1.0.22 here :

* [neard-1.0.22-hotfix1.7z]({{ var_repo_url }}/releases/download/v1.0.22-hotfix1/neard-1.0.22-hotfix1.7z)
* [neard-1.0.22-hotfix1.zip]({{ var_repo_url }}/releases/download/v1.0.22-hotfix1/neard-1.0.22-hotfix1.zip)
