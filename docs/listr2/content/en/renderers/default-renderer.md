---
title: Default Renderer
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 402
---

## Introduction

Default renderer is the main renderer that is shown in the demo and will only work in TTY environments.

## Global Options

````typescript
public static rendererOptions: {
    /**
     * indentation per level of subtask
     * @default 2
     */
    indentation?: number
    /**
     * clear output when task finishes
     * @default false
     * @global global option that can not be temperated with from subtasks
     */
    clearOutput?: boolean
    /**
     * show the subtasks of the current task if it returns a new listr
     * @default true
     * @global global option that can not be temperated with from subtasks
     */
    showSubtasks?: boolean
    /**
     * collapse subtasks after finish
     * @default true
     */
    collapse?: boolean
    /**
     * collapse skip messages in to single message and override the task title
     * @default true
     */
    collapseSkips?: boolean
    /**
     * show skip messages or show the original title of the task, this will also disable collapseSkips mode
     *
     * You can disable showing the skip messages, eventhough you passed in a message by settings this option,
     * if you want to keep the original task title intacted.
     * @default true
     */
    showSkipMessage?: boolean
    /**
     * suffix skip messages with [SKIPPED] when in collapseSkips mode
     * @default true
     */
    suffixSkips?: boolean
    /**
     * collapse error messages in to single message in task title
     * @default true
     */
    collapseErrors?: boolean
    /**
     * shows the thrown error message or show the original title of the task, this will also disable collapseErrors mode
     * You can disable showing the error messages, eventhough you passed in a message by settings this option,
     * if you want to keep the original task title intacted.
     * @default true
     */
    showErrorMessage?: boolean
    /**
     * suffix retry messages with [RETRY-${COUNT}] when retry is enabled for a task
     * @default true
     */
    suffixRetries?: boolean
    /**
     * only update via renderhook
     *
     * useful for tests and stuff. this will disable showing spinner and only update the screen if the something else has
     * happened in the task worthy to show
     * @default false
     * @global global option that can not be temperated with from subtasks
     */
    lazy?: boolean
    /**
     * show duration for all tasks
     *
     * overwrites per task renderer options
     * @default false
     * @global global option that can not be temperated with from subtasks
     */
    showTimer?: boolean
    /**
     * removes empty lines from the data output
     *
     * @default true
     */
    removeEmptyLines?: boolean
    /**
     * formats data output depending on your requirements.
     * log-update mostly breaks if there is no wrap, so there is many options to choose your preference
     *
     * @default 'truncate'
     * @global global option that can not be temperated with from subtasks
     */
    formatOutput?: 'truncate' | 'wrap'
  } = {
    indentation: 2,
    clearOutput: false,
    showSubtasks: true,
    collapse: true,
    collapseSkips: true,
    showSkipMessage: true,
    suffixSkips: true,
    collapseErrors: true,
    showErrorMessage: true,
    suffixRetries: true,
    lazy: false,
    showTimer: false,
    removeEmptyLines: true,
    formatOutput: 'truncate'
  }```

## Per-Task Options

```typescript
 public static rendererTaskOptions: {
    /**
     * write task output to bottom bar instead of the gap under the task title itself.
     * useful for stream of data.
     * @default false
     *
     * `true` only keep 1 line of latest data outputted by the task.
     * `false` only keep 1 line of latest data outputted by the task.
     * `number` will keep designated data of latest data outputted by the task.
     */
    bottomBar?: boolean | number
    /**
     * keep output after task finishes
     * @default false
     *
     * works both for bottom bar and the default behavior
     */
    persistentOutput?: boolean
    /**
     * show the task time if it was successful
     */
    showTimer?: boolean
  }
````
