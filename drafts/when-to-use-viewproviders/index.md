---
title: 'When to use viewproviders?'
date: '2019-02-19T13:40:16'
tags: ['angular', 'DI']
---

Recent I asked myself the question **_When should I use a viewProvider_**?. 

**Use a viewProvider when you don't want to expose the _provider_ for all content children. This use case is mainly valid in a libary**

In this post I will explain the use case I found for this need. It is based on a couple of different resources.
First let see what a provider is based on the [Angular Docs](https://angular.io/guide/providers)

>A provider is an instruction to the DI system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.


After reading this definition I still didn't have a clue when you should use a `viewprovider` or a `provider`. So I had another look at the [Angular Docs](https://angular.io/api/core/Component#viewProviders) but there is not much information present on this topic. The only thing I could find was:

> **ViewProvider**: Defines the set of injectable objects that are visible to its view DOM children

<br>
<br>
<br>
<br>
<br>
Let say we are maintaing a component libary and we have some complex needs and we put this "busines" logic in a shared service. This service is used in many different components.

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
