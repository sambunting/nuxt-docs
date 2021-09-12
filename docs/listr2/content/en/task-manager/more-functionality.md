---
title: More Functionality
description: 'More functionality of task manager.'
category: Task Manager
position: 202
---

## Indenting Tasks

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

## Run Directly from Manager

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

## Accesing Collected Errors

- Access the errors of the last task as in the Listr.
- Will only show the last set of errors in the latest task.

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
```

- Access base Listr class directly, this will use the default Listr settings and just a mere jumper function for omitting the need the import the Listr class when using manager.

```typescript
try {
  await this.tasks
    .newListr([
      {
        title: 'I will die now, goodbye my friends.',
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
