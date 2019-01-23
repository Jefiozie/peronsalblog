---
title: 'TIL: Errorhandling with debug context'
date: '2019-01-23T13:40:16'
---

Today

```typescript
import { Injectable, ErrorHandler } from '@angular/core'

// Copy from https://github.com/angular/angular/
// blob/05168395b0829b039125b2e13d6ece78b7787395/packages/core/src/errors.ts
export function getDebugContext(error: Error): any {
  return (error as any)['ngDebugContext']
}

@Injectable()
export class ErrorService implements ErrorHandler {
  constructor() {}

  handleError(err: any) {
    if (getDebugContext(err)) {
      const debug = getDebugContext(err)
      console.error({
        component: debug.component,
        viewData: debug.view,
        injector: debug.injector,
      })
    }
    console.error(err)
  }
}
```
