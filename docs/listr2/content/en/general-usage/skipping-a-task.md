---
title: Skipping a Task
description: 'Skip a task depending on variables.'
category: General Usage
position: 10
---

## Introduction

Skip is more or less the same with enable when used at `Task` level. But the main difference is it will always render the given task. If it is skipped it renders it as skipped.

There are to main ways to skip a task. One is utilizing the `Task` so that instead of enabled it will show a visual output while the other one is inside the task.

<alert type="warning">

Please pay attention to asynchronous operation while designing a context enabled task list since it does not await for any variable in the context.

</alert>

<alert type="info">

_Please refer to [examples section](https://github.com/cenk1cenk2/listr2/tree/master/examples/task-skip.example.ts) for more detailed and further examples._

</alert>

## Skip a task inside the task itself after some logic is done

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx, task): void => {
        task.skip('I am skipping this tasks for reasons.')
      }
    }
  ],
  { concurrent: false }
)
```

## Skip a task through the task wrapper

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx): void => {
        ctx.skip = true
      }
    },

    {
      title: 'This task will never execute.',
      skip: (ctx): boolean => ctx.skip,
      task: (): void => {}
    }
  ],
  { concurrent: false }
)
```

## Renderer Options

<badge>Default Renderer</badge>

```typescript
  /**
   * collapse skip messages in to single message and override the task title
   * @default true
   */
  collapseSkips?: boolean
  /**
   * show skip messages or show the original title of the task, this will also disable collapseSkips mode
   *
   * You can disable showing the skip messages, eventhough you passed in a message by settings this option,
   * if you want to keep the original task title intacted.
   * @default true
   */
  showSkipMessage?: boolean
  /**
   * suffix skip messages with [SKIPPED] when in collapseSkips mode
   * @default true
   */
  suffixSkips?: boolean
  /**
   * collapse error messages in to single message in task title
   * @default true
   */
```
