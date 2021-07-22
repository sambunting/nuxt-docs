---
title: Verbose Renderer
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 21
---

## Introduction

Verbose renderer is the default non TTY environment renderer and will be used as a fallback when the process criteria is not met. It is also the intended renderer for the tests.

## Global Options

```typescript
public static rendererOptions: {
    /**
     * useIcons instead of text for log level
     * @default false
     */
    useIcons?: boolean
    /**
     * inject a custom loger
     */
    logger?: new (...args: any) => Logger
    /**
     * log tasks with empty titles
     * @default true
     */
    logEmptyTitle?: boolean
    /**
     * log title changes
     * @default true
     */
    logTitleChange?: boolean
    /**
     * show duration for all tasks
     */
    showTimer?: boolean
  } = {
    useIcons: false,
    logEmptyTitle: true,
    logTitleChange: true
  }
```
