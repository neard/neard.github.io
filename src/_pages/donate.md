---
title: Donate
permalink: /donate/
markdown_body: ""
---
{% include vars.html %}

<div class="markdown-body">{% markdown %}
**{{ site.title }}** is a free and open source software and always will be.<br />
I'm a single developer and if you find this project useful, please consider making a donation.<br />
Any funds donated will be used to help further development on this project! {% include fontawesome.html icon="heart" color="#c75c5c" %}
{% endmarkdown %}<span></span></div>

<p>
  <a class="donate" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id={{ site.paypal-button-id }}">
    <img src="{{ site.baseurl }}/img/paypal.png" />
  </a>
  <a class="donate" target="_blank" href="https://flattr.com/submit/auto?user_id={{ site.flattr-username }}&url={{ var_seo_url }}">
    <img src="{{ site.baseurl }}/img/flattr.png" />
  </a>
</p>