---
title: Subtasks
description: 'Listr can be further expanded by having subtasks.'
category: General Usage
position: 100
---

## Introduction

Any task can return a new Listr. But rather than calling it by invoking `new Listr` to get the full auto-completion features depending on the parent task's selected renderer, it is a better idea to call it through the `Task` itself by `task.newListr()`.

Subtasks can be nested indefinitely as long as the terminal width is enough to support them.

Subtasks give the advantage of grouping similar tasks together, changing the behavior of listr for a certain set of tasks, or cleaning up the rendering area when certain tasks have finished.

## Usage

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

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/subtasks.example.ts', name: 'examples section' }"></ExampleAlert>

## Overwriting the Default Behavior Through Subtask Options

You can change the behavior of listr and selected renderer through the options of a subtask.

This includes selected renderer options as well as Listr options like `exitOnError`, `concurrent` to be set on a per subtask basis independent of the parent task, while it will always **inherit the defaults from the parent task**.

Some of the options that can not be changed from the renderer are marked as `@global` option in the hover documentation. This is not disabled through typings due to me wanting to keep renderer instances fully self-contained.

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

## Access Parent Task from Subtasks <badge>v2.6.0+</badge>

You can access the parent task class from subtasks via passing the function signature `(parent) => Listr` to `task.newListr`. This way you can change the title of the parent task or access its functionality.

<GithubIssueLink issue="141"></GithubIssueLink>

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

                parent.title = 'I am changing the title from subtask.'
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
