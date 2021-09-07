---
title: Use Case
description: 'Example use-case of task manager.'
category: Task Manager
position: 201
---

## Creating Listr via a Factory

```typescript
export function TaskManagerFactory<T = any>(override?: ListrBaseClassOptions): Manager<T> {
  const myDefaultOptions: ListrBaseClassOptions = {
    concurrent: false,
    exitOnError: false,
    rendererOptions: {
      collapse: false,
      collapseSkips: false
    }
  }
  return new Manager({ ...myDefaultOptions, ...override })
}
```

## Embed It in Your Stateful Class

```typescript
export class MyMainClass {
  private tasks = TaskManagerFactory<Ctx>()

  constructor() {
    this.run()
  }

  private async run(): Promise<void> {
    // CODE WILL GO HERE IN THIS EXAMPLE
  }
}
```

## Add Your Task

```typescript
this.tasks.add(
  [
    {
      title: 'A task running manager [0]',
      task: async (): Promise<void> => {
        throw new Error('Do not dare to run the second task.')
      }
    },
    {
      title: 'This will never run first one failed.',
      task: async (): Promise<void> => {
        await delay(2000)
      }
    }
  ],
  { exitOnError: true, concurrent: false }
)
```

## Run the Tasks

```typescript
try {
  const ctx = await this.tasks.runAll()
} catch (e) {
  this.logger.fail(e)
}
```
