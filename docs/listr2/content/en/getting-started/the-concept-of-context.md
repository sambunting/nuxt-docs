---
title: The Concept of Context
description: 'Listr uses an internal variable called context to store the data.'
category: Getting Started
position: 5
---

## Context Variable

Context is an object that is shared across the task list. Even though external variables can be used to do the same operation, context gives a self-contained way to process internal tasks.

- A successful task will return the context back for further operation.
- Context is manipulated through the main listr class as `tasks.ctx` where `tasks` is a listr task list.
- If an error is encountered, the context at the time will be recorded as a frozen object to give the ability to further debug the issue.

You can also manually inject a context variable defaults through multiple ways.

**If all tasks are in the same listr you do not have to inject context manually to the subtasks since it is automatically injected as in the original.**

## Injecting Context

### Injecting Context as an Option

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

## Retrieving Context

### As a Result of the Task

A successful task will always return the context.

```typescript
const tasks = new Listr([
  {
    task: (ctx): void => {
      ctx.test = true
    }
  }
])

const ctx = await tasks.run()

console.log(ctx.test) // true
```

### As Class Property

The root `listr` class itself holds the context value.

```typescript
const tasks = new Listr([
  {
    task: (ctx): void => {
      ctx.test = true
    }
  }
])

const ctx = await tasks.run()

console.log(tasks.ctx.test) // true
```
