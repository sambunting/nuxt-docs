---
title: The Concept of Context
description: 'Listr uses an internal variable called context to store the data.'
category: Getting Started
position: 5
---

## Context Variable

Context is the parent object of the variables that are shared across the task list. Even though external variables can be used to do the same operation, context gives a self-contained way to process internal tasks.

A successful task will return the context back for further operation.

You can also manually inject a context variable preset depending on the prior operations through the task options.

**If all tasks are in one big Listr list you do not have to inject context manually to the child tasks since it is automatically injected as in the original.**

### Injection Context as an Option

```typescript
const ctx: Ctx = {}

const tasks = new Listr<Ctx>(
  [
    /* tasks */
  ],
  { ctx }
)
```

### Injecting Context at Runtime

```typescript
try {
  await tasks.run({ ctx })
} catch (e) {
  console.error(e)
}
```
