---
title: '#TIL: Angular CLI and autoprefixing'
date: '2019-01-17T11:31:24'
---

Today I had some problems with CSS grid and IE support. After some digging, I found out that there is a new implementation off autoprefixer. Autoprefixer is the tool that angular cli uses under the hood.
[This issue](https://github.com/angular/angular-cli/pull/11453) explains why grid support by default is off.

You should enable it by using:

```css
/* autoprefixer grid: on */
```
