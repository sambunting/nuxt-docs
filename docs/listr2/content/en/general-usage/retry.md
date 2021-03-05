---
title: Retry
description: 'Retrying a task after it fails'
category: General Usage
position: 13
---

## Introduction <badge>v3.4.0+</badge>

If you want to retry a task that had failed a couple of times more, you can use the `retry` property in the `Task`. Related issue is [#303](https://github.com/cenk1cenk2/listr2/issues/303).

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/retry.example.ts', name: 'examples section' }"></ExampleAlert>

```typescript
task = new Listr<Ctx>(
  [
    [
      {
        title: 'Some type errors',
        task: async (_, task): Promise<void> => {
          await delay(1000)
          task.output = 'test'

          await delay(1000)
          throw new Error('This type can not be assigned to type with, oh noes')
        },
        retry: 3
      }
    ]
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

## Access via Task

Retrying is self aware and you can access from the task if it is retrying via `task.isRetrying()`. It will either return an object of `count: number, withError: any` where `count` will be `0` for not repeating tasks and `withError` is the last encountered error if retrying.

### Access the Retry count

```typescript
await new Listr(
  [
    {
      title: 'Some thing with errors',
      task: async (_, task): Promise<void> => {
        const retry = task.isRetrying()
        if (retry.count > 0) {
          task.title = 'This means I am retrying.'
          task.output = `I am self aware that I am retrying for the ${retry.count}th time.`
        }

        await delay(1000)
        throw new Error('This type can not be assigned to type with, oh noes')
      },
      retry: 3
    }
  ],
  { exitOnError: false }
).run()
```

### Access the Retry count

```typescript
await new Listr(
  [
    {
      title: 'Some thing with errors',
      task: async (_, task): Promise<void> => {
        const retry = task.isRetrying()
        if (retry.count > 0) {
          if ((retry.error = new Error('Something'))) {
            task.title = 'I will process the task further.'
          }
        }

        await delay(1000)
        throw new Error('This type can not be assigned to type with, oh noes')
      },
      retry: 3
    }
  ],
  { exitOnError: false }
).run()
```

## Rendering

When rollback is activated the default renderer will change the spinner color to orange and will suffix it with `[RETRYING-${COUNT}]` with retry count if `suffixRetries: true` is set in the renderer options.

When retrying, the task title will be reset to the original task title and the output will be cleared if it is not written to bottom bar.
