---
title: 'When to use viewproviders?'
date: '2019-02-11T13:40:16'
tags: ['angular', 'DI']
---

Recent I asked myself the question **_When should I use a viewProvider_**?. In this post I will explain the use case I found for this need. It is based on a couple of different resources and discussions all over the internet 😃. So here is my awnser up front on this post.

**Use a viewProvider when you don't want to expose the `provider` for all content children. This use case is mainly valid in a libary**

Let say we are maintaing a component libary and we have some complex needs and we put the "busines" logic in a shared service. This service is used in many different components. 

A example of how we use it in our app would be like the snippet below:

```html

<libary-component>
  <custom-component></custom-component>
</libary-component>

```

As our custom component is projected inside of our libary component it will be in the injector tree of the component above.
This means that when the person using our libary knows wich service we use it can inject it right in their constructor using DI.

## Examples

### viewprovider:

<iframe width="560" height="315" src="https://stackblitz.com/edit/viewproviders?ctl=1&embed=1&file=src/app/base-form/base-form.component.ts&view=editor" frameborder="0" allowfullscreen></iframe>

### difference view vs host?:
<iframe width="560" height="315" src="https://stackblitz.com/edit/viewproviders-vs-host?ctl=1&embed=1&view=editor" frameborder="0" allowfullscreen></iframe>

### resources:

- [ViewChildren and ContentChildren in Angular](https://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/)
