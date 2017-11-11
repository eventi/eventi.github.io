---
layout: post
title:  "Jekyll Tricks"
categories: programming jekyll
tags: bash TIL
...

Create a draft
===
`bin/draft`: Adds a draft post. Drafts are apparently [controversial][1], but I like to capture things with as little resistance as possible, so it fits my workflow.

Serve with `bundle exec jekyll serve --drafts`

{% highlight bash %}
{% include draft %}
{% endhighlight %}

Add a link
===
`bin/addlink`: Adds a link to my `_draft/miscellaneous.md` file. The idea is to capture an interesting link and write it up later.

*TODO:* produce a bullet for the link in an incoming links section

{% highlight bash %}
{% include addlink %}
{% endhighlight %}

Publish
===
`bin/publish`: Publish a draft. Checks for unfilled placeholders

*TODO:* use [yaml][2] to add published date

{% highlight bash %}
{% include publish %}
{% endhighlight %}

Categories
===
`bin/update_categories`: Grab the list of categories from the front matter of posts and create a category page if it doesn't exist.

*TODO:* tags!

{% highlight bash %}
{% include update_categories %}
{% endhighlight %}

This page is generated by doing this:

    cd _includes/
    ln -s ../bin/* .
    history

and then formatting the code blocks with

{% raw %}
    {% highlight bash %}
    {% include update_categories %}
    {% endhighlight %}
{% endraw %}

BTW - I had to use `{%raw%}{% raw %}{% endraw %}` in that block so it wouldn't process the Liquid template

[1]: https://github.com/jekyll/jekyll/issues/1469
[2]: https://github.com/mikefarah/yaml