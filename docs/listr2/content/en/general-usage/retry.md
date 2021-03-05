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

Retrying is self aware and you can access from the task if it is retrying via `task.isRetrying()`. It will either return a number of the count the retry it is in or `false`, where it does not retried anything.

## Rendering

When rollback is activated the default renderer will change the spinner color to orange and will suffix it with `[RETRYING-${COUNT}]` with retry count if `suffixRetries: true` is set in the renderer options.
