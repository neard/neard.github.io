---
title: Contribute
permalink: /doc/contribute/
sidebar: doc
---
{% include vars.html %}

If you want to contribute to a binary, tool or application and create new bundles, you have to :

* Fork and clone the bundle of your choice.
* Clone [neard-dev](https://github.com/crazy-max/neard-dev) in the parent folder of the bundle.
* Create a new pull request with your work.

For example :

```text
cd C:\work\
git clone --recursive https://github.com/crazy-max/neard-app-adminer.git
git clone --recursive https://github.com/crazy-max/neard-dev.git
cd neard-app-adminer\
```

Directory structure example :

```text
[-] neard-dev
 | [-] build
 |  |  | build-commons.xml 
[-] neard-{bin|app|tool}-{name}
 |  | build.xml
```

If you are not familiar with pull request, you can create a new bundle like this :

* Increment the `build.release` in the `build.properties` file.
* If you want you can change the `build.path` (default `C:\neard-build`).
* Open a command prompt in your bundle folder and call the Ant target `release` : `ant release`.
* Upload your release on a file hosting system like [Sendspace](https://www.sendspace.com/).
* Create an [issue on Neard repository]({{ var_repo_url }}/issues) to integrate your release.