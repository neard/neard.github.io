---
title: Reporting an issue
permalink: /doc/reporting-issue/
sidebar: doc
---
{% include vars.html %}

First :

* Read the [FAQ](/doc/faq/).
* Search for [existing issues]({{ var_repo_url }}/issues).

Then before [reporting an issue]({{ var_repo_url }}/issues/new), make sure to include all relevant information :

* Tell me what is your operating system and platform (eg. Windows 7 64-bits).
* Tell me your Neard version (eg. 1.0.0) and the previous version in case of upgrade.
* Close Neard.
* Change the `logsVerbose` variable to the value `2` in the `neard.conf` file.
* Launch Neard and reproduce your problem.
* Close Neard.
* Zip the `logs` folder and the `core/tmp` folder.
* Upload the zip file on a file hosting system like [Sendspace](https://www.sendspace.com/).
* Optionally attach a revelant screenshot of your issue.
* Add the link of the uploaded file to the issue.