---
title: Handling Errors
description: 'Throwing errors from a task. and handling them'
category: General Usage
position: 11
---

## Introduction

You can throw errors out of the tasks to show they are unsuccessful. While this gives a visual output on the terminal, it also handles how to handle tasks that are failed. The default behavior is any of the tasks have failed, it will deem itself as unsuccessful and exit. This behavior can be changed with `exitOnError` option. If the `exitOnError` is `true`, the first error encountered will be thrown out again.

If you want to quit the application pre-maturely and fail a specific task just throw out an `Error`.

<alert type="warning">

An `Error` should be always a real `Error` type extended from the JavaScript/Typescript `Error` class.

</alert>

## Throwing Out an Error

Throwing an error will stop any further action whether it is in running with `concurrent` flag or not.

<alert type="info">

You don't have to catch errors explicitly since they will always be collected by `Listr`.

</alert>

<alert type="warning">

Be aware that the execution will only stop after the error is thrown out. This can kill any asynchronous action pre-maturely.

</alert>

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will fail.',
      task: async (): Promise<void> => {
        await delay(2000)
        throw new Error('This task failed after 2 seconds.')
      }
    },
    {
      title: 'This task will never execute.',
      task: (ctx, task): void => {
        task.title = 'I will change my title if this executes.'
      }
    }
  ],
  { concurrent: false }
)
```

## Changing the Behavior

### Per Listr

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will fail.',
      task: async (): Promise<void> => {
        await delay(2000)
        throw new Error('This task failed after 2 seconds.')
      }
    },
    {
      title: 'This task will execute.',
      task: (ctx, task): void => {
        task.title = 'I will change my title if this executes.'
      }
    }
  ],
  { concurrent: false, exitOnError: false }
)
```

### Per Subtask

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute and not quit on errors.',
      task: (ctx, task): Listr =>
        task.newListr(
          [
            {
              title: 'This is a subtask.',
              task: async (): Promise<void> => {
                throw new Error('I have failed [0]')
              }
            },
            {
              title: 'This is yet an another subtask and it will run.',
              task: async (ctx, task): Promise<void> => {
                task.title = 'I have succeeded.'
              }
            }
          ],
          { exitOnError: false }
        )
    },
    {
      title: 'This task will execute.',
      task: (): void => {
        throw new Error('I will exit on error since I am a direct child of parent task.')
      }
    }
  ],
  { concurrent: false, exitOnError: true }
)
```

### Per Task

```typescript
task = new Listr<Ctx>(
  [
    {
      title: 'This task will fail.',
      task: async (): Promise<void> => {
        await delay(2000)
        throw new Error('This task failed after 2 seconds.')
      },
      exitOnError: false
    },
    {
      title: 'This task will execute.',
      task: (_, task): void => {
        task.title = 'I will change my title if this executes.'
      }
    }
  ],
  {
    concurrent: false,
    exitOnError: true
  }
)
```

## Error Collection <badge>v2.0.0+</badge>

All errors will be collected whether `exitOnError` is `true` or `false`. Errors will be thrown depending on `exitOnError: true`, otherwise it will just be collected.

```typescript
const task = new Listr(...)
logger.fail(task.err)
// will show all of the errors that are encountered through execution
```

### ListrError[] Structure In Collection

```typescript
public message: string
public errors?: Error[]
public context?: any
```

## Renderer

### Default Renderer

```typescript
  /**
   * collapse error messages in to single message in task title
   * @default true
   */
  collapseErrors?: boolean
  /**
   * shows the thrown error message or show the original title of the task, this will also disable collapseErrors mode
   * You can disable showing the error messages, eventhough you passed in a message by settings this option,
   * if you want to keep the original task title intacted.
   * @default true
   */
  showErrorMessage?: boolean
```
