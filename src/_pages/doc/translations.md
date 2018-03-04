---
title: Translations
permalink: /doc/translations/
sidebar: doc
---
{% include vars.html %}

## Create a new language file

* Edit one of the language files like the english one in [neard\core\langs\english.lng]({{ var_repo_url }}/blob/master/core/langs/english.lng).
* `%s` character is a mixed arg.
* `@nl@` character is a carriage return.
* If the value starts with a `#` character, it's a new string to translate.
* The language's file has to be encoding in **UTF-8 (without BOM)**.
* Create a pull request or attach the file to [a new issue]({{ var_repo_url }}/issues/new).
* Of course your name will be mentionned for your contribution.

## Update a language file

* Search for text starting with `"#` and update the content.

## Test your language file

* If you want to test your language file, paste the file in **neard\\core\\langs\\**
* Launch or reload Neard (right click > Reload on the taskbar icon)
* Select the language in the taskbar icon (right click -> Language menu)

Thanks for your support {% include fontawesome.html icon="heart" color="#c75c5c" %}