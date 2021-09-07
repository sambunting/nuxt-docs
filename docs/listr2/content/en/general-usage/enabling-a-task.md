---
title: Enable a Task
description: 'Enable a task depending on variables.'
category: General Usage
position: 104
fullscreen: true
---

Tasks can be enabled depending on the variables programmatically. This enables to skip them depending on the context. Not enabled tasks will never show up in the default renderer, but when or if they get enabled they will magically appear.

<alert type="warning">

Task enabling is determined up on the initial run of the Listr when you actually create the class for a given subtask, so be careful with using it while using internal context variables.

</alert>

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/task-enable.example.ts', name: 'examples section' }"></ExampleAlert>

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
