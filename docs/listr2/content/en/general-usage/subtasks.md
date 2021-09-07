---
title: Subtasks
description: 'Listr can be further expanded by having subtasks.'
category: General Usage
position: 100
---

## Introduction

Any task can return a new Listr. But rather than calling it `new Listr` to get the full auto-completion features depending on the parent task's selected renderer, it is a better idea to call it through the `Task` itself by `task.newListr()`. Subtasks can be nested indefinitely as long as the terminal width is enough to support them.

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/subtasks.example.ts', name: 'examples section' }"></ExampleAlert>

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx, task): Listr =>
        task.newListr([
          {
            title: 'This is a subtask.',
            task: async (): Promise<void> => {
              await delay(3000)
            }
          }
        ])
    }
  ],
  { concurrent: false }
)
```

## Changing Per Task Options for Subtasks

You can change the individual settings of the renderer on a per-subtask basis.

This includes renderer options as well as Listr options like `exitOnError`, `concurrent` to be set on a per subtask basis independent of the parent task, while it will always use the most adjacent setting. Some of the options that can not be changed from the renderer are marked as `@global` option in the hover documentation.

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx, task): Listr =>
        task.newListr(
          [
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(3000)
              }
            },
            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(2000)
              }
            }
          ],
          { concurrent: true, rendererOptions: { collapse: true } }
        )
    },

    {
      title: 'This task will execute.',
      task: (ctx, task): Listr =>
        task.newListr(
          [
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(3000)
              }
            },
            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(2000)
              }
            }
          ],
          { concurrent: true, rendererOptions: { collapse: false } }
        )
    }
  ],
  { concurrent: false }
)
```

<ExampleAlert :example="{ link: '/general-usage/handling-errors', name: 'throw errors section' }"></ExampleAlert>

## Access Parent Task from Subtasks <badge>v2.6.0+</badge>

You can access parent task class from subtasks via passing a function to `task.newListr`. This way you can change the title of the parent task or access its functionality. Skipping will not work reliably since the tasks run asynchronously. But added in for a useful case of changing titles from subtasks with bringing it up in the [issue #141](https://github.com/cenk1cenk2/listr2/issues/141).

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: (ctx, task): Listr =>
        task.newListr(
          (parent) => [
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                await delay(3000)
                parent.title = 'I am changing title from subtask.'
              }
            },
            {
              title: 'This is an another subtask.',
              task: async (): Promise<void> => {
                await delay(2000)
              }
            }
          ],
          { concurrent: true }
        )
    }
  ],
  { concurrent: false }
)
```
