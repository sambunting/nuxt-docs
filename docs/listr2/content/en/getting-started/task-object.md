---
title: Task and Options
description: 'Listr can be further customized per task and execution options.'
category: Getting Started
position: 4
---

## Task

A single task is an object with the following properties, where the `task` is the main attraction where the desired function gets executed. It can get further customized depending on the context and properties.

`task` can be one of the following:

- Function/Promise
- Listr
- Stream
- Observable

```typescript
export interface ListrTask<Ctx = ListrContext, Renderer extends ListrRendererFactory = any> {
  /**
   * Title of the task.
   *
   * Give this task a title if you want to track it by name in the current renderer.
   * Tasks without a title will tend to hide themselves in the default renderer and useful for
   * things like prompts and such.
   */
  title?: string
  /**
   * The task itself.
   *
   * Task can be a sync or async function, an Observable or a Stream.
   */
  task: (ctx: Ctx, task: ListrTaskWrapper<Ctx, Renderer>) => void | ListrTaskResult<Ctx>
  /**
   * Runs a specific event if the current task or any of the subtasks has failed.
   * Mostly useful for rollback purposes for subtasks.
   */
  rollback?: (ctx: Ctx, task: ListrTaskWrapper<Ctx, Renderer>) => void | ListrTaskResult<Ctx>
  /**
   * Skip this task depending on the context.
   *
   * The function that has been passed in will be evaluated at the runtime when task tries to initially run.
   */
  skip?: boolean | string | ((ctx: Ctx) => boolean | string | Promise<boolean> | Promise<string>)
  /**
   * Enable a task depending on the context.
   *
   * The function that has been passed in will be evaluated at the initial creation of the Listr class.
   */
  enabled?: boolean | ((ctx: Ctx) => boolean | Promise<boolean>)
  /**
   * Per task options, depending on the selected renderer.
   *
   * This options depend on the implementation of selected renderer. If selected renderer has no options it will
   * be displayed as never.
   */
  options?: ListrGetRendererTaskOptions<Renderer>
}
```

## Options

Options is an object with the following properties, can customize the execution of the given task list.

```typescript
/**
 * Options to set the behavior of this base task.
 */
export interface ListrOptions<Ctx = ListrContext> {
  /**
   * Concurrency will set how many tasks will be run in parallel.
   *
   * @default false > Default is to run everything synchronously.
   *
   * `true` will set it to `Infinity`, `false` will set it to synchronous.
   * If you pass in a `number` it will limit it at that number.
   */
  concurrent?: boolean | number
  /**
   * Determine the behavior of exiting on errors.
   *
   * @default true > exit on any error comming from the tasks.
   */
  exitOnError?: boolean
  /**
   * Determine the behaviour of exiting after rollback actions.
   *
   * @default true > exit after rolling back tasks
   */
  exitAfterRollback?: boolean
  /**
   * To inject a context through this options wrapper. Mostly useful when combined with manager.
   * @default any
   */
  ctx?: Ctx
  /**
   * By default, Listr2 will track SIGINIT signal to update the renderer one last time before compeletely failing.
   * @default true
   */
  registerSignalListeners?: boolean
  /**
   * Determine the certain condition required to use the non-tty renderer.
   * @default null > handled internally
   */
  rendererFallback?: boolean | (() => boolean)
  /**
   * Determine the certain condition required to use the silent renderer.
   * @default null > handled internally
   */
  rendererSilent?: boolean | (() => boolean)
  /**
   * Disabling the color, useful for tests and such.
   * @default false
   */
  disableColor?: boolean
  /**
   * Inject data directly to TaskWrapper.
   */
  injectWrapper?: {
    enquirer?: Enquirer<object>
  }
}
```
