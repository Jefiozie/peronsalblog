---
title: 'When to use viewproviders?'
date: '2019-02-19T13:40:16'
tags: ['angular', 'DI']
---

Recent I asked myself the question **_When should I use a viewProvider_**?. 

**Use a viewProvider when you don't want to expose the _provider_ for all content children. This use case is probably most valid when building a libary package**

First let see what a provider is based on the [Angular Docs](https://angular.io/guide/providers)

>A provider is an instruction to the DI system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.


After reading this definition I still didn't find the reason when you should use a `viewprovider` or a `provider`. Looking further in the [Angular Docs](https://angular.io/api/core/Component#viewProviders) it did find some extra information on this topic. The part I could find around `viewProvider` is:

> **ViewProvider**: Defines the set of injectable objects that are visible to its view DOM children

Then I came found a older blog post of Minko Gechev [ViewChildren and ContentChildren in Angular](https://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/) He explains the differences between `providers` and `viewproviders` and the best use case for it.
