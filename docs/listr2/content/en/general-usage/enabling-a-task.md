---
title: Enabling a Task
description: 'Enable a task depending on variables.'
category: General Usage
position: 105
---

## Introduction

Tasks can be enabled depending on the variables programmatically. This enables to create of tasks that are dependent on the context.

<alert type="warning">

Task enabling is determined upon the initial run of the Listr when you actually create the class for a given subtask, so be careful with using it while using internal context variables.

After that when the execution time comes for the given task, it will get re-evaluated.

</alert>

## Usage

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

## Renderer

### Default Renderer

- Not enabled tasks will not be renderer in the default renderer.
