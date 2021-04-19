---
title: Creating a New Instance
description: 'Creating a new listr instance will generate a class.'
category: Getting Started
position: 3
---

## Generate New Class

Create a new task list. It will return a Listr class.

```typescript
import { Listr } from 'listr2'

interface Ctx {
  /* some variables for internal use */
}

const tasks = new Listr<Ctx>(
  [
    /* tasks */
  ],
  {
    /* options */
  }
)
```

## Run the Generated Task List

Then you can run this task lists as an async function and it will return the context that is used.

```typescript
try {
  await tasks.run()
} catch (e) {
  // it will collect all the errors encountered if { exitOnError: false } is set as an option but will not throw them
  // elsewise it will throw the first error encountered as expected
  console.error(e)
}
```
