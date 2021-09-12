---
title: Rollback
description: 'Rollback a task if it has thrown out an error.'
category: General Usage
position: 109
badge: v3.3.0+
---

## Introduction

If you want to roll back a task or execute a callback if the task itself failed or its subtasks have failed, you can create an entry just like the task itself with the same variables called `rollback`. Rollback will only execute if the task itself has been marked as failed.

<GithubIssueLink issue="257"></GithubIssueLink>

> Since when you return a new listr as a subtask list, it is not the easiest and most convenient to access the on-fail action, and each subtask should be handled separately. Rollback is not very useful when it comes to the singular tasks that can utilize a try/catch block, but when it is not possible it is easier to use this.

## Usage

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/rollback.example.ts', name: 'examples section' }"></ExampleAlert>

```typescript
task = new Listr<Ctx>(
  [
    {
      title: 'Something with rollback.',
      task: (_, task): Listr =>
        task.newListr(
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
              task: (_, task): void => {
                task.title = 'I will change my title if this executes.'
              }
            }
          ],
          { exitOnError: true }
        ),
      rollback: async (_, task): Promise<void> => {
        task.title = 'I am trying to rollback stuff, previous action failed.'

        await delay(1000)

        task.title = 'Doing something other than this.'

        await delay(1000)

        task.title = 'Some actions required rollback stuff.'
      }
    }
  ],
  {
    concurrent: false,
    exitOnError: true
  }
)

try {
  const context = await task.run()
  logger.success(`Context: ${JSON.stringify(context)}`)
} catch (e) {
  logger.fail(e)
}
```

## Options

Rollback, when it fails by default, throws an exception and stops the execution of the upcoming tasks. But this can be overwritten by `{ exitAfterRollback: false }` option. This is the main Listr option that acts independently of `exitOnError` since failing the rollback might have worse consequences.

## Renderer

### Default Renderer

When rollback is activated the default renderer will change the spinner color to red, if the rollback successfully concludes then it will be a redback arrow, else it would be like a normal error where it will show the error from the rollback action itself.
