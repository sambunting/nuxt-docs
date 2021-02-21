---
title: More Functionality
description: 'More functionality of task manager.'
category: Task Manager
position: 15
fullscreen: true
---

- Indenting tasks, to change options like `concurrency`, `exitOnError` and so on.

```typescript
this.tasks.add(
  [
    {
      title: 'Some task that will run in sequential execution mode. [0]',
      task: async (): Promise<void> => {
        await delay(2000)
      }
    },
    {
      title: 'Some task that will run in sequential execution mode. [1]',
      task: async (): Promise<void> => {
        await delay(2000)
      }
    },
    this.tasks.indent([
      {
        title: 'This will run in parallel. [0]',
        task: async (): Promise<void> => {
          await delay(2000)
        }
      },
      {
        title: 'This will run in parallel. [1]',
        task: async (): Promise<void> => {
          await delay(2000)
        }
      }
    ])
  ],
  { concurrent: true }
)
```

- Run a Task Directly, which will use the defaults settings you set in the manager.

```typescript
await this.tasks.run([
  {
    title: 'I will survive, dont worry',
    task: (): void => {
      throw new Error('This will not crash since exitOnError is set to false eventhough default setting in Listr is false.')
    }
  }
])
```

- Access the errors of the last task as in the Listr.

```typescript
await this.tasks.run([
  {
    title: 'I will survive, dont worry',
    task: (): void => {
      throw new Error('This will not crash since exitOnError is set to false eventhough default setting in Listr is false.')
    }
  }
])
this.logger.data(this.tasks.err.toString())
// will yield: ListrError: Task failed without crashing. with the error details in the object
```

- Access base Listr class directly, this will use the default Listr settings and just a mere jumper function for omitting the need the import the Listr class when using manager.

```typescript
try {
  await this.tasks
    .newListr([
      {
        title: 'I will die now, goodbye my freinds.',
        task: (): void => {
          throw new Error('This will not crash since exitOnError is set to false eventhough default setting in Listr is false.')
        }
      }
    ])
    .run()
} catch (e) {
  this.logger.fail(e)
}
```

- Get Task Runtime, and tailor it as your own <badge>deprecated</badge>

<alert info="info">

Default renderer now has a function to write the execute time aside of the task, which servers what this does mostly.

</alert>

```typescript
await this.tasks.run(
  [
    {
      task: async (ctx): Promise<void> => {
        // start the clock
        ctx.runTime = Date.now()
      }
    },
    {
      title: 'Running',
      task: async (): Promise<void> => {
        await delay(1000)
      }
    },
    {
      task: async (ctx, task): Promise<string> => (task.title = this.tasks.getRuntime(ctx.runTime))
    }
  ],
  { concurrent: false }
)
// outputs: "1.001s" in seconds
```
