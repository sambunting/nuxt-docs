---
title: Rollback
description: 'Rollback a task if it has thrown out an error.'
category: General Usage
position: 12
---

## Introduction <badge>v3.3.0+</badge>

If you want to rollback a task or execute a callback if its subtasks failed, or the task itself failed, you can create a entry just like the task itself with the same variables called `rollback`. Rollback will only execute if the task itself has marked as failed. Related issue is [#257](https://github.com/cenk1cenk2/listr2/issues/257).

> Since when you return new listr as a subtask list, it is not the easiest and most convient to access the on fail action, and each subtask should be handled seperately. Rollback is not very useful when it comes to the singular tasks that can utilize a try/catch block, but when it is not possible it is easier to use this.

<alert type="info">

_Please refer to [examples section](https://github.com/cenk1cenk2/listr2/tree/master/examples/rollback.example.ts) for more detailed and further examples._

</alert>

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

Rollback by default is to throw an exception and stop the execution of the upcoming tasks. But this can be overwritten by `{ exitAfterRollback: false }` option. This is a main Listr option which acts indeferent of the `exitOnError`.

## Rendering

When rollback is activated the default renderer will change the spinner color to red, if the rollback successfully concludes then it will be a red back arrow, else it would be like a normal error where it will show the error from the rollback action itself.
