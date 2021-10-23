---
title: Custom Logger
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 407
---

## Introduction

Logging to a file can be done utilizing a module like [winston](https://www.npmjs.com/package/winston). This can be obtained through using the verbose renderer and creating a custom logger class that implements `Logger` which is exported from the index.

While calling a new Listr you can call it with `{ renderer: 'verbose', rendererOptions: { logger: MyLoggerClass } }`.

```typescript
import { logLevels, Logger, LoggerOptions } from 'listr2'

export class MyLoggerClass extends Logger {
  constructor(private options?: LoggerOptions) {
    // This is not needed if you don't use these options in your custom logger
  }

  /* CUSTOM LOGIC */
  /* CUSTOM LOGIC */
  /* CUSTOM LOGIC */
}
```

## Options

<GithubIssueLink issue="561"></GithubIssueLink>

You can also pass options to your custom logger via renderer options.

```typescript
{ renderer: 'verbose', rendererOptions: { logger: MyLoggerClass, options: { file: '/var/log/something.txt' } } }
```
