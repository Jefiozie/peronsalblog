---
title: '#TIL: Error handling with debug context'
date: '2019-01-23T13:40:16'
tags: ['a', 'b']
---

Today I've implemented a custom **ErrorHandler** by using the [ErrorHandler](https://angular.io/api/core/ErrorHandler) of Angular. The reason I’m implementing a custom handler is for the extra information I would like it to send when running it on a _test enviroment_. When a errors occurs, I would like to see some extra details. I prefer to see on which component the error occurred and what the data was at that time.

Below I have a example off the implementation. After the code snippet I will explain it in depth.

```typescript
import { Injectable, ErrorHandler } from '@angular/core'

/*
 orginal:
 https://github.com/angular/angular/blob/master/packages/core/src/errors.ts
*/

export function getDebugContext(error: Error): any {
  return (error as any)['ngDebugContext']
}

@Injectable()
export class ErrorService implements ErrorHandler {
  constructor() {}

  handleError(err: any) {
    let error = { message: err.message.toString() }
    if (getDebugContext(err)) {
      const debug = getDebugContext(err)
      error = {
        ...error,
        componentName: debug.component.constructor.name,
        component: debug.component,
      }
    }
    console.error(error)
  }
}
```

\
What you see is a basic implementation of a Service that extends ErrorHandler. Now the fun part, if production mode is not enabled you can get the property: **ngDebugContext**. This context has a lot of extra information to see the [source code](https://github.com/angular/angular/blob/master/packages/core/src/errors.ts). The use of this extra information can be very handy when debugging your application. Of course production mode should not be enabled.

The output of the code snippet above looks something like the example below:

```json
{
  "component": { "name": "Angular" },
  "componentName": "AppComponent",
  "message": "Error 1"
}
```

\
Hope you learned something today! 👍
