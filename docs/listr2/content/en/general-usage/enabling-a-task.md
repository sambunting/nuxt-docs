---
title: Enable a Task
description: 'Enable a task depending on variables.'
category: General Usage
position: 9
fullscreen: true
---

Tasks can be enabled depending on the variables programmatically. This enables to skip them depending on the context. Not enabled tasks will never show up in the default renderer, but when or if they get enabled they will magically appear.

<alert type="warning">

Task enabling is determined up-on the initial run of the Listr when you actually create the class, so becareful with using it while using internal context variables.

</alert>

<alert type="warning">

Please pay attention to asynchronous operation while designing a context enabled task list since it does not await for any variable in the context.

</alert>

<alert type="info">

_Please refer to [examples section](https://github.com/cenk1cenk2/listr2/tree/master/examples/task-enable.example.ts) for more detailed and further examples._

</alert>

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
      enabled: (ctx): boolean => !ctx.skip,
      task: (): void => {}
    }
  ],
  { concurrent: false }
)
```
