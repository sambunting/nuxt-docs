---
title: Changing the Title
description: 'Title can be manipulated through the task object.'
category: General Usage
position: 101
---

## Introduction

Title can be manipulated through the `task` object. This allows the user to change the title depending on the progress that has been made throughout the task or just inform the user that the task is finished, so looking from a grammar perspective it will all look right.

## Usage

```typescript
new Listr<Ctx>([
  {
    title: 'Doing some stuff...',
    task: async (ctx, task): Promise<void> => {
      await delay(3000)

      task.title = 'I have done stuff, but should do some more.'

      await delay(3000)

      task.title = 'All the stuff has been done.'
    }
  }
])
```
